Page({
	data: {
		userInfo: undefined,
	},

	onLoad() {
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

	onClickBackupCell(){
		wx.navigateTo({
			url: './backup',
		})
	}
})