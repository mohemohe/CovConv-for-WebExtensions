module.exports = [
  {
    entry: {
      'firefox/contextmenu': './src/firefox/contextmenu.ts',
      'firefox/covconv': './src/firefox/covconv.ts',
      'chrome/contextmenu': './src/chrome/contextmenu.ts',
      'chrome/covconv': './src/chrome/covconv.ts',
    },
    output: {
      filename: 'dist/[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'babel-loader',
          query: {
            presets: 'es2015',
          },
        },
        {
          test: /\.ts$/,
          enforce: 'post',
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
  }
];
