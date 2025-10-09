const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    //path: path.resolve(__dirname, '../../backend/plugins/shared/BrainDriveOllama/v1.0.0/dist'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: "auto",
    clean: true,
    library: {
      type: 'var',
      name: 'BrainDriveOllama'
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader'
        ]
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "BrainDriveOllama",
      library: { type: "var", name: "BrainDriveOllama" },
      filename: "remoteEntry.js",
      exposes: {
        "./ComponentOllamaServer": "./src/ComponentOllamaServer",
        "./AIPromptChat": "./src/components/AIPromptChat"
      },
      shared: {
        react: { 
          singleton: true,
          requiredVersion: deps.react,
          eager: true
        },
        "react-dom": { 
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 9006,
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
  },
};
