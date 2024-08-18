import{_ as n,r as c,o as s,c as d,a as e,b as l,d as a,e as i}from"./app-UfWKxtAj.js";const t={},r=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>CSS3更新了几个新的背景属性用来控制背景元素</p><ul><li><p><code>background-origin</code>: 规定背景图片的定位区域，可选值如下</p><ul><li><code>padding-box</code> 背景图像相对内边距定位（默认值）</li><li><code>border-box</code> 背景图像相对边框定位【以边框左上角为参照进行位置设置】</li><li><code>content-box</code> 背景图像相对内容区域定位【以内容区域左上角为参照进行位置设置】</li><li>默认值为<code>padding-box</code></li></ul></li><li><p><code>background-clip</code>: 规定背景的绘制区域，可选值如下</p><ul><li><code>border-box</code> 背景被裁切到边框盒子位置 【将背景图片在整个容器中显示】</li><li><code>padding-box</code> 背景被裁切到内边距区域【将背景图片在内边距区域（包含内容区域）显示】</li><li><code>content-box</code> 背景被裁切到内容区域【将背景图片在内容区域显示】</li><li>默认值为<code>border-box</code></li></ul></li><li><p><code>background-size</code>: 规定背景图片的尺寸，可选值如下</p><ul><li><code>length</code> 设置背景图片高度和宽度</li><li><code>percentage</code> 将计算相对于背景定位区域的百分比</li><li><code>cover</code> 会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小</li><li><code>contain</code> 会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。</li></ul></li></ul><h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h2><ul><li><p>边框圆角 <code>border-radius: 左上 右上 右下 左下</code>;</p><ul><li><code>border-top-left-radius</code> 左上</li><li><code>border-top-right-radius</code> 右上</li><li><code>border-bottom-right-radius</code> 右下</li><li><code>border-bottom-left-radius</code> 左下</li></ul></li><li><p>盒子阴影 <code>box-shadow: h-shadow v-shadow blur spread color inset</code>;</p><ul><li><code>h-shadow</code>: 必需的。代表阴影在水平方向的偏移量（正数向右，负数向左）</li><li><code>v-shadow</code>: 必需的。代表阴影在垂直方向的偏移量（正数代表向下，负数代表向上）</li><li><code>blur</code>: 可选。模糊距离（不能设置负数）</li><li><code>spread</code>: 可选。阴影的大小</li><li><code>color</code>: 可选。阴影的颜色</li><li><code>inset</code>: 可选。从外层的阴影（开始时）改变阴影内侧阴影</li></ul></li><li><p>边框图片 <code>border-image: source slice width outset repeat</code>;</p><ul><li><code>border-image-source</code>: 设置边框图片</li><li><code>border-image-slice: number|%|fill</code>: 指定图像的边界向内偏移</li><li><code>border-image-width: number|%|auto</code>: 边框图片宽度</li><li><code>border-image-outset: length|number</code>: 指定在边框外部绘制 <code>border-image-area</code> 的量 <ul><li>length</li><li>number代表相应的border-width 的倍数</li></ul></li><li><code>border-image-repeat</code>: 设置边框图片的平铺方式 <ul><li>stretch默认值。拉伸图像来填充区域</li><li>repeat平铺图像来填充区域</li><li>round如果无法完整平铺所有图像，则对图像进行缩放以适应区域</li><li>space如果无法完整平铺所有图像，扩展空间会分布在图像周围</li></ul></li></ul></li></ul><h2 id="文本效果" tabindex="-1"><a class="header-anchor" href="#文本效果"><span>文本效果</span></a></h2><ul><li>文本阴影 <code>text-shadow: h-shadow v-shadow blur color;</code><ul><li><code>h-shadow</code>: 必需的。代表阴影在水平方向的偏移量（正数向右，负数向左）</li><li><code>v-shadow</code>: 必需的。代表阴影在垂直方向的偏移量（正数代表向下，负数代表向上）</li><li><code>blur</code>: 可选。模糊距离（不能设置负数）</li><li><code>color</code>: 可选。阴影的颜色</li></ul></li><li>文本溢出 <code>text-overflow: clip|ellipsis|string;</code><ul><li><code>clip</code> 修剪文本</li><li><code>ellipsis</code> 显示省略符号来代表被修剪的文本</li><li><code>string</code> 使用给定的字符串来代表被修剪的文本</li></ul></li><li>自动换行 <code>word-wrap: normal|break-word;</code><ul><li><code>normal</code> 只在允许的断字点换行（浏览器保持默认处理）</li><li><code>break-word</code> 在长单词或 URL 地址内部进行换行</li></ul></li><li>断行规则 <code>word-break: normal|break-all|keep-all;</code><ul><li><code>normal</code> 使用浏览器默认的换行规则</li><li><code>break-all</code> 允许在单词内换行</li><li><code>keep-all</code> 只能在半角空格或连字符处换行</li></ul></li></ul><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变"><span>渐变</span></a></h2><h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变"><span>线性渐变</span></a></h3><p><code>background: linear-gradient(direction, color-stop1, color-stop2, ...);</code></p><ol><li>开始颜色和结束颜色 <ul><li>取值可以为关键字、十六进制颜色值、RGBA颜色等</li></ul></li><li>渐变的方向 <ul><li><code>to + right | top | bottom | left</code></li><li>通过角度表示一个方向 0deg(从下向上) 90deg(从左到右)</li></ul></li><li>渐变的范围 <ul><li>可以使用长度单位来控制渐变的开始位置与结束位置，在颜色后面用空格隔开加长度，长度单位可以是px也可以是%等</li></ul></li><li>重复的线性渐变 <ul><li><code>repeating-linear-gradient()</code> 函数用于重复线性渐变</li><li><code>repeating-linear-gradient(red, yellow 10%, green 20%);</code></li></ul></li></ol><h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变"><span>径向渐变</span></a></h3><p><code>background: radial-gradient(position , shape size, start-color, ..., last-color);</code></p><ol><li>颜色 <ul><li>颜色可以为关键词、十六进制颜色值、RGBA颜色值等</li></ul></li><li>圆心位置 <code>postion</code><ul><li><code>position</code> 可以为长度值或者关键字</li><li>若提供两个参数则第一个参数表示横坐标，第二个参数表示纵坐标</li><li>若只提供一个，第二个值默认为50%，即center</li></ul></li><li>圆形状 <code>shape</code><ul><li><code>circle</code> 定义径向渐变为圆形</li><li><code>ellipse</code> 定义径向渐变为椭圆形</li></ul></li><li>圆大小 <code>size</code><br> 主要用于定于径向渐变的结束形状大小 <ul><li><code>closest-side</code>: 指定径向渐变的半径长度为从圆心到离圆心最近的边</li><li><code>closest-corner</code>: 指定径向渐变的半径长度为从圆心到离圆心最近的角</li><li><code>farthest-side</code>: 指定径向渐变的半径长度为从圆心到离圆心最远的边</li><li><code>farthest-corner</code>: 指定径向渐变的半径长度为从圆心到离圆心最远的角</li></ul></li><li>重复的径向渐变 <ul><li><code>repeating-radial-gradient</code> 函数用于重复径向渐变</li></ul></li></ol><h2 id="_2d转换" tabindex="-1"><a class="header-anchor" href="#_2d转换"><span>2D转换</span></a></h2><ul><li>位移 <ul><li><code>transform: translate(100px, 100px);</code></li><li>位移是相对元素自身的位置发生位置改变</li></ul></li><li>旋转 <ul><li><code>transform: rotate(60deg);</code></li><li>取值为角度</li></ul></li><li>缩放 <ul><li><code>transform: scale(0.5, 1);</code></li><li>取值为倍数关系，缩小大于0小于1，放大设置大于1</li></ul></li><li>倾斜 <ul><li><code>transform: skew(30deg, 30deg);</code></li><li>第一个值代表沿着x轴方向倾斜</li><li>第二个值代表沿着y轴方向倾斜</li><li><code>skewX()</code> 表示只在X轴(水平方向)倾斜</li><li><code>skewY()</code> 表示只在Y轴(垂直方向)倾斜</li></ul></li><li><code>martix()</code><ul><li>matrix 包含旋转，缩放，移动（平移）和倾斜功能</li><li>martix 使用六个值的矩阵来定义2D转换</li></ul></li></ul><h2 id="_3d转换" tabindex="-1"><a class="header-anchor" href="#_3d转换"><span>3D转换</span></a></h2><ul><li>位移 <ul><li><code>transform: translateX() translateY() translateZ();</code></li></ul></li><li>旋转 <ul><li><code>transform: rotateX(60deg) rotateY(60deg) rotateZ(60deg);</code></li></ul></li><li>缩放 <ul><li><code>transform: scaleX(0.5) scaleY(1) scaleZ(1);</code></li></ul></li><li>更改转换元素的位置 <ul><li>2D转换元素可以改变元素的X和Y轴</li><li>3D转换元素，还可以更改元素的Z轴</li><li><code>transform-origin: x-axis y-axis z-axis;</code><ul><li><code>x-axis: left|center|right|length|%</code></li><li><code>y-axis: top|center|bottom|length|%</code></li><li><code>z-axis: length</code></li></ul></li></ul></li><li>元素呈现 <ul><li>指定嵌套元素怎样在三维空间中呈现</li><li><code>transform-style: flat|preserve-3d;</code></li><li><code>flat</code>: 子元素将不保留其 3D 位置。</li><li><code>preserve-3d</code>: 子元素将保留其 3D 位置。</li></ul></li><li>透视效果 <ul><li>规定 3D 元素的透视效果</li><li><code>perspective: number|none;</code><ul><li><code>number</code>: 元素距离视图的距离，以像素计。</li><li><code>none</code>: 默认值。与 0 相同。不设置透视。</li></ul></li></ul></li><li>底部位置 <ul><li>定义 3D 元素所基于的 X 轴和 Y 轴 （3D 元素的底部位置）。</li><li><code>perspective-origin: x-axis y-axis;</code><ul><li><code>x-axis: left|center|right|length|%</code></li><li><code>y-axis: top|center|bottom|length|%</code></li></ul></li></ul></li><li>背部可见性 <ul><li>定义当元素不面向屏幕时是否可见</li><li><code>backface-visibility: visible|hidden;</code><ul><li><code>visible</code>: 默认值。 背面是可见的。</li><li><code>hidden</code>: 背面是不可见的。</li></ul></li></ul></li><li><code>matrix3d()</code><ul><li>matrix3d 使用16个值的矩阵来定义3D转换</li></ul></li></ul><h2 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡"><span>过渡</span></a></h2><p>CSS3 过渡是元素从一种样式逐渐改变为另一种的效果<br><code>transition: property duration timing-function delay;</code></p>',20),u=i("<li>过渡属性 <ul><li><code>transition-property: none|all|property;</code></li><li><code>transition-property</code> 属性指定CSS属性的过渡效果</li></ul></li><li>过渡执行时间 <ul><li><code>transition-duration: time;</code></li><li><code>transition-duration</code> 属性规定完成过渡效果需要花费的时间（以秒或毫秒计）</li></ul></li>",2),p=e("li",null,[e("code",null,"transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);")],-1),h={href:"https://www.cnblogs.com/afighter/p/5731293.html",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[l("过渡延迟时间 "),e("ul",null,[e("li",null,[e("code",null,"transition-delay: time;")]),e("li",null,[e("code",null,"transition-delay"),l(" 属性指定何时将开始切换效果")])])],-1),f=i(`<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h2><h3 id="定义动画集" tabindex="-1"><a class="header-anchor" href="#定义动画集"><span>定义动画集</span></a></h3><ul><li>动画是使元素从一种样式逐渐变化为另一种样式的效果。</li><li>动画可以改变任意多的样式任意多的次数。</li><li>动画使用用百分比来规定变化发生的时间，或用关键词 &quot;from&quot; 和 &quot;to&quot;，等同于 0% 和 100%<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token atrule"><span class="token rule">@keyframes</span>  rotate</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">/* 定义开始状态  0%*/</span></span>
<span class="line">	<span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">  	<span class="token comment">/* 定义结束状态 100%*/</span></span>
<span class="line">  	<span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">  		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  	<span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="调用动画集" tabindex="-1"><a class="header-anchor" href="#调用动画集"><span>调用动画集</span></a></h3><p>动画属性的简写属性<br><code>animation: name duration timing-function delay iteration-count direction fill-mode play-state;</code></p><ul><li>动画名称 <ul><li><code>animation-name: keyframename|none</code></li><li><code>animation-name</code> 属性为 @keyframes 动画指定名称。</li></ul></li><li>动画周期 <ul><li><code>animation-duration: time</code></li><li><code>animation-duration</code> 定义动画完成一个周期需要多少秒或毫秒。</li></ul></li><li>动画速度曲线 <ul><li><code>animation-timing-function: linear|ease|ease-in|ease-out|cubic-bezier(n,n,n,n)</code></li><li><code>animation-timing-function</code> 指定动画速度曲线。</li><li>速度曲线定义动画从一套 CSS 样式变为另一套所用的时间。</li><li>速度曲线用于使变化更为平滑。</li></ul></li><li>动画开始时间 <ul><li><code>animation-delay: time</code></li><li><code>animation-delay</code> 属性定义动画什么时候开始。</li><li><code>animation-delay</code> 值单位可以是秒（s）或毫秒（ms）。</li><li>允许负值，-2s 使动画马上开始，但跳过 2 秒进入动画</li></ul></li><li>动画播放次数 <ul><li><code>animation-iteration-count: n | infinite</code></li><li><code>animation-iteration-count</code> 属性定义动画应该播放多少次。</li></ul></li><li>动画循环方向 <ul><li><code>animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit</code><ul><li><code>normal</code> 默认值。动画按正常播放。</li><li><code>reverse</code> 动画反向播放。</li><li><code>alternate</code> 动画在奇数次正向播放，在偶数次反向播放。</li><li><code>alternate-reverse</code> 动画在奇数次反向播放，在偶数次正向播放。</li></ul></li><li><code>animation-direction</code> 属性定义是否循环交替反向播放动画。</li><li>如果动画被设置为只播放一次，该属性将不起作用。</li></ul></li><li>动画的运行和暂停 <ul><li><code>animation-play-state: paused|running;</code></li><li><code>animation--play-state</code> 属性指定动画是否正在运行或已暂停。</li></ul></li><li>动画的结束状态 <ul><li><code>animation-fill-mode</code> 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式</li><li><code>animation-fill-mode: none|forwards|backwards|both|initial|inherit;</code><ul><li><code>none</code> 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。</li><li><code>forwards</code> 在动画结束后（由 <code>animation-iteration-count</code> 决定），动画将使用元素的结束属性值。</li><li><code>backwards</code> 动画将应用在 <code>animation-delay</code> 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 &quot;normal&quot; 或 &quot;alternate&quot; 时）或 to 关键帧中的值（当 animation-direction 为 &quot;reverse&quot; 或 &quot;alternate-reverse&quot; 时）。</li><li><code>both</code> 动画遵循 <code>forwards</code> 和 <code>backwards</code> 的规则。也就是说，动画会在两个方向上扩展动画属性。</li></ul></li></ul></li></ul><h2 id="多媒体查询" tabindex="-1"><a class="header-anchor" href="#多媒体查询"><span>多媒体查询</span></a></h2><h3 id="媒体查询的定义" tabindex="-1"><a class="header-anchor" href="#媒体查询的定义"><span>媒体查询的定义</span></a></h3><ul><li>使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。</li><li>使用 @media 可以针对不同的屏幕尺寸设置不同的样式，用于设计响应式的页面</li><li>重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。</li></ul><h3 id="媒体查询的使用" tabindex="-1"><a class="header-anchor" href="#媒体查询的使用"><span>媒体查询的使用</span></a></h3>`,10),x=i(`<li>直接使用<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    CSS-Code<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>针对不同的媒体使用不同的样式表<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mediatype and|not|only (media feature)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mystylesheet.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2),b={href:"https://www.w3cschool.cn/cssref/css3-pr-mediaquery.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.w3cschool.cn/css/css-mediatypes.html",target:"_blank",rel:"noopener noreferrer"},k=i('<h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>Flex布局</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><ul><li><code>Flex</code> 是 <code>Flexible Box</code> 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</li><li>任何一个容器都可以指定为 Flex 布局。<code>display: flex</code></li><li>行内元素也可以使用 Flex 布局。<code>display: inline-flex</code></li><li>设为 Flex 布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</li></ul><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3><ul><li>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。</li><li>它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</li><li>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。 <ul><li>主轴的开始位置（与边框的交叉点）叫做 <code>main start</code>，结束位置叫做 <code>main end</code></li><li>单个项目占据的主轴空间叫做 <code>main size</code></li><li>交叉轴的开始位置叫做 <code>cross start</code>，结束位置叫做 <code>cross end</code></li><li>单个项目占据的交叉轴空间叫做 <code>cross size</code></li></ul></li></ul><h3 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性"><span>容器的属性</span></a></h3><ul><li><code>flex-direction</code><ul><li><code>flex-direction</code> 属性决定主轴的方向（即项目的排列方向）。</li><li><code>flex-direction: row | row-reverse | column | column-reverse</code><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul></li></ul></li><li><code>flex-wrap</code><ul><li>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。</li><li><code>flex-wrap: nowrap | wrap | wrap-reverse</code><ul><li>nowrap（默认）：不换行。</li><li>wrap：换行，第一行在上方。</li><li>wrap-reverse：换行，第一行在下方。</li></ul></li></ul></li><li><code>flex-flow</code><ul><li><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</li><li><code>flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;</code></li></ul></li><li><code>justify-content</code><ul><li><code>justify-content</code> 属性定义了项目在主轴上的对齐方式。</li><li><code>justify-content: flex-start | flex-end | center | space-between | space-around</code><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul></li></ul></li><li><code>align-items</code><ul><li><code>align-items</code> 属性定义项目在交叉轴上如何对齐。</li><li><code>align-items: flex-start | flex-end | center | baseline | stretch</code><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul></li></ul></li><li><code>align-content</code><ul><li><code>align-content</code> 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</li><li><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch</code><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul></li></ul></li></ul><h3 id="项目的属性" tabindex="-1"><a class="header-anchor" href="#项目的属性"><span>项目的属性</span></a></h3><ul><li><code>order</code><ul><li><code>order</code> 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</li></ul></li><li><code>flex-grow</code><ul><li><code>flex-grow</code> 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</li><li>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。</li><li>如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</li></ul></li><li><code>flex-shrink</code><ul><li><code>flex-shrink</code> 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</li><li>如果所有项目的<code>flex-shrink</code>属性都为1，当空间不足时，都将等比例缩小。</li><li>如果一个项目的<code>flex-shrink</code>属性为0，其他项目都为1，则空间不足时，前者不缩小。</li><li>负值对该属性无效</li></ul></li><li><code>flex-basis</code><ul><li><code>flex-basis</code> 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</li><li><code>flex-basis: number|%|auto;</code></li></ul></li><li><code>flex</code><ul><li><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。</li><li><code>flex-shrink</code> 和 <code>flex-basis</code>为可选属性。</li><li>该属性有两个快捷值：<code>auto (1 1 auto)</code> 和 <code>none (0 0 auto)</code>。</li></ul></li><li><code>align-self</code><ul><li><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。</li><li>默认值为<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code>。</li><li><code>align-self: auto | flex-start | flex-end | center | baseline | stretch;</code></li></ul></li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3>',10),v={href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"};function w(_,y){const o=c("ExternalLinkIcon");return s(),d("div",null,[r,e("ul",null,[u,e("li",null,[l("过渡类型 "),e("ul",null,[p,e("li",null,[e("a",h,[l("几种过渡类型具体介绍"),a(o)])])])]),m]),f,e("ul",null,[x,e("li",null,[e("a",b,[l("css3媒体类型和媒体功能"),a(o)])]),e("li",null,[e("a",g,[l("css媒体类型"),a(o)])])]),k,e("p",null,[e("a",v,[l("Flex 布局教程：实例篇"),a(o)])])])}const S=n(t,[["render",w],["__file","css3-newfeature.html.vue"]]),D=JSON.parse('{"path":"/blogs_1/frontend/2019/css3-newfeature.html","title":"CSS3新特性","lang":"en-US","frontmatter":{"title":"CSS3新特性","date":"2019-09-08T00:00:00.000Z","tags":["前端","CSS3"],"categories":["前端"]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"边框","slug":"边框","link":"#边框","children":[]},{"level":2,"title":"文本效果","slug":"文本效果","link":"#文本效果","children":[]},{"level":2,"title":"渐变","slug":"渐变","link":"#渐变","children":[{"level":3,"title":"线性渐变","slug":"线性渐变","link":"#线性渐变","children":[]},{"level":3,"title":"径向渐变","slug":"径向渐变","link":"#径向渐变","children":[]}]},{"level":2,"title":"2D转换","slug":"_2d转换","link":"#_2d转换","children":[]},{"level":2,"title":"3D转换","slug":"_3d转换","link":"#_3d转换","children":[]},{"level":2,"title":"过渡","slug":"过渡","link":"#过渡","children":[]},{"level":2,"title":"动画","slug":"动画","link":"#动画","children":[{"level":3,"title":"定义动画集","slug":"定义动画集","link":"#定义动画集","children":[]},{"level":3,"title":"调用动画集","slug":"调用动画集","link":"#调用动画集","children":[]}]},{"level":2,"title":"多媒体查询","slug":"多媒体查询","link":"#多媒体查询","children":[{"level":3,"title":"媒体查询的定义","slug":"媒体查询的定义","link":"#媒体查询的定义","children":[]},{"level":3,"title":"媒体查询的使用","slug":"媒体查询的使用","link":"#媒体查询的使用","children":[]}]},{"level":2,"title":"Flex布局","slug":"flex布局","link":"#flex布局","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"容器的属性","slug":"容器的属性","link":"#容器的属性","children":[]},{"level":3,"title":"项目的属性","slug":"项目的属性","link":"#项目的属性","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{},"filePathRelative":"blogs_1/frontend/2019/css3-newfeature.md"}');export{S as comp,D as data};