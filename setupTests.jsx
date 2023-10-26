// setupTests.js
//const { initializeTestApp } = require('firebase-functions-test');
import * as firebase from "@firebase/rules-unit-testing";

const testApp = firebase.initializeTestEnvironment({
  projectId: 'craftmyportfolio-studio',
  auth: {
    uid: 'test-user',
    email: "test@user.com" // This is a sample UID, use your actual UID
  },
});

// Attach the emulated auth instance to the global Firebase instance
const { auth } = testApp;
// const { currentUser } = firebase.auth();
// firebase.auth().currentUser = currentUser;
