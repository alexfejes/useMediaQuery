import { navItems } from '../data'
import Icon from './Icon'

interface Props {
  activeId: string
  onSelect: (id: string) => void
}

// Tablet view: the sidebar collapsed to a 72px icon-only rail.
export default function IconRail({ activeId, onSelect }: Props) {
  return (
    <aside className="icon-rail">
      <span className="brand-mark">P</span>
      <nav className="icon-rail-nav" aria-label="Main">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`rail-link${item.id === activeId ? ' is-active' : ''}`}
            aria-current={item.id === activeId ? 'page' : undefined}
            aria-label={item.label}
            title={item.label}
            onClick={() => onSelect(item.id)}
          >
            <Icon name={item.icon} />
            {item.badge !== undefined && <span className="dot" />}
          </button>
        ))}
      </nav>
    </aside>
  )
}
