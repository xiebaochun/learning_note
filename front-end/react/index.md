# 脚手架
	create-react-app （react-scripts是核心）
	nwb

## Change port
	`Windows users change the script like this:
	"scripts": { "start": "set PORT=5000 && react-scripts start",

	and Linux and Mac users like this:
	"scripts": { "start": "PORT=5000 react-scripts start",`

	or

	`change port in console before running
	SET PORT=3100

	then run the command
	npm start`

## 修改create-react-app的默认webpack配置（但是没必要）
	方法一：
		npm run eject(此方法不可逆)
	方法二：
		react-app-rewired(使用此插件来覆盖)


# 常用组件库
	prop-types
	ramda(cramda)
	classnames
	lodash


# 常见问题
	react-tap-event-plugin不能在React 16.4.0之后的版本使用
	回滚React版本

## 在线学习网址
	https://reacttraining.com/react-router/web/guides/scroll-restoration
	



