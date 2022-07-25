const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置开发中服务器
  devServer:{
    //端口
    port:8080,
    //打开浏览器
    open:false,
    proxy:{
        '/api':{
          target:"https://api.iynn.cn/film/api/v1",
          //是否Origin改变
          changeOrigin:true,
          secure:true,
          pathRewrite:{
            '^/api' : ''
          }

        }
    }
  }
})
