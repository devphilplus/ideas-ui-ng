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
  path_user_current_tenant_set: '/user/current/tenant/set',

  path_user_change_password: '/user/password/set',
  path_user_profile_update: '/user/profile/update',
  
  path_user_tenant_join: '/user/tenant/join',
  
  path_tenant_add: '/tenants/add',
  path_tenant_get: '/tenants/get',
  path_tenant_get_by_slug: '/tenants/get/slug',

  path_tenant_roles_fetch: '/tenants/roles/fetch',
  
  path_tenants_fetch: '/tenants/fetch',
  path_tenants_members_fetch: '/tenants/members/fetch',

  path_inv_warehouses_fetch: '/inventory/warehouses',
  path_inv_warehouses_add: '/inventory/warehouses/add'
};
