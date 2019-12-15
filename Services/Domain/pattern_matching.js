"use strict";

const constants = require("../../constants");
const nlpDiagnosis = require("./nlp_diagnosis");
const incomingMessageUtils = require("../MessageUtils/incoming_message_ultis");

// Find best matching pattern to  incoming message
exports.matchPattern = function(message) {
  // Extract payloda from message object
  const payload = incomingMessageUtils.extractPayloadFromMessage(message);
  // If message is a payload
  if (payload) return handlePayload(payload);

  // Get intent of message
  const diagnosis = nlpDiagnosis.getNlpResults(message);
  const diagnosisString = JSON.stringify(diagnosis, null, 4);
  console.log("Message diagnosis:" + diagnosisString);

  return undefined;
};

// Handle known payloads
function handlePayload(payload) {
  constants.log("# Incoming message is a payload");
  if (messageText === "GET_STARTED") return require("../../Patterns/greeting_pattern");
  return undefined;
}
