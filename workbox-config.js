module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{html,json,ico,png,txt,js,css}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'build/sw.js',
};
