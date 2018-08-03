const {ServiceBroker} = require('moleculer')
const ApiService = require('moleculer-web')

const broker = new ServiceBroker({
  transporter: 'TCP',
})

broker.createService({
  name: 'api',
  mixins: [ApiService],
  settings: {
    routes: [{
      aliases: {
        'GET /users/:name': 'users.new',
        'GET /time': 'time.now',
      },
    }],
  },
})

broker.start()
