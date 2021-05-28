# Chart 组件

### 介绍

Chart 是基于echarts的组件实例，Chart只做echarts的初始化工作,组件直接传参初始化

### 引入

```js
import Vue from 'vue';
import { Chart } from '@zf-ui/components';

Vue.use(Chart);
```

## 代码演示

### 基础用法
<demo-code compact>./demo/index.vue</demo-code>

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| option          | echarts配置 | Object | `{}` |
