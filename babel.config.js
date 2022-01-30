const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "64",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.0.0",
      /* Needs correcting: Multiple properties with the same key in object literals can cause
      unexpected behavior in your application. Consider merging these properties into one.
      Also, quoting property name is unnecessary. */
      "targets": {
        "esmodules": true,
        "ie": "11"
      }
    },
  ],
]
module.exports = { presets }