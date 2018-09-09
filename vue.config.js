module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import \'@/assets/scss/variables.scss\';'
      }
    }
  }
};
