<template>
  <div ref="echartInstance" class="echart-instance"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ZChart',
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      echartInstance: null,
      timer: null,
      time: 0

    };
  },
  watch: {
    option: {
      handler() {
        this.render();
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      // 基于准备好的dom，初始化echarts实例
      if (!this.echartInstance && this.$refs.echartInstance) {
        this.echartInstance = echarts.init(this.$refs.echartInstance);
      }
      this.setOption();
    },
    setOption() {
      if (this.echartInstance) {
        // 使用刚指定的配置项和数据显示图表。
        this.echartInstance.setOption(this.option);
      } else {
        if (this.timer || this.time > 5) return;
        this.timer = setTimeout(() => {
          this.render();
          this.time += 1;
          this.timer = null;
        }, 1000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.echart-instance{
  height: 100%;
}
</style>
