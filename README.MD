<p align="center">
    <img src="https://github.com/celine-crystal/search-website/blob/main/assets/favicon-32x32.png" alt="favicon" width="32"/>
<p>
<h2 align="center">
    Sooogo
<h2>

# Languages
English / [中文](https://github.com/celine-crystal/search-website/blob/main/README-CN.MD)

# Features
- Aggregates major search engines (Google, Baidu, Bing) with support for one-click switching between search engines
- Supports recording the last 10 search queries
- Supports adding websites to prevent missing out on interesting content
- Local storage of records to ensure privacy protection

# Demo URL
```shell
https://search.bugkit.cn
```

# How to Start the Project

```shell
node server.js
```

# Container Deployment

1. Build the Image
```shell
docker build -t search-website:latest .
```

2. Start the Container
```shell
docker-compose -f search-compose.yml up -d
```