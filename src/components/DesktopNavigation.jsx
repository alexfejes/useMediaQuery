import { navItems } from '../data'
import Icon from './Icon'

// The bulky desktop sidebar: fixed 280px wide, full labels, plan card.
export default function DesktopNavigation() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">P</span>
        <span className="brand-name">Pulseboard</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-link">
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {item.badge && <span className="badge">{item.badge}</span>}
          </a>
        ))}
      </nav>

      <div className="plan-card">
        <strong>Pro plan</strong>
        <p>8 of 10 seats used. Upgrade for unlimited workspaces.</p>
        <button type="button" className="btn btn-primary">Upgrade</button>
      </div>
    </aside>
  )
}
