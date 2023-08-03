interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Project Owner'],
  customerRoles: ['End User'],
  tenantRoles: ['Project Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'autotest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
