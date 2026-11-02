import { navItems } from '../data'
import Icon from './Icon'

interface Props {
  activeId: string
  onSelect: (id: string) => void
}

// The bulky desktop sidebar: fixed 280px wide, full labels, plan card.
export default function Sidebar({ activeId, onSelect }: Props) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">P</span>
        <span className="brand-name">Pulseboard</span>
      </div>

      <nav className="sidebar-nav" aria-label="Main">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link${item.id === activeId ? ' is-active' : ''}`}
            aria-current={item.id === activeId ? 'page' : undefined}
            onClick={() => onSelect(item.id)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {item.badge !== undefined && <span className="badge">{item.badge}</span>}
          </button>
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
