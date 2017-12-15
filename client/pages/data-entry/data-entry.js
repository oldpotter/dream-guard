const config = require('../../config.js')
const Diary = require('../../models/diary.js')
const app = getApp()
Page({

	data: {
		content: undefined
	},


	onUnload() {
		if (!this.data.content) {
			return
		}
		let diary = new Diary(this.data.content)
		if(app.DEBUG){
			console.log('diary:',diary)
		}
		app.list.push(diary)
		wx.setStorageSync('list', app.list)
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