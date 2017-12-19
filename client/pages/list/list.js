const config = require('../../config.js')
const moment = require('../../vendor/moment.min.js')
const app = getApp()
Page({
	data: {
		list: undefined,
		hiddenBtn: false,
	},

	onShow() {
		this.setData({
			list: app.list
		})
		this.data.list.reverse().forEach(diary=>{
			diary.date = moment(diary.date).format('YYYY年MM月DD日')
		})
		this.setData({
			list: this.data.list
		})
		console.log(this.data.list)
	},

	onReady() {
		if (app.quick && app.night) {
			wx.navigateTo({
				url: '../data-entry/data-entry',
			})
		}
	},

	onPageScroll() {
		this.setData({
			hiddenBtn: true
		})
		setTimeout(() => this.setData({ hiddenBtn: false }), 1000)
	},

	onClickAddBtn() {
		console.log(`url:${config.service.backupUrl}`)
		wx.navigateTo({
			url: '../data-entry/data-entry',
		})
	},


})