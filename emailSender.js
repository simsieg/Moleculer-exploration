const {ServiceBroker} = require('moleculer')

const broker = new ServiceBroker({
  transporter: 'TCP',
})

broker.createService({
  name: 'emailSender',
  events: {
    'users.created': (user) => {
      broker
        .call('emailTexter.createWelcomeEmail', {user})
        .then(console.info) // Dispatch here to Email server
    },
  },
})

broker.start()




