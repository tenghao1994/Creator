module.exports = {
  title: 'Creator',
  description: '人生若只如初见',
  base: '/Creator/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // [
    //   "script", {
    //       "language": "javascript",
    //       "type": "text/javascript",
    //       "src": "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"
    //   },
    //   "link", {
    //     "rel":"stylesheet" ,
    //     "href":"https://unpkg.com/gitalk/dist/gitalk.css"
    //   }
    // ],
    [
      "script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/mouseClickEffect.js"
        }
    ]
  ],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '文章', link: '/article/' },
      { text: '学习', link: '/learn/' },
      // { text: '上传图片', link: '/example/' },
      {
        text: '技术笔记',
        ariaLabel: '技术笔记',
        items: [
          { text: 'vue', link: '/technology/vue/' },
          { text: 'node', link: '/technology/noe/' },
          { text: 'javascript', link: '/technology/javascript/' },
          { text: 'koa', link: '/technology/koa/' },
        ]
      },
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: '关于我', link: '/about/', icon: 'reco-message'},
    ],
      sidebar: {
        '/article/': [
          {
            title: 'FE',   // 必要的
            // collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'koa',
              'two',
            ]
          },
          {
            title: 'Node',
            children: [
              'vue',
              'two',
            ]
          },
          {
            title: '数据库',
            children: [
              'vue',
              'two',
            ]
          },
          {
            title: 'Java',
            children: [
              'vue',
              'two',
            ]
          },
          {
            title: '前端数据结构与算法',
            children: [
              'vue',
              'two',
            ]
          },
          {
            title: '前端工程化与性能优化',
            children: [
              'vue',
              'two',
            ]
          },
          {
            title: '前端设计模式',
            children: [
              'vue',
              'two',
            ]
          }
        ],
        '/learn/' :[
          {
            title: '学习',   // 必要的
            // collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'vue',
              'javascript',
              'koa',
              'mongodb'
            ]
          },
        ],
        '/example/': [
          {
            title: 'Group bar',   // 必要的
            // collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
            ]
          }
        ]
        
      },
      blogConfig:{
        category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类'     // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'     // 默认文案 “标签”
            }
      },
     // 最后更新时间
     lastUpdated: true,
     lastUpdated: '最后更新时间', // string | boolean
     // 作者
     author: 'CreatorMr',
     // 备案号
     record: '',
     // 项目开始时间
     startYear: '2020',
     //git地址
     repo: 'CreatorMr/Creator',
     // 如果你的文档不在仓库的根部
     docsDir: 'docs',
     // 可选，默认为 master
     //docsBranch: 'vuepress',
     editLinks: true,
     editLinkText: '在 GitHub 上编辑此页！',
    //  vssueConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // },
    markdown: {
      lineNumbers: true
    }
  },
  //主题配置
  theme: 'reco',
  // 插件
  plugins: [
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    ['vuepress-plugin-code-copy', true],
    // ['@vuepress/back-to-top'],
    ['vuepress-plugin-smooth-scroll'],
    require('./plugins/PluginTest/index'),
    // require('./plugins/GitTalk/index')

  ]
}