// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotify: {
    id: '8e391a0cb04d484e8963bf09bf48deb0',
    secret: '1c4adc3172404f15b3e3ad25d1179fd3',
    redirect_uri: 'http://localhost:4200'
  },
  firebase: {
    apiKey: 'AIzaSyB_sHPYM8O1AdmJ5ZOH3vbVbf_4Ma6va_U',
    authDomain: 'tab-player.firebaseapp.com',
    projectId: 'tab-player',
    storageBucket: 'tab-player.appspot.com',
    messagingSenderId: '618067583645',
    appId: '1:618067583645:web:59377c1dae0d3e3b41aa74',
    measurementId: 'G-47SYCQTKWH'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
