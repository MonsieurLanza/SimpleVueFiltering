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
  float:left;
  text-align: left;
}

#style-selector li {
  list-style-type: none;
}
</style>
