import{_ as n,o as s,c as a,a as e}from"./app-53a82ab4.js";const i="/wcblog/assets/1698369277797.e8f047c4-98df5c33.png",t="/wcblog/assets/1698369519199.53071f36-967d0de5.png",p="/wcblog/assets/1698369596512.f3b7a3e5-ec353662.png",l="/wcblog/assets/1698369737625.7c50f9c5-0d001698.png",c="/wcblog/assets/1698369986755.cd07c522-b1377376.png",o="/wcblog/assets/1698370070033.b72b3f88-7e2e8ae6.png",r="/wcblog/assets/1698385685284-8771f7b0.png",d="/wcblog/assets/1698387540699-4f8ed0d7.png",u="/wcblog/assets/1698388742187-44ad7f59.png",v="/wcblog/assets/1698388256347-02ba6a0a.png",b="/wcblog/assets/1698388526469-cf09d130.png",m="/wcblog/assets/1698388827044-3a72b03a.png",k="/wcblog/assets/1698372309523.3b09c5ef-d9fc7205.png",h="/wcblog/assets/1698372365163.1ddaac7a-1fa02e24.png",g="/wcblog/assets/1698398241118-041add2f.png",_="/wcblog/assets/1698399076210-3d37c3c5.png",f="/wcblog/assets/1698399205375-ce1382b0.png",w="/wcblog/assets/1698399337961-b19a3dc1.png",x="/wcblog/assets/1698399423903-c8ae6925.png",y={},q=e('<h2 id="一-项目介绍" tabindex="-1"><a class="header-anchor" href="#一-项目介绍" aria-hidden="true">#</a> 一，项目介绍</h2><h3 id="_1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_1-项目介绍" aria-hidden="true">#</a> 1，项目介绍</h3><p>开源GitHub项目地址：https://github.com/newbee-ltd</p><p>项目访问地址：http://47.99.134.126:5000/</p><h3 id="_2-项目分析" tabindex="-1"><a class="header-anchor" href="#_2-项目分析" aria-hidden="true">#</a> 2，项目分析</h3><p>五大组件与路由分析：</p><ul><li>首页面组件 Home.vue</li><li>分类组件 Classify.vue</li><li>购物车组件 Cart.vue</li><li>我的组件 Personal.vue</li><li>登录组件 Login.vue</li></ul><p>network面板分析登录接口：</p><p><img src="'+i+'" alt="1698369277797"></p><p><img src="'+t+'" alt="1698369519199"></p><p><img src="'+p+'" alt="1698369596512"></p><p><img src="'+l+'" alt="1698369737625"></p><p><img src="'+c+'" alt="1698369986755"></p><p>application面板分析：</p><p><img src="'+o+'" alt="1698370070033"></p><h3 id="_3-项目的骨架" tabindex="-1"><a class="header-anchor" href="#_3-项目的骨架" aria-hidden="true">#</a> 3，项目的骨架</h3><p>下面压缩了项目中使用到的依赖，我们基于这个骨架进行开发：</p><p><img src="'+r+`" alt="1698385685284"></p><p>需要解压，安装依赖（跑环境）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行项目（看package.json）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-搭建五大组件并配置路由" tabindex="-1"><a class="header-anchor" href="#二-搭建五大组件并配置路由" aria-hidden="true">#</a> 二，搭建五大组件并配置路由</h2><h3 id="_1-创建出五大组件" tabindex="-1"><a class="header-anchor" href="#_1-创建出五大组件" aria-hidden="true">#</a> 1，创建出五大组件</h3><p>组件分两类：</p><ul><li>页面级别的组件（路由级别的组件）</li><li>通用组件（小组件，多个页面中都可能会用到）</li></ul><p>上面分析的5大组件是路由级别的，一般情况下，都会放到views文件夹中，或者是pages文件夹中，如下：</p><p><img src="`+d+'" alt="1698387540699"></p><p>配置路由，如下：</p><p><img src="'+u+`" alt="1698388742187"></p><p>参考代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/Home.vue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/classify&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/Classify.vue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/cart&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/Cart.vue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/personal&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/Personal.vue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/Login.vue&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入router，挂载到根组件上，如下</p><p><img src="`+v+'" alt="1698388256347"></p><p>在App.vue中，需要指定出口，如下：</p><p><img src="'+b+'" alt="1698388526469"></p><p>浏览器测试之，如下：</p><p><img src="'+m+'" alt="1698388827044"></p><h3 id="_2-vant组件库的使用" tabindex="-1"><a class="header-anchor" href="#_2-vant组件库的使用" aria-hidden="true">#</a> 2，Vant组件库的使用</h3><p>vant组件库，提供了大量的组件，可以方便我们快速构建项目</p><p>vant的官网：https://vant-contrib.gitee.io/vant/#/zh-CN/</p><p>如果是vue2，参考文档：https://vant-contrib.gitee.io/vant/v2/#/zh-CN/</p><p>如果是vue3，参考文档：https://vant-contrib.gitee.io/vant/#/zh-CN</p><p>要使用vant中提供的组件，引入方式分三种：</p><ul><li>自动按需引入</li><li>手动按需引入</li><li>全部引入</li></ul><p>如何实现自动按需引入？（参照文档的步骤照做）</p><ul><li>地址：https://vant-contrib.gitee.io/vant/v2/#/zh-CN/quickstart</li></ul><p>操作步骤如下：</p><p><img src="'+k+'" alt="1698372309523"></p><p><img src="'+h+'" alt="1698372365163"></p><p>具体操作之，如下：</p><p><img src="'+g+'" alt="1698398241118"></p><p>重启项目，如下：</p><p><img src="'+_+'" alt="1698399076210"></p><p>在src下面创建一个utils文件夹，然后在文件夹里创建一个vant.js，如下：</p><p><img src="'+f+`" alt="1698399205375"></p><p>参考代码：utils/vant.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &quot;vue&quot;
import {
    Button,
    Icon,
    Form,
    Field,
    NavBar,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Checkbox,
    Stepper,
    SubmitBar,
    AddressList,
    AddressEdit,
    Area,
    Tab,
    Tabs,
    List,
    Cell,
    SwipeCell,
    Card,
    Dialog,
    Toast,
    ContactCard,
    ActionSheet,
    Loading,
    divider,
    Search,
    sidebar,
    SidebarItem,
    grid
} from &#39;vant&#39;

[
    Button,
    Icon,
    Form,
    Field,
    NavBar,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Checkbox,
    SubmitBar,
    AddressList,
    AddressEdit,
    Area,
    Stepper,
    Tab,
    Tabs,
    List,
    Cell,
    SwipeCell,
    Card,
    Dialog,
    Toast,
    ContactCard,
    ActionSheet,
    Loading,
    divider,
    Search,
    sidebar,
    SidebarItem,
    grid

].forEach(item =&gt; {
    Vue.use(item)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入vant.js，如下：</p><p><img src="`+w+'" alt="1698399337961"></p><p>测试之，如下：</p><p><img src="'+x+'" alt="1698399423903"></p><p>移动端适配：</p><ul><li>rem + 媒体查询</li><li>rem + 自己写的JS</li><li>rem + 淘宝的flexible</li><li>vw + vh</li></ul><h3 id="_3-处理全局样式" tabindex="-1"><a class="header-anchor" href="#_3-处理全局样式" aria-hidden="true">#</a> 3，处理全局样式</h3><h2 id="三-封装tabbar组件" tabindex="-1"><a class="header-anchor" href="#三-封装tabbar组件" aria-hidden="true">#</a> 三，封装Tabbar组件</h2><h3 id="_1-封装tabbar组件" tabindex="-1"><a class="header-anchor" href="#_1-封装tabbar组件" aria-hidden="true">#</a> 1，封装Tabbar组件</h3><h3 id="_2-控制tabbar的显示与隐藏" tabindex="-1"><a class="header-anchor" href="#_2-控制tabbar的显示与隐藏" aria-hidden="true">#</a> 2，控制Tabbar的显示与隐藏</h3><h3 id="_3-防止tabbar盖住内容" tabindex="-1"><a class="header-anchor" href="#_3-防止tabbar盖住内容" aria-hidden="true">#</a> 3，防止Tabbar盖住内容</h3><h2 id="四-登录界面搭建" tabindex="-1"><a class="header-anchor" href="#四-登录界面搭建" aria-hidden="true">#</a> 四，登录界面搭建</h2><h2 id="五-axios二次封装" tabindex="-1"><a class="header-anchor" href="#五-axios二次封装" aria-hidden="true">#</a> 五，axios二次封装</h2><h2 id="六-登陆实现" tabindex="-1"><a class="header-anchor" href="#六-登陆实现" aria-hidden="true">#</a> 六，登陆实现</h2>',72),C=[q];function S(A,G){return s(),a("div",null,C)}const B=n(y,[["render",S],["__file","13-Vue2xiangmu.html.vue"]]);export{B as default};
