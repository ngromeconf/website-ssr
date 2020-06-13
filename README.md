# Ngrome Website with SSR (Angular Universal + Firebase)

This is not the official NGROME website repository. This project was created for only experimental purpose.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Test the UNIVERSAL SSR

Run `npm run build && npm run serve:ssr` this command start the SSR with Angular Universal in your `http://localhost:4000/`.

## Test the Firebase SSR

Move in the functions folder:
Run `npm run build` this command copy the dist folder and build the server that should be deployed on Firebase Functions.

Run `firebase serve` to start the local demo server "emulator" inside the firebase function.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
