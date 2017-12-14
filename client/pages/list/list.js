const config = require('../../config.js')
const app = getApp()
Page({

	data: {
		list: undefined
	},

	onShow() {
		this.setData({
			list: app.list
		})
	},

	onReady() {
		wx.navigateTo({
			url: '../data-entry/data-entry',
		})
	},

	onClickAddBtn() {
		console.log(`url:${config.service.backupUrl}`)
		wx.navigateTo({
			url: '../data-entry/data-entry',
		})
	},
})