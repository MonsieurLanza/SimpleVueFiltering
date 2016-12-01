export default class Filter {
  constructor (data) {
    // TODO: check data integriy.
    this.artists = data.results
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
}
