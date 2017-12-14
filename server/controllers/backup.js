const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
	service: 'qq',
	auth: {
		user: '1472623890@qq.com',
		pass: 'zwtpdexswtpdibhf'
	}
});

module.exports = (ctx, next) => {
	var options = {
		from: '1472623890@qq.com',
		to: '67538417@qq.com',
		subject: '一封来自Node Mailer的邮件',
		text: '一封来自Node Mailer的邮件',
		html: '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>',
	};
	transporter.sendMail(options, function (err, info) {
		if (err) {
			console.log(err);
			ctx.state.code = 4444
			return;
		}
		ctx.state.code = 1985
		console.log('发送成功');
	});

}