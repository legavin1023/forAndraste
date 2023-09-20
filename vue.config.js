const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/forTheAndraste/" : "/",
  transpileDependencies: true,
  chainWebpack: (config) => {
    // SVG 파일에 대한 설정
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");

    // .mpa 파일에 대한 설정
    config.module
      .rule("m4a")
      .test(/\.m4a$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      });
  },
});
//npm run build
//npm install gh-pages --save-dev
//npm run deploy
