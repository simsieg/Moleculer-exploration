const {ServiceBroker} = require('moleculer')

const broker = new ServiceBroker({
  transporter: 'TCP',
})

function handleNewUser (ctx) {
  const user = {
    name: ctx.params.name,
    date: Date.now(),
  }
  broker.emit('users.created', user)
}

broker.createService({
  name: 'users',
  actions: {
    new: {
      handler: handleNewUser,
    },
  },
})

broker.start()
