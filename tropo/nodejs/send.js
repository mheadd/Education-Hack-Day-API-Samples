/**
 * A simple example demonstrating how to use the Tropo Session API to send a text message.
 *
 * 1. Create a new Tropo account or log in to an existing account.
 *       http://tropo.com
 * 
 * 2. Create a Tropo Scripting app in your account, and create new hosted file
 * 
 * 3. Enter the contents of this file in the New Mapped File dialog. Click "create file" and create application.
 *
 * 4. Make sure to provision a PSTN number for your new Tropo scripting app. 
 *
 * 5. Use the messaging token from your account settings in the outbound.js file to send a message. 
 * 
 */ 

message(msg, { to:number, network:'SMS' });
