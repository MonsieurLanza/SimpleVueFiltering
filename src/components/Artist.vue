<template>
  <tr :id="trId" class="artist">
    <td >{{ artist.name }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Artist',
  props: ['artist'],
  computed: {
    trId: function () {
      return `artist-${this.artist.id}`
    }
  }
}
</script>
