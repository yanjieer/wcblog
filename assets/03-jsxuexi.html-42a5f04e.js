import{_ as n,o as a,c as s,a as t}from"./app-1f397c34.js";const l="/wcblog/assets/1693444729081.35c772a9-03f92142.png",p="/wcblog/assets/1693444905204.ed7dff65-1694392816240-59019a3a.png",i="/wcblog/assets/1693447461610.574b1394-7e1ad743.png",o="/wcblog/assets/1693447723841.8e9c2384-3478ae8e.png",e="/wcblog/assets/1693447594691.02bee078-1694393100102-c95ca64b.png",c="/wcblog/assets/1693449184655.2e5a8889-ab2ad94b.png",u="/wcblog/assets/1693450105316.a41c5765-9538a4b8.png",r="/wcblog/assets/1693465860158.ad7cd8f1-374f5711.png",d="/wcblog/assets/1693466066922.fcf10b27-c362002d.png",h="/wcblog/assets/1693466289634.a8cad5cc-44c7291e.png",k="/wcblog/assets/1693466469432.76cd989c-9797a683.png",g="/wcblog/assets/1693466561954.e7413cf6-519e6fe5.png",m={},b=t('<h1 id="_03-js基础" tabindex="-1"><a class="header-anchor" href="#_03-js基础" aria-hidden="true">#</a> 03-JS基础</h1><h2 id="一-计算机组成" tabindex="-1"><a class="header-anchor" href="#一-计算机组成" aria-hidden="true">#</a> 一，计算机组成</h2><h3 id="_1-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-基本概念" aria-hidden="true">#</a> 1，基本概念</h3><p><strong>计算机的组成：</strong></p><ul><li>计算机是由多个硬件组合而成，常见的硬件有：CPU、硬盘、内存、网卡、显示器、机箱、电源....</li><li>机械将零件组合在一起，他们之间是无法进行协作。</li></ul><p><strong>操作系统：</strong></p><ul><li>用于协调计算机的各个硬件，让硬件之间进行协同工作，以完成某个目标。</li><li>常见的操作系统 <ul><li>windows，优点：生态牛逼、工具多；缺点：略慢、收费。【个人】</li><li>linux，优点：资源占用少、免费（很多公司的服务器上安装Linux）；缺点：工具少、告别游戏。【企业的服务器】</li><li>mac，优点：生态还行、工具差不多都有、用户体验和交互； 缺点：不能玩游戏</li></ul></li></ul><p><strong>应用软件：</strong></p><ul><li>在安装上操作系统之后，我们会在自己电脑上安装一些常用的软件，例如：QQ、杀毒、微信...</li><li>问题来了：这些软件是由谁开发的？是由各大公司的程序员开发的。</li><li>前端开发主要开发浏览器上运行的应用程序，可以把软件理解成为一大堆的代码的集合。</li></ul><p><img src="'+l+'" alt="1693444729081"></p><p><strong>编程语言：</strong></p><ul><li>软件，是由程序员使用 编程语言 开发出来的一大堆代码的集合。全球的编程语言有2500+多种，常见的编程语言：JavaScript、Java、C#、Python、PHP、C...</li><li>学习编程语言就是学习它的语法，根据语法再去编写相应的软件中的功能。</li></ul><p><img src="'+p+'" alt="1693444905204"></p><p><strong>编程语言分类：</strong></p><ul><li>从翻译的角度来说，分编译型和解释型</li><li>从高低的角度来说，分低级语言和高级语言</li></ul><p><strong>低级语言和高级语言：</strong></p><ul><li>低级编程语言，写出来的代码直接可以被计算机识别。 <ul><li>机器语言：101 001 00001 00010 001000100010001，机器码，交给计算机去执行。</li></ul></li><li>汇编语言，MOV INC ... ，指令，交给计算机去执行。</li><li>高级编程语言，写出来的代码无法直接被计算机识别，但可以通过某中方式将其转换为计算机可以识别的语言。 <ul><li>JS、C、C++、Java、Python、Ruby...，这类编程语言在编写代码时几乎是写英语作文。</li><li>交由相关编译器或解释器翻译成机器码，然后再交给计算机去执行。</li></ul></li></ul><p><strong>编译器和解释器：</strong></p><ul><li>编程语言分编译型的和解释型器，编译型的语言是一次性编译好，解释型语言，边解释边执行。</li><li>编译器/解释器，就是一个 <code>翻译官</code> ，将代码翻译成计算机能够识别的命令。</li><li>wc使用JS开发一个软件，写10000行代码，需要使用JS解释器，翻译成计算机可以识别的命令。</li><li>xq使用Go开发一个软件，写20000行代码，需要使用GO编译器，翻译成计算机可以识别的命令。</li><li>解释器，实时翻译。拿到1000行代码之后，解释一句交给操作系统一句。</li><li>编译器，全文翻译。拿到2000行代码之后会将他编译成一个临时文件（计算机能够识别命令），再把文件交给操作系统去读取。</li><li>JavaScript、Python、PHP、Ruby... 一般称为解释型语言。</li><li>C、C++、Go、Java... 一般称为编译型语言。</li></ul><p><strong>学习编程的本质：</strong></p><ul><li>第一步：选择一门编程语言，在自己电脑上安装此编程语言的编译器或解释器。</li><li>第二步：学习语言的规则，语法规则+业务背景 开发我们需要的软件（代码的集合）</li><li>第三步：使用编译器或解释器去运行自己写的代码。</li></ul><ol><li><p>简述硬件 &amp; 操作系统 &amp; 软件（应用系统）之间的关系。</p><ul><li>计算机是由多个硬件组成，例如：CPU、硬盘、内存、网卡、主板等。</li><li>操作系统则是安装在计算机上用于协调各硬件进行配合工作的，他将用户的一些行为转化为计算机能够识别的命令，并协调各个硬件配合完成相关命令。</li><li>软件，是由程序员开发并安装在操作系统的程序（本质上是一大堆的代码），例如：微信、QQ、金山毒霸等。</li></ul></li><li><p>列举常见的操作系统都有哪些。</p><p>常用的操作系统有三类：</p><ul><li>win：win7、win10、xp 等</li><li>linux：centos、ubuntu、redhat 等。</li><li>mac：Catalina、Mojave、Sierra 等。</li></ul></li><li><p>简述编译器和解释器的区别和作用。</p><ul><li>编译器和解释器的作用是将各编程语言的代码进行翻译，从而使得计算机能够识别并执行。</li><li>编译器，全文翻译，将代码编译成 <code>临时文件</code> ，再执行临时文件。</li><li>解释器，实时翻译，对代码实行边解释边执行。</li></ul></li></ol><h2 id="二-javascript介绍" tabindex="-1"><a class="header-anchor" href="#二-javascript介绍" aria-hidden="true">#</a> 二，JavaScript介绍</h2><h3 id="_1-js介绍" tabindex="-1"><a class="header-anchor" href="#_1-js介绍" aria-hidden="true">#</a> 1，JS介绍</h3><p><strong>JS介绍：</strong></p><p>JS是直接可以运行在浏览器上的，因为浏览器内置了JS的解释，是一种高级语言，是解释性语言。也就是我们所谓的脚本语言，所谓的脚本语言，就是不需要编译，由解释器去执行。当然现在JS也可以运行在NODE端，后面说。</p><p><strong>JS作用：</strong></p><ul><li>Web开发</li><li>服务端开发（Node.js）</li><li>桌面程序（Electron）</li><li>App</li><li>控制硬件</li><li>游戏开发</li><li>...</li></ul><p><img src="'+i+'" alt="1693447461610"></p><p><strong>JS组成：</strong></p><ul><li>ECMAScript <ul><li>规定了js基础语法核心知识。</li></ul></li><li>DOM <ul><li>DOM 操作文档，比如对页面元素进行移动、大小、添加删除等操作</li></ul></li><li>BOM <ul><li>BOM 操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等</li></ul></li></ul><p><img src="'+o+'" alt="1693447723841"></p><p><strong>ECMAScript版本：</strong></p><p><img src="'+e+'" alt="1693447594691"></p><h3 id="_2-js的书写方式" tabindex="-1"><a class="header-anchor" href="#_2-js的书写方式" aria-hidden="true">#</a> 2，JS的书写方式</h3><p><strong>行内写法</strong>：目前这种写法不推荐，了解</p><ul><li>总结行内写法的特点： <ul><li>可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），如：onclick</li><li>可读性差， 在html中编写JS大量代码时，不方便阅读；</li><li>特殊情况下使用</li></ul></li></ul><p><strong>内部写法</strong>：把JS代码写在script标签中</p><ul><li>总结内部写法的特点： <ul><li>可以把多行JS代码写在script标签中</li><li>学习时，为了方便，直接把JS代码写在scirpt标签</li><li>推荐将JavaScript代码和编写位置放在body子元素的最后一行；</li></ul></li></ul><p><strong>外部写法</strong>：需要单独创建一个JS文件，通过script标签引入这个文件</p><ul><li>总结外部写法的特点： <ul><li>需要通过script元素的src属性来引入JavaScript文件</li><li>在写项目时，通常都会使用外部写法，把JS代码放在一个单独的文件中，在页面中引入。</li><li>使用外部写法，script标签中就不能写其它代码了，写了也白了</li><li>script标签不能写成单标签</li><li>推荐将JavaScript代码和编写位置放在body子元素的最后一行</li></ul></li></ul><h3 id="_3-js的输入与输出" tabindex="-1"><a class="header-anchor" href="#_3-js的输入与输出" aria-hidden="true">#</a> 3，JS的输入与输出</h3><ul><li>为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：</li></ul><p><img src="'+c+'" alt="1693449184655"></p><p>注意：alert() 主要用来显示消息给用户，console.log() 用来给程序员自己看运行时的消息。</p><p><strong>做几个练习：</strong></p><ul><li>在控制台中输出你自己的姓名</li><li>在控制台中输出 春眠不觉晓， 出处闻啼鸟， 夜来风雨声， 花落知多少。</li></ul><h2 id="三-初识数据类型" tabindex="-1"><a class="header-anchor" href="#三-初识数据类型" aria-hidden="true">#</a> 三，初识数据类型</h2><p><strong>软件运行流程：</strong></p><ol><li>打开某个程序时，先从硬盘中把程序的代码加载到内存中</li><li>CPU执行内存中的代码</li></ol><p><img src="'+u+`" alt="1693450105316"></p><p>前面说过，使用编译语言是去开发软件的，软件上面的很多的数据，这些数据都是放在内存的。内存空间是有限，绝大部分的编程语言为了合理地使用内存空间，都会把使用到的数据进行分类，分成不同的类型，目的就是为了更加合理的使用内存空间。现在我大致了解一下JS中的数据类型。</p><h3 id="_1-数字类型" tabindex="-1"><a class="header-anchor" href="#_1-数字类型" aria-hidden="true">#</a> 1，数字类型</h3><p>是Number，包含整数和小数，例如：年龄、存款、尺寸、手机号等。数据类型是支持 加/减/乘/除/取余/指数 等操作。</p><h3 id="_2-字符串" tabindex="-1"><a class="header-anchor" href="#_2-字符串" aria-hidden="true">#</a> 2，字符串</h3><p>字符串，其实就是我们生活中的文本信息。例如：姓名、地址、自我介绍等。 字符串有一个特点，他必须由引号引起来。</p><h3 id="_3-布尔类型" tabindex="-1"><a class="header-anchor" href="#_3-布尔类型" aria-hidden="true">#</a> 3，布尔类型</h3><p>布尔类型就两个值：true和false。 布尔类型对应的值只有两个，一个是ture，一个是false。</p><h3 id="_4-数据类型转化" tabindex="-1"><a class="header-anchor" href="#_4-数据类型转化" aria-hidden="true">#</a> 4，数据类型转化</h3><p>把一种数据类型转化成另一个数据类型，转为数字</p><p>转换成字符串：</p><p>转换成布尔值：</p><p><strong>练习题：</strong></p><ul><li>计算数字50乘以10再除以5的商并输出</li><li>判断数字8是否大于10的结果并输出</li><li>计算数字30除以2得到的余数并输出</li><li>判断 字符串”admin”和”root”是否相等的结果并输出</li><li>判断 字符串666和数字666是否相等的结果并输出</li><li>看代码写结果（禁止运行代码）</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 300 </span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;88&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 211</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;111222&#39;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// &#39;333&#39;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">111</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-变量" tabindex="-1"><a class="header-anchor" href="#四-变量" aria-hidden="true">#</a> 四，变量</h2><h3 id="_1-什么是变量" tabindex="-1"><a class="header-anchor" href="#_1-什么是变量" aria-hidden="true">#</a> 1，什么是变量</h3><p>学习一门编程语言，编程语言主要是用于开发软件的，在一个软件中有很多数据都是动态变化的，如：</p><ol><li>比如购物车商品的数量、价格的计算等等；</li><li>比如一首歌曲播放的时间、进度条、歌词的展示等等；</li><li>比如微信聊天中消息条数、时间、语音的长度、头像、名称等等；</li><li>比如游戏中技能的冷却时间、血量、蓝量、buff时间、金币的数量等等；</li></ol><h3 id="_2-变量的命令规范" tabindex="-1"><a class="header-anchor" href="#_2-变量的命令规范" aria-hidden="true">#</a> 2，变量的命令规范</h3><ul><li>规范</li></ul><ol><li>第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）</li><li>其他字符可以是字母、下划线、美元符号或数字</li><li>变量名不能是JS中的关键字 <ul><li>https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/lexical_grammar</li></ul></li><li>变量严格区分大小写</li></ol><ul><li><p>变量建议：</p><p>1.多个单词使用驼峰标识或下划名命令</p><p>2.赋值 = 两边都加上一个空格；</p><p>3.一条语句结束后加上分号; 也有很多人的习惯是不加；</p><p>4.变量应该做到见名知意；</p></li></ul><p><strong>练习题：</strong></p><ul><li>练习一：定义一些变量，保存自己的个人信息：比如姓名、年龄、身高、体重、爱好等等</li><li>练习二：定义一个变量name，赋值成wangcai。定义一个变量admin，将name赋值给admin</li><li>练习三：定义变量，保存两个数字，并且对两个变量的数字进行交换</li></ul><h3 id="_3-变量与内存指向关系" tabindex="-1"><a class="header-anchor" href="#_3-变量与内存指向关系" aria-hidden="true">#</a> 3，变量与内存指向关系</h3><p><strong>情况1：</strong></p><p><img src="`+r+'" alt="1693465860158"></p><p><strong>情况2：</strong></p><p><img src="'+d+'" alt="1693466066922"></p><p>在计算机的内存中创建一块区域保存字符串”malu&quot;，name变量名则指向这块区域。然后又再内存中创建了一块域保存字符串”wangcai&quot;，name变量名则指向”wangcai“所对应的空间，不再指向&quot;malu&quot;所对应的空间。&quot;malu&quot;所对应的内存空间，无人指向的数据会被标记为垃圾，由解释器自动化回收。</p><p><strong>情况3：</strong></p><p><img src="'+h+'" alt="1693466289634"></p><p>在计算机的内存中创建一块区域保存字符串”malu&quot;，name变量名则指向这块区域。new_name变量名指向name变量，因为被指向的是变量名，所以自动会转指向到name变量代表的内存区域。</p><p><strong>情况四：</strong></p><p><img src="'+k+'" alt="1693466469432"></p><p><strong>情况五：</strong></p><p><img src="'+g+'" alt="1693466561954"></p><p><strong>练习：</strong></p><ol><li>提示输入姓名，然后给姓名后面拼接一个&quot;666&quot;,最终打印结果。</li><li>提示输入 姓名/位置/行为，然后做拼接并打印：xx 在 xx 做 xx 。</li><li>提示输入两个数字，计算两个数的和。</li></ol><h2 id="五-深入数据类型" tabindex="-1"><a class="header-anchor" href="#五-深入数据类型" aria-hidden="true">#</a> 五，深入数据类型</h2><h2 id="六-条件语句" tabindex="-1"><a class="header-anchor" href="#六-条件语句" aria-hidden="true">#</a> 六，条件语句</h2><h2 id="七-while循环语句" tabindex="-1"><a class="header-anchor" href="#七-while循环语句" aria-hidden="true">#</a> 七，while循环语句</h2><h2 id="八-do-while循环语句" tabindex="-1"><a class="header-anchor" href="#八-do-while循环语句" aria-hidden="true">#</a> 八，do...while循环语句</h2><h2 id="九-for循环" tabindex="-1"><a class="header-anchor" href="#九-for循环" aria-hidden="true">#</a> 九，for循环</h2><h2 id="十-switch语句" tabindex="-1"><a class="header-anchor" href="#十-switch语句" aria-hidden="true">#</a> 十，switch语句</h2><h2 id="十一-运算符" tabindex="-1"><a class="header-anchor" href="#十一-运算符" aria-hidden="true">#</a> 十一，运算符</h2><h2 id="十二-数组" tabindex="-1"><a class="header-anchor" href="#十二-数组" aria-hidden="true">#</a> 十二，数组</h2><h2 id="十三-字符串" tabindex="-1"><a class="header-anchor" href="#十三-字符串" aria-hidden="true">#</a> 十三，字符串</h2><h2 id="十四-set集合" tabindex="-1"><a class="header-anchor" href="#十四-set集合" aria-hidden="true">#</a> 十四，Set集合</h2><h2 id="十五-对象" tabindex="-1"><a class="header-anchor" href="#十五-对象" aria-hidden="true">#</a> 十五，对象</h2><h2 id="十六-math和date" tabindex="-1"><a class="header-anchor" href="#十六-math和date" aria-hidden="true">#</a> 十六，Math和Date</h2><h2 id="十七-函数" tabindex="-1"><a class="header-anchor" href="#十七-函数" aria-hidden="true">#</a> 十七，函数</h2>',103),f=[b];function _(v,x){return a(),s("div",null,f)}const J=n(m,[["render",_],["__file","03-jsxuexi.html.vue"]]);export{J as default};
