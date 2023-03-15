export const environment = {
  production: true,

  app_name: 'idEAS',

  url_base: 'http://localhost:4200',
  api_base: 'http://localhost:8081',

  session_token_key: 'sid',

  default_user: 'you',
  
  path_register: '/auth/register',
  path_register_complete: '/auth/register/complete',
  path_register_details: '/auth/register/info',

  path_signin: '/auth/sign-in',

  path_user_current: '/user/current',

  path_user_change_password: '/user/password/set',
  path_user_profile_update: '/user/profile/update',

  path_client_join: '/user/client/join'
};
