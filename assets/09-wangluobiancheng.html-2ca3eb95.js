import{_ as s,r as o,o as d,c as r,b as l,d as n,e,a as i}from"./app-848a6820.js";const u="/wcblog/assets/1696726523919.9f65a0b5-77c99593.png",a="/wcblog/assets/1696726549739.00b2937e-a2b18095.png",c="/wcblog/assets/1696724099519.3b014650-9b5b4868.png",h="/wcblog/assets/1696724078707.2fa1060c-d506192d.png",p="/wcblog/assets/1696724558084.83a066d8-ebd23e4d.png",g="/wcblog/assets/1696724615505.109c22be-25b165ce.png",_="/wcblog/assets/1696724911210.225ce9fc-41d7a712.png",m="/wcblog/assets/1696724886544.e0a287a7-604a7513.png",T="/wcblog/assets/1696725063024.8141a5b1-694bfa04.png",b="/wcblog/assets/1696725192719.c61bf330-1014451f.png",w="/wcblog/assets/1696725220524.66a507db-8c843631.png",v="/wcblog/assets/1696725347977.6b0048f7-395fd60e.png",P="/wcblog/assets/1696725414188.c4c7658e-6939c727.png",f="/wcblog/assets/1696725743318.c703e5da-66c0f00b.png",x="/wcblog/assets/1696725776374.ab8ce24c-434a2389.png",C="/wcblog/assets/1696726003692.f7284b57-bbe4473d.png",H="/wcblog/assets/1696726035558.8601d2b5-93480c5f.png",A="/wcblog/assets/1696726051121.2ea9d07e-d92604e7.png",R="/wcblog/assets/1696726215106.0739154e-6d8f165b.png",S="/wcblog/assets/1696726323439.f6794b6a-4703b285.png",I="/wcblog/assets/1696726379391.d9eaa6f0-c1bd58b0.png",E={},U=i('<h2 id="一-必备基础" tabindex="-1"><a class="header-anchor" href="#一-必备基础" aria-hidden="true">#</a> 一，必备基础</h2><h3 id="_1-两台计算机进行通信" tabindex="-1"><a class="header-anchor" href="#_1-两台计算机进行通信" aria-hidden="true">#</a> 1，两台计算机进行通信</h3><p>假设 wc上了一个野鸡大学买了一台电脑，电脑里存了1部小电影，整宿整宿的在宿舍反复的看。</p><p><img src="'+u+'" alt="1696726523919"></p><p>wc 如何想要和室友xq 进行收发数据，可以通过一根网线来进行连接，并进行数据的传输。</p><p><img src="'+a+'" alt="1696726549739"></p><h3 id="_2-同宿舍多个计算机进行通信" tabindex="-1"><a class="header-anchor" href="#_2-同宿舍多个计算机进行通信" aria-hidden="true">#</a> 2，同宿舍多个计算机进行通信</h3><p>其他的室友如何也想和他们的电脑相互连接然后进行资源的共享，此时就需要一个设备 【二层交换机】组件一个局域网。</p><p><img src="'+c+'" alt="1696724099519"></p><p>二层交换机如下：</p><p><img src="'+h+`" alt="1696724078707"></p><p>当电脑接入交换机之后，我们需要为每台电脑分配一个IP，例如：</p><ul><li>电脑1：192.168.10.1</li><li>电脑2：192.168.10.2</li><li>电脑3：192.168.10.3</li><li>电脑4：192.168.10.4</li></ul><p>局域网内容个电脑之间是基于ARP协议来进行通信，例如：A电脑向 IP为192.168.10.3的另一个电脑发送消息。它的流程是这样的：</p><ul><li>第一步：A封装数据包(有头信息，有数据)，此时只知道目标IP不知道目标mac地址（未知mac地址时默认会设置为FF）。</li><li>第二步：将数据包发送到交换机，交换机通过广播的形式将数据发送给所有电脑。</li><li>第三步：目标电脑接收到数据包后，监测自己是否是目标IP。 <ul><li>是，收到数据并回复。</li><li>不是，则丢弃包。</li></ul></li></ul><p>为防止每次发送消息都是广播形式，每台电脑的内部都为维护了一个ARP表，接受到数据时（无论是否自己的）都会记录自己了解的IP和MAC的对应关系，以便于下次在发送消息时，就知道了目标的mac地址，直接让交换机转发给指定的电脑（单播）。例如：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code> Internet地址                 物理地址
    192.168.10.1            14-9d-da-2a-dd-0a
    192.168.10.3            14-9d-da-2a-dd-0c
    	...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，当有消息发送经过二层交换机时他的内容也会维护记录了交换机接口和连接的电脑的mac地址的对应关系，这样一来，交换机在进行数据转发时，效率就更高了。例如：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>接口（网卡）               mac地址
      接口1              14-9d-da-2a-dd-0A
      接口2              14-9d-da-2a-dd-0B
      接口3              14-9d-da-2a-dd-0C
      ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：每台电脑出厂时在网卡中都设置了唯一的mac地址（不重复），网卡集成在主板上，如果更换了主板则mac地址也会变更。</p><h3 id="_3-多宿舍进行通信" tabindex="-1"><a class="header-anchor" href="#_3-多宿舍进行通信" aria-hidden="true">#</a> 3，多宿舍进行通信</h3><p>多个宿舍之间想想要组建一个相互可以通信网络，此时需要【二层交换机】和【企业路由器】配合组建稍微大一点的局域网（同时也可缓解广播风暴）。</p><p><img src="`+p+'" alt="1696724558084"></p><p>企业路由器：</p><p><img src="'+g+`" alt="1696724615505"></p><p>划分好网络结构之后，其实会给各宿舍的电脑分配IP和网关，例如：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code> 宿舍A：
        - 电脑1：192.168.10.1  网关：192.168.10.254
        - 电脑2：192.168.10.2  网关：192.168.10.254
        - 电脑3：192.168.10.3  网关：192.168.10.254
        - 电脑4：192.168.10.4  网关：192.168.10.254
   宿舍B
        - 电脑1：192.168.20.1  网关：192.168.20.254
        - 电脑2：192.168.20.2  网关：192.168.20.254
        - 电脑3：192.168.20.3  网关：192.168.20.254
        - 电脑4：192.168.20.4  网关：192.168.20.254
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再在路由器中配置路由表（包含网段和路由器上的接口的对应关系），例如：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>     接口             IP
     eth0         192.168.10.254（192.168.10网段）
     eth1         192.168.20.254（192.168.20网段）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想与外部网络通信，需要配置网关，网关就是路由表中配置的指向此网段的IP。其实就类似于贸易出口都需要经过海关。数据通信的过程结合了APR协议和IP协议，例如：宿舍A的电脑1向宿舍B的电脑3发送消息（目标IP：192.168.20.3）。简化过程：</p><ul><li>宿舍A的电脑1，通过广播或单播将数据发送到网关（路由器）</li><li>路由器接收到数据之后，再通过对应的接口把数据通过广播的形式发送到宿舍B。</li></ul><p>注意：各自局域网内通过学习并记录相关mac地址后，就可以不再使用广播形式，而是使用单播来发送消息了。</p><h3 id="_4-三层交换机" tabindex="-1"><a class="header-anchor" href="#_4-三层交换机" aria-hidden="true">#</a> 4，三层交换机</h3><p>三层交换机集成了 交换机 &amp; 路由器的功能（大部分路由器功能），上述的三个设备其实可以用一个三层交换机就可以搞定。</p><p><img src="`+_+'" alt="1696724911210"></p><p>三层交换机：</p><p><img src="'+m+`" alt="1696724886544"></p><p>在三层交换机上分别做如下几件事：</p><ul><li>划分两个vlan，模拟出来路由器的两个接口</li><li>将交换机的接口划分给指定的vlan，例如： <ul><li>接口1、2、3划分给一个vlan，相当于交换机连接上了路由器</li><li>接口4、5、6划分给一个vlan，相当于交换机连接上了路由器。</li></ul></li><li>电脑连接上交换机</li><li>进行相应的配置</li></ul><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code> 宿舍A（左边）电脑配置：
        - 电脑1：192.168.10.1  网关：192.168.10.254   对应交换机接口：1
        - 电脑2：192.168.10.2  网关：192.168.10.254   对应交换机接口：2
        - 电脑3：192.168.10.3  网关：192.168.10.254   对应交换机接口：3
    宿舍B（右边）电脑配置：
        - 电脑1：192.168.20.1  网关：192.168.20.254   对应交换机接口：4
        - 电脑2：192.168.20.2  网关：192.168.20.254   对应交换机接口：5
        - 电脑3：192.168.20.3  网关：192.168.20.254   对应交换机接口：6
    
    交换机中的路由配置：
          接口               IP
         左vlan        192.168.10.254（192.168.10网段）
         右vlan        192.168.20.254（192.168.20网段）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述的配置之后，就可以实现宿舍A和宿舍B的网络通信了。</p><h3 id="_5-小型企业网络架构" tabindex="-1"><a class="header-anchor" href="#_5-小型企业网络架构" aria-hidden="true">#</a> 5，小型企业网络架构</h3><p><img src="`+T+'" alt="1696725063024"></p><h3 id="_6-家庭网络架构" tabindex="-1"><a class="header-anchor" href="#_6-家庭网络架构" aria-hidden="true">#</a> 6，家庭网络架构</h3><p>家用路由器集成了是交换机和路由的功能（性能差、价格便宜）。</p><p><img src="'+b+'" alt="1696725192719"></p><h3 id="_7-互联网" tabindex="-1"><a class="header-anchor" href="#_7-互联网" aria-hidden="true">#</a> 7，互联网</h3><p><img src="'+w+'" alt="1696725220524"></p><h3 id="_8-客户端和服务器" tabindex="-1"><a class="header-anchor" href="#_8-客户端和服务器" aria-hidden="true">#</a> 8，客户端和服务器</h3><p><strong>客户端：</strong> Client 客户所使用的电脑中安装的应用程序。</p><p><strong>服务端：</strong> Server 存放网页，客户端程序，数据处理程序，数据库的电脑。</p><p><img src="'+v+'" alt="1696725347977"></p><p><strong>客户端（网页浏览器、网络爬虫或者其它的工具）作用</strong></p><ul><li>发起一个HTTP请求到服务器上指定端口（默认端口为80）</li><li>我们称这个客户端为用户代理程序（user agent）</li></ul><p><strong>服务端作用</strong></p><ul><li>响应的服务器上存储着一些资源，比如HTML文件和图像</li><li>我们称这个响应服务器为源服务器（origin server）</li></ul><h3 id="_9-一切要从uri说起" tabindex="-1"><a class="header-anchor" href="#_9-一切要从uri说起" aria-hidden="true">#</a> 9，一切要从URI说起</h3><p><strong>URI</strong></p><ul><li>Uniform Resource Identifier 统一资源标识符，用来唯一标识一个资源</li></ul><p><strong>URL</strong></p><ul><li>Uniform Resource Locator 统一资源定位符，用来唯一标识一个资源</li><li>URL也可以用来标识一个资源，而且它还可以指明如何定位资源</li></ul><p><strong>URN</strong></p><ul><li>Uniform Resource Name 统一资源命名 通过名字表示资源</li></ul><p><strong>URL肯定是一个URI，URI并不一定是URL，也有可能是URN，URL与URN是URI的子集</strong></p><ul><li>你要找WC这个人，WC就是一个URI，URI没有寻找资源的方式</li><li>家庭住址 =&gt; URL 定位</li><li>姓名+身份证号 =&gt; URN</li></ul><p><img src="'+P+'" alt="1696725414188"></p><p><strong>对于我们来说，最重要的是URL，它的作用</strong></p><ul><li>资源标识</li><li>有定位资源的功能</li><li>指明了获取资源所采用的协议</li></ul><p><strong>URL格式</strong></p><ul><li>协议名称 + 主机名称 + 端口号 + 路径 + 文件 + 查询所需的字符串 + HASH</li><li>http:// baidu.com :80 /01/index.html ?a=1&amp;b=2 #abc</li><li>scheme:// host port path filename ?query hash</li></ul><h3 id="_10-bs架构和cs架构" tabindex="-1"><a class="header-anchor" href="#_10-bs架构和cs架构" aria-hidden="true">#</a> 10，BS架构和CS架构</h3><p><strong>BS架构</strong></p><ul><li>Browser/Server(浏览器/服务器), 利用浏览器去呈现界面，浏览器提供浏览器所需要的数据</li><li>优点：无需安装客户端软件，只需要有浏览器，无需升级客户端。</li><li>缺点：浏览器的兼容性可能有问题，功能性相对弱一点，安全性弱，交互性弱。</li></ul><p><strong>CS架构</strong></p><ul><li>Client/Server 将应用程序放到一个软件中，可以是Android也可以是iOS，服务器给客户端软件提供它需要的数据。</li><li>优点：界面丰富，交互性强，响应速度快，安全性强。</li><li>缺点：开发成本高，需要下载安装，维护成本高，升级麻烦。</li></ul><h3 id="_11-购买云服务器和域名" tabindex="-1"><a class="header-anchor" href="#_11-购买云服务器和域名" aria-hidden="true">#</a> 11，购买云服务器和域名</h3><p><strong>服务器分类</strong></p><ul><li>实体服务器：自己购买服务器。</li><li>云服务器：阿里云，华为云，JD云....</li></ul><p><strong>域名分类</strong></p><ul><li>通用类 <ul><li>.com 工商金融企业</li><li>.com.cn 公司</li><li>.gov 政府</li><li>.net 提供互联网网络服务机构</li><li>.org 各类组织机构</li><li>.edu 教育机制</li></ul></li><li>国家地区分类 <ul><li>.cn 中国</li><li>.ca 加拿大</li><li>.uk 英国</li><li>.jp 日本</li></ul></li><li>域名级别 <ul><li>顶级域名（一级域名） baiu.com 一般我们买的是一级域名，在一级域名下可以配 置N个二级域名</li><li>二级域名 zhidao.baidu.com image.baidu.com wenku.baidu.com tieba.baidu.com</li><li>三级域名 sport.news.baidu.com</li><li>www.baidu.com 也是所谓的二级域名</li></ul></li></ul><p><strong>www: world Wide Web 万维网</strong></p><ul><li>Internet，叫因特网。这个因特网中提供非常多的服务，如www网页服务，ftp文件传输服务，E-mail电子邮件服务，Telnet远程登录服务...，www是浏览器访问网页的服务，所以说，很早之前，所有的网站主页域名前面都会加上www。后来，可以配置二域名和三级域名，不同的域名，就可以对应不同的业务，而业务处理任务会分配到不同的服务器，所以，不再需要使用www来标注主页了。但是加上www，已经成为一种习惯了，所以现在，很多网站都还会做DNS解析www，说到底还是尊重用户习惯。国外的网站基本上都不会使用www。</li></ul><h3 id="_12-dns解析" tabindex="-1"><a class="header-anchor" href="#_12-dns解析" aria-hidden="true">#</a> 12，DNS解析</h3><p><strong>DNS</strong>：Domain Name Server(域名服务器)</p><ul><li>作用：域名与对应的IP转化的服务器</li><li>DNS中保存了一张域名与对应的IP地址的表，一个域名对应一个IP地址，一个IP地址可以对应多个域名</li><li>说白了，根据域名，通过DNS解析就可以得到一个IP 地址。就可以找到对应的服务器</li></ul><h3 id="_13-ip地址和端口号" tabindex="-1"><a class="header-anchor" href="#_13-ip地址和端口号" aria-hidden="true">#</a> 13，IP地址和端口号</h3><p><strong>IP</strong>：Internet Protocol Address 互联网协议地址 IP地址</p><ul><li>作用：分配给用户上网使用的互联网协议</li><li>分类：IPv4 IPv6</li></ul><p>根据IP地址，就可以找到对应的服务器，服务器上可以提供N种服务器，你需要哪种服务呢？就需要根据端口号，来区分你需要哪种服务。</p><ul><li>端口号范围：0~65535 0~1024是系统使用的 1025~65535之间</li><li>知名端口号：http协议下：80 https协议下：443 mysql: 3306 FTP协议下：20 21...</li></ul><h3 id="_14-tcp连接" tabindex="-1"><a class="header-anchor" href="#_14-tcp连接" aria-hidden="true">#</a> 14，TCP连接</h3><p><strong>TCP</strong>：transmission Control Protocol 传输控制协议</p><ul><li>特点：在收发数据之前，必须建立可靠的连接。TCP就是可靠连接。UDP不可靠连接。</li><li>建立连接基础：三次握手</li><li>应用场景：HTTP请求(HTTP请求就是基于TCP的)，FTP文件传输，邮件发送</li><li>优点：速度慢，稳定，重传机制</li><li>缺点：效率低，占用资源，容易被攻击</li></ul><p><strong>TCP 三次握手理解 (双方确认)（非常重要，面试必问）</strong></p><ul><li>TCP是一个端到端的 可靠 面相连接的协议</li><li>HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误时，可以重传）</li><li>根据IP，找到对应的服务器，发起TCP的三次握手</li></ul><p>图示：</p><p><img src="'+f+'" alt="1696725743318"></p><p><strong>为什么要3次握手？</strong></p><p>我们假定第一次发送的请求, 因为网络延迟很慢才到达服务端，然后客户端以为这服务器居然不理睬我， 然后 默默的关闭的等待连接的请求，走开了（好比追女神）；但事实呢？女神（服务器）是因为各种各样的原因，很 晚才看到，然后说我接受你了, 同意你的要求咱们两结婚吧！但是，A早已经远走高飞，这个请求A完全不会收到 （在第二次握手，服务端打开连接，等待客户端的响应），那么女生呢，以为对方收到了，就会一直等待，这样 B的资源就会被浪费的（创建连接的时候，空间浪费以及端口消耗）；而三次握手, 就不会发生，服务端同意连 接了，但是A缺一直没有下一步的动作，导致资源浪费；</p><p><strong>关闭TCP连接四次挥手的理解 (客气挽留)</strong></p><ul><li>不能直接一次性断开连接(双方知晓), 万一还有什么数据没有传完, 造成数据的丢失!</li></ul><p>图示：</p><p><img src="'+x+'" alt="1696725776374"></p><p><strong>为什么要4次挥手？</strong></p><p>这和有礼貌的好友道别一样：（a：客户端 b: 服务端） 1、一开始A想要回家离开，但是呢？怕B还有事情要交代， 那么呢？只好先向B打招呼，我要走了，请求停止交谈(请求断开连接)，(此时，a到B的连接没有断开，依旧可以 进行通信）； 2、同意A的请求，说好的，但是我这里可能还有一些话（数据）没说完。我检查看看, 你等等, 等我说完你再走。 3、B确实没啥要补充的了，就告知你我可以撤了 4、A说好的，知道了，88；（B得知A走开了，关闭了自己的连接 )</p><p><strong>总结三次握手和四次挥手</strong></p><ul><li>建立连接 =&gt; 三次握手 (双方确认) <ul><li>(1) 服务器啊, 我是浏览器, 我要和你建立连接</li><li>(2)服务器看到了, 好的, 那么建立连接吧, 我准备好了, 你确定吗?</li><li>(3)浏览器: 是的, 我确定!</li><li>(4) 连接就建立成功，三次握手 = 连接的发起 + 双方的确认</li></ul></li><li>断开连接 =&gt; 四次挥手 (客气挽留) <ul><li>(1) 一方A发起断开连接的消息</li><li>(2) 另一方B会确认收到断开的需求, 但是会要求等一等, 确认是否数据传输完毕</li><li>(3) B当确认完之后, 确实数据都传完了, 告知A, 连接可以断开了</li><li>(4) A确认收到消息, 告知B, 我要走了</li></ul></li></ul><h3 id="_15-http的概念" tabindex="-1"><a class="header-anchor" href="#_15-http的概念" aria-hidden="true">#</a> 15，HTTP的概念</h3><p><strong>HTTP：HyperText Transfer Protocol 超文本传输协议</strong>：</p><ul><li>客户端和与服务器之间传递数据的规范</li><li>HTTP请求：按照HTTP协议（规则），由客户端（浏览器）向服务器发出请求</li><li>HTTP响应：按照HTTP协议（规则），由服务器给出响应</li></ul><p><strong>HTTPS:</strong> HyperText Transfer Protocol Secure 超文本传输安全协议。</p><ul><li>HTTP的安全版本（安全的基础是SSL/TLS）</li><li>SSL: Secure Sockets Layer 安全套接层</li><li>TLS：transport Layer Security 传输层安全</li><li>说白了，就是为了网络通信提供的一种安全协议，对网络连接进行加密</li></ul><p><strong>HTTP和HTTPS的区别</strong></p><ul><li>HTTP是不安全 HTTPS可以防止攻击</li><li>HTTP协议传输的内容是明文，直接在TCP连接上传递，客户端和服务器都无法验证对方的身份</li><li>HTTPS协议的传输内容都是被SSL/TLS加密，且运行在SSL/TLS，SSL/TLS运行在TCP连接上，所以传递的数据是安全</li></ul><h3 id="_16-http报文" tabindex="-1"><a class="header-anchor" href="#_16-http报文" aria-hidden="true">#</a> 16，HTTP报文</h3><p>HTTP是基于TCP通信协议来传递数据。通过一个可靠的连接来交换信息。在交换信息之前，客户端和服务器之间需要有规则。</p><p><strong>HTTP通信包含两部分</strong></p><ul><li>HTTP请求 Request</li><li>HTTP响应 Response</li></ul><p><img src="'+C+'" alt="1696726003692"></p><p>在HTTP请求和HTTP响应中，都包含了HTTP报文，报文也是一块数据，在客户端与服务器之间发送的数据块。这些报文也是在客户端与服务器之间流行。所以HTTP报文也叫报文流。</p><p><strong>HTTP请求报文组成部分</strong></p><ul><li>对报文进行描述的起始行</li><li>HTTP各种头（header），也叫http报文头，不同的头含义是不一样的</li><li>请求体（请求正文）（可选的），就是客户端给服务器的数据</li></ul><p><img src="'+H+'" alt="1696726035558"></p><p><strong>HTTP响应报文组成部分</strong></p><ul><li>响应行（起始行） HTTP/1.0 200表示状态码 OK叫状态描述符</li><li>响应头 header</li><li>响应体 服务器给客户端响应的数据</li></ul><p><img src="'+A+'" alt="1696726051121"></p><h3 id="_17-http协议版本" tabindex="-1"><a class="header-anchor" href="#_17-http协议版本" aria-hidden="true">#</a> 17，HTTP协议版本</h3><p><strong>HTTP/0.9</strong></p><ol><li>仅支持GET请求</li><li>仅能请求HTML资源</li><li>发布于1991年</li></ol><p><strong>HTTP/1.0</strong></p><ol><li>增加了POST请求和HEAD请求</li><li>支持多种数据格式的请求和访问</li><li>添加了缓存的功能</li><li>增加了状态码，内容编码</li><li>浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗</li><li>也就是说早期的HTTP1.0是不支持长连接（持久化连接）的，只支持串行连接</li><li>后期的HTTP1.0添加了Connection:keep-alive字段，开始支持持久化连接</li><li>发布于1996年</li></ol><p><strong>HTTP/1.1(目前使用最广泛的版本)</strong></p><ol><li>采用持久连接(Connection: keep-alive)，多个请求可以共用同一个TCP连接</li><li>增加PUT/PATC/OPTION/DELETE等请求方式</li><li>增加了host字段，指定服务器域名</li><li>增加了100状态码，支持只发送头信息</li><li>支持内容传递，只传递一部分和文件断点继传</li><li>发布于1997年；</li></ol><p><strong>HTTP/2.0</strong></p><ol><li>增加了双工模式 客户端同时发送N个请求，服务器同时处理N个请求</li><li>服务器推送 服务器可以主动推送数据给客户端</li><li>发布于2015年</li></ol><h3 id="_18-http的请求方式" tabindex="-1"><a class="header-anchor" href="#_18-http的请求方式" aria-hidden="true">#</a> 18，HTTP的请求方式</h3><p><strong>GET</strong>：GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。 <strong>HEAD</strong>：HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。比如在准备下载一个文件前，先获取文件的大小，再决定是否进行下载； <strong>POST</strong>：POST 方法用于将实体提交到指定的资源。 <strong>PUT</strong>：PUT 方法用请求有效载荷（payload）替换目标资源的所有当前表示； <strong>DELETE</strong>：DELETE 方法删除指定的资源； <strong>PATCH</strong>：PATCH 方法用于对资源应部分修改； <strong>CONNECT</strong>：CONNECT 方法建立一个到目标资源标识的服务器的隧道，通常用在代理服务器，网页开发很少用到。 <strong>TRACE</strong>：TRACE 方法沿着到目标资源的路径执行一个消息环回测试。</p><p><strong>在开发中使用最多的是GET、POST请求</strong></p><ul><li>GET主要是用来获取数据</li><li>GET也可以传递数据给服务器，通过查询字符串，就是在URL中把数据扔给服务器</li><li>POST可以对数据进行添加，删除，修改，数据是放在FormData</li></ul><p><strong>GET和POST区别（面试题）</strong></p><ul><li>post更安全：get请求是把数据放在url，每个人都可以看到，相对来说，不安全。</li><li>get请求，数据放在url，url的长度是有限，get请求传递给服务器的数据大小是有限的</li><li>post请求，传递给服务器的数据理论上来说是无限的</li><li>get请求只能发送ASCII字符数据，post请求能发送更多的数据类型</li><li>post比get速度慢，post接收数据之前会先将请求头发送给服务器确认，然后发送数据</li><li>get请求会进行数据缓存，post没有</li></ul><p><strong>GET过程</strong></p><ol><li>第三次握手，浏览器确认并发送请求头和数据</li><li>服务器返回200 OK响应</li></ol><p><strong>POST过程</strong></p><ol><li>第三次握手，浏览器确认并发送post请求头</li><li>服务器返回状态码100后，continue响应</li><li>浏览器开始扔数据到服务器</li><li>服务器返回200 OK响应</li></ol><h3 id="_19-request-header" tabindex="-1"><a class="header-anchor" href="#_19-request-header" aria-hidden="true">#</a> 19，Request Header</h3><p><strong>在request对象的header中也包含很多有用的信息，客户端会默认传递过来一些信息</strong></p><p><img src="'+R+'" alt="1696726215106"></p><p><strong>content-type是这次请求携带的数据的类型</strong></p><ul><li>application/x-www-form-urlencoded：表示数据被编码成以 &#39;&amp;&#39; 分隔的键 - 值对，同时以 &#39;=&#39; 分隔键和值</li><li>application/json：表示是一个json类型；</li><li>text/plain：表示是文本类型；</li><li>application/xml：表示是xml类型；</li><li>multipart/form-data：表示是上传文件；</li></ul><p><strong>content-length</strong></p><ul><li>文件的大小长度</li></ul><p><strong>keep-alive</strong></p><ul><li>http是基于TCP协议的，但是通常在进行一次请求和响应结束后会立刻中断</li><li>在http1.0中，如果想要继续保持连接 <ul><li>浏览器需要在请求头中添加 connection: keep-alive</li><li>服务器需要在响应头中添加 connection:keey-alive</li><li>当客户端再次放请求时，就会使用同一个连接，直接一方中断连接</li></ul></li><li>在http1.1中，所有连接默认是 connection: keep-alive的 <ul><li>不同的Web服务器会有不同的保持 keep-alive的时间</li><li>Node中默认是5s中</li></ul></li></ul><p><strong>accept-encoding</strong></p><ul><li>告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应 .gz文件</li></ul><p><strong>accept</strong></p><ul><li>告知服务器，客户端可接受文件的格式类型</li></ul><p><strong>user-agent</strong></p><ul><li>客户端相关的信息</li></ul><p><strong>罗列常见的请求头：</strong></p>',161),L=l("thead",null,[l("tr",null,[l("th",null,"Header"),l("th",null,"解释"),l("th",null,"示例")])],-1),y=l("tr",null,[l("td",null,"Accept"),l("td",null,"指定客户端能够接收的内容类型"),l("td",null,"Accept: text/plain, text/html")],-1),N=l("tr",null,[l("td",null,"Accept-Charset"),l("td",null,"浏览器可以接受的字符编码集。"),l("td",null,"Accept-Charset: iso-8859-5")],-1),M=l("tr",null,[l("td",null,"Accept-Encoding"),l("td",null,"指定浏览器可以支持的 web 服务器返回内容压缩编码类型。"),l("td",null,"Accept-Encoding: compress, gzip")],-1),k=l("tr",null,[l("td",null,"Accept-Language"),l("td",null,"浏览器可接受的语言"),l("td",null,"Accept-Language: en, zh")],-1),G=l("tr",null,[l("td",null,"Accept-Ranges"),l("td",null,"可以请求网页实体的一个或者多个子范围字段"),l("td",null,"Accept-Ranges: bytes")],-1),B=l("tr",null,[l("td",null,"Authorization"),l("td",null,"HTTP 授权的授权证书"),l("td",null,"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")],-1),D=l("tr",null,[l("td",null,"Cache-Control"),l("td",null,"指定请求和响应遵循的缓存机制"),l("td",null,"Cache-Control: no-cache")],-1),z=l("tr",null,[l("td",null,"Connection"),l("td",null,"表示是否需要持久连接。（HTTP 1.1 默认进行持久连接）"),l("td",null,"Connection: close")],-1),O=l("tr",null,[l("td",null,"Cookie"),l("td",null,"HTTP 请求发送时，会把保存在该请求域名下的所有 cookie 值一起发送给 web 服务器。"),l("td",null,"Cookie: $Version=1; Skin=new;")],-1),W=l("tr",null,[l("td",null,"Content-Length"),l("td",null,"请求的内容长度"),l("td",null,"Content-Length: 348")],-1),q=l("tr",null,[l("td",null,"Content-Type"),l("td",null,"请求的与实体对应的 MIME 信息"),l("td",null,"Content-Type: application/x-www-form-urlencoded")],-1),F=l("tr",null,[l("td",null,"Date"),l("td",null,"请求发送的日期和时间"),l("td",null,"Date: Tue, 15 Nov 2010 08:12:31 GMT")],-1),V=l("tr",null,[l("td",null,"Expect"),l("td",null,"请求的特定的服务器行为"),l("td",null,"Expect: 100-continue")],-1),j=l("tr",null,[l("td",null,"From"),l("td",null,"发出请求的用户的 Email"),l("td",null,[l("a",{href:"mailto:user@email.com"},"From: user@email.com")])],-1),Q=l("td",null,"Host",-1),Z=l("td",null,"指定请求的服务器的域名和端口号",-1),K={href:"http://www.zcmhi.com/",target:"_blank",rel:"noopener noreferrer"},J=l("tr",null,[l("td",null,"If-Match"),l("td",null,"只有请求内容与实体相匹配才有效"),l("td",null,"If-Match: “737060cd8c284d8af7ad3082f209582d”")],-1),X=l("tr",null,[l("td",null,"If-Modified-Since"),l("td",null,"如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回 304 代码"),l("td",null,"If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT")],-1),Y=l("tr",null,[l("td",null,"If-None-Match"),l("td",null,"如果内容未改变返回 304 代码，参数为服务器先前发送的 Etag，与服务器回应的 Etag 比较判断是否改变"),l("td",null,"If-None-Match: “737060cd8c284d8af7ad3082f209582d”")],-1),$=l("tr",null,[l("td",null,"If-Range"),l("td",null,"如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为 Etag"),l("td",null,"If-Range: “737060cd8c284d8af7ad3082f209582d”")],-1),ll=l("tr",null,[l("td",null,"If-Unmodified-Since"),l("td",null,"只在实体在指定时间之后未被修改才请求成功"),l("td",null,"If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT")],-1),nl=l("h3",{id:"_20-response-header",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_20-response-header","aria-hidden":"true"},"#"),n(" 20，Response Header")],-1),tl=l("p",null,[l("strong",null,"响应的header中包括一些服务器给客户端的信息")],-1),el=l("p",null,[l("img",{src:S,alt:"1696726323439"})],-1),il=l("p",null,[l("strong",null,"HTTP Responses Header 响应头")],-1),sl=l("thead",null,[l("tr",null,[l("th",null,"Header"),l("th",null,"解释"),l("th",null,"示例")])],-1),ol=l("tr",null,[l("td",null,"Max-Forwards"),l("td",null,"限制信息通过代理和网关传送的时间"),l("td",null,"Max-Forwards: 10")],-1),dl=l("tr",null,[l("td",null,"Pragma"),l("td",null,"用来包含实现特定的指令"),l("td",null,"Pragma: no-cache")],-1),rl=l("tr",null,[l("td",null,"Proxy-Authorization"),l("td",null,"连接到代理的授权证书"),l("td",null,"Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")],-1),ul=l("tr",null,[l("td",null,"Range"),l("td",null,"只请求实体的一部分，指定范围"),l("td",null,"Range: bytes=500-999")],-1),al=l("td",null,"Referer",-1),cl=l("td",null,"先前网页的地址，当前请求网页紧随其后, 即来路",-1),hl={href:"http://www.zcmhi.com/archives/71.html",target:"_blank",rel:"noopener noreferrer"},pl=l("tr",null,[l("td",null,"TE"),l("td",null,"客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息"),l("td",null,"TE: trailers, deflate; q=0.5")],-1),gl=l("tr",null,[l("td",null,"Upgrade"),l("td",null,"向服务器指定某种传输协议以便服务器进行转换（如果支持）"),l("td",null,"Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11")],-1),_l=l("tr",null,[l("td",null,"User-Agent"),l("td",null,"User-Agent 的内容包含发出请求的用户信息"),l("td",null,"User-Agent: Mozilla/5.0 (Linux; X11)")],-1),ml=l("tr",null,[l("td",null,"Via"),l("td",null,"通知中间网关或代理服务器地址，通信协议"),l("td",null,"Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)")],-1),Tl=l("tr",null,[l("td",null,"Warning"),l("td",null,"关于消息实体的警告信息"),l("td",null,"Warn: 199 Miscellaneous warning")],-1),bl=l("tr",null,[l("td",null,"Header"),l("td",null,"解释"),l("td",null,"示例")],-1),wl=l("tr",null,[l("td",null,"Accept-Ranges"),l("td",null,"表明服务器是否支持指定范围请求及哪种类型的分段请求"),l("td",null,"Accept-Ranges: bytes")],-1),vl=l("tr",null,[l("td",null,"Age"),l("td",null,"从原始服务器到代理缓存形成的估算时间（以秒计，非负）"),l("td",null,"Age: 12")],-1),Pl=l("tr",null,[l("td",null,"Allow"),l("td",null,"对某网络资源的有效的请求行为，不允许则返回 405"),l("td",null,"Allow: GET, HEAD")],-1),fl=l("tr",null,[l("td",null,"Cache-Control"),l("td",null,"告诉所有的缓存机制是否可以缓存及哪种类型"),l("td",null,"Cache-Control: no-cache")],-1),xl=l("tr",null,[l("td",null,"Content-Encoding"),l("td",null,"web 服务器支持的返回内容压缩编码类型。"),l("td",null,"Content-Encoding: gzip")],-1),Cl=l("tr",null,[l("td",null,"Content-Language"),l("td",null,"响应体的语言"),l("td",null,"Content-Language: en, zh")],-1),Hl=l("tr",null,[l("td",null,"Content-Length"),l("td",null,"响应体的长度"),l("td",null,"Content-Length: 348")],-1),Al=l("tr",null,[l("td",null,"Header"),l("td",null,"解释"),l("td",null,"示例")],-1),Rl=l("tr",null,[l("td",null,"Content-Location"),l("td",null,"请求资源可替代的备用的另一地址"),l("td",null,"Content-Location: /index.htm")],-1),Sl=l("tr",null,[l("td",null,"Content-MD5"),l("td",null,"返回资源的 MD5 校验值"),l("td",null,"Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==")],-1),Il=l("tr",null,[l("td",null,"Content-Range"),l("td",null,"在整个返回体中本部分的字节位置"),l("td",null,"Content-Range: bytes 21010-47021/47022")],-1),El=l("tr",null,[l("td",null,"Content-Type"),l("td",null,"返回内容的 MIME 类型"),l("td",null,"Content-Type: text/html; charset=utf-8")],-1),Ul=l("tr",null,[l("td",null,"Date"),l("td",null,"原始服务器消息发出的时间"),l("td",null,"Date: Tue, 15 Nov 2010 08:12:31 GMT")],-1),Ll=l("tr",null,[l("td",null,"ETag"),l("td",null,"请求变量的实体标签的当前值"),l("td",null,"ETag: “737060cd8c284d8af7ad3082f209582d”")],-1),yl=l("tr",null,[l("td",null,"Expires"),l("td",null,"响应过期的日期和时间"),l("td",null,"Expires: Thu, 01 Dec 2010 16:00:00 GMT")],-1),Nl=l("tr",null,[l("td",null,"Last-Modified"),l("td",null,"请求资源的最后修改时间"),l("td",null,"Last-Modified: Tue, 15 Nov 2010 12:45:26 GMT")],-1),Ml=l("td",null,"Location",-1),kl=l("td",null,"用来重定向接收方到非请求 URL 的位置来完成请求或标识新的资源",-1),Gl={href:"http://www.zcmhi.com/archives/94.html",target:"_blank",rel:"noopener noreferrer"},Bl=l("tr",null,[l("td",null,"Pragma"),l("td",null,"包括实现特定的指令，它可应用到响应链上的任何接收方"),l("td",null,"Pragma: no-cache")],-1),Dl=l("tr",null,[l("td",null,"Proxy-Authenticate"),l("td",null,"它指出认证方案和可应用到代理的该 URL 上的参数"),l("td",null,"Proxy-Authenticate: Basic")],-1),zl=l("td",null,"refresh",-1),Ol=l("td",null,"应用于重定向或一个新的资源被创造，在 5 秒之后重定向（由网景提出，被大部分浏览器支持）",-1),Wl={href:"http://www.zcmhi.com/archives/94.html",target:"_blank",rel:"noopener noreferrer"},ql=l("tr",null,[l("td",null,"Retry-After"),l("td",null,"如果实体暂时不可取，通知客户端在指定时间之后再次尝试"),l("td",null,"Retry-After: 120")],-1),Fl=l("tr",null,[l("td",null,"Server"),l("td",null,"web 服务器软件名称"),l("td",null,"Server: Apache/1.3.27 (Unix) (Red-Hat/Linux)")],-1),Vl=l("tr",null,[l("td",null,"Set-Cookie"),l("td",null,"设置 Http Cookie"),l("td",null,"Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1")],-1),jl=l("tr",null,[l("td",null,"Trailer"),l("td",null,"指出头域在分块传输编码的尾部存在"),l("td",null,"Trailer: Max-Forwards")],-1),Ql=l("tr",null,[l("td",null,"Transfer-Encoding"),l("td",null,"文件传输编码"),l("td",null,"Transfer-Encoding:chunked")],-1),Zl=l("tr",null,[l("td",null,"Vary"),l("td",null,"告诉下游代理是使用缓存响应还是从原始服务器请求"),l("td",null,"Vary: *")],-1),Kl=l("tr",null,[l("td",null,"Via"),l("td",null,"告知代理客户端响应是通过哪里发送的"),l("td",null,"Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)")],-1),Jl=l("tr",null,[l("td",null,"Warning"),l("td",null,"警告实体可能存在的问题"),l("td",null,"Warning: 199 Miscellaneous warning")],-1),Xl=l("tr",null,[l("td",null,"Header"),l("td",null,"解释"),l("td",null,"示例")],-1),Yl=l("tr",null,[l("td",null,"WWW-Authenticate"),l("td",null,"表明客户端请求实体应该使用的授权方案"),l("td",null,"WWW-Authenticate: Basic")],-1),$l=l("h3",{id:"_21-response响应状态码",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_21-response响应状态码","aria-hidden":"true"},"#"),n(" 21， Response响应状态码")],-1),ln=l("ul",null,[l("li",null,"Http状态码（Http Status Code）是用来表示Http响应状态的数字代码"),l("li",null,"Http状态码非常多，可以根据不同的情况，给客户端返回不同的状态码"),l("li",null,"MDN响应码解析地址：https://developer.mozilla.org/zh-CN/docs/web/http/status")],-1),nn=l("p",null,[l("img",{src:I,alt:"1696726379391"})],-1),tn=l("p",null,[l("strong",null,"HTTP状态码列表:")],-1),en=l("thead",null,[l("tr",null,[l("th",null,"状态码"),l("th",null,"状态码英文名称"),l("th",null,"中文描述")])],-1),sn=l("td",null,[l("strong",null,"100")],-1),on=l("td",null,[l("strong",null,"Continue")],-1),dn=l("strong",null,"继续。",-1),rn={href:"http://www.dreamdu.com/webbuild/client_vs_server/",target:"_blank",rel:"noopener noreferrer"},un=l("strong",null,"应继续其请求",-1),an=l("tr",null,[l("td",null,[l("strong",null,"101")]),l("td",null,[l("strong",null,"Switching Protocols")]),l("td",null,[l("strong",null,"切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议")])],-1),cn=l("tr",null,[l("td"),l("td"),l("td")],-1),hn=l("tr",null,[l("td",null,[l("strong",null,"200")]),l("td",null,[l("strong",null,"OK")]),l("td",null,[l("strong",null,"请求成功。一般用于GET与POST请求")])],-1),pn=l("tr",null,[l("td",null,[l("strong",null,"201")]),l("td",null,[l("strong",null,"Created")]),l("td",null,[l("strong",null,"已创建。成功请求并创建了新的资源")])],-1),gn=l("tr",null,[l("td",null,[l("strong",null,"202")]),l("td",null,[l("strong",null,"Accepted")]),l("td",null,[l("strong",null,"已接受。已经接受请求，但未处理完成")])],-1),_n=l("tr",null,[l("td",null,[l("strong",null,"203")]),l("td",null,[l("strong",null,"Non-Authoritative Information")]),l("td",null,[l("strong",null,"非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本")])],-1),mn=l("tr",null,[l("td",null,[l("strong",null,"204")]),l("td",null,[l("strong",null,"No Content")]),l("td",null,[l("strong",null,"无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档")])],-1),Tn=l("tr",null,[l("td",null,[l("strong",null,"205")]),l("td",null,[l("strong",null,"Reset Content")]),l("td",null,[l("strong",null,"重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域")])],-1),bn=l("tr",null,[l("td",null,[l("strong",null,"206")]),l("td",null,[l("strong",null,"Partial Content")]),l("td",null,[l("strong",null,"部分内容。服务器成功处理了部分GET请求")])],-1),wn=l("tr",null,[l("td"),l("td"),l("td")],-1),vn=l("tr",null,[l("td",null,[l("strong",null,"300")]),l("td",null,[l("strong",null,"Multiple Choices")]),l("td",null,[l("strong",null,"多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择")])],-1),Pn=l("tr",null,[l("td",null,[l("strong",null,"301")]),l("td",null,[l("strong",null,"Moved Permanently")]),l("td",null,[l("strong",null,"永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替")])],-1),fn=l("tr",null,[l("td",null,[l("strong",null,"302")]),l("td",null,[l("strong",null,"Found")]),l("td",null,[l("strong",null,"临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI")])],-1),xn=l("tr",null,[l("td",null,[l("strong",null,"303")]),l("td",null,[l("strong",null,"See Other")]),l("td",null,[l("strong",null,"查看其它地址。与301类似。使用GET和POST请求查看")])],-1),Cn=l("tr",null,[l("td",null,[l("strong",null,"304")]),l("td",null,[l("strong",null,"Not Modified")]),l("td",null,[l("strong",null,"未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源")])],-1),Hn=l("tr",null,[l("td",null,[l("strong",null,"305")]),l("td",null,[l("strong",null,"Use Proxy")]),l("td",null,[l("strong",null,"使用代理。所请求的资源必须通过代理访问")])],-1),An=l("tr",null,[l("td",null,[l("strong",null,"306")]),l("td",null,[l("strong",null,"Unused")]),l("td",null,[l("strong",null,"已经被废弃的HTTP状态码")])],-1),Rn=l("tr",null,[l("td",null,[l("strong",null,"307")]),l("td",null,[l("strong",null,"Temporary Redirect")]),l("td",null,[l("strong",null,"临时重定向。与302类似。使用GET请求重定向")])],-1),Sn=l("tr",null,[l("td"),l("td"),l("td")],-1),In=l("tr",null,[l("td",null,[l("strong",null,"400")]),l("td",null,[l("strong",null,"Bad Request")]),l("td",null,[l("strong",null,"客户端请求的语法错误，服务器无法理解")])],-1),En=l("tr",null,[l("td",null,[l("strong",null,"401")]),l("td",null,[l("strong",null,"Unauthorized")]),l("td",null,[l("strong",null,"请求要求用户的身份认证")])],-1),Un=l("tr",null,[l("td",null,[l("strong",null,"402")]),l("td",null,[l("strong",null,"Payment Required")]),l("td",null,[l("strong",null,"保留，将来使用")])],-1),Ln=l("tr",null,[l("td",null,[l("strong",null,"403")]),l("td",null,[l("strong",null,"Forbidden")]),l("td",null,[l("strong",null,"服务器理解请求客户端的请求，但是拒绝执行此请求")])],-1),yn=l("tr",null,[l("td",null,[l("strong",null,"404")]),l("td",null,[l("strong",null,"Not Found")]),l("td",null,[l("strong",null,'服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面')])],-1),Nn=l("tr",null,[l("td",null,[l("strong",null,"405")]),l("td",null,[l("strong",null,"Method Not Allowed")]),l("td",null,[l("strong",null,"客户端请求中的方法被禁止")])],-1),Mn=l("tr",null,[l("td",null,[l("strong",null,"406")]),l("td",null,[l("strong",null,"Not Acceptable")]),l("td",null,[l("strong",null,"服务器无法根据客户端请求的内容特性完成请求")])],-1),kn=l("tr",null,[l("td",null,[l("strong",null,"407")]),l("td",null,[l("strong",null,"Proxy Authentication Required")]),l("td",null,[l("strong",null,"请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权")])],-1),Gn=l("tr",null,[l("td",null,[l("strong",null,"408")]),l("td",null,[l("strong",null,"Request Time-out")]),l("td",null,[l("strong",null,"服务器等待客户端发送的请求时间过长，超时")])],-1),Bn=l("tr",null,[l("td",null,[l("strong",null,"409")]),l("td",null,[l("strong",null,"Conflict")]),l("td",null,[l("strong",null,"服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突")])],-1),Dn=l("tr",null,[l("td",null,[l("strong",null,"410")]),l("td",null,[l("strong",null,"Gone")]),l("td",null,[l("strong",null,"客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置")])],-1),zn=l("tr",null,[l("td",null,[l("strong",null,"411")]),l("td",null,[l("strong",null,"Length Required")]),l("td",null,[l("strong",null,"服务器无法处理客户端发送的不带Content-Length的请求信息")])],-1),On=l("tr",null,[l("td",null,[l("strong",null,"412")]),l("td",null,[l("strong",null,"Precondition Failed")]),l("td",null,[l("strong",null,"客户端请求信息的先决条件错误")])],-1),Wn=l("tr",null,[l("td",null,[l("strong",null,"413")]),l("td",null,[l("strong",null,"Request Entity Too Large")]),l("td",null,[l("strong",null,"由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息")])],-1),qn=l("tr",null,[l("td",null,[l("strong",null,"414")]),l("td",null,[l("strong",null,"Request-URI Too Large")]),l("td",null,[l("strong",null,"请求的URI过长（URI通常为网址），服务器无法处理")])],-1),Fn=l("tr",null,[l("td",null,[l("strong",null,"415")]),l("td",null,[l("strong",null,"Unsupported Media Type")]),l("td",null,[l("strong",null,"服务器无法处理请求附带的媒体格式")])],-1),Vn=l("tr",null,[l("td",null,[l("strong",null,"416")]),l("td",null,[l("strong",null,"Requested range not satisfiable")]),l("td",null,[l("strong",null,"客户端请求的范围无效")])],-1),jn=l("tr",null,[l("td",null,[l("strong",null,"417")]),l("td",null,[l("strong",null,"Expectation Failed")]),l("td",null,[l("strong",null,"服务器无法满足Expect的请求头信息")])],-1),Qn=l("tr",null,[l("td"),l("td"),l("td")],-1),Zn=l("tr",null,[l("td",null,[l("strong",null,"500")]),l("td",null,[l("strong",null,"Internal Server Error")]),l("td",null,[l("strong",null,"服务器内部错误，无法完成请求")])],-1),Kn=l("tr",null,[l("td",null,[l("strong",null,"501")]),l("td",null,[l("strong",null,"Not Implemented")]),l("td",null,[l("strong",null,"服务器不支持请求的功能，无法完成请求")])],-1),Jn=l("tr",null,[l("td",null,[l("strong",null,"502")]),l("td",null,[l("strong",null,"Bad Gateway")]),l("td",null,[l("strong",null,"充当网关或代理的服务器，从远端服务器接收到了一个无效的请求")])],-1),Xn=l("tr",null,[l("td",null,[l("strong",null,"503")]),l("td",null,[l("strong",null,"Service Unavailable")]),l("td",null,[l("strong",null,"由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中")])],-1),Yn=l("tr",null,[l("td",null,[l("strong",null,"504")]),l("td",null,[l("strong",null,"Gateway Time-out")]),l("td",null,[l("strong",null,"充当网关或代理的服务器，未及时从远端服务器获取请求")])],-1),$n=l("tr",null,[l("td",null,[l("strong",null,"505")]),l("td",null,[l("strong",null,"HTTP Version not supported")]),l("td",null,[l("strong",null,"服务器不支持请求的HTTP协议的版本，无法完成处理")])],-1),lt=i(`<h3 id="_22-同源策略" tabindex="-1"><a class="header-anchor" href="#_22-同源策略" aria-hidden="true">#</a> 22，同源策略</h3><p><strong>同源策略：Same Origin Policy SOP 是浏览器的策略</strong></p><ul><li>同源策略(Same-Origin Policy)最早由 Netscape 公司提出，是浏览器的一种安全策略</li><li>规定：只允许两个页面有相同的源时，一个页面才可以去访问另一个页面中的数据。</li><li>源：说白了，就是指域名 相同的源指的是有相同的域名</li><li>换句话说，jd.com不能去获取taobao.com下面的数据</li></ul><p>有一个这样的域名：http://www.wangcai.com</p><ul><li>http://zhidao.wangcai.com 不同源</li><li>http://www.wangcai.com:8080 不同源</li><li>https://www.wangcai.com 不同源</li><li>http://www.wangcai.com/phone/index.html 同源</li><li>http://www.wangcai.com/phone/huawei/index.html 同源</li></ul><p><strong>总结</strong></p><ul><li>源：协议 + 域名 + 端口</li><li>同源：相同的协议 &amp;&amp; 相同域名 &amp;&amp; 相同的端口</li><li>不同源：不同的协议 || 不同的域名 || 不同的端口</li></ul><p><strong>不受同源策略的限制</strong></p><ul><li>资源的引入 如：img标签的src link标签的href script标签的src</li><li>页面中的超连接 a标签中的href</li><li>表单的提交</li><li>重定向页面</li></ul><h3 id="_23-postman的使用" tabindex="-1"><a class="header-anchor" href="#_23-postman的使用" aria-hidden="true">#</a> 23， postman的使用</h3><h3 id="_24-开源接口" tabindex="-1"><a class="header-anchor" href="#_24-开源接口" aria-hidden="true">#</a> 24， 开源接口</h3><p>如果请求的 url 得到的是一个json数据，通常这个 url 叫 API 接口</p><p>开源接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://docs.tenapi.cn/
https://www.free-api.com/
https://api.aa1.cn/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function nt(tt,et){const t=o("ExternalLinkIcon");return d(),r("div",null,[U,l("table",null,[L,l("tbody",null,[y,N,M,k,G,B,D,z,O,W,q,F,V,j,l("tr",null,[Q,Z,l("td",null,[l("a",K,[n("Host: www.zcmhi.com(opens new window)(opens new window)"),e(t)])])]),J,X,Y,$,ll])]),nl,tl,el,il,l("table",null,[sl,l("tbody",null,[ol,dl,rl,ul,l("tr",null,[al,cl,l("td",null,[l("a",hl,[n("Referer: http://www.zcmhi.com/archives/71.html(opens new window)(opens new window)"),e(t)])])]),pl,gl,_l,ml,Tl,bl,wl,vl,Pl,fl,xl,Cl,Hl,Al,Rl,Sl,Il,El,Ul,Ll,yl,Nl,l("tr",null,[Ml,kl,l("td",null,[l("a",Gl,[n("Location: http://www.zcmhi.com/archives/94.html(opens new window)(opens new window)"),e(t)])])]),Bl,Dl,l("tr",null,[zl,Ol,l("td",null,[l("a",Wl,[n("Refresh: 5; url= http://www.zcmhi.com/archives/94.html(opens new window)(opens new window)"),e(t)])])]),ql,Fl,Vl,jl,Ql,Zl,Kl,Jl,Xl,Yl])]),$l,ln,nn,tn,l("table",null,[en,l("tbody",null,[l("tr",null,[sn,on,l("td",null,[dn,l("a",rn,[n("客户端 (opens new window) (opens new window)"),e(t)]),un])]),an,cn,hn,pn,gn,_n,mn,Tn,bn,wn,vn,Pn,fn,xn,Cn,Hn,An,Rn,Sn,In,En,Un,Ln,yn,Nn,Mn,kn,Gn,Bn,Dn,zn,On,Wn,qn,Fn,Vn,jn,Qn,Zn,Kn,Jn,Xn,Yn,$n])]),lt])}const st=s(E,[["render",nt],["__file","09-wangluobiancheng.html.vue"]]);export{st as default};
