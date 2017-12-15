const moment = require('../vendor/moment.min.js')
const BACKUP_STATE = {
	FAIL: -1,
	SUCCESS: 1,
	NEW: 0
}
class Diary {
	constructor(content) {
		this.id = moment().format('x')
		this.content = content
		this.date = moment()
		this.state = 0
	}
}

module.exports = Diary