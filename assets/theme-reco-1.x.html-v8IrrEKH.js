import{_ as i,r as d,o as c,c as r,a as s,b as n,d as a,e as l}from"./app-UfWKxtAj.js";const p={},t=l(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h2><h3 id="创建目录并初始化" tabindex="-1"><a class="header-anchor" href="#创建目录并初始化"><span>创建目录并初始化</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">mkdir blog</span>
<span class="line"></span>
<span class="line">cd blog</span>
<span class="line"></span>
<span class="line">npm init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加script" tabindex="-1"><a class="header-anchor" href="#添加script"><span>添加script</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&quot;scripts&quot;: {</span>
<span class="line">  &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,</span>
<span class="line">  &quot;docs:build&quot;: &quot;vuepress build docs&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装主题" tabindex="-1"><a class="header-anchor" href="#安装主题"><span>安装主题</span></a></h3>`,6),v={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html",target:"_blank",rel:"noopener noreferrer"},u=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install vuepress-theme-reco --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装必备插件" tabindex="-1"><a class="header-anchor" href="#安装必备插件"><span>安装必备插件</span></a></h3>`,2),o={href:"https://github.com/viko16/vuepress-plugin-permalink-pinyin",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>虽然可以通过该插件转换中文路径，但还是建议尽量使用英文命名目录和文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm i vuepress-plugin-permalink-pinyin --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="搭建基础目录结构" tabindex="-1"><a class="header-anchor" href="#搭建基础目录结构"><span>搭建基础目录结构</span></a></h2>`,3),b={href:"https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">.</span>
<span class="line">├── docs</span>
<span class="line">│   ├── .vuepress</span>
<span class="line">│   │   ├── public</span>
<span class="line">│   │   │   │── avatar.png(头像)</span>
<span class="line">│   │   │   └── bg.png(首页背景图)</span>
<span class="line">│   │   └── config.js(博客配置)</span>
<span class="line">│   ├── views</span>
<span class="line">│   │   └── 美食/2023/烤鸭.md(测试文章)</span>
<span class="line">│   └── README.md(首页配置)</span>
<span class="line">└── package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完善基础配置" tabindex="-1"><a class="header-anchor" href="#完善基础配置"><span>完善基础配置</span></a></h2>`,2),g=s("br",null,null,-1),x={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"},_=l(`<h3 id="docs-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#docs-vuepress-config-js"><span>docs/.vuepress/config.js</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">module.exports = {</span>
<span class="line">  theme: &#39;reco&#39;,</span>
<span class="line">  title: &#39;我的美食分享博客&#39;,</span>
<span class="line">  description: &#39;欢迎来到我的美食分享博客&#39;,</span>
<span class="line">  // 移动端优化</span>
<span class="line">  head: [[&#39;meta&#39;, { name: &#39;viewport&#39;, content: &#39;width=device-width,initial-scale=1,user-scalable=no&#39; }]],</span>
<span class="line">  // 主题设置</span>
<span class="line">  themeConfig: {</span>
<span class="line">    type: &#39;blog&#39;,</span>
<span class="line">    author: &#39;myname&#39;,</span>
<span class="line">    // 显示在个人信息的头像</span>
<span class="line">    authorAvatar: &#39;/avatar.png&#39;,</span>
<span class="line">    // 导航栏左侧logo</span>
<span class="line">    logo: &#39;/avatar.png&#39;,</span>
<span class="line">    // 搜索设置</span>
<span class="line">    search: true,</span>
<span class="line">    searchMaxSuggestions: 10,</span>
<span class="line">    // 自动形成侧边导航及其深度</span>
<span class="line">    subSidebar: &#39;auto&#39;,</span>
<span class="line">    sidebarDepth: 1,</span>
<span class="line">    // 最后更新时间</span>
<span class="line">    lastUpdated: &#39;Last Updated&#39;,</span>
<span class="line">    // 项目开始时间</span>
<span class="line">    startYear: &#39;2023&#39;,</span>
<span class="line">    // 导航栏配置</span>
<span class="line">    nav: [</span>
<span class="line">      { text: &#39;主页&#39;, link: &#39;/&#39;, icon: &#39;reco-home&#39; },</span>
<span class="line">      { text: &#39;时间线&#39;, link: &#39;/timeline/&#39;, icon: &#39;reco-date&#39; },</span>
<span class="line">      { text: &#39;仓库地址&#39;, link: &#39;https://github.com/smallsunnyfox/vuepress-theme-reco-starter&#39;, icon: &#39;reco-github&#39; }</span>
<span class="line">    ],</span>
<span class="line">    // 博客配置</span>
<span class="line">    blogConfig: {</span>
<span class="line">      category: {</span>
<span class="line">        location: 2, // 在导航栏菜单中所占的位置，默认2</span>
<span class="line">        text: &#39;分类&#39; // 默认文案 “分类”</span>
<span class="line">      },</span>
<span class="line">      tag: {</span>
<span class="line">        location: 3, // 在导航栏菜单中所占的位置，默认3</span>
<span class="line">        text: &#39;标签&#39; // 默认文案 “标签”</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    // 友情链接</span>
<span class="line">    friendLink: [</span>
<span class="line">      {</span>
<span class="line">        title: &#39;午后南杂&#39;,</span>
<span class="line">        desc: &#39;Enjoy when you can, and endure when you must.&#39;,</span>
<span class="line">        logo: &#39;https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png&#39;,</span>
<span class="line">        link: &#39;https://www.recoluan.com&#39;</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        title: &#39;vuepress-theme-reco&#39;,</span>
<span class="line">        desc: &#39;A simple and beautiful vuepress Blog &amp; Doc theme.&#39;,</span>
<span class="line">        logo: &#39;https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png&#39;,</span>
<span class="line">        link: &#39;https://vuepress-theme-reco.recoluan.com&#39;</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  // 插件配置</span>
<span class="line">  plugins: [</span>
<span class="line">    [</span>
<span class="line">      &#39;permalink-pinyin&#39;,</span>
<span class="line">      {</span>
<span class="line">        lowercase: true,</span>
<span class="line">        separator: &#39;-&#39;</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docs-readme-md" tabindex="-1"><a class="header-anchor" href="#docs-readme-md"><span>docs/README.md</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">---</span>
<span class="line">home: true</span>
<span class="line">bgImage: &#39;/bg.png&#39;</span>
<span class="line">bgImageStyle: {</span>
<span class="line">  height: &#39;480px&#39;,</span>
<span class="line">  color: &#39;white&#39;</span>
<span class="line">}</span>
<span class="line">---</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="起锅烧油" tabindex="-1"><a class="header-anchor" href="#起锅烧油"><span>起锅烧油</span></a></h2><p>写文章时需要在FrontMatter中补充文章信息</p>`,6),f={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html",target:"_blank",rel:"noopener noreferrer"},k=s("br",null,null,-1),w={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="docs-views-美食-2023-烤鸭-md" tabindex="-1"><a class="header-anchor" href="#docs-views-美食-2023-烤鸭-md"><span>docs/views/美食/2023/烤鸭.md</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">---</span>
<span class="line">title: 烤鸭的做法</span>
<span class="line">date: 2023-05-29 22:00:00</span>
<span class="line">sidebar: auto</span>
<span class="line">tags:</span>
<span class="line"> - 烤鸭</span>
<span class="line"> - 美食</span>
<span class="line">categories:</span>
<span class="line"> - 美食</span>
<span class="line">---</span>
<span class="line"></span>
<span class="line">Hello 烤鸭</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端盘上菜" tabindex="-1"><a class="header-anchor" href="#端盘上菜"><span>端盘上菜</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm run dev</span>
<span class="line"></span>
<span class="line">&amp;&amp;</span>
<span class="line"></span>
<span class="line">npm run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(A,q){const e=d("ExternalLinkIcon");return c(),r("div",null,[t,s("p",null,[s("a",v,[n("vuepress-theme-reco"),a(e)])]),u,s("p",null,[s("a",o,[n("一个将中文标题转换为音译permalink的VuePress插件"),a(e)])]),m,s("p",null,[s("a",b,[n("Vuepress中文网-指南-目录结构"),a(e)])]),h,s("p",null,[n("此处仅包含一些常用的基础配置"),g,n(" 详细配置和进阶功能请参考"),s("a",x,[n("主题文档"),a(e)])]),_,s("p",null,[s("a",f,[n("分类和标签"),a(e)]),k,s("a",w,[n("完整的FrontMatter"),a(e)])]),E])}const j=i(p,[["render",y],["__file","theme-reco-1.x.html.vue"]]),B=JSON.parse('{"path":"/blogs_1/frontend/2023/theme-reco-1.x.html","title":"Vuepress-theme-reco-v1.x 新手指北之Hello烤鸭","lang":"en-US","frontmatter":{"title":"Vuepress-theme-reco-v1.x 新手指北之Hello烤鸭","date":"2023-05-29T00:00:00.000Z","tags":["Vuepress","Vuepress-theme-reco"],"categories":["前端"],"sticky":1},"headers":[{"level":2,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[{"level":3,"title":"创建目录并初始化","slug":"创建目录并初始化","link":"#创建目录并初始化","children":[]},{"level":3,"title":"添加script","slug":"添加script","link":"#添加script","children":[]},{"level":3,"title":"安装主题","slug":"安装主题","link":"#安装主题","children":[]},{"level":3,"title":"安装必备插件","slug":"安装必备插件","link":"#安装必备插件","children":[]}]},{"level":2,"title":"搭建基础目录结构","slug":"搭建基础目录结构","link":"#搭建基础目录结构","children":[]},{"level":2,"title":"完善基础配置","slug":"完善基础配置","link":"#完善基础配置","children":[{"level":3,"title":"docs/.vuepress/config.js","slug":"docs-vuepress-config-js","link":"#docs-vuepress-config-js","children":[]},{"level":3,"title":"docs/README.md","slug":"docs-readme-md","link":"#docs-readme-md","children":[]}]},{"level":2,"title":"起锅烧油","slug":"起锅烧油","link":"#起锅烧油","children":[{"level":3,"title":"docs/views/美食/2023/烤鸭.md","slug":"docs-views-美食-2023-烤鸭-md","link":"#docs-views-美食-2023-烤鸭-md","children":[]}]},{"level":2,"title":"端盘上菜","slug":"端盘上菜","link":"#端盘上菜","children":[]}],"git":{},"filePathRelative":"blogs_1/frontend/2023/theme-reco-1.x.md"}');export{j as comp,B as data};
