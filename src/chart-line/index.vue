<template>
  <Chart :option="option"/>
</template>

<script>
import Chart from '../chart/index.vue';

export default {
  name: 'ChartLine',
  components: {
    Chart
  },
  props: {
    configs: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      option : {
        color: [ '','#3D6FFF','#FC9A69','#3ba272'],
        grid: {
          bottom: 50
        },
        xAxis: {
          splitLine: {
            show: false
          },
          axisLabel:{
            fontSize: 15,
            color: '#333'
          },
          type: 'category',
          boundaryGap: false,
          axisTick:{    
            // y轴刻度线   
            show: false
          },
          data: []
        },
        yAxis: {
          type: 'value',
          show: false,
          axisLabel: {
              formatter: ''
          },
          axisTick:{  
            // y轴刻度线     
            show: false
          },
          splitLine: {   
            // 网格线  
            show: false
          }
        },
        series: []
    }
    };
  },
  watch: {
    configs: {
      handler() {
        this.convertData();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    convertData(){
      this.option = Object.assign(this.option, this.configs);
      // x轴坐标显示值
      this.option.xAxis = Object.assign({
        splitLine: {
          show: false
        },
        axisLabel:{
          fontSize: 20,
          color: '#333'
        },
        type: 'category',
        boundaryGap: false,
        axisTick:{    
          // y轴刻度线   
          show:false
        },
        axisLine: {
          show: false
        },
        offset: 0
      }, this.configs.xAxis)

      this.option.grid = Object.assign({
        bottom: 50
      },this.configs.grid)
      
      const xDataLen = this.configs.xAxis.data.length

      const markerLineValue = this.configs?.markerLine?.value || 0

      // 标注线
      const markerLine = {
        type: 'line',
        data: [],
        markLine: {
          symbol:'none',
          label:{
            position:'start',
            color: this.configs?.markerLine?.labelColor || '#333',
            distance: this.configs?.markerLine?.labelDistance || 10,
            fontSize: this.configs?.markerLine?.labelFontSize || 15,
          },
          lineStyle: {
            color: this.configs?.markerLine?.lineColor || '#999'
          },
          data: [
            [
              {
                name: `${markerLineValue}`,
                coord: [0,markerLineValue]
              },
              {
                coord: [xDataLen-1, markerLineValue]
              }
            ]
          ]
        },
      }

      // 曲线
      const lines = (this.configs.series||[]).map(item=>{
        return {
          name: item.name,
          type: 'line',
          data: item.data||[],
          lineStyle: {
            color: item.color,
          },
          itemStyle: {
            color: item.color
          },
        }
      })

      // 设置echart的option
      this.option.series = [
        markerLine,
        ...lines
      ]
    }
  }
};
</script>
