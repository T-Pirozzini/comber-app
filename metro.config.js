// Since Firebase is version > 9.7.x, need to configure metro.config.js file to make sure that the Firebase JS SDK is bundled correctly.

const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");
module.exports = defaultConfig;
