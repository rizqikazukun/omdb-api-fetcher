const [major, minor, patch] = process.versions.node.split('.').map(Number)

if (major < 18) {
  const fetch = require('node-fetch')
}

class OmdbFetch {
  constructor({
    imdbId, title, type, year,
    plot, format, apiKey, apiVersion,
    callback, search, page
  }) {
    this.imdbId = imdbId
    this.title = title
    this.type = type
    this.year = year
    this.plot = plot
    this.format = format
    this.apiKey = apiKey
    this.apiVersion = apiVersion
    this.callback = callback
    this.search = search
    this.page = page
  }

  fetchById = async () => {
    try {
      let baseUrl = ''

      if (!this.imdbId && typeof this.imdbId !== typeof String()) {
        return new Error('imdb id not set, must sting and can\'t be empty')
      } else {
        baseUrl += `https://www.omdbapi.com/?i=${this.imdbId}&`
      }

      if (this.year) {
        baseUrl += `y=${this.year}&`
      }
      if (this.format) {
        baseUrl += `r=${this.format}&`
      }
      if (this.plot) {
        baseUrl += `plot=${this.plot}&`
      }
      if (this.type) {
        baseUrl += `type=${this.type}&`
      }
      if (this.callback) {
        baseUrl += `callback=${this.callback}&`
      }
      if (this.apiVersion) {
        baseUrl += `v=${this.apiVersion}&`
      }

      if (!this.apiKey) {
        return new Error('api key not set')
      } else {
        baseUrl += `apikey=${this.apiKey}`
      }

      const fData = await fetch(baseUrl)
      const jData = await fData.json()
      return jData
    } catch (error) {
      return error
    }
  }

  fetchByTitle = async () => {
    try {
      let baseUrl = ''

      if (!this.title && typeof this.title !== typeof String()) {
        return new Error('movie title not set, must sting and can\'t be empty')
      } else {
        baseUrl += `https://www.omdbapi.com/?t=${this.title}&`
      }

      if (this.year) {
        baseUrl += `y=${this.year}&`
      }
      if (this.format) {
        baseUrl += `r=${this.format}&`
      }
      if (this.plot) {
        baseUrl += `plot=${this.plot}&`
      }
      if (this.type) {
        baseUrl += `type=${this.type}&`
      }
      if (this.callback) {
        baseUrl += `callback=${this.callback}&`
      }
      if (this.apiVersion) {
        baseUrl += `v=${this.apiVersion}&`
      }

      if (!this.apiKey) {
        return new Error('api key not set')
      } else {
        baseUrl += `apikey=${this.apiKey}`
      }

      const fData = await fetch(baseUrl)
      const jData = await fData.json()
      return jData
    } catch (error) {
      return error
    }
  }

  fetchSearch = async () => {
    try {
      let baseUrl = ''

      if (!this.search && typeof this.search !== typeof String()) {
        return new Error('no search keyword not set, must sting and can\'t be empty')
      } else {
        baseUrl += `https://www.omdbapi.com/?s=${this.search}&`
      }

      if (this.year) {
        baseUrl += `y=${this.year}&`
      }
      if (this.format) {
        baseUrl += `r=${this.format}&`
      }
      if (this.type) {
        baseUrl += `type=${this.type}&`
      }
      if (this.callback) {
        baseUrl += `callback=${this.callback}&`
      }
      if (this.apiVersion) {
        baseUrl += `v=${this.apiVersion}&`
      }
      if (this.page) {
        baseUrl += `page=${this.page}&`
      }

      if (!this.apiKey) {
        return new Error('api key not set')
      } else {
        baseUrl += `apikey=${this.apiKey}`
      }

      const fData = await fetch(baseUrl)
      const jData = await fData.json()
      return jData
    } catch (error) {
      return error
    }
  }
}

module.exports = { OmdbFetch }
