const admin = require("firebase-admin");

// Replace with your service account JSON file
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function enableEmailPassword() {
  try {
    const config = await admin.auth().updateAuthProviderConfig("email", {
      enabled: true
    });
    console.log("Email/Password auth enabled:", config);
  } catch (error) {
    console.error("Error enabling Email/Password auth:", error);
  }
}

enableEmailPassword();
