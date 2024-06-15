<p align="center">
    <img src="https://github.com/celine-crystal/search-website/blob/main/assets/favicon-32x32.png" alt="描述" width="300"/>
    Sooogo
<p>
<p align="center">
    [English](https://github.com/celine-crystal/search-website/README.MD)/中文
<p>
# 功能
- 聚合主流搜索引擎（谷歌、百度、必应），支持一键切换搜索引擎
- 支持记录最近10条搜索记录
- 支持添加网站，防止精彩错过
- 本地存储记录，拒绝隐私泄漏

# 演示网址
```shell
https://search.bugkit.cn
```

# 如何启动项目

```shell
node server.js
```

# 容器部署启动？
1.构建镜像
```shell
docker build -t search-website:latest .
```

2.启动容器
```shell
docker-compose -f search-compose.yml up -d
```