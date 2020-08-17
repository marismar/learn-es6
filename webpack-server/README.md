yarn init 

yarn add @babel/cli @babel/preset-env @babel/core @babel/plugin-proposal-object-rest-spread

yarn add webpack webpack-cli babel-loader@8.0.0-beta.0 webpack-dev-server -D

.gitignore 
    node_modules/

.babelrc 
    presets : present-env

webpack.config.js

package.json 
    script dev : webpack-dev-server --mode=development
    script build: webpack --mode=production