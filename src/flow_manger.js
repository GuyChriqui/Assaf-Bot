'use strict';

const incomingMessageUtils = require('../Utils/MessageUtils/incoming_message_ultis');

exports.processMessage = function(senderPSID, message) {
	logMessageText(senderPSID, message);

	const requestObject = {
		psid: senderPSID,
		message: message
	};
};

function logMessageText(senderPSID, message) {
	const text = incomingMessageUtils.getTextFromMessage(message);
	console.log(`PSID: ${senderPSID}, sent a message: ${text}`);
}
