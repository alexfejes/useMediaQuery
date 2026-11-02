export const navItems = [
  { id: 'overview', label: 'Overview', icon: 'grid' },
  { id: 'analytics', label: 'Analytics', icon: 'chart' },
  { id: 'customers', label: 'Customers', icon: 'users', badge: 12 },
  { id: 'inventory', label: 'Inventory', icon: 'box' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'help', label: 'Help Center', icon: 'help' },
]

export const stats = [
  { label: 'Revenue', value: '$48,290', change: '+12.4%', trend: 'up' },
  { label: 'Orders', value: '1,284', change: '+4.1%', trend: 'up' },
  { label: 'Active users', value: '9,402', change: '-1.8%', trend: 'down' },
  { label: 'Refund rate', value: '0.9%', change: '-0.3%', trend: 'up' },
]

export const orders = [
  { id: '#10482', customer: 'Customer A', product: 'Pro Plan (annual)', date: 'Nov 2', amount: '$1,188.00', status: 'Paid' },
  { id: '#10481', customer: 'Customer B', product: 'Team Seats x5', date: 'Nov 2', amount: '$245.00', status: 'Pending' },
  { id: '#10480', customer: 'Customer C', product: 'Starter Plan', date: 'Nov 1', amount: '$19.00', status: 'Paid' },
  { id: '#10479', customer: 'Customer D', product: 'Pro Plan (monthly)', date: 'Oct 31', amount: '$99.00', status: 'Refunded' },
  { id: '#10478', customer: 'Customer E', product: 'Enterprise Add-on', date: 'Oct 31', amount: '$2,400.00', status: 'Paid' },
]
