# 使用官方的 Node.js 运行时镜像作为基础镜像
FROM node:lts-bullseye-slim

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 暴露应用运行的端口
EXPOSE 3002

# 启动应用
CMD ["node", "server.js"]
