const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
  const dependencies = require("./package.json").dependencies;

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
          "./DSConfig": "./src/plugins/vuetify",
        },
        shared: {
          ...dependencies,
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          }
        },
      }),
    ],
  },
  devServer: {
    port: 3007,
  },
};
