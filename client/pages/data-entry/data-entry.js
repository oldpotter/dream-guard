const config = require('../../config.js')
const Diary = require('../../models/diary.js')
const app = getApp()
Page({
	data: {
		content: undefined,
		night: undefined,
		isLucid: false
	},

	onLoad() {
		this.setData({
			night: app.night
		})
	},

	onUnload() {
		if (!this.data.content) {
			return
		}
		let diary = new Diary(this.data.content)
		diary.isLucid = this.data.isLucid
		if (app.DEBUG) {
			console.log('diary:', diary)
		}
		app.list.push(diary)
		wx.setStorageSync('list', app.list)
	},

	onChange(event) {
		this.setData({
			isLucid: event.detail.value.length > 0 ? true : false
		})
		// console.log(this.data.isLucid)
	},

	onInput(event) {
		const content = event.detail.value
		this.setData({
			content: content
		})
	},

	onTapBtn() {
		wx.navigateBack({
			delta: 1,
		})
	}
})