var merge = require("webpack-merge");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options =>
        merge(options, {
          transformAssetUrls: {
            img: "src",
            image: "xlink:href",
            "b-img": "src",
            "b-img-lazy": ["src", "blank-src"],
            "b-card": "img-src",
            "b-card-img": "img-src",
            "b-carousel-slide": "img-src",
            "b-embed": "src"
          }
        })
      );
  }
};
