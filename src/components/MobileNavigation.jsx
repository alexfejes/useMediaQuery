import { useState } from 'react'
import { navItems } from '../data'
import Icon from './Icon'

// Streamlined mobile view: a slim top bar with a menu button that opens a drawer.
export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="mobile-bar">
      <div className="brand">
        <span className="brand-mark">P</span>
        <span className="brand-name">Pulseboard</span>
      </div>
      <button type="button" className="icon-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Icon name="menu" />
      </button>

      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <nav className="drawer">
            <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link" onClick={() => setOpen(false)}>
                <Icon name={item.icon} />
                <span>{item.label}</span>
                {item.badge && <span className="badge">{item.badge}</span>}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  )
}
