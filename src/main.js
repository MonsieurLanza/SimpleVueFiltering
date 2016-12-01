import Vue from 'vue'
import App from './App'
import Filter from './Filter'
import TheData from './data'

let filter = new Filter(TheData)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :artists="artists" :styles="styles" v-on:select="select" v-on:search="searchByText" />',
  components: { App },
  data: {
    styles: filter.styles,
    currentStyles: filter.styles,
    searchQuery: null
  },
  computed: {
    artists: function () {
      let arts = filter.byStyles(this.currentStyles)
      return filter.byText(this.searchQuery, arts).sort(function (a, b) { return a.name > b.name })
    }
  },
  methods: {
    select: function (newStyles) {
      this.currentStyles = newStyles
    },
    searchByText: function (query) {
      this.searchQuery = query
    }
  }
})
