// This is an example of processing inboud SMS messages
// and sending outbound SMS messages using the SMSified 
// JavaScript library.
// For smsified sdk docs, see https://github.com/smsified/smsified-node

// To use specify a CloudMine URL that calls this snippet 
// (here named smsified_echo) as the Subscription URL for your phone number
// (substituting appropriate values for the {app_id} and {api_key}
// https://api.cloudmine.me/v1/app/{app_id}/text?apikey={api_key}&f=smsified_echo

// For full CloudMine Server-side code documentation, see:
// https://cloudmine.me/developer_zone#code/overview

// parse incoming JSON object as an Inbound Message object
// data.input will be posted by SMSified for incoming messages
var inbound = new smsified.InboundMessage(data.input);

// extract relevant information
var senderAddress = inbound.senderAddress;
var toAddress = inbound.destinationAddress;
var message = inbound.message;

// provide SMSified login credentials
var sms = new smsified.SMSified('<username>', '<password>');

// sms the message back to the sender 
var options = {senderAddress: toAddress,
               address: senderAddress,
               message: 'you said: ' + message};

sms.sendMessage(options, function(result) {
    // return the result from the API call
    exit(result);
});
