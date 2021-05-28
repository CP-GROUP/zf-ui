# ChartLine 组件

### 介绍

ChartLine 线性图表组件

### 引入

```js
import Vue from 'vue';
import { ChartLine } from '@zf-ui/components';

Vue.use(ChartLine);
```

## 代码演示

### 基础用法
<demo-code compact>./demo/index.vue</demo-code>

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| configs          | 图表数据配置 | Object | `{}` |

### configs
```js
const configs = {
    xAxis: {
    // 必需配置，不限制数据长度
    data: ['1月','2月','3月','4月','5月','6月']
    },
    // 可以配置多组数据，不限制两组数据
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
        labelColor: '#333'
    }
}
```

