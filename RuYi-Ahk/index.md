﻿---
layout: default
---

[返回主页](http://wyagd001.github.io)

# [](#header-2) 如意百宝箱-Ahk 简介

**如意百宝箱-Ahk**: 如意百宝箱是一款按下快捷键后针对不同窗口和选中文件显示一个定制的动作面板的快捷启动工具. 动作可以通过添加ahk脚本来新增.  

**脚本下载**: [https://wyagd001.github.io/RuYi-Ahk/RuYi.zip](https://wyagd001.github.io/RuYi-Ahk/RuYi.zip)  

**当前版本**: [1.3 - 2023/1/24](history.md)

**最新发布**: [https://github.com/wyagd001/RuYi-Ahk](https://github.com/wyagd001/RuYi-Ahk)  

**关键词及目录**: AutoHotkey [快捷键和模式](#hotkey) [面板](#Board)  [动作](#Action)  [外部脚本](#Script)

### [](#header-3)功能介绍
如意百宝箱受到类似软件 Quicker, Ahk 的 Windy 和 Candy 脚本的影响, 是一款由 AutoHotkey 脚本语言编写的快速启动软件. 打开 [如一.exe] 即启动了程序, 然后按下鼠标中键显示所需的动作面板.  
- <span id="hotkey">快捷键</span>
  - Mbutton 默认的快捷键是鼠标中键, 可以右键托盘菜单的热键管理菜单自定义为其他按键. 按下后显示一个动作主面板, 主面板由上面的12个按钮(针对当前窗口)和下面的12个按钮(针对选中的文字, 或文件, 由Ctrl+C 获取)组成, 其中每个按钮执行一个指定的动作.  
    下图是主面板图片
    - ![Image text](../img/主面板.jpg)  

  - Ctrl + 1, 将面板模式转换为菜单模式, 按下后显示为菜单, 这在针对当前窗口操作时容易获取到当前窗口.  可以右键托盘菜单的热键管理菜单自定义为其他按键.
    - ![Image text](../img/菜单模式.jpg)

  - CapLocks 热键为不可更改的固定热键. 按下后将面板界面转为纯按键模式, 工具提示中的每个按键(0-9,q-])执行一个动作.  
    - ![Image text](../img/按键模式.jpg)  

- <span id="Board">面板</span>
  - 面板的设置保存在 配置文件/面板列表.ini 文件中. 面板分为三种类型: 窗口 Classs(如资源管理器的 [CabinetWClass], [Progman]), 文件扩展名后缀(如 txt, 短文本, 文件夹), 和自定义名称. 前两种主要显示在主面板界面(按下热键后根据窗口类名和选中内容自动匹配), 后者多用于子面板(由主面板上的按钮来启动).
  下图为面板中的按钮编辑菜单, 可以左右移动位置和删除.
  - ![Image text](../img/面板按钮编辑.jpg)  

  下图为面板中的按钮编辑界面, 指定按钮的要执行动作的编号.
  - ![Image text](../img/按钮编辑.jpg)

- <span id="Action">动作</span>
  - 动作的的设置保存在 配置文件/动作列表.ini 文件中. 动作有以下类别: 运行(Run), 面板(Gui), 菜单(Menu), 发送按键(Key), 内置命令和函数(Cando 和 CanFunc) 等. 面板上的按钮对应一个动作, 点击面板上的按钮就会执行相应的动作.  
     - 运行: 运行程序, 打开文件(文件夹, 网址). 如打开C盘写为 "Run&#124;C:", 打开记事本写为 "Run&#124;notepad.exe". 要运行的外部 Ahk 脚本统一放在 外部脚本 目录, 现在内置的外部动作脚本有60个.  
     - 面板: 在主面板上点击按钮后, 显示一个子面板. 动作写作 "Gui&#124;常用工具"  
     - 菜单: 在主面板上点击按钮后, 显示一个子面板中按钮的菜单.  动作写作 "Menu&#124;常用工具"  
     - 内置命令和函数: 执行内置的 ahk 脚本标签和函数.  
  -  [完整的内置动作列表](ActionList.md)  
  - 动作的管理由托盘菜单的 "动作管理" 和面板按钮编辑界面的 转到动作编辑 按钮来启动.  
  - ![Image text](../img/动作管理.jpg)

- <span id="Script">外部脚本</span>
  - 许多动作是由外部的 ahk 脚本来完成的, 它们统一放在 外部脚本 目录.
     - 下面列出了内置的外部脚本动作
     - 1001	E703&#124;电脑图标&#124;无条件&#124;设置我的电脑中显示的图标(视频, 图片等六个文件夹..)
     - 1002	EE3F&#124;桌面图标&#124;无条件&#124;设置桌面中显示的图标(此电脑, 回收站, 网络..)
     - 1003	E71D&#124;导航栏&#124;无条件&#124;资源管理器左侧导航栏中项目的设置(收藏夹, 库, 快速启动..)
     - 1004	E7AC&#124;打开方式&#124;无条件&#124;查看扩展名的打开方式, 更改图标
     - 1005	E703&#124;电脑桌面图标&#124;无条件&#124;我的电脑和桌面添加自定义的链接图标
     - 1006	E8AD&#124;快捷方式&#124;无条件&#124;设置快捷方式的小箭头图标和快捷方式字样
     - 1033	f617&#124;水平最大化&#124;任意窗口&#124;水平最大化
     - 1034	f616&#124;垂直最大化&#124;任意窗口&#124;垂直最大化
     - 1036	efa5&#124;文件改名&#124;选中文件&#124;修改选中的文本文件的名称和扩展名
     - 1037	f87e&#124;打开选中&#124;选中对象&#124;运行选中的文本(路径(程序, 文件, 目录), 网址, 注册表地址)
     - 1038	E70F&#124;编辑&#124;选中文件&#124;编辑选中的lnk快捷方式文件
     - 1039	e896&#124;放入同名&#124;选中文件&#124;将选中的文件放入同名的文件夹中(自动创建目录)
     - 1040	E8DE&#124;解散目录&#124;选中文件&#124;将选中文件夹中的文件移动到当前目录后, 删除选中文件夹
     - 1042	E838&#124;C:\\&#124;资源管理器&#124;在当前资源管理器窗口打开动作中指定的目录 C:\\
     - 1044	f17f&#124;转码&#124;选中文件&#124;将选中的文本文件转换编码
     - 1045	eafc&#124;软硬链接&#124;选中文件&#124;为选中的文件创建软硬链接
     - 1046	ed2b&#124;文件属性&#124;选中文件&#124;修改选中的文件的属性(系统, 隐藏, 修改时间等)
     - 1061	e1d1&#124;文档所在目录&#124;特定窗口&#124;使用资源管理器以新窗口方式打开窗口编辑的文件所在的目录
     - 1063	f0f9&#124;编辑模式&#124;Chrome&#124;Chrome 浏览器开启网页编辑模式
     - 1064	edb1&#124;!编辑模式&#124;Chrome&#124;Chrome 浏览器关闭网页编辑模式
     - 1065	f0f9&#124;强制复制&#124;Chrome&#124;Chrome 浏览器强制打开网页的右键复制功能
     - 1067	ed2b&#124;合并文件&#124;选中文件&#124;将选中的多个文本文件合并为一个文件
     - 1070	ef3b&#124;预览文件&#124;选中文件&#124;使用ahk预览选中的文件(文本, 图片, 压缩包...)
     - 1071	e929&#124;打开方式&#124;选中文件&#124;弹出选中文件的打开方式菜单
     - 1076	ea39&#124;隐藏图标&#124;无条件&#124;隐藏或恢复桌面图标
     - 1080	f14a&#124;MD5&#124;选中文件&#124;计算选中文件的MD5值
     - 1081	e8b1&#124;交换文件名&#124;选中文件&#124;将当前选中的两个文件交换文件名
     - 1086	e126&#124;复制到Music&#124;选中文件&#124;复制选中的文件到动作中指定的目录
     - 1087	e89a&#124;同步文件夹&#124;资源管理器&#124;左侧文件夹同步到右侧(左→右)
     - 1089	e89a&#124;同步文件夹&#124;无条件&#124;左侧文件夹同步到右侧(左→右)
     - 1092	e8c1&#124;查看编码&#124;选中文本&#124;查看选中文本的编码
     - 1093	e8a3&#124;搜索文件夹&#124;资源管理器&#124;使用文件名搜索资源管理器窗口当前文件夹中的文件
     - 1094	ec27&#124;IP设置&#124;无条件&#124;网络适配器的IP设置
     - 1095	e928&#124;Hash&#124;选中文件&#124;计算选中文件的Hash值
     - 1096	ede4&#124;搜索文件内容&#124;资源管理器&#124;搜索资源管理器窗口当前文件夹中文本文件中的内容
     - 1097	f6fa&#124;百度搜索&#124;选中文本&#124;百度搜索选中文本
     - 1098	f5a5&#124;文本比较1&#124;选中文件&#124;将选中对象放入文本对比的左侧界面
     - 1099	e768&#124;自定义运行&#124;无条件&#124;自定义注册表中注册的exe文件
     - 1101	f14a&#124;MD5对比1&#124;选中文件&#124;将选中文件放入MD5计算界面的上部编辑框
     - 1103	e928&#124;Hash2&#124;选中文件&#124;计算选中文件的Hash值
     - 1104	e124&#124;缩小50%&#124;选中文件&#124;将选中的图形文件尺寸缩小50%
     - 1105	e19b&#124;灰度图像&#124;选中文件&#124;将选中的图形文件转换为灰度图像
     - 1106	e16d&#124;放入剪贴板&#124;选中文件&#124;将选中的图形文件内容放入剪贴板
     - 1107	e124&#124;品质压缩&#124;选中文件&#124;将选中的图形文件品质缩小50%
     - 1108	e126&#124;移动到Music&#124;选中文件&#124;移动选中的文件到动作中指定的目录
     - 1109	e8c8&#124;发送到打开的&#124;选中文件&#124;复制/移动选中文件到当前打开的目录
     - 1110	f093&#124;搜索帮助&#124;选中文本&#124;打开ahk中文帮助文件并跳转到选中的文本
     - 1111	f093&#124;搜索v2帮助&#124;选中文本&#124;打开ahkv2中文帮助文件并跳转到选中的文本
     - 1112	e982&#124;有道翻译&#124;选中文本&#124;使用有道翻译选中的文本
     - 1115	f19d&#124;显示隐藏&#124;无条件&#124;资源管理器显示隐藏文件(需手动刷新, 或按F5后生效)
     - 1116	f56f&#124;隐藏文件&#124;无条件&#124;资源管理器隐藏文件
     - 1117	ea49&#124;显示扩展名&#124;无条件&#124;资源管理器显示文件的扩展名(需手动刷新, 或按F5后生效)
     - 1118	e89f&#124;隐藏扩展名&#124;无条件&#124;资源管理器隐藏文件的扩展名
     - 1119	e16d&#124;多文件名&#124;选中文件&#124;将选中的多个文件的文件名放入剪贴板
     - 1120	f17f&#124;剪贴板至文件&#124;资源管理器&#124;剪贴板保存为文件到当前文件夹
     - 1121	f19d&#124;最近打开&#124;特定窗口&#124;显示系统最近打开的文档的菜单
     - 1125	f781&#124;窗口静音&#124;任意窗口&#124;任意窗口静音, 再次运行恢复
     - 1126	E70F&#124;浏览器打开&#124;特定窗口&#124;使用当前浏览器当前窗口打开的文本文件
     - 1129	E70F&#124;记事本&#124;特定窗口&#124;使用记事本编辑当前窗口打开的文本文件
     - 1130	e99a&#124;恐龙彩蛋&#124;Chrome&#124;Chrome 浏览器断网时的恐龙游戏彩蛋
     - 1131	e12b&#124;Chrome URLs&#124;Chrome&#124;Chrome 浏览器的各种 URLs
     - 1141	e16d&#124;复制网址&#124;Chrome&#124;获取 Chrome 浏览器地址栏的网址
     - 1142	e16d&#124;复制全部网址&#124;Chrome&#124;获取 Chrome 浏览器所有打开标签页的网址
     - 1143	f466&#124;IE浏览器打开&#124;Chrome&#124;使用IE浏览器打开 Chrome 浏览器当前标签页的网址
     - 1145	e713&#124;Chrome 设置&#124;Chrome&#124;打开 Chrome 浏览器的设置页面
     - 1151	e16d&#124;复制命令行&#124;当前窗口&#124;复制窗口进程命令行到剪贴板
     - 1152	f6fa&#124;Bing搜索&#124;选中文本&#124;Bing搜索选中文本
     - 1153	f6fa&#124;Baidu/Bing&#124;Chrome&#124;百度 Bing切换
     - 1154	f6fa&#124;京东搜索&#124;选中文本&#124;京东搜索选中文本
     - 1156	f6fa&#124;B站搜索&#124;选中文本&#124;B站搜索选中文本
     - 1161	E71B&#124;开机启动项目&#124;注册表&#124;在注册表窗口打开动作中指定的路径
     - 1162	E71B&#124;系统服务&#124;注册表&#124;在注册表窗口打开动作中指定的路径  
 
 
 
