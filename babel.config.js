module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      // This is the dotenv config - check env.js config file
      ["module:react-native-dotenv", {        
        "moduleName": "@env",
        "path": ".env",        
      }]
    ]
  };
};
