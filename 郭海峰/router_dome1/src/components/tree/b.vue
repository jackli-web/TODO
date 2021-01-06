<template>
  <div>
   <div>学校： <input type="text" v-model="school"></div>
   <button @click="goshangyibu">上一步</button>
   <button @click="goxiayibu">下一步</button>
   <div>这个count的值为：{{count}}</div>
   <div>这个school的值为：{{schools}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school:'',
      count:this.$store.state.count
    };
  },
  methods: {
    goxiayibu(){
      this.$store.commit('increment')
      this.$store.commit('changeschool',this.school)
      this.$router.push({name:"fenjic"})
    },
    goshangyibu(){
      this.$store.commit('increment')
      this.$router.go(-1)
    }
  },
  computed:{
    schools(){
      return this.$store.state.school
    }
  },
  created() {
    this.school = this.$store.state.school
  }
};
</script>
<style lang="less" scoped></style>
