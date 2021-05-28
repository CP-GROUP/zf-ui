<template>
  <Chart :option="option"/>
</template>

<script>
import Chart from '../chart/index.vue';

export default {
  components: {
    Chart
  },
  name: 'ZChartLine',
  props: {
    configs: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      option : {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick:{    
              // y轴刻度线   
              show:false
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
              show:false
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
      // x轴坐标显示值
      this.option.xAxis.data = this.configs?.xAxis?.data||[]
      
      const xDataLen = this.option.xAxis.data.length

      // 标注线
      const markerLine = {
        type: 'line',
        data: [],
        markLine: { 
            symbol:'none',
            label:{
                position:'start',
                color:'#333',
                distance: 10
            },
            lineStyle: {
                color: '#d9d9d9'
            },
            data: [
              [
                {name:'0',coord:[0,0]},
                {coord:[xDataLen-1,0]}
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

      // 设置
      this.option.series = [
        markerLine,
        ...lines
      ]
      
    }
  }
};
</script>
