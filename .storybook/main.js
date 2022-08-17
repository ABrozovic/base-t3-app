module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // 'storybook-addon-next',
    // {
    //   name: "storybook-addon-next",
    //   options: {
    //     // nextConfigPath: './../next.config.mjs'
        
    //     nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    //   },
    // },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // webpackFinal: async (config) => {
  //   config.resolve.alias["next/image"] = require.resolve("./NextImage.js");
  //   return config;
  // },
};
