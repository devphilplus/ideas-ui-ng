// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  app_name: 'idEAS',

  url_base: 'http://localhost:4200',
  api_base: 'http://localhost:8081',

  session_token_key: 'sid',

  default_user: 'you',

  path_register: '/auth/register',
  path_register_complete: '/auth/register/complete',
  path_register_details: '/auth/register/info',

  path_signin: '/auth/sign-in',

  path_user_current: '/user/current'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
