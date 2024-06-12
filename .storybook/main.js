/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
};
export default config;
