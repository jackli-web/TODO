<template>
  <div>
    <div>用户名： <input type="text" v-model="name" /></div>
    <button @click="goxiayibu">下一步</button>
    <div>这个count的值为：{{ count }}</div>
    <div>这个name的值为：{{ names }}</div>
    <div>这是gettersa的值{{hettera}}</div>
    <div>这是gettersb的值{{hetterb}}</div>
    <div><button @click="sstsad">点击修改</button></div>
    <div><button @click="sstsadaction">点击修改action</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      count: this.$store.state.count
    };
  },
  methods: {
    sstsadaction(){
      this.$store.dispatch("indexsst");
    },
    goxiayibu() {
      this.$store.commit("increment");
      this.$store.commit("changename", this.name);
      this.$router.push({ name: "fenjib" });
    },
    sstsad(){
      this.$store.commit("change");
    }
  },
  computed: {
    names() {
      return this.$store.state.name;
    },
    hettera(){
      return this.$store.getters.changea
    },
    hetterb(){
      return this.$store.getters.changeb
    }
  },
  created() {
    this.name = this.$store.state.name;
  }
};
</script>
<style lang="less" scoped></style>
