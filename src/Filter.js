export default class Filter {
  constructor (data) {
    if (this.checkData(data)) {
      this.artists = data.results
    } else {
      console.log('Unrecognized JSON format')
      this.artists = []
    }
  }

  byStyle (style) {
    let searchStyle = style.toLowerCase()
    let results = []
    for (let artist of this.artists) {
      for (let artistStyle of artist.style) {
        if (artistStyle.toLowerCase() === searchStyle) {
          results.push(artist)
        }
      }
    }
    return results.reduce(this.reducer, [])
  }

  byStyles (styles) {
    let results = []
    for (let style of styles) {
      results = results.concat(this.byStyle(style))
    }
    return results.reduce(this.reducer, [])
  }

  get styles () {
    let results = []
    for (let artist of this.artists) {
      for (let artistStyle of artist.style) {
        if (!results.includes(artistStyle)) {
          results.push(artistStyle)
        }
      }
    }
    return results.sort()
  }

  reducer (accu, current) {
    for (let check of accu) {
      if (check.id === current.id) {
        return accu
      }
    }
    accu.push(current)
    return accu
  }

  checkData (data) {
    let ok = false
    if (data.results instanceof Array) {
      for (let item of data.results) {
        if (item.style instanceof Array) {
          if (item.name) {
            if (item.id) {
              ok = true
            }
          }
        }
      }
    }
    return ok
  }
}
