yarn init 

yarn add @babel/cli @babel/preset-env @babel/core @babel/plugin-proposal-object-rest-spread

.gitignore 
    node_modules/

.babelrc 
    presets : present-env

package.json 
    script dev : babel ./main.js -o ./bundle.js
