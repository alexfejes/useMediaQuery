import { useState } from 'react'
import DashboardContent from './DashboardContent'
import DesktopSidebar from './DesktopSidebar'
// FIX (step 1 of 2): Import the useMediaQuery hook and the streamlined
// MobileNavigation component. (Uncomment src/hooks/useMediaQuery.js too.)
// import MobileNavigation from './MobileNavigation'
// import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Dashboard() {
  const [activeId, setActiveId] = useState('overview')

  // FIX (step 2 of 2): Plug the hook into the component. isMobile is true at
  // 768px and below, and the ternary swaps the bulky DesktopSidebar for
  // MobileNavigation (top bar + slide-out drawer). The content also drops to
  // one column with a compact order list. Because the hook listens for
  // 'change' events, the layout switches live as the window resizes.
  // Uncomment this block and delete the BROKEN return below it.
  // const isMobile = useMediaQuery('(max-width: 768px)')
  //
  // return (
  //   <div className={isMobile ? 'shell shell-mobile' : 'shell'}>
  //     {isMobile ? (
  //       <MobileNavigation activeId={activeId} onSelect={setActiveId} />
  //     ) : (
  //       <DesktopSidebar activeId={activeId} onSelect={setActiveId} />
  //     )}
  //     <DashboardContent columns={isMobile ? 1 : 4} compact={isMobile} />
  //   </div>
  // )

  // BROKEN: Without the fix, this desktop layout renders at every screen size.
  // The 280px sidebar, the 4-column stat grid (220px minimum per card), the
  // wide toolbar and the 760px table never change, so on narrow windows they
  // overflow, overlap and get clipped.
  return (
    <div className="shell">
      <DesktopSidebar activeId={activeId} onSelect={setActiveId} />
      <DashboardContent columns={4} />
    </div>
  )
}
