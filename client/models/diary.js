const moment = require('../vendor/moment.min.js')
//备份状态
const BACKUP_STATE = {
	FAIL: -1,//备份失败
	SUCCESS: 1,//备份成功
	NEW: 0//从未备份
}
class Diary {
	constructor(content) {
		this.id = moment().format('x')
		this.content = content
		this.date = moment()
		this.state = 0
		this.isLucid = false
	}
}

module.exports = Diary