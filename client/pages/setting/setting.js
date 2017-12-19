const app = getApp()
Page({
	data: {
		userInfo: undefined,
		quick: undefined,
	},

	onLoad() {
		this.setData({
			quick: app.quick
		})
		const _this = this
		wx.getUserInfo({
			withCredentials: true,
			success: function (res) {
				_this.setData({
					userInfo: res.userInfo
				})
			},
			fail: function (res) {
				console.error(res)
			},
			complete: function (res) { },
		})
	},



	onSwitchChange(event) {
		this.setData({
			quick: event.detail.value
		})
		app.quick = this.data.quick
		wx.setStorageSync('quick', app.quick)
		console.log(app.quick)
	},

	onClickBackupCell() {
		wx.navigateTo({
			url: './backup',
		})
	}
})