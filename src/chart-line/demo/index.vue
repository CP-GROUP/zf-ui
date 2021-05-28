<template>
  <div class="pie">
    <ZChartLine :configs="configs"></ZChartLine>
  </div>
</template>
<script>
export default {
  data() {
    return {
      configs: {
          xAxis: {
            data: ['1月','2月','3月','4月','5月','6月']
          },
          series:  [
            {
                name: '曲线1',
                type: 'line',
                color: '#3D6FFF',
                data: [10, 11, 13, 11, 12, 12],
            },
            {
                name: '曲线二',
                type: 'line',
                color: '#FC9A69',
                data: [1, -2, 2, 5, 3, 2],
            }
          ]
      }
    }
  },
}
</script>
<style lang="less">
.pie{
  height: 300px;
  width: 600px;
}
</style>