注意的事项：
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

package.json
	"jest": {
	  "roots": [
	    "<rootDir>/__tests__/"
	  ],
	  "transform": {
	    "^.+\\.js$": "babel-jest",
	    "^.+\\.jsx?$": "babel-jest"
	  },
	  "moduleNameMapper": {
	    "^app(.*)$": "<rootDir>/src/app$1"
	  }
	},

.babelrc
	在最后加上
		"test": ["jest"]


如果测试es6的file:

新建一个babal.config.js文件 而不是.babelrc(无用)
	module.exports = {
	  presets: ['@babel/preset-env', '@babel/preset-react'],
	};


需要用到enzyme
npm install --save-dev enzyme


遇到的问题解决方案:

	
	rebuilt package-lock

	npm install --package-lock to update 

	q:Migrate to babel 7: Requires Babel "^7.0.0-0", but was loaded with "6.26.3"
	s:	1 npm i --save-dev babel-core@^7.0.0-bridge
		2 add "resolutions": { "babel-core": "^7.0.0-bridge" } to package.json file root level 


	q:TypeError: Cannot read property 'contextTypes' of undefined
	s:  1 The problem here is that you are redefining the the app component with the result of the shallow call
		2 The solution would be to use a different name