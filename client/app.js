//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
	onLaunch: function () {
		qcloud.setLoginUrl(config.service.loginUrl)
		this.list = wx.getStorageSync('list') || []
	},

	onHide() {
		wx.setStorageSync('list', this.list)
	},

	list: undefined
})