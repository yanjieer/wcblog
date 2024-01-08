import{_ as s,o as n,c as p,a as e}from"./app-827e15de.js";const t="/wcblog/assets/1704333186910.aab279c7-ecc2947b.png",o="/wcblog/assets/1704333164718.24eb3c35-896ff89c.png",c="/wcblog/assets/1702349076193.0e32f25a-a2d9b29d.png",l="/wcblog/assets/1702349174737.6d30b7bc-787b4565.png",i="/wcblog/assets/1702349214558.825829fc-e98c4dbf.png",r="/wcblog/assets/1702349332637.1dff82ed-4d6cd4ba.png",d="/wcblog/assets/1702349445232.68550a9a-4fa35679.png",g="/wcblog/assets/1704627981434-e17549d4.png",m="/wcblog/assets/1704628257095-3e016827.png",u="/wcblog/assets/1704628468247-f7928cf7.png",v="/wcblog/assets/1704628598397-b4e760f5.png",_="/wcblog/assets/1704628990072-17064739.png",b="/wcblog/assets/1704629162602-bc348505.png",h="/wcblog/assets/1704629494064-c10044c9.png",k="/wcblog/assets/1704629643735-9bb0490e.png",a="/wcblog/assets/1704629823518-dff270fa.png",f="/wcblog/assets/1702350131055.d61461e8-1704630080738-f0906375.png",w="/wcblog/assets/1704630177260-014d7e31.png",M="/wcblog/assets/1704630228408-fab339a2.png",x="/wcblog/assets/1704630507921-39019498.png",I="/wcblog/assets/1704630903605-fa588728.png",j="/wcblog/assets/1704333164718.24eb3c35-896ff89c.png",y="/wcblog/assets/1704631119990-90beaeda.png",A="/wcblog/assets/1704631217221-24f75cee.png",D="/wcblog/assets/1704631583334-4e8a80f4.png",E="/wcblog/assets/1704333385223.4ab7a8fa-30a268cb.png",O="/wcblog/assets/1704333556858.11d5221f-fa5d821f.png",q="/wcblog/assets/1704333615800.69db9480-aa96be7c.png",H="/wcblog/assets/1704333686904.5a8366bd-92c398c2.png",P="/wcblog/assets/1704632100416-b22c6259.png",V="/wcblog/assets/1704634516941-a23ae8af.png",B="/wcblog/assets/1704635133145-37870852.png",J="/wcblog/assets/1704635800015-2ea16fc7.png",R="/wcblog/assets/1704635372593-cffba77b.png",S="/wcblog/assets/1704336103188.c6e24fb2-7aff18df.png",F="/wcblog/assets/1704336245531.d1b52c34-3de8a0d9.png",N="/wcblog/assets/1704636271164-87f8da4b.png",W="/wcblog/assets/1704336283998.2b3109af-1b56bea5.png",K="/wcblog/assets/1704336424739.538357b6-ffbf3706.png",T="/wcblog/assets/1702350833448.8f93db02-c51530e2.png",z="/wcblog/assets/1702349788434.623fd646-5566e85d.png",C="/wcblog/assets/1702349846600.fbac36fe-c63e84dc.png",G="/wcblog/assets/1704641802151-96e3a523.png",L="/wcblog/assets/1704641863404-42368ae1.png",Q="/wcblog/assets/1704684470004-3abc4fc8.png",U="/wcblog/assets/1704684766303-0b756a89.png",X="/wcblog/assets/1704684841414-e1d1dcbd.png",Y="/wcblog/assets/1704684907605-0b865104.png",Z="/wcblog/assets/1704684994215-396ae360.png",$={},aa=e('<h1 id="maven基础" tabindex="-1"><a class="header-anchor" href="#maven基础" aria-hidden="true">#</a> Maven基础</h1><h2 id="一-manen介绍" tabindex="-1"><a class="header-anchor" href="#一-manen介绍" aria-hidden="true">#</a> 一，Manen介绍</h2><h3 id="_1-什么是maven" tabindex="-1"><a class="header-anchor" href="#_1-什么是maven" aria-hidden="true">#</a> 1，什么是Maven</h3><p>Apach Maven是一个项目管理和构建工具，它基于项目对象模型（POM）的概念，通过一小段描述信息来管理项目的构建、报告和文档。官网：http://maven.apache.org/</p><p>Maven是专门用于管理和构建Java项目的工具，它的主要功能有：</p><ul><li>提供了一套标准化的项目结构，所有IDEA使用Maven构建项目结构完全一样，所有IDEA创建的Maven项目可以通用</li><li>提供了一套依赖管理机制</li><li>提供了一套标准化的构建流程（编译，测试，打包，发布...）</li></ul><p>标准化的项目结构：</p><p><img src="'+t+'" alt="1704333186910"></p><p><img src="'+o+'" alt="1704333175898"></p><p>标准化的构建流程（Maven提供了一套简单的命令来完成项目构建）：</p><p><img src="'+c+'" alt="1702349076193"></p><p>依赖管理（依赖管理其实就是管理项目所依赖的第三方资源，如：jar包、插件...）。传统依赖管理：</p><p><img src="'+l+'" alt="1702349174737"></p><p>Maven依赖管理是使用标准的坐标配置来管理各种依赖，只需要简单的配置就可以完成依赖管理：</p><p><img src="'+i+'" alt="1702349214558"></p><h3 id="_2-maven模型" tabindex="-1"><a class="header-anchor" href="#_2-maven模型" aria-hidden="true">#</a> 2，Maven模型</h3><p>Maven模型：</p><p><img src="'+r+'" alt="1702349332637"></p><p>说明：</p><ul><li>项目对象模型(Project Object Model）</li><li>依赖管理模型(Dependency)</li><li>插件(Plugin)</li></ul><h3 id="_3-仓库" tabindex="-1"><a class="header-anchor" href="#_3-仓库" aria-hidden="true">#</a> 3，仓库</h3><p><img src="'+d+'" alt="1702349445232"></p><p>仓库分类：</p><ul><li>本地仓库：自己计算机上的一个目录</li><li>中央仓库：由Maven团队的全球唯一的仓库，地址：https://repo1.maven.org/maven2/</li><li>远程仓库(私服)：一般由公司团队搭建的私有仓库</li></ul><p>当项目中使用坐标引入对应依赖jar包后，首先会查本地仓库中是否有对应的jar包：</p><ul><li>如果有，则在项目中直接引用</li><li>如果没有，则去中央仓库中下载对应的jar包到本地仓库</li></ul><p>还可以搭建远程仓库，将来的jar包的查找顺序则变为：</p><ul><li>本地仓库 =&gt; 远程仓库 =&gt; 中央仓库</li></ul><h2 id="二-maven安装和配置" tabindex="-1"><a class="header-anchor" href="#二-maven安装和配置" aria-hidden="true">#</a> 二，Maven安装和配置</h2><h3 id="_1-maven的安装和配置" tabindex="-1"><a class="header-anchor" href="#_1-maven的安装和配置" aria-hidden="true">#</a> 1，Maven的安装和配置</h3><p>配置步骤如下：</p><ul><li><p>解压acache-maven-3.6.1.rar 即安装完成：</p><p><img src="'+g+'" alt="1704627981434"></p></li><li><p>配置环境变量MAVEN_HOME为安装路径的bin目录，没有就点击新建：</p><p><img src="'+m+'" alt="1704628257095"></p></li><li><p>JAVA_HOME也配置一下，没有就点击新建：</p><p><img src="'+u+'" alt="1704628468247"></p><p><img src="'+v+'" alt="1704628598397"></p></li><li><p>配置本地仓库：修改conf/settings.xml中的localRepository为一个指定目录，localRepository本地仓库目录：</p><p><img src="'+_+'" alt="1704628990072"></p><p>上面的目录必须要有，如果没有就需要自己在D盘下建立文件夹loaclRepository，如下：</p><p><img src="'+b+'" alt="1704629162602"></p></li><li><p>配置阿里云私服：修改conf/settings.xml中的mirrors标签，为其添加如下子标签：</p><p><img src="'+h+`" alt="1704629494064"></p><p>配置阿里云私服：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>          
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="三-idea配置maven" tabindex="-1"><a class="header-anchor" href="#三-idea配置maven" aria-hidden="true">#</a> 三，IDEA配置Maven</h2><h3 id="_1-idea配置maven环境" tabindex="-1"><a class="header-anchor" href="#_1-idea配置maven环境" aria-hidden="true">#</a> 1，IDEA配置Maven环境</h3><p>第一步：选择 IDEA中 File =&gt; Settings</p><p><img src="`+k+'" alt="1704629643735"></p><p>第二步：搜索 maven，设置 IDEA 使用本地安装的 Maven，并修改配置文件路径</p><p><img src="'+a+'" alt="1704629823518"></p><h3 id="_2-maven坐标详解" tabindex="-1"><a class="header-anchor" href="#_2-maven坐标详解" aria-hidden="true">#</a> 2，Maven坐标详解</h3><p>什么是坐标？</p><ul><li>Maven中坐标是资源的唯一标识</li><li>使用坐标来定义项目或引入项目中需要的依赖</li></ul><p>Maven坐标主要组成</p><ul><li><p>groupld：定义当前Maven项隶属组织名称（通常是域名反写，如：com.wangcai）</p></li><li><p>artifactld：定义当前Maven项目名称（通常是模块名称，例：order-service、goods-service）</p></li><li><p>version：定义当前项目版本号</p><p><img src="'+f+'" alt="1702350131055"></p></li></ul><h3 id="_3-idea创建基于maven的项目" tabindex="-1"><a class="header-anchor" href="#_3-idea创建基于maven的项目" aria-hidden="true">#</a> 3，IDEA创建基于Maven的项目</h3><p>第一步：先创建一个空的项目，并配置JDK</p><p><img src="'+w+'" alt="1704630177260"></p><p><img src="'+M+'" alt="1704630228408"></p><p>第二步：创建项目模块，选择Maven，点击next</p><p><img src="'+x+'" alt="1704630507921"></p><p>填写模块名称，坐标信息，点击finish，创建完成：</p><p><img src="'+I+'" alt="1704630903605"></p><p>创建完毕后，对应的目录结构如下：</p><p><img src="'+j+'" alt="1704333164718"></p><p>第三步：编写HelloWord并运行，如下：</p><p><img src="'+y+'" alt="1704631119990"></p><h3 id="_4-idea导入别人的maven项目" tabindex="-1"><a class="header-anchor" href="#_4-idea导入别人的maven项目" aria-hidden="true">#</a> 4，IDEA导入别人的Maven项目</h3><p>第一步：选择右侧Maven面板，点击 + 号</p><p><img src="'+A+'" alt="1704631217221"></p><p>第二步：选中对应的pom.xml文件，双击即可</p><p><img src="'+D+'" alt="1704631583334"></p><p>第三步：如果没有Maven面板，选择View=&gt;Appearance=&gt;Tool Window Bars</p><p><img src="'+E+'" alt="1704333385223"></p><h3 id="_5-maven配置maven插件" tabindex="-1"><a class="header-anchor" href="#_5-maven配置maven插件" aria-hidden="true">#</a> 5，Maven配置Maven插件</h3><p>第一步：选择IDEA中 File --&gt; Settings</p><p><img src="'+O+'" alt="1704333556858"></p><p>第二步：选择Plugins</p><p><img src="'+q+'" alt="1704333615800"></p><p>第三步：搜索Maven，选择第一个Maven Helper，点击Install安装，弹出面板中点击Accept</p><p><img src="'+H+'" alt="1704333686904"></p><p>第四步：重启IDEA</p><h2 id="四-依赖管理" tabindex="-1"><a class="header-anchor" href="#四-依赖管理" aria-hidden="true">#</a> 四，依赖管理</h2><h3 id="_1-使用坐标导入jar包" tabindex="-1"><a class="header-anchor" href="#_1-使用坐标导入jar包" aria-hidden="true">#</a> 1，使用坐标导入jar包</h3><p>依赖坐标网址：https://mvnrepository.com/</p><p>使用步骤：</p><p>第一步：搜索 maven，设置 IDEA 使用本地安装的 Maven，并修改配置文件路径</p><p><img src="'+a+'" alt="1704629823518"></p><p>第二步：在pom.xml中编写dependencies标签</p><p><img src="'+P+'" alt="1704632100416"></p><p>第三步：在dependencies标签中使用dependency引入坐标，定义坐标的 groupId，artifactId，version。点击刷新按钮，使坐标生效</p><p><img src="'+V+`" alt="1704634516941"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mvnrepository<span class="token punctuation">.</span>com<span class="token operator">/</span>artifact<span class="token operator">/</span>mysql<span class="token operator">/</span>mysql<span class="token operator">-</span>connector<span class="token operator">-</span>java <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>mysql<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>mysql<span class="token operator">-</span>connector<span class="token operator">-</span>java<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">5.1</span><span class="token number">.23</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再演示一下，下载druid数据库连接池，如下:</p><p><img src="`+B+`" alt="1704635133145"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mvnrepository<span class="token punctuation">.</span>com<span class="token operator">/</span>artifact<span class="token operator">/</span>com<span class="token punctuation">.</span>alibaba<span class="token operator">/</span>druid <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>alibaba<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>druid<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">1.2</span><span class="token number">.19</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看本地仓库，如下：</p><p><img src="`+J+'" alt="1704635800015"></p><p>从Maven面板中查看：</p><p><img src="'+R+'" alt="1704635372593"></p><h3 id="_2-快捷方式" tabindex="-1"><a class="header-anchor" href="#_2-快捷方式" aria-hidden="true">#</a> 2，快捷方式</h3><p>第一步：在 pom.xml 中 按 alt + insert，选择 Dependency</p><p><img src="'+S+'" alt="1704336103188"></p><p>第二步：在弹出的面板中搜索对应坐标，然后双击选中对应坐标</p><p><img src="'+F+'" alt="1704336245531"></p><p><img src="'+N+'" alt="1704636271164"></p><p>第三步：点击刷新按钮，使坐标生效</p><p><img src="'+W+'" alt="1704336283998"></p><h3 id="_3-依赖范围" tabindex="-1"><a class="header-anchor" href="#_3-依赖范围" aria-hidden="true">#</a> 3，依赖范围</h3><p>通过设置坐标的依赖范围（scope），可以设置对应jar包的作用范围：编译环境、测试环境、运行环境。</p><p><img src="'+K+'" alt="1704336424739"></p><p>依赖范围解释（scope默认值：compile）：</p><p><img src="'+T+'" alt="1702350833448"></p><h2 id="五-maven构建项目" tabindex="-1"><a class="header-anchor" href="#五-maven构建项目" aria-hidden="true">#</a> 五，Maven构建项目</h2><h3 id="_1-maven构建maven项目" tabindex="-1"><a class="header-anchor" href="#_1-maven构建maven项目" aria-hidden="true">#</a> 1，Maven构建Maven项目</h3><p>常用命令：</p><ul><li>compile：编译</li><li>clean：清理</li><li>test：测试</li><li>package：打包</li><li>install：安装</li></ul><p>生命周期讲解：Maven 构建项目生命周期描述的是一次构建过程经历经历了多少个事件。</p><p>Maven 对项目构建的生命周期划分为3套：</p><ul><li>clean：清理工作</li><li>default：核心工作，例如：编译，测试，打包，安装等</li><li>site：产生报告，发布站点deng</li></ul><p><img src="'+z+'" alt="1702349788434"></p><p>default构建生命周期：</p><p><img src="'+C+'" alt="1702349846600"></p><p>演示编译命令：</p><p><img src="'+G+'" alt="1704641802151"></p><p>演示清理命令：</p><p><img src="'+L+'" alt="1704641863404"></p><p>演示测试命令：</p><p><img src="'+Q+'" alt="1704684470004"></p><p>演示打包命令：</p><p><img src="'+U+'" alt="1704684766303"></p><p>演示安装命令，所谓的安装就是把写的项目安装到本地仓库：</p><p><img src="'+X+'" alt="1704684841414"></p><p><img src="'+Y+'" alt="1704684907605"></p><p><img src="'+Z+'" alt="1704684994215"></p>',123),sa=[aa];function na(pa,ea){return n(),p("div",null,sa)}const oa=s($,[["render",na],["__file","04-Mavenjichu.html.vue"]]);export{oa as default};
