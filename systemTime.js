const {ServiceBroker} = require('moleculer')

const broker = new ServiceBroker({
  transporter: 'TCP',
})

broker.createService({
  name: 'time',
  actions: {
    now: Date.now,
  },
})

broker.start()
