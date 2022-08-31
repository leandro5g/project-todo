module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','module:metro-react-native-babel-preset'],
    plugins: [[
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@dtos': './src/dtos',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@config': './src/config',
        },
      },
    ],]
  };
};


