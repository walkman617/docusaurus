---
slug: Iterator0-Demo
title: 迭代0：技术栈与极简Demo
author: Wenxuan Shi
author_title: A.P. @ Nankai University
author_url: https://github.com/walkman617/walkman617
author_image_url: https://avatars.githubusercontent.com/u/9105499?v=4
tags: [Team Project]
---

> 手里拿着锤子的人，看什么都像是钉子


## 1）项目技术栈选型（必须同时包含前/后端技术）
- 团队讨论并确定项目前/后端程序的技术栈：后端建议选择[CloudBase](https://cloudbase.net/)，或[校园优惠套餐](https://cloud.tencent.com/act/campus)
- 在[TAPD](https://www.tapd.cn/)的团队项目中增加一条新需求 “【项目技术栈】技术栈的描述，以及基于该技术栈的前/后端极简Demo（如HelloWorld）”
- 新需求的描述请参考下图的内容和格式，点击“复制源码关键字”在后面的步骤中使用(如下图)
![TAPD-Project2](/img/tutorial/tapd-project2.jpg)

## 2）在[腾讯工蜂](https://code.tencent.com/) 中创建基于所选技术栈的极简项目（如HelloWorld）分枝
![Tgit-HelloWorld](/img/tutorial/tgit-helloworld.jpg)

## 3）将[腾讯工蜂](https://code.tencent.com/) 的源码提交与[TAPD](https://www.tapd.cn/)的需求关联
1. 每次提交项目源码时（可以自行选择喜欢的Git客户端），将第1步中复制的“源码关键字”添加在提交时的描述内容后面 (即 `git commit -m “message”` 命令参数中的 `message` 字符串)
![Tgit-project3](/img/tutorial/tapd-project3.jpg)

2. 在[TAPD](https://www.tapd.cn/) 团队项目中对应需求的 “腾讯工蜂提交” 中检查关联是否生效
![Tgit-project4](/img/tutorial/tapd-project4.jpg)

## 4）基于技术栈选型，开发与发布 “极简Demo”
- “极简Demo” 要求同时包含前/后端技术：比如服务器后端生成 “Hello World”，客户前端调用后端接口进行前端显示
- **能通过互联网访问 “极简Demo”**：发布 “极简Demo”到互联网环境中时，可能会遇到云服务、域名、认证等步骤（**请提前准备**）
- 将 “极简Demo” 的访问地址填写在[TAPD](https://www.tapd.cn/)对应需求的评论中（见上图）。

