// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   if (Cypress.config('baseUrl').includes('dev')) {
//     console.log('this is dev');
//     console.log(options);
//   }

//   // originalFn is the existing `visit` command that you need to call
//   // and it will receive whatever you pass in here.
//   //
//   // make sure to add a return here!
//   return originalFn(url, options);
// });
