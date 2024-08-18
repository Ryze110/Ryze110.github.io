import{_ as n,o as s,c as a,e}from"./app-UfWKxtAj.js";const p={},t=e(`<h2 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象"><span>创建对象</span></a></h2><p>对象是键值对的集合：对象是由属性和方法构成的 (ps：也有说法为：对象里面皆属性，认为方法也是一个属性)</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> poet <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;海子&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">writePoem</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;写了&quot;</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token string">&quot;首诗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象属性操作" tabindex="-1"><a class="header-anchor" href="#对象属性操作"><span>对象属性操作</span></a></h2><h3 id="获取属性" tabindex="-1"><a class="header-anchor" href="#获取属性"><span>获取属性</span></a></h3><ul><li>通过 <code>.</code> 语法<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  poet<span class="token punctuation">.</span>name <span class="token comment">// 获取到name属性的值</span></span>
<span class="line">  poet<span class="token punctuation">.</span>sayHello <span class="token comment">// 获取到一个方法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>通过 <code>[]</code> 语法<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  poet<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 等价于poet.name</span></span>
<span class="line">  poet<span class="token punctuation">[</span><span class="token string">&#39;sayHello&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 等价于poet.sayHello</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>两种方法的差异 <ul><li><code>·</code> 语法更方便但是有局限性 <ul><li><code>·</code> 后面不能使用js中的关键字、保留字(class、this、function。。。)</li><li><code>·</code> 后面不能使用数字</li></ul></li><li><code>[]</code> 使用更广泛 <ul><li>poet[变量名]</li><li>[&#39;class&#39;]、[&#39;this&#39;]</li><li>[0]、[1]、[2]（obj[3]=obj[&quot;3&quot;]）</li><li>[&quot;[object Array]&quot;] （jquery）</li><li>[&quot;{abc}&quot;]（给对象添加了{abc}属性）</li></ul></li></ul></li></ul><h3 id="设置属性" tabindex="-1"><a class="header-anchor" href="#设置属性"><span>设置属性</span></a></h3><p><code>poet[&quot;name&quot;]=&quot;戴望舒&quot;</code> 等价于：<code>poet.name=&quot;戴望舒&quot;</code></p><ul><li>含义：如果poet对象中没有name属性，就添加一个name属性，值为&quot;戴望舒&quot;，如果poet对象中有name属性，就修改name属性的值为&quot;戴望舒&quot;</li><li>案例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">poet<span class="token punctuation">.</span>isDied <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">poet<span class="token punctuation">[</span><span class="token string">&quot;books&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;诗集&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;自传&quot;</span><span class="token punctuation">]</span></span>
<span class="line">poet<span class="token punctuation">.</span><span class="token function-variable function">selfDescription</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;大家好，我是戴望舒&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除属性" tabindex="-1"><a class="header-anchor" href="#删除属性"><span>删除属性</span></a></h3><ul><li><code>delete poet[&quot;age&quot;]</code></li><li><code>delete post.age</code></li></ul><h2 id="通过构造函数创建对象" tabindex="-1"><a class="header-anchor" href="#通过构造函数创建对象"><span>通过构造函数创建对象</span></a></h2><h3 id="构造函数的概念" tabindex="-1"><a class="header-anchor" href="#构造函数的概念"><span>构造函数的概念</span></a></h3><ul><li>任何函数都可以当成构造函数</li><li>只要把一个函数通过new的方式来进行调用，我们就把这一次函数的调用方式称之为：构造函数的调用</li><li><code>new Object()</code> 等同于对象字面量 {}</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token keyword">function</span> <span class="token function">Painter</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// p1就是根据Painter构造函数创建出来的对象</span></span>
<span class="line">  <span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paniter</span><span class="token punctuation">(</span><span class="token string">&quot;八大山人&quot;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数的执行过程" tabindex="-1"><a class="header-anchor" href="#构造函数的执行过程"><span>构造函数的执行过程</span></a></h3><p><code>var p1 = new Paniter(&quot;八大山人&quot;, 99)</code></p><ol><li>创建一个对象 <code>_p1</code>（我们把这个对象称之为Painter构造函数的实例）</li><li>创建一个内部对象 <code>this</code> , 将this指向实例 <code>_p1</code></li><li>执行函数内部的代码，其中，操作this的部分就是操作了实例 <code>_p1</code></li><li>返回值 <ol><li>如果函数没有返回值，那么就会返回构造函数的实例 <code>_p1</code></li><li>如果函数返回了一个基本数据类型的值，那么本次构造函数的返回值是该实例 <code>_p1</code></li><li>如果函数返回了一个复杂数据类型的值，那么本次函数的返回值就是该值</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> </span>
<span class="line">  <span class="token comment">//数组是一个对象类型的值，</span></span>
<span class="line">  <span class="token comment">//所以数组是一个复杂数据类型的值</span></span>
<span class="line">  <span class="token comment">//--&gt;本次构造函数的真正返回值就是该数组</span></span>
<span class="line">  <span class="token comment">//--&gt;不再是fn3构造函数的实例</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//f1就是fn的实例</span></span>
<span class="line"><span class="token keyword">var</span> f1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//f2是fn2构造函数的实例</span></span>
<span class="line"><span class="token keyword">var</span> f2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//f3值为[1,3,5], f3不是fn3的实例</span></span>
<span class="line"><span class="token keyword">var</span> f3<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,19),l=[t];function c(o,i){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","js-object.html.vue"]]),r=JSON.parse('{"path":"/blogs_1/frontend/2019/js-object.html","title":"JS对象","lang":"en-US","frontmatter":{"title":"JS对象","tags":["前端","JavaScript"],"categories":["前端"],"date":"2019-11-12T00:00:00.000Z"},"headers":[{"level":2,"title":"创建对象","slug":"创建对象","link":"#创建对象","children":[]},{"level":2,"title":"对象属性操作","slug":"对象属性操作","link":"#对象属性操作","children":[{"level":3,"title":"获取属性","slug":"获取属性","link":"#获取属性","children":[]},{"level":3,"title":"设置属性","slug":"设置属性","link":"#设置属性","children":[]},{"level":3,"title":"删除属性","slug":"删除属性","link":"#删除属性","children":[]}]},{"level":2,"title":"通过构造函数创建对象","slug":"通过构造函数创建对象","link":"#通过构造函数创建对象","children":[{"level":3,"title":"构造函数的概念","slug":"构造函数的概念","link":"#构造函数的概念","children":[]},{"level":3,"title":"构造函数的执行过程","slug":"构造函数的执行过程","link":"#构造函数的执行过程","children":[]}]}],"git":{},"filePathRelative":"blogs_1/frontend/2019/js-object.md"}');export{d as comp,r as data};