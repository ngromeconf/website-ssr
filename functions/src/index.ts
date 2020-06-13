import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const universal = functions
  .runWith({ memory: '2GB', timeoutSeconds: 120 })
  .https.onRequest((request, response) => {
    require(`${process.cwd()}/dist/webpack/server`).app(request, response);
  });
