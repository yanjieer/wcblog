import{_ as n,o as s,c as a,a as p}from"./app-c0a9b61f.js";const t="/wcblog/assets/1701154659154-108bb1ef.png",e="/wcblog/assets/1668580660131.bf0cbda8-fcb9e486.png",o="/wcblog/assets/1668580888481.93688623-780380da.png",l="/wcblog/assets/1668581031784.a99e4073-b6c44760.png",i="/wcblog/assets/1668581078362.854df185-0622e59f.png",c="/wcblog/assets/1668581183076.e0fc93c4-3aed7082.png",r="/wcblog/assets/1668581500394.5c163a69-c6705be8.png",u="/wcblog/assets/1668581583439.379bdcf9-e93b03f7.png",k="/wcblog/assets/1668581655279.56d6046c-3da22c02.png",d="/wcblog/assets/1668581878554.3ffe0465-64244410.png",v="/wcblog/assets/1668582037414.9ee13dec-318a2e5c.png",m="/wcblog/assets/1668582230020.a2cf2867-217cab1f.png",b="/wcblog/assets/1668582287660.f7f671b3-ab6e4935.png",y="/wcblog/assets/1668582420303.67abe7fa-f0962f6c.png",g="/wcblog/assets/1668582653584.aaf9d64a-68e903a2.png",h="/wcblog/assets/1668582851265.32519764-7c95a349.png",f="/wcblog/assets/1668582890699.36351bd4-678b47b9.png",w="/wcblog/assets/1668582963539.ccad779c-23a898b6.png",x="/wcblog/assets/1668583035403.488cd1a4-7dd721c1.png",_="/wcblog/assets/1668583247556.01421c2f-9f55d965.png",E="/wcblog/assets/1668583281443.8cdab940-3fb5144f.png",R="/wcblog/assets/1668583303863.1f791786-0f466fb7.png",j="/wcblog/assets/1668587478672.5bb129a1-eb6f5d99.png",P="/wcblog/assets/1668590582927.3098f66a-94e65b04.png",L="/wcblog/assets/1668590658507.d21f0c26-a3f48c96.png",A="/wcblog/assets/1668590724645.4e1aaab2-443fe642.png",C="/wcblog/assets/1668590750677.a3a576d2-3886b392.png",V="/wcblog/assets/1668590762340.8b9dd622-62cf78e2.png",D="/wcblog/assets/1668593673561.bfadd505-1701168648355-7cabc29c.png",N={},T=p('<h1 id="vue管理系统" tabindex="-1"><a class="header-anchor" href="#vue管理系统" aria-hidden="true">#</a> Vue管理系统</h1><h2 id="一-vue-element-admin开源项目介绍" tabindex="-1"><a class="header-anchor" href="#一-vue-element-admin开源项目介绍" aria-hidden="true">#</a> 一，vue-element-admin开源项目介绍</h2><h3 id="_1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_1-项目介绍" aria-hidden="true">#</a> 1，项目介绍</h3><p>开源地址：https://github.com/PanJiaChen/vue-element-admin</p><p>预览地址：https://panjiachen.github.io/vue-element-admin/#/login?redirect=%2Fdashboard</p><p>文档地址：https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%8A%9F%E8%83%BD</p><p><strong>亮点</strong>：</p><ul><li><p>权限设计</p></li><li><p>全局功能 （Layout）</p><ul><li>菜单如何渲染</li><li>设置功能实现</li><li>全局操作实现</li><li>切换组件实现</li><li>国际化实现</li><li>TabView</li><li>面包屑</li><li>....</li></ul></li></ul><h3 id="_2-启动项目" tabindex="-1"><a class="header-anchor" href="#_2-启动项目" aria-hidden="true">#</a> 2，启动项目</h3><p>需要对代码进行解压：</p><p><img src="'+t+'" alt="1701154659154"></p><p>使用vscode打开代码：</p><p><img src="'+e+'" alt="img"></p><p>拿到一个项目，先看一下项目的说明文件，是README. MD文件，如下：</p><p><img src="'+o+'" alt="img"></p><p>换源，如下：</p><p><img src="'+l+'" alt="img"></p><p>安装依赖，如下：</p><p><img src="'+i+'" alt="img"></p><p>出现报错，如下：</p><p><img src="'+c+'" alt="img"></p><p>尝试使用cnpm，如下：</p><p><img src="'+r+'" alt="img"></p><p>上面报错的原因是tui-editor包安装不上，我们就不让它安装，打开package.json，依赖删除掉，如下：</p><p><img src="'+u+'" alt="img"></p><p>删除完后，把node_module也删除了，如下：</p><p><img src="'+k+'" alt="img"></p><p>重新使用cnpm i安装，如下：</p><p><img src="'+d+'" alt="img"></p><p><img src="'+v+'" alt="img"></p><p>通过npm run dev把项目运行起来，运行起来后，又后错了，如下：</p><p><img src="'+m+'" alt="img"></p><p>把删除package.json中core.js依赖，如下：</p><p><img src="'+b+'" alt="img"></p><p>把node_modules，删除掉，如下：</p><p><img src="'+y+'" alt="img"></p><p>再一次重新安装，通过cnpm i ，如下：</p><p><img src="'+g+'" alt="img"></p><p>安装OK。</p><p>还需要去单独安装core-js，如下：</p><p><img src="'+h+'" alt="img"></p><p>运行项目，如下：</p><p><img src="'+f+'" alt="img"></p><p>出现报错，如下：</p><p><img src="'+w+'" alt="img"></p><p>上面的报错的原因是没有这个依赖，找到对应的组件，把对应的代码删除了，如下：</p><p><img src="'+x+'" alt="img"></p><p><img src="'+_+'" alt="img"></p><p>项目就可以运行起来了，如下：</p><p><img src="'+E+'" alt="img"></p><p>浏览器效果如下：</p><p><img src="'+R+`" alt="img"></p><h3 id="_3-可以科学上网安装依赖" tabindex="-1"><a class="header-anchor" href="#_3-可以科学上网安装依赖" aria-hidden="true">#</a> 3，可以科学上网安装依赖</h3><p>电脑上，需要有工具，打开代理工具，直接通过npm 去安装所有的依赖，项目就直接通过npm run dev运行直来，需要注意node版本是16.16.0。</p><h3 id="_4-使用工具删除node-module" tabindex="-1"><a class="header-anchor" href="#_4-使用工具删除node-module" aria-hidden="true">#</a> 4，使用工具删除node_module</h3><p>先安装一个工具：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install rimraf <span class="token operator">-</span> g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除node_module：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>rimraf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-研究项目" tabindex="-1"><a class="header-anchor" href="#_5-研究项目" aria-hidden="true">#</a> 5,研究项目</h3><p>得到一个新的项目，如何研究？研究的流程是怎么样的？</p><ul><li>README.md 项目的说明文件</li><li>package.json 看一下，项目中运行了什么依赖，启动项目，打包项目</li><li>项目都有哪些配置文件，不能有语法障碍，如果配置文件没有见过，直接把配置文件名放到百度</li><li>src是项目的源码，重点就是src</li><li>先看入口文件，main.js index.js</li><li>看APP.vue</li><li>看路由，Layout组件，路由对应的哪些组件</li><li>Vuex，状态管理，存储哪些公共的状态</li><li>axios是如何封装的，api接口是如何封装，跨域是是如何配置的</li><li>看别人写的组件，是如何写的，如何命名的，如果在基于人家的项目去开发，习惯最好和人家的习惯一样</li><li>把项目跑起来，边去看效果，边看代码边研究，边记录，把遇到的问题都记录下来</li></ul><h2 id="二-项目" tabindex="-1"><a class="header-anchor" href="#二-项目" aria-hidden="true">#</a> 二，项目</h2><h3 id="_1-从入口main-js开始" tabindex="-1"><a class="header-anchor" href="#_1-从入口main-js开始" aria-hidden="true">#</a> 1，从入口main.js开始</h3><p>main.js中的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 引入js-cookie，对cookie进行操作</span>
<span class="token comment">// 后端返回的token就存储在cookie中</span>
<span class="token comment">// 之前是将cookie存储在localstorage中</span>
<span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>

<span class="token comment">// 引入重置样式</span>
<span class="token keyword">import</span> <span class="token string">&#39;normalize.css/normalize.css&#39;</span>

<span class="token comment">// 引入Element组件库</span>
<span class="token comment">// vant是手机端的UI库；Element是PC端的UI组件库</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./styles/element-variables.scss&#39;</span>
<span class="token comment">// 引入国际包 国际化</span>
<span class="token keyword">import</span> enLang <span class="token keyword">from</span> <span class="token string">&#39;element-ui/lib/locale/lang/en&#39;</span>

<span class="token comment">// 引入自己写的CSS全局样式</span>
<span class="token keyword">import</span> <span class="token string">&#39;@/styles/index.scss&#39;</span> <span class="token comment">// global css</span>

<span class="token comment">// 引入APP组件</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token comment">// 引入仓库</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// 引入路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token comment">// 引入自己封装的icon图标</span>
<span class="token keyword">import</span> <span class="token string">&#39;./icons&#39;</span> 
<span class="token comment">// 引入权限控制</span>
<span class="token keyword">import</span> <span class="token string">&#39;./permission&#39;</span> <span class="token comment">// permission control</span>
<span class="token keyword">import</span> <span class="token string">&#39;./utils/error-log&#39;</span> <span class="token comment">// error log</span>

<span class="token comment">// 引入过滤器</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> filters <span class="token keyword">from</span> <span class="token string">&#39;./filters&#39;</span> <span class="token comment">// global filters</span>

<span class="token doc-comment comment">/**
 * If you don&#39;t want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */</span>
<span class="token comment">// process是node中的全局变量</span>
<span class="token comment">// 当通过npm run build时，node_env就是production</span>
<span class="token comment">// 当通过npm run dev时，node_env就是development</span>
<span class="token comment">// p<wbr>rocess.env.NODE_ENV === &#39;production&#39; 表示是生成环境</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 导入mock模块，模拟接口中的，本项目中的接口，都是模拟的，都是假的</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mockXHR <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../mock&#39;</span><span class="token punctuation">)</span>
  <span class="token function">mockXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Vue.use(Element)使用插件 </span>
<span class="token comment">// 之前：Vue.use(vant)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// Button  可以设置  如果不设置默认是medium</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;medium&#39;</span><span class="token punctuation">,</span> <span class="token comment">// set element-ui default size</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> enLang <span class="token comment">// 如果使用中文，无需设置，请删除</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 注册全局过滤器</span>
<span class="token comment">// register global utility filters</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>filters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> filters<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 关闭生成环境下，vue提示</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-app-vue" tabindex="-1"><a class="header-anchor" href="#_2-app-vue" aria-hidden="true">#</a> 2，App.vue</h3><p>App.vue中的代码如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这是一级路由出口 --&gt;</span>
    <span class="token comment">&lt;!--需要知道，哪些路由匹配的组件会放到一级路由出口 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-路由模块" tabindex="-1"><a class="header-anchor" href="#_3-路由模块" aria-hidden="true">#</a> 3,路由模块</h3><p>本项目中，路由模块+权限管理模块，是最难的。</p><p>打开路由文件夹，如下：</p><p><img src="`+j+`" alt="img"></p><p>路由模块中的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 引入vue-router</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// 路由就是一个插件，需要use</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>

<span class="token comment">// 引入layout组件</span>
<span class="token comment">// layout组件非常重要  </span>
<span class="token comment">// 一级路由出口中，匹配layout组件</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>

<span class="token comment">// 引入其它四个路由模块</span>
<span class="token keyword">import</span> componentsRouter <span class="token keyword">from</span> <span class="token string">&#39;./modules/components&#39;</span>
<span class="token keyword">import</span> chartsRouter <span class="token keyword">from</span> <span class="token string">&#39;./modules/charts&#39;</span>
<span class="token keyword">import</span> tableRouter <span class="token keyword">from</span> <span class="token string">&#39;./modules/table&#39;</span>
<span class="token keyword">import</span> nestedRouter <span class="token keyword">from</span> <span class="token string">&#39;./modules/nested&#39;</span>

<span class="token doc-comment comment">/**
 * Note: sub-menu only appear when route children.length &gt;= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:&#39;router-name&#39;             the name is used by &lt;keep-alive&gt; (must set!!!)
 * meta : <span class="token punctuation">{</span>
    roles: [&#39;admin&#39;,&#39;editor&#39;]    control the page roles (you can set multiple roles)
    title: &#39;title&#39;               the name show in sidebar and breadcrumb (recommend set)
    icon: &#39;svg-name&#39;/&#39;el-icon-x&#39; the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: &#39;/example/list&#39;  if set path, the sidebar will highlight the path you set
  <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */</span>

<span class="token comment">// 本项目中路由分成了两大模块：静态路由 和 动态路由</span>
<span class="token comment">// 静态路由：所有的用户可以访问，不需要权限</span>
<span class="token comment">// 动态路由：需要权限，如果有权限，就可以访问；如果没有权限，就不能访问</span>
<span class="token comment">// 路则规则：就是一个对象</span>
<span class="token comment">//     path: &#39;/redirect&#39;,  访问的url</span>
<span class="token comment">//     component: Layout,  访问出口中放什么组件  在一级中币出口中放 Layout 组件</span>
<span class="token comment">//     hidden: true,  隐藏   把侧边栏中不能看到声明式导航</span>
<span class="token comment">//     children: [  配置二级路由 ]</span>

<span class="token comment">// 静态路由</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> constantRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/redirect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/redirect/:path(.*)&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 在二级路由出口中放@/views/redirect/index组件 </span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/redirect/index&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 当访问 /login时， 在一级路由出口放登录页面  一级路由出口是在APP组件中</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//  设置侧边栏中不能看到声明式导航</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/auth-redirect&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/auth-redirect&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/404&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/401&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/401&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">affix</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/documentation&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/documentation/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Documentation&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Documentation&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;documentation&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">affix</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/guide&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/guide/index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/guide/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/profile/index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/profile/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Profile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Profile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */</span>
<span class="token comment">// 动态路由</span>
<span class="token comment">// 页面级（路由级）权限：</span>
<span class="token comment">//     不同用户，登录到系统，看到的侧边栏是不一样，也就是有不同的页面</span>
<span class="token comment">//     同一个页面，有的用户可以访问，有的用户不能访问</span>
<span class="token comment">// 并不是说，在下面配置完就OK，背后还有很多代码</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/permission&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/permission/page&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// will always show the root menu</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Permission&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Permission&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;lock&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">]</span> <span class="token comment">// you can set roles in root nav</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/permission/page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;PagePermission&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Page Permission&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span> <span class="token comment">// or you can only set roles in sub nav</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/permission/directive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;DirectivePermission&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Directive Permission&#39;</span>
          <span class="token comment">// if do not set roles, means: this page does not require permission</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;role&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/permission/role&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;RolePermission&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Role Permission&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/icon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/icons/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Icons&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Icons&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/** when your routing map is too long, you can split it into small modules **/</span>
  componentsRouter<span class="token punctuation">,</span>
  chartsRouter<span class="token punctuation">,</span>
  nestedRouter<span class="token punctuation">,</span>
  tableRouter<span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/example&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;el-icon-s-help&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/create&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;CreateArticle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Create Article&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;edit&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;edit/:id(\\\\d+)&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/edit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;EditArticle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Edit Article&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/example/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ArticleList&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Article List&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/tab&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/tab/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tab&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Tab&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;tab&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/error&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;noRedirect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ErrorPages&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Error Pages&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;401&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/401&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Page401&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;401&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/404&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Page404&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/error-log&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-log/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ErrorLog&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Error Log&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;bug&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/excel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/excel/export-excel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Excel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Excel&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;excel&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;export-excel&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/excel/export-excel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ExportExcel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Export Excel&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;export-selected-excel&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/excel/select-excel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;SelectExcel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Export Selected&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;export-merge-header&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/excel/merge-header&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MergeHeader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Merge Header&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;upload-excel&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/excel/upload-excel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UploadExcel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Upload Excel&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/zip&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/zip/download&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Zip&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Zip&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;zip&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;download&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/zip/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ExportZip&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Export Zip&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/pdf/index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/pdf/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;PDF&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;PDF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;pdf&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/pdf/download&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/pdf/download&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/theme&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/theme/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Theme&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Theme&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;theme&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/clipboard&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/clipboard/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ClipboardDemo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Clipboard&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;clipboard&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;external-link&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/PanJiaChen/vue-element-admin&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;External Link&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;link&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 404 page must be placed at the end !!!</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// mode: &#39;history&#39;, // require service support</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> constantRoutes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resetRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newRouter <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span>matcher <span class="token operator">=</span> newRouter<span class="token punctuation">.</span>matcher <span class="token comment">// reset router</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左则的菜单是动态的计算出来的，如下：</p><p><img src="`+P+'" alt="img"></p><p>它是在permission模块中动态计算出来的，这个模块是最最难的模块。</p><h3 id="_4-permission模块" tabindex="-1"><a class="header-anchor" href="#_4-permission模块" aria-hidden="true">#</a> 4，permission模块</h3><p>在src根目录下，如下：</p><p><img src="'+L+'" alt="img"></p><p>在main.js中，去执行permisson.js文件，如下：</p><p><img src="'+A+'" alt="img"></p><p>如果把这个模块注释掉，菜单都没有了，如下：</p><p><img src="'+C+'" alt="img"></p><p>效果如下：</p><p><img src="'+V+`" alt="img"></p><p>permission模块中的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入路由器</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token comment">// 引入仓库</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token comment">// 引入elementui中的提示性组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token comment">// 引入nprogress  进度条</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span> <span class="token comment">// progress bar</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span> <span class="token comment">// progress bar style</span>

<span class="token comment">// getToken就是从cookie中获取token</span>
<span class="token comment">// 如果登录了，就有token，如果没有登录，就没有token</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span> <span class="token comment">// get token from cookie</span>
<span class="token comment">// 得到页面中的title</span>
<span class="token keyword">import</span> getPageTitle <span class="token keyword">from</span> <span class="token string">&#39;@/utils/get-page-title&#39;</span>

<span class="token comment">// 配置NProgress</span>
NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// NProgress Configuration</span>

<span class="token comment">// whiteList是白名单  不需要登录，就可以直接访问</span>
<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/auth-redirect&#39;</span><span class="token punctuation">]</span> <span class="token comment">// no redirect whitelist</span>

<span class="token comment">// 全局前置路由守卫</span>
<span class="token comment">// 核心代码都是在守卫中</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 全局后置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// finish progress bar 关闭进度条</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心就在前置路由守卫中，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局前置路由守卫</span>
<span class="token comment">// 核心代码都是在守卫中</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// start progress bar  开启进度条</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 给页面的title赋值</span>
  document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token function">getPageTitle</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

  <span class="token comment">// 从cookie中获取token 如果有token表示登录了</span>
  <span class="token keyword">const</span> hasToken <span class="token operator">=</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有token，说明已经登录了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 已经登录了，你又去登录，放行到后面首页面</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 关闭进度条</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 已经登录了，去其它页面</span>
      <span class="token comment">// store.getters.roles得到vuex中的角色</span>
      <span class="token comment">// 如果登录了，我们会调用一个接口，去拿用户信息，在用户信息中，有当前用户的角色</span>
      <span class="token comment">// 点击登录，先发一个登录请求，服务器响应一个token，前端把token存储到cookie</span>
      <span class="token comment">// 紧接着发第二个请求，是用来获取用户信息的，前端把用户信息存储到了vuex中，用户信息中有一个角色</span>
      <span class="token comment">// 也就是说，在vuex中是可以获取角色的  通过store.getters.roles</span>
      <span class="token comment">// store.getters.roles.length &gt; 0 表示vuex是有角色</span>
      <span class="token keyword">const</span> hasRoles <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasRoles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从vuex中获取角色，直接放行</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// else表示vuex中没有角色  当你又去刷新浏览器时，vuex中就没有角色，vuex中的数据也是存储在内存</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// get user info</span>
          <span class="token comment">// note: roles must be a object array! such as: [&#39;admin&#39;] or ,[&#39;developer&#39;,&#39;editor&#39;]</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> roles <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/getInfo&#39;</span><span class="token punctuation">)</span>

          <span class="token comment">// generate accessible routes map based on roles</span>
          <span class="token comment">// generateRoutes  generate 生成 routes roles</span>
          <span class="token comment">// accessRoutes 表示当前角色可以访问的路由规则们</span>
          <span class="token keyword">const</span> accessRoutes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> roles<span class="token punctuation">)</span>

          <span class="token comment">// dynamically add accessible routes</span>
          <span class="token comment">// 之前的规则都是直接写死</span>
          <span class="token comment">// addRoutes 调用此API，就可以添加一些规则</span>
          router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>accessRoutes<span class="token punctuation">)</span>

          <span class="token comment">// hack method to ensure that addRoutes is complete</span>
          <span class="token comment">// set the replace: true, so the navigation will not leave a history record、</span>
          <span class="token comment">// 上面已经把规则添加到路由器中，放行，此时，就可以看到有权限看到的页面了</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>to<span class="token punctuation">,</span> <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// remove token and go to login page to re-login</span>
          <span class="token comment">// 如果在生成规则时，出问题了</span>
          <span class="token comment">// store.dispatch(&#39;user/resetToken&#39;)  清除token</span>
          <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;user/resetToken&#39;</span><span class="token punctuation">)</span>
          Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error <span class="token operator">||</span> <span class="token string">&#39;Has Error&#39;</span><span class="token punctuation">)</span>
          <span class="token comment">// 重新回到登录页面</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">/* has no token*/</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// in the free login whitelist, go directly</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// other pages that do not have permission to access are redirected to the login page.</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>to<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析图如下：</p><p><img src="`+D+'" alt="img"></p><h3 id="_5-看网络请求" tabindex="-1"><a class="header-anchor" href="#_5-看网络请求" aria-hidden="true">#</a> 5，看网络请求</h3><h3 id="_6-看vuex" tabindex="-1"><a class="header-anchor" href="#_6-看vuex" aria-hidden="true">#</a> 6，看Vuex</h3><h3 id="_7-实践一下" tabindex="-1"><a class="header-anchor" href="#_7-实践一下" aria-hidden="true">#</a> 7，实践一下</h3><h3 id="_8-前端权限设计总结" tabindex="-1"><a class="header-anchor" href="#_8-前端权限设计总结" aria-hidden="true">#</a> 8，前端权限设计总结</h3><h3 id="_9-后端权限设计总结" tabindex="-1"><a class="header-anchor" href="#_9-后端权限设计总结" aria-hidden="true">#</a> 9，后端权限设计总结</h3><h3 id="_10-绘制商品列表页面-表格" tabindex="-1"><a class="header-anchor" href="#_10-绘制商品列表页面-表格" aria-hidden="true">#</a> 10，绘制商品列表页面（表格）</h3>',99),M=[T];function z(S,q){return s(),a("div",null,M)}const H=n(N,[["render",z],["__file","18-Vueguanlixitong.html.vue"]]);export{H as default};
