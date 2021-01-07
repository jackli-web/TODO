<template>
  <div>
    <div>
      <div>地址： <input type="text" v-model="adpass" /></div>
      <button @click="goshangyibu">上一步</button>
      <button @click="submit">提交</button>
      <div>这个adpass的值为：{{ adpasss }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adpass: ""
    };
  },
  methods: {
    goshangyibu() {
      this.$store.commit("increment");
      this.$router.go(-1);
    },
    submit() {
      this.$store.commit("changeadpass", this.adpass);
      this.$axios({
        method: "post",
        url: "/api/register",
        data: {
          name: this.$store.state.name,
          school: this.$store.state.school,
          adpass: this.$store.state.adpass
        }
      });
      // this.$axios.post('/api/register',{
      //    name: this.$store.state.name,
      //     school: this.$store.state.school,
      //     adpass: this.$store.state.adpass
      // }).then(res=>{
      //   console.log(res);
      // })
    }
  },
  computed: {
    adpasss() {
      return this.$store.state.adpass;
    }
  },
  created() {
    this.adpass = this.$store.state.adpass;
  }
};
</script>
<style lang="less" scoped></style>
