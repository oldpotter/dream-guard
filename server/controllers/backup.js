const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
	service: 'qq',
	auth: {
		user: '1472623890@qq.com',
		pass: 'zwtpdexswtpdibhf'
	}
});

module.exports = async (ctx, next) => {
	const { diary } = ctx.request.body
	const options = {
		from: '1472623890@qq.com',
		to: '67538417@qq.com',
		subject: '一封来自Node Mailer的邮件',
		text: diary,
	};
	// await transporter.sendMail(options, function (err, info) {
	// 	if (err) {
	// 		console.log(err);
	// 		ctx.state.code = 4444
	// 		return;
	// 	}
	// 	ctx.state.code = 1985
	// 	console.log('发送成功');
	// });
	await transporter.sendMail(options)
		.then((err, info) => {
			if (err) {
				console.log(err);
				ctx.state.code = 4444
				ctx.state.data = err
				return
			}
			ctx.state.code = 1985
			console.log('发送成功');
		})

}