const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const path = require("path");
module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-swc",
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {},
        swcMinifyOptions: {},
      },
    },
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  managerWebpack(config) {
    config.plugins.push(new SpeedMeasurePlugin());
    return config;
  },
  webpackFinal(config) {
    config.plugins.push(new SpeedMeasurePlugin());
    config.performance.maxEntrypointSize = 2048000;
    config.performance.maxAssetSize = 2048000;
    return config;
  },
};
