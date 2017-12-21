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
		})
	},


	onClickSettingCell() {
		wx.navigateTo({
			url: './setting',
		})
	},

	onClickTagCell(){
		wx.navigateTo({
			url: './tag',
		})
	},


})