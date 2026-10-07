module.exports = (api) => {
  const isProd = api.env('production');

  return {
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", { "runtime": "automatic", development: !isProd }],
    ],
  };
};
