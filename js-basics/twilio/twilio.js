const twilio = require('twilio');

const accountSid = 'AC3f6ad834bdc096bbf5ed8836135e2664'; // My Account SID
const authToken = '78335f21d9623601a0900997784b4bd6'; // My Auth Token

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Hello from Node',
        to: '+8035084862', // Text this number
        from: '+19853317822', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
    done();