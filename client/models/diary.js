const moment = require('../vendor/moment.min.js')
class Diary {
	constructor(content){
		this.content = content
		this.date = moment()
		this.backup = false
	}
}

module.exports = Diary