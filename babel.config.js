const config = require("./config." + (process.env.NODE_ENV || "dev") + ".js");

module.exports = {
  presets: [
    "next/babel",
  ],
  plugins: [
    ["@babel/plugin-proposal-optional-chaining"],
    ["transform-define", config],
    ["module-resolver", {
      root: ["."],
      alias: {
        styles: "./styles"
      },
      cwd: "babelrc",
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["lodash"],
    ["import", {
      libraryName: "antd"
    }]
  ]
}
