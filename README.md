# Moleculerjs Exploration

Simple microservices communicating via moleculerjs.

## Installation

```sh
npm install
```

## Run

### Execution

Run, each in a new terminal:

```
node index.js
```

```
node users.js
```

```
node emailSender.js
```

```
node emailTexter.js
```

```
node systemTime.js
```

### Interaction

Visit http://localhost:3000/users/yourName to create a new User.
In the terminal of `emailSender.js`, your personal Email will be printed.


Visit http://localhost:3000/time to get the systemtime.



## Services

| name           | description                                                    |
|----------------|----------------------------------------------------------------|
| index.js       | Exposes an interface to localhost and dispatches the requests. |
| users.js       | Creates a new User object.                                     |
| emailSender.js | Creates and Sends Emails.                                      |
| emailTexter.js | Provides contents for Emails.                                  |
| systemTime.js  | Provides the time of the system.                               |
