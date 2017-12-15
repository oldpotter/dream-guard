//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
	onLaunch: function () {
		qcloud.setLoginUrl(config.service.loginUrl)
		this.list = wx.getStorageSync('list') || []
		this.backup = wx.getStorageSync('backup') || {}
		if (this.backup.autoBackup && this.backup.email) {
			console.log('backup')
			this.list.forEach(diary => {
				const data = {
					diary: diary,
					email: this.backup.email
				}
				console.log(data)
				wx.request({
					url: config.service.backupUrl,
					data: data,
					method: 'POST',
					success(res){
						console.log('success:',res)
					},
				})
			})
		}

	},
	onHide() {
		wx.setStorageSync('list', this.list)
		wx.setStorageSync('backup', this.backup)
	},

	list: undefined,
	backup: undefined,//自动备份
})