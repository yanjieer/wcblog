import{_ as n,o as s,c as a,a as t}from"./app-db4442ff.js";const e="/wcblog/assets/1700179865951-932d7b7d.png",p="/wcblog/assets/1688606931761.0c2e783a-3879a388.png",o="/wcblog/assets/1688606973779.4c12edae-013ac6b0.png",i="/wcblog/assets/1700144507930-d989e1d9.png",r={},l=t('<h1 id="微信小程序" tabindex="-1"><a class="header-anchor" href="#微信小程序" aria-hidden="true">#</a> 微信小程序</h1><h2 id="一-前置知识" tabindex="-1"><a class="header-anchor" href="#一-前置知识" aria-hidden="true">#</a> 一，前置知识</h2><h3 id="_1-产品分类" tabindex="-1"><a class="header-anchor" href="#_1-产品分类" aria-hidden="true">#</a> 1，产品分类</h3><ul><li><p>web开发：</p><ul><li>特点：运行在浏览器上的应用</li><li>常见：官网，管理系统，webapp，H5</li></ul></li><li><p>App开发：</p><ul><li>原生App，指的是Android 和 iOS 12年~16年</li><li>跨平台App，指的是写一套，可以在多端运行，Uniapp，RN</li><li>Flutter，使用dart语言</li><li>混合App（Hybrid），指：原生App + Web开发 在原生App中嵌套网页</li><li>小程序</li></ul></li></ul><h3 id="_2-前端就业方向" tabindex="-1"><a class="header-anchor" href="#_2-前端就业方向" aria-hidden="true">#</a> 2，前端就业方向</h3><ul><li>React开发（核心）</li><li>Vue3 / Vue2（核心）</li><li>Uniapp (开发小程序，使用vue语法+微信小程序语法)（核心）</li><li>Node</li><li>Angular</li><li>小程序（微信小程序&lt;微信用户基数大&gt;，支付宝小程序，360小程序....）</li><li>RN</li><li>前后端不分离的项目</li><li>低代码开发</li><li>flutter</li><li>web3</li><li>....</li></ul><h2 id="二-搭建小程序开发环境" tabindex="-1"><a class="header-anchor" href="#二-搭建小程序开发环境" aria-hidden="true">#</a> 二，搭建小程序开发环境</h2><h3 id="_1-小程序介绍" tabindex="-1"><a class="header-anchor" href="#_1-小程序介绍" aria-hidden="true">#</a> 1，小程序介绍</h3><p>小程序：运行在App中的小应用。</p><p>特点：</p><ul><li>无须安装，只能运行在指定的App中，小而美。</li><li>工具类，营销类（转发，拼团...）</li></ul><p>学习小程序：</p><ol><li>网站：https://mp.weixin.qq.com/，注册一个小程序账号，登录上去，得到一个管理系统。在这个管理系统中就可以做很多事情。</li><li>小程序文档（https://developers.weixin.qq.com/miniprogram/dev/framework/），只需要关注一级目录中的开发模块。其它模块都是了解。</li><li>内容：项目环境搭建，组件，路由，状态管理，功能API....</li></ol><h3 id="_2-小程序后台管理" tabindex="-1"><a class="header-anchor" href="#_2-小程序后台管理" aria-hidden="true">#</a> 2，小程序后台管理</h3><ul><li><p>成员管理（开发）：添加开发者，添加体验者</p></li><li><p>版本管理（上线）：使用开发者工具，直接提交代码，提交上去就是开发版本，提交审核就有审核版本，审核通过就有线上版本。</p></li><li><p>开发管理（开发）：开发相关配置，有appid。</p></li><li><p>开发工具，写代码，就需要利用开发工具来写代码。</p></li></ul><h3 id="_3-微信开发者工具" tabindex="-1"><a class="header-anchor" href="#_3-微信开发者工具" aria-hidden="true">#</a> 3，微信开发者工具</h3><p>下载：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html</p><p>下载稳定版本的64位。下载微信开发者工具，安装之。安装是傻瓜式安装。打开微信开发者工具，创建原生小程序项目。创建时，需要有appid。安装完后，桌面上就多了如下的图标：</p><p><img src="'+e+'" alt="1700179865951"></p><p>双击创建项目，流程如下：</p><p><img src="'+p+'" alt="1688606931761"></p><p>使用微信扫一下，如下 ：</p><p><img src="'+o+`" alt="1688606973779"></p><h3 id="_4-小程序的目录结构" tabindex="-1"><a class="header-anchor" href="#_4-小程序的目录结构" aria-hidden="true">#</a> 4，小程序的目录结构</h3><h2 id="三-小程序配置" tabindex="-1"><a class="header-anchor" href="#三-小程序配置" aria-hidden="true">#</a> 三，小程序配置</h2><h3 id="_1-小程序配置" tabindex="-1"><a class="header-anchor" href="#_1-小程序配置" aria-hidden="true">#</a> 1，小程序配置</h3><ul><li>配置分全局配置 和 页面独有的配置</li><li>全局配置，不需要特意去记，只需要学会查文档 <ul><li>地址：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE</li></ul></li><li>页面配置，如果全局配置和页面配置起冲突了，页面配置的优先级高。 <ul><li>地址：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE</li></ul></li></ul><h3 id="_2-在app-json中配置pages" tabindex="-1"><a class="header-anchor" href="#_2-在app-json中配置pages" aria-hidden="true">#</a> 2，在app.json中配置pages</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/category/category&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/cart/cart&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/mine/mine&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-在app-json中配置window" tabindex="-1"><a class="header-anchor" href="#_3-在app-json中配置window" aria-hidden="true">#</a> 3，在app.json中配置window</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#f00&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;旺财&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-在app-json中配置tabbar" tabindex="-1"><a class="header-anchor" href="#_4-在app-json中配置tabbar" aria-hidden="true">#</a> 4，在app.json中配置tabbar</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token string-property property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#333&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;borderStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/home.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/home-selected.png&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/category/category&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/category.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/category-selected.png&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/cart/cart&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;购物车&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/cart.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/cart-selected.png&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/mine/mine&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/mine.png&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/mine-selected.png&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="1700144507930"></p><h2 id="四-小程序内置组件" tabindex="-1"><a class="header-anchor" href="#四-小程序内置组件" aria-hidden="true">#</a> 四，小程序内置组件</h2>',35),c=[l];function u(d,k){return s(),a("div",null,c)}const h=n(r,[["render",u],["__file","16-weixinxiaochengxu.html.vue"]]);export{h as default};
