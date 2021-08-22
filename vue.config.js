const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "ds",
        filename: "remoteEntry.js",
        exposes: {
          "./DSWrapper": "./src/components/DSWrapper",
          "./DSInput": "./src/components/DSInput",
          "./DSButton": "./src/components/DSButton",
          "./DSUserPicture": "./src/components/DSUserPicture",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3007,
    progress: false,
  },
};
