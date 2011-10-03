/**
 * A simple example demonstrating how to use the Tropo Session API to send a text message.
 *
 * 1. Install Tropo WebAPI module.
 *       npm install tropo-webapi
 * 
 * 2. Create a Tropo scripting app in your Tropo account with the following code:
 *       message(msg, { to:number, network:'SMS' });
 * 
 * 3. The values for 'msg' and 'number' are sent to Tropo from your Node.js script (see below).
 *
 * 4. Make sure to provision a PSTN number for your Tropo scripting app. 
 *
 * 5. Execute by doing:
 *        node path/to/your/script.js
 */ 
 
// Include required modules.
require('tropo-webapi/tropo-session');
var util = require('util');

// The token for your Tropo scripting app (the 'Messaging' token in your application settings).
var token = 'your-token-goes-here';

// Create a new instance of the Tropo session object.
var session = new TropoSession();

// Invoke the makeApiCall() method and pass in token, message to send and number to send to.
session.makeApiCall(token, {msg: 'This is a test message from Node.js.', number: '14072223344'});

// Write out put to console.
session.addListener('responseBody', function(response) {
  util.puts(response);
});
