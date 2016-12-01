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

<style>
table {
  margin: 0 auto;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
}

td {
  padding: 0.3rem;
}

tr:nth-child(odd) > td {
  background-color: #efe;
}

tr:nth-child(even) {
  background-color: #fff;
}
</style>
