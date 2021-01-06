<template>
  <div>
    <div>全局count{{ count }}</div>
    <div>全局doublecount{{ doublecount }}</div>
    <button @click="add">点击</button>
    <button @click="actionadd">点击123</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("increment");
    },
    actionadd() {
      this.$store.dispatch("incrementr");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    doublecount() {
      return this.$store.getters.doublecount;
    },
  },
};
</script>

<style>
</style>