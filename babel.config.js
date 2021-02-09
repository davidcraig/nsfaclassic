// babel.config.js
let NodeEnv = process.env.NODE_ENV
let BabelIgnore = [
  "__snapshots__/**"
]

if (NodeEnv == 'test') {
} else {
  BabelIgnore.push("**/*.test.js")
  BabelIgnore.push("**/*.spec.js")
}

module.exports = {
  presets: [
    'next/babel'
  ],
  ignore: BabelIgnore,
  // plugins: ["react-docgen"]
}
