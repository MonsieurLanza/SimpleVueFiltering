<template>
  <ul id="style-selector">
    <li v-for="item in styles" class="style">
      <input type="checkbox" :id="item.toLowerCase()" :value="item" v-model="checkedStyles">
      <label :for="item.toLowerCase()">{{ item }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StyleSelector',
  props: ['styles'],
  data: function () { return { checkedStyles: this.styles } },
  watch: {
    checkedStyles: function (val) {
      this.$emit('select', val)
    }
  }
}
</script>

<style>
#style-selector {
  margin: 1rem;
  padding: 0;
  text-align: left;
  margin-right: 1rem;
  text-align: center;
}

#style-selector li {
  display: inline;
  list-style-type: none;
  padding: 0;
  margin: 0 1rem;
}
</style>
