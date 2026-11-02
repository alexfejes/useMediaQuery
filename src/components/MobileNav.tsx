import { useEffect, useState } from 'react'
import { navItems } from '../data'
import Icon from './Icon'

interface Props {
  activeId: string
  onSelect: (id: string) => void
}

// Mobile view: a slim top bar, with the nav tucked into a slide-out drawer.
export default function MobileNav({ activeId, onSelect }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const active = navItems.find((item) => item.id === activeId)

  return (
    <>
      <header className="mobile-bar">
        <button
          type="button"
          className="icon-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
        </button>
        <span className="mobile-title">{active?.label}</span>
        <span className="brand-mark">P</span>
      </header>

      <div
        className={`drawer-backdrop${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <div className="brand">
            <span className="brand-mark">P</span>
            <span className="brand-name">Pulseboard</span>
          </div>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <Icon name="close" />
          </button>
        </div>
        <nav className="sidebar-nav" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link${item.id === activeId ? ' is-active' : ''}`}
              aria-current={item.id === activeId ? 'page' : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                onSelect(item.id)
                setOpen(false)
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.badge !== undefined && <span className="badge">{item.badge}</span>}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
