module.exports = {
  name: '@zf-ui/components',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/zf-ui/',
    },
  },
  site: {
    title: '@zf-ui/components',
    logo: 'https://dummyimage.com/200x200',
    hideSimulator: true,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'chart',
            title: 'chart 基础图表组件',
          },
        ],
      },
    ],
  },
};
