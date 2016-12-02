export default class Filter {
  constructor (data) {
    if (this.checkData(data)) {
      this.artists = data.results
    } else {
      console.log('Unrecognized JSON format')
      this.artists = []
    }
  }

  byStyle (style, input) {
    let searchStyle = style.toLowerCase()
    let results = []
    let array = input || this.artists
    for (let artist of array) {
      for (let artistStyle of artist.style) {
        if (artistStyle.toLowerCase() === searchStyle) {
          results.push(artist)
          break
        }
      }
    }
    return results
  }

  byStyles (styles, input) {
    let results = []
    for (let style of styles) {
      results = results.concat(this.byStyle(style, input))
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

  byText (query, input) {
    if (typeof query !== 'string') {
      return input || this.artists
    }

    let results = []
    let array = input || this.artists

    for (let artist of array) {
      if (artist.name.toLowerCase().includes(query.toLowerCase())) {
        results.push(artist)
      }
    }
    return results.reduce(this.reducer, [])
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
