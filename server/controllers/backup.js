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
		subject: `【梦境守护者】${data.diary.id}`,
		text: data.diary.content,
	};

	await transporter.sendMail(options)
		.then(info => {
			ctx.state.data = data.diary.id
			ctx.state.code = 1000
		})
		.catch(err=>{
			ctx.state.code = -1
			ctx.state.data = data.diary.id
		})

}