/*
 * @Author: XiJiangtao 
 * @Date: 2018-04-26 14:46:35 
 */


const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
       modifyVars: { "@primary-color": "#ADDEAF" },
     })(config, env);
  return config;
};