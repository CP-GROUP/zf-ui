<template>
  <div class="pie">
    <ChartLine :configs="configs"></ChartLine>
  </div>
</template>
<script>
export default {
  data() {
    return {
      configs: {
          xAxis: {
            // 必需配置
            data: ['1月','2月','3月','4月','5月','6月'],
            axisLabel: {
              fontSize: 15,
              color: '#333'
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            offset: 10
          },
          // 可以配置多组数据，不限制两组
          series:  [
            {
              // 非必须配置 
              name: '曲线1',
              // 非必须配置 
              color: '#3D6FFF',
                // 非必须配置，默认为[]
              data: [10, 11, 13, 11, 12, 12],
            },
            {
              // 非必须配置 
              name: '曲线二',
              // 非必须配置 
              color: '#FC9A69',
              // 非必须配置，默认为[]
              data: [1, -2, 2, 5, 3, 2],
            }
          ],
          // 非必须配置
          markerLine: {
            // 默认为0
            value: 0,
            // 默认显示markerLine
            show: true,
            // 默认#999
            lineColor: '#999',
            // 默认#333
            labelColor: '#333',
            labelFontSize: 15,
            labelDistance: 10
          }
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