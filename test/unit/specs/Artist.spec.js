import Vue from 'vue'
import Artist from 'src/components/Artist'

describe('Artist.vue', () => {
  it('should render a table row whith id="artist-artist.id" & name as content', () => {
    const vm = new Vue({
      el: document.createElement('table'),
      components: { Artist },
      data: {
        artists: [{ 'style': ['Punk'], 'name': 'Berruriers Noirs', 'id': 2028542 }]
      },
      template: '<table><tr is="Artist" v-for="item in artists" :artist="item"></tr></table>'
    })
    expect(vm.$el.querySelector('td').textContent)
      .to.equal('Berruriers Noirs')
    expect(vm.$el.querySelector('tr').getAttribute('id'))
      .to.equal('artist-2028542')
  })
})
