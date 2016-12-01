<template>
  <div id="app">
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Fira sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
