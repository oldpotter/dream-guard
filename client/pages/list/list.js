const config = require('../../config.js')
Page({
	onClickAddBtn() {
		console.log(`url:${config.service.backupUrl}`)
		wx.request({
			url: config.service.backupUrl,
			success: function(res) {
				console.log(res)
			},
			fail: function(res) {},
			complete: function(res) {},
		})
		wx.navigateTo({
			url: '../data-entry/data-entry',
		})
	},
})