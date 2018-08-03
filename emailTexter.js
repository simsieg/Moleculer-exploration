const {ServiceBroker} = require('moleculer')

const broker = new ServiceBroker({
  transporter: 'TCP',
})

function createWelcomeEmail (ctx) {
  return `Hi ${ctx.params.user.name}!\nYour account was created at ${new Date(ctx.params.user.date)
    .toISOString()}.\nSee You!`
}

broker.createService({
  name: 'emailTexter',
  actions: {
    createWelcomeEmail: {
      handler: createWelcomeEmail,
    },
  },
})

broker.start()
