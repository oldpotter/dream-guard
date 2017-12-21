const app = getApp()
const Zan = require('../../vendor/zanui-weapp/dist/index')
Page(Object.assign({}, Zan.TopTips, {
	data: {
		autoBackup: undefined,
		isEmailValid: true,
		email: undefined,
		quick: undefined,
	},

	onLoad() {
		this.setData({
			autoBackup: app.backup.autoBackup,
			email: app.backup.email,
			quick: app.quick
		})
	},

	onUnload() {
		app.backup = {
			autoBackup: this.data.autoBackup,
			email: this.data.email
		}
		wx.setStorageSync('backup', app.backup)
	},

	onSwitchBackupChange(event) {
		this.setData({
			autoBackup: event.detail.value
		})
	},

	onSwitchQuickChange(event) {
		this.setData({
			quick: event.detail.value
		})
		app.quick = this.data.quick
		wx.setStorageSync('quick', app.quick)
		console.log(app.quick)
	},

	onBlur(event) {
		const email = event.detail.value
		const regExp = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
		const isEmailValid = regExp.test(email)
		this.setData({ isEmailValid })
		if (!isEmailValid) {
			this.showZanTopTips('邮箱格式不正确!')
			console.error(email)
			return
		}
		this.setData({ email })
	}

}))