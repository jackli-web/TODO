<template>
  <div>
       <div>
         1111
         <div style="width:500px;height:500px" ref="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.initCharts()
  },
  methods:{
    　　initCharts () {
　    　let myChart = this.$echarts.init(this.$refs.chart);
    　　console.log(this.$refs.chart)
    　　// 绘制图表
    　　myChart.setOption({
    　　title: { text: '在Vue中使用echarts' },
    　　tooltip: {},
    　　xAxis: {
    　　    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    　　},
    　　yAxis: {},
    　　series: [{
        　　name: '销量',
        　　type: 'bar',
        　　data: [5, 20, 36, 10, 10, 20]
    　　}]
    　　});
　　}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
