# Chart 组件

### 介绍

Chart 是基于echarts的组件实例，Chart只做echarts的初始化工作，不引入其他依赖组件，如需要可以在引入组件时引入

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
| type          | 按钮类型 | _string_ | `primary` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
