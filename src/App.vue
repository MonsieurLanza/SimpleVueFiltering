<template>
  <div id="app">
    <div id="search-bar">
      <h2><label for="search-input">Search :</label></h2>
      <input type="search" v-on:input="search" id="search-input" placeholder="Type some chars in here…" />
    </div>
    <h2>Styles</h2>
    <StyleSelector :styles="styles" v-on:select="bubble"></StyleSelector>
    <table>
      <thead>
        <tr>
          <th>Artist/band's name</th>
        </tr>
      </thead>
      <tbody>
        <tr is="Artist" v-for="item in artists" :artist="item"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Artist from './components/Artist'
import StyleSelector from './components/StyleSelector'

export default {
  name: 'app',
  components: {
    Artist,
    StyleSelector
  },
  props: ['artists', 'styles'],
  methods: {
    bubble: function (event) {
      this.$emit('select', event)
    },
    search: function (event) {
      this.$emit('search', event.target.value)
    }
  }
}
</script>

<style>
html {
    color: #2c3e50;
}

h1 {
  font-family: 'Fira sans', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  margin: 1rem;
  text-align: center;
}

h2 {
  margin: 0;
  text-align: center;
}

#search-bar {
  margin: 1rem;
  text-align: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

table {
  margin: 1rem;
}
</style>
