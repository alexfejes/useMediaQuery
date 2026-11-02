import { useState } from 'react'
import DashboardContent from './DashboardContent'
import Sidebar from './Sidebar'
// FIX (step 1 of 2): Import the useMediaQuery hook plus the two smaller
// navigation layouts: an icon-only rail for tablets and a top bar with a
// slide-out drawer for phones. (Uncomment src/hooks/useMediaQuery.ts too.)
// import { useMediaQuery } from '../hooks/useMediaQuery'
// import IconRail from './IconRail'
// import MobileNav from './MobileNav'

export default function Dashboard() {
  const [activeId, setActiveId] = useState('overview')

  // FIX (step 2 of 2): Watch the viewport with useMediaQuery and swap layouts.
  // Under 768px the bulky 280px sidebar turns into a streamlined mobile top
  // bar + drawer, with a single-column stat grid and a compact order list
  // instead of the wide table. Between 768px and 1199px the sidebar collapses
  // to a 72px icon rail with a 2-column grid. Because the hook listens for
  // matchMedia 'change' events, the layout switches live as the window resizes.
  // const isMobile = useMediaQuery('(max-width: 767px)')
  // const isTablet = useMediaQuery('(max-width: 1199px)')
  //
  // if (isMobile) {
  //   return (
  //     <div className="shell shell-mobile">
  //       <MobileNav activeId={activeId} onSelect={setActiveId} />
  //       <DashboardContent columns={1} compact />
  //     </div>
  //   )
  // }
  //
  // if (isTablet) {
  //   return (
  //     <div className="shell">
  //       <IconRail activeId={activeId} onSelect={setActiveId} />
  //       <DashboardContent columns={2} />
  //     </div>
  //   )
  // }

  // BROKEN: Without the fix, this desktop layout renders at every screen size.
  // The 280px sidebar, the 4-column stat grid (220px minimum per card), the
  // wide toolbar and the 760px table all keep their full size, so on narrow
  // windows they overflow, overlap and get clipped.
  return (
    <div className="shell">
      <Sidebar activeId={activeId} onSelect={setActiveId} />
      <DashboardContent columns={4} />
    </div>
  )
}
