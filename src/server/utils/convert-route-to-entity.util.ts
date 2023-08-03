const mapping: Record<string, string> = {
  organizations: 'organization',
  reports: 'report',
  tests: 'test',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
