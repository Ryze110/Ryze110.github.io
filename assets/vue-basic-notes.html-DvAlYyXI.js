import{_ as s,o as n,c as a,e as t}from"./app-UfWKxtAj.js";const e={},p=t(`<h2 id="vue模板语法" tabindex="-1"><a class="header-anchor" href="#vue模板语法"><span>Vue模板语法</span></a></h2><h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值"><span>插值</span></a></h3><p>数据绑定最常见的形式就是使用 <code>Mustache</code> 语法 (双大括号) 的文本插值</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">插入属性值 <span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入运算 <span class="token punctuation">{</span><span class="token punctuation">{</span> num <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入布尔值 <span class="token punctuation">{</span><span class="token punctuation">{</span> isTrue <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入<span class="token constant">JS</span>表达式 <span class="token punctuation">{</span><span class="token punctuation">{</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入三元运算符 <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;真的&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;假的&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入字符串 <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&#39;hahahahah&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">插入对象 <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h3><ul><li>指令的介绍：指令 (Directives) 是带有 <code>v-</code> 前缀的特殊 attribute。</li><li>指令 attribute 的值预期是单个 JavaScript 表达式（ <code>v-for</code> 例外）</li><li>指令的职责：当表达式的值改变时，将其产生的连带影响，<strong>响应式</strong>地作用于 DOM。</li><li>指令的演示 <ul><li><code>v-text</code>：元素的 <code>innerText</code> 属性，必须是双标签 跟 <code>{{}}</code> 效果是一样的 使用较少</li><li><code>v-once</code>：一次性插值 <code>&lt;span v-once&gt;这个将不会改变: {{ msg }}&lt;/span&gt;</code></li><li><code>v-html</code>：元素的 <code>innerHtml</code></li><li><code>v-if</code>：数据属性对应的值为假则不渲染，反之渲染 <code>appendChild()/removeChild()</code></li><li><code>v-else-if</code></li><li><code>v-else</code></li><li><code>v-show</code>：控制dom元素的显示隐藏 <code>display:none/block;</code><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">v-if和v-show的区别</p><p>v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会渲染条件块。<br> 相比之下，v-show 就简单的多，不管初始条件是什么，元素总是会被渲染，并且只是简单的基于CSS进行切换。<br> 一般来说，v-if 有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用v-show较好；如果在运行时条件甚少改变，则使用v-if较好</p></div></li><li><code>v-on</code>:监听 DOM 事件，并在触发时运行一些 JavaScript 代码 简写为 <code>@</code><ul><li>可以绑定方法</li><li>也可以直接内联 JavaScript 语句</li><li><code>Vue</code> 为 <code>v-on</code> 提供了事件修饰符来解决对事件细节的处理<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- 阻止单击事件继续传播 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 提交事件不再重载页面 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 修饰符可以串联 --&gt;</span></span>
<span class="line"><span class="token comment">&lt;!--v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThat<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 只有修饰符 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 添加事件监听器时使用事件捕获模式 --&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 只当在 event.target 是当前元素自身时触发处理函数 --&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- 即事件不是从内部元素触发的 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThat<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 点击事件将只会触发一次 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- 而不会等待 \`onScroll\` 完成  --&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- 这其中包含 \`event.preventDefault()\` 的情况 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-on:</span>scroll.passive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onScroll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>Vue</code> 允许为 <code>v-on</code> 在监听键盘事件时添加按键修饰符<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- 只有在 \`key\` 是 \`Enter\` 时调用 \`vm.submit()\` --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 你可以直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup.page-down</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPageDown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>使用系统修饰键来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。 <ul><li><code>.ctrl</code></li><li><code>.alt</code></li><li><code>.shift</code></li><li><code>.meta</code></li><li><code>.exact</code>: 实现系统修饰符的精确控制</li><li><code>.left</code>: 鼠标左键</li><li><code>.right</code>: 鼠标右键</li><li><code>.middle</code>: 鼠标滑轮</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- Alt + C --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">@keyup.alt.67</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- Ctrl + Click --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click.ctrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doSomething<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Do something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 即使 Alt 或 Shift 被一同按下时也会触发 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.ctrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 有且只有 Ctrl 被按下的时候才触发 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.ctrl.exact</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onCtrlClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 没有任何系统修饰符被按下的时候才触发 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.exact</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><code>v-bind</code>：绑定标签上的属性（内置属性和自定义属性）简写为 <code>:</code><br> 使用<code>v-bind</code>绑定class和style <ul><li>操作元素的 class 列表和内联样式是数据绑定的一个常见需求</li><li>在将 <code>v-bind</code> 用于 <code>class</code> 和 <code>style</code> 时, 表达式结果的类型除了字符串之外，还可以是对象或数组。</li><li>当在一个自定义组件上使用 class 属性时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。</li><li>当 <code>v-bind:style</code> 使用需要添加<code>浏览器引擎前缀</code>的 CSS 属性时，如 <code>transform</code>，<code>Vue.js</code> 会自动侦测并添加相应的前缀。</li><li>从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 绑定HTML class</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 对象语法</span></span>
<span class="line"><span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 数组语法</span></span>
<span class="line"><span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[activeClass, errorClass]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 使用三元表达式切换样式</span></span>
<span class="line"><span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 绑定内联样式</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 对象语法</span></span>
<span class="line"><span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 数组语法 （将多个样式对象应用到同一个元素上）</span></span>
<span class="line"><span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;[baseStyles, overridingStyles]&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 多重值 （只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。）</span></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ display: [&#39;-webkit-box&#39;, &#39;-ms-flexbox&#39;, &#39;flex&#39;] }&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>v-for</code><ul><li>基于一个数组来渲染一个列表 <code>v-for=&quot;(item, index) in items&quot;</code></li><li>也可以用<code>of</code>来代替<code>in</code>, 这样更接近Javascripe迭代器的语法</li><li>遍历一个对象的属性 <code>v-for=&quot;(value, name) in object&quot;</code></li><li>在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。</li><li>建议尽可能在使用 <code>v-for</code> 时提供 key attribute, 以便跟踪每个节点的身份，从而重用和重新排序现有元素</li><li>不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。</li><li>数组更新检测 <ul><li>Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新<br> 包括<code>push() pop() shift() unshift() splice() sort() reverse()</code></li><li>当使用非变异方法时，可以用新数组替换旧数组</li><li>Vue不能检测通过索引和数组长度导致的数组的变动解决办法如下</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 解决无法检测通过索引设置数组项</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>items<span class="token punctuation">,</span> indexOfItem<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 或者</span></span>
<span class="line">vm<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>indexOfItem<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 解决无法检测修改数组长度</span></span>
<span class="line">vm<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>newLength<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>对象更新检测 <ul><li>Vue 不能检测对象属性的添加或删除</li><li>对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 <code>Vue.set(object, propertyName, value)</code> 方法向嵌套对象添加响应式属性。</li><li>为已有对象赋值多个新属性应该用新属性创建一个新对象赋给已有对象<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">vm<span class="token punctuation">.</span>userProfile <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> vm<span class="token punctuation">.</span>userProfile<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">favoriteColor</span><span class="token operator">:</span> <span class="token string">&#39;Vue Green&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>过滤和排序数组 <ul><li>通过计算属性 <code>v-for=&quot;n in computedEvenNumbers&quot;</code></li><li>通过方法 <code>v-for=&quot;n in getEvenNumbers(numbers)</code></li></ul></li></ul></li><li><code>v-model</code><ul><li>用于在表单中创建双向数据绑定，负责监听用户的输入事件以更新数据</li><li><code>v-model</code> 在内部为不同的输入元素使用不同的属性并抛出不同的事件 <ul><li>text 和 textarea 元素使用 <code>value</code> 属性和 <code>input</code> 事件；</li><li>checkbox 和 radio 使用 <code>checked</code> 属性和 <code>change</code> 事件；</li><li>select 字段将 value 作为 <code>prop</code> 并将 <code>change</code> 作为事件。</li></ul></li><li>修饰符 <ul><li><code>.lazy</code>: 从触发input事件时更新改为触发change事件更新</li><li><code>.number</code>: 自动将用户的输入值转为数值类型</li><li><code>.trim</code>: 自动过滤用户输入的首尾空白字符</li></ul></li></ul></li></ul></li></ul><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h2><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><p>模板内的表达式 ===&gt; 简单运算<br> 复杂逻辑 ===&gt; 计算属性</p><h3 id="与方法的比较" tabindex="-1"><a class="header-anchor" href="#与方法的比较"><span>与方法的比较</span></a></h3><ul><li>将同一函数定义为一个方法或者一个计算属性的最终结果确实是完全相同的</li><li>不同的是计算属性是基于它们的响应式依赖进行缓存的</li><li>只在相关响应式依赖发生改变时它们才会重新求值</li><li>每当触发重新渲染时，调用方法将总会再次执行函数</li><li>缓存的目的是避免多次执行性能开销比较大的计算属性</li></ul><h3 id="与侦听属性的比较" tabindex="-1"><a class="header-anchor" href="#与侦听属性的比较"><span>与侦听属性的比较</span></a></h3><ul><li><code>Vue</code> 提供了一种更通用的方式来观察和响应 <code>Vue</code> 实例上的数据变动：侦听属性</li><li>当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 <code>watch</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">firstName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> val <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">lastName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> val</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性的setter" tabindex="-1"><a class="header-anchor" href="#计算属性的setter"><span>计算属性的setter</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">fullName</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// getter</span></span>
<span class="line">    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// setter</span></span>
<span class="line">    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> names <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span>names<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器"><span>侦听器</span></a></h2><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1"><span>使用场景</span></a></h3><p>需要在数据变化时执行异步或开销较大的操作时使用侦听器来响应数据的变化</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 如果 \`question\` 发生改变，这个函数就会运行</span></span>
<span class="line">  <span class="token function-variable function">question</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token string">&#39;Waiting for you to stop typing...&#39;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">debouncedGetAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件基础" tabindex="-1"><a class="header-anchor" href="#组件基础"><span>组件基础</span></a></h2><ul><li>组件可以复用无数次，每用一次组件，就会有一个它的新实例被创建</li><li>一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝</li><li>每个组件必须只有一个根元素</li><li>组件的插槽可以向组件传递内容，只需要在组件内部使用<code>&lt;slot&gt;&lt;/slot&gt;</code></li><li>可以通过Vue 的 <code>&lt;component&gt;</code> 元素的 <code>is</code> 属性来实现动态组件</li></ul><h3 id="通过props传递数据" tabindex="-1"><a class="header-anchor" href="#通过props传递数据"><span>通过props传递数据</span></a></h3><p>Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个属性。</p><p>一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。</p><h3 id="使用-emit触发事件" tabindex="-1"><a class="header-anchor" href="#使用-emit触发事件"><span>使用<code>$emit</code>触发事件</span></a></h3><ol><li>子组件可以通过调用内建的 <code>$emit</code> 方法传入事件名称来触发一个事件</li><li>父组件可以通过 v-on 来监听子组件要触发的事件来调用父组件中的方法</li><li>可以使用 <code>$emit</code> 的第二个参数来传递参数</li></ol>`,27),l=[p];function c(o,i){return n(),a("div",null,l)}const r=s(e,[["render",c],["__file","vue-basic-notes.html.vue"]]),d=JSON.parse('{"path":"/blogs_1/frontend/2020/vue-basic-notes.html","title":"Vue基础笔记","lang":"en-US","frontmatter":{"title":"Vue基础笔记","date":"2020-01-09T00:00:00.000Z","tags":["前端","JavaScript","Vue"],"categories":["前端"]},"headers":[{"level":2,"title":"Vue模板语法","slug":"vue模板语法","link":"#vue模板语法","children":[{"level":3,"title":"插值","slug":"插值","link":"#插值","children":[]},{"level":3,"title":"指令","slug":"指令","link":"#指令","children":[]}]},{"level":2,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"与方法的比较","slug":"与方法的比较","link":"#与方法的比较","children":[]},{"level":3,"title":"与侦听属性的比较","slug":"与侦听属性的比较","link":"#与侦听属性的比较","children":[]},{"level":3,"title":"计算属性的setter","slug":"计算属性的setter","link":"#计算属性的setter","children":[]}]},{"level":2,"title":"侦听器","slug":"侦听器","link":"#侦听器","children":[{"level":3,"title":"使用场景","slug":"使用场景-1","link":"#使用场景-1","children":[]}]},{"level":2,"title":"组件基础","slug":"组件基础","link":"#组件基础","children":[{"level":3,"title":"通过props传递数据","slug":"通过props传递数据","link":"#通过props传递数据","children":[]},{"level":3,"title":"使用$emit触发事件","slug":"使用-emit触发事件","link":"#使用-emit触发事件","children":[]}]}],"git":{},"filePathRelative":"blogs_1/frontend/2020/vue-basic-notes.md"}');export{r as comp,d as data};