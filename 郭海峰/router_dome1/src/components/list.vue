<template>
  <div>
      <div v-for="item in arr" :key="item.id" class="aspnet" @click="goxinwen(item)">
          <h3>{{item.title}}</h3>
          <p>{{item.des}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:[
        {title:'新闻标题1',des:'新闻简介1'},
        {title:'新闻标题2',des:'新闻简介2'},
        {title:'新闻标题3',des:'新闻简介3'},
        {title:'新闻标题4',des:'新闻简介4'},
        {title:'新闻标题5',des:'新闻简介5'},
        {title:'新闻标题6',des:'新闻简介6'},
        {title:'新闻标题7',des:'新闻简介7'},
        {title:'新闻标题8',des:'新闻简介8'},
        {title:'新闻标题9',des:'新闻简介9'},
      ]
    };
  },
  methods: {
      goxinwen(item){
          this.$router.push({name:'xinwenxq',params:{des:item.des}})
      }
  },
  created() {
    // this.$axios({
    //   url:'/api/login',
    //   method:'post',
    //   data:{
    //     name:'Tom',
    //     passworld:'123456'
    //   }
    // });
    var mjson = {
        name:'Tom',
        passworld:'123456'
      }
      console.log(this.Qs.stringify(mjson));
     this.$axios({
      url:'/api/login',
      method:'post',
      data:this.Qs.stringify(mjson)
    })
  }
  }

  

</script>
<style lang="less" scoped>
.aspnet{
    text-align: center;
    width: 200px;
    height: 50px;
    margin: 60px auto;
}
</style>
