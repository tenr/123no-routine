/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.updateUserRSVPs = functions.firestore
  .document("events/{eventId}")
  .onWrite(async (change, context) => {
    // Get the event data
    const eventData = change.after.exists ? change.after.data() : null;

    // Check if event data is available and it has participants
    if (eventData && eventData.participants) {
      // Loop over the participants array in the event document
      for (const participant of eventData.participants) {
        // Get the participant's user document
        const userRef = admin
          .firestore()
          .collection("users")
          .doc(participant.id);

        // Run a transaction to update the user's RSVP array
        await admin.firestore().runTransaction(async (transaction) => {
          const userDoc = await transaction.get(userRef);

          // If the user exists, update their RSVP array
          if (userDoc.exists) {
            const userData = userDoc.data();
            const rsvps = userData.rsvps || [];

            // Construct the RSVP object
            const rsvpInfo = {
              eventId: context.params.eventId,
              eventName: eventData.activity, // Replace 'activity' with the field name for your event name in the document
              eventDate: eventData.date, // Replace 'date' with the field name for your event date in the document
            };

            // Check if the event is already in the user's RSVP array
            // This needs to change to account for checking an array of objects
            const existingRsvpIndex = rsvps.findIndex(
              (rsvp) => rsvp.eventId === rsvpInfo.eventId
            );
            if (existingRsvpIndex === -1) {
              rsvps.push(rsvpInfo);
            } else {
              // Optional: Update the existing RSVP info if necessary
              rsvps[existingRsvpIndex] = rsvpInfo;
            }

            // Update the user's document
            transaction.update(userRef, { rsvps });
          }
        });
      }
    }
  });
