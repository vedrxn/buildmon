const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const projectDir = __dirname

const srcDir = path.join(projectDir, 'src')
const distDir = path.join(projectDir, 'dist')

const inputDir = path.join(srcDir, 'frontend')
const outputDir = path.join(distDir, 'frontend')

module.exports = {
  devServer: {
    contentBase: outputDir,
    historyApiFallback: true
  },
  devtool: 'source-map',
  entry: path.join(inputDir, 'index.tsx'),
  mode: env,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(projectDir, 'tsconfig.frontend.json') 
            }
          }
        ]
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /.js$/,
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: outputDir, 
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(inputDir, 'index.template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
