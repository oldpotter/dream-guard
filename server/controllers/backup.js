const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
	service: 'qq',
	auth: {
		user: '1472623890@qq.com',
		pass: 'zwtpdexswtpdibhf'
	}
});

module.exports = async (ctx, next) => {
	const data = ctx.request.body
	const options = {
		from: '1472623890@qq.com',
		to: data.email,
		subject: `【梦境守护者】${data.diary.date}`,
		text: data.diary.content,
	};
	
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