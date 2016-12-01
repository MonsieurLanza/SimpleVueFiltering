import Vue from 'vue'
import App from './App'
import Filter from './Filter'
import TheData from './data'

let filter = new Filter(TheData)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :artists="artists" :styles="styles" v-on:select="select" />',
  components: { App },
  data: {
    styles: filter.styles,
    currentStyles: filter.styles,
    artists: filter.byStyles(filter.styles).sort(function (a, b) { return a.name > b.name })
  },
  methods: {
    select: function (newStyles) {
      this.artists = filter.byStyles(newStyles).sort(function (a, b) { return a.name > b.name })
    }
  }
})
