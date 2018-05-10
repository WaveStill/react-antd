# create-react-app + antd 组件的 demo


# 实现功能，定制主题，实现按需加载，实现mockservice 本地mock数据 

### 环境准备
node v8.9.1 以上 （mockserver需要async语法支持）
npm v5.0 及 yarn 1.2 以上

### 项目搭建
1. 安装依赖
```
yarn install
```

2. 启动项目
```
yarn start
```
> 注意，默认启动3000端口，如果不是3000端口，则需要修改`mock/config/index.js`中的proxy `/`为相应的值。
> 默认为`http://localhost:3000/`

3. 启动mock server
```
yarn run mock:dev
```
> 默认启动9000端口， 可在`mock/config/index.js`中修改配置。

浏览器访问： http://localhost:9000
