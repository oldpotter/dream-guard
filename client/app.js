//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
const moment = require('./vendor/moment.min.js')
App({
	onLaunch: function () {
		qcloud.setLoginUrl(config.service.loginUrl)
		this.list = wx.getStorageSync('list') || []
		this.backup = wx.getStorageSync('backup') || {}
		this.quick = wx.getStorageSync('quick')
		setInterval(() => this.doBackup(), 30000)
		this.checkNight()
		setInterval(() => this.checkNight(), 60000)
	},


	onHide() {
		wx.setStorageSync('list', this.list)
		wx.setStorageSync('backup', this.backup)
		wx.setStorageSync('quick', this.quick)
	},

	checkNight() {
		const now = moment()
		this.night = now.hour() > 22 || now.hour() < 7
		console.log(this.night)
	},

	doBackup() {
		//backup
		if (this.backup.autoBackup && this.backup.email) {
			this.list
				.filter(diary => diary.state == 0)
				.forEach(diary => {
					const data = {
						diary: diary,
						email: this.backup.email
					}
					wx.request({
						url: config.service.backupUrl,
						data: data,
						method: 'POST',
						success(res) {
							const code = res.data.code
							if (code == -1) {
								diary.state = -1
							} else if (code == 1000) {
								diary.state = 1
							}
						},
					})
				})
		}
	},

	DEBUG: true,
	list: undefined,
	backup: undefined,//自动备份
	quick: undefined,//快速模式
	night: undefined,
})