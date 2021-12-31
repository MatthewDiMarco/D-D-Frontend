module.exports = {
  "stories": [
    "../src/app/components/**/*.stories.mdx",
    "../src/app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react"
}