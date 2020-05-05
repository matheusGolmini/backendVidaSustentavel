const presets = ["@babel/env", "@babel/typescript"];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-transform-regenerator"
];

module.exports = { presets, plugins };
