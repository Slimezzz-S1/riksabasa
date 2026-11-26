const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// let Metro load the SQLite wasm file
config.resolver.assetExts.push("wasm");

// the web version needs these headers (for SharedArrayBuffer)
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    middleware(req, res, next);
  };
};

module.exports = config;