module.exports = {
  mode: "development",
  entry: ["./client/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
