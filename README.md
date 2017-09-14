# NOT WORKING?

If search function is not working, your OAuth Token is probably expired. OAuth Token is active only for 1 hour!

## Demo
[Live version on firebase server](https://ignas-spottitude.firebaseapp.com/)

>![sapttitude](https://github.com/ignasgri/AngularTwoSpottitude/blob/master/src/assets/images/spot.JPG)
>![artist](https://github.com/ignasgri/AngularTwoSpottitude/blob/master/src/assets/images/iggy.JPG)
>![album](https://github.com/ignasgri/AngularTwoSpottitude/blob/master/src/assets/images/album.JPG)
>![play](https://github.com/ignasgri/AngularTwoSpottitude/blob/master/src/assets/images/play.JPG)

## Run it

1. Clone app.
2. Register your app on https://developer.spotify.com and genaterate OAuth Token.
3. Place your OAuth Token inside `services` folder - `music.service.ts` file. Your token should look like this `authToken = 'BQCSPiXSfqDyw5dJZaEw5tfofIpvfzX9msCDJeTWvpH_vNfdlK2pKWZYJZP5t91i-Qj2OPRMXpZ9-mvclpPno-K2VbiZNoht_2fo47lpKgnhNjivB_B8uNQDUaJxD56btH2o'`
4. Run program in comand line `ng s`
5. Go to http://localhost:4200  

## Deploy to firebase database/server
1. Create `dist` folder using command `ng build --env=prod`
2. Install firebase tools `npm install -g firebase-tools`
3. Login to your firebase account `firebase login`
4. Install your app `firebase init`
5. - [x] 'Hosting: Configure and deploy Firebase Hosting sites.
6. *? What do you want to use as your public directory?* type in **dist**
7. *? Configure as a single-page app (rewrite all urls to /index.html)?* **Yes**
8. *? File dist/index.html already exists. Overwrite?* **No**
9. To deploy app type in into command line `firebase deploy`
10. Use link to check you app online.
### Spottitude

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

### Development server

Run `ng serve` or `ng s` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


