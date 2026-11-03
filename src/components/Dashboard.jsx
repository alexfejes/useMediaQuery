import DashboardContent from './DashboardContent'
import DesktopNavigation from './DesktopNavigation'
// FIX (step 1 of 2): Import the useMediaQuery hook and the streamlined
// MobileNavigation component. (Uncomment src/hooks/useMediaQuery.js too.)
// import MobileNavigation from './MobileNavigation'
// import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Dashboard() {
  // FIX (step 2 of 2): Plug the hook in. isMobile is true at 768px and below,
  // and the ternary swaps the bulky DesktopNavigation for MobileNavigation.
  // The hook listens for 'change' events, so it switches live on resize.
  // Uncomment these lines and delete the BROKEN line below them.
  // const isMobile = useMediaQuery('(max-width: 768px)')
  // return (
  //   <>
  //     {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
  //     <DashboardContent />
  //   </>
  // )

  // BROKEN: The 280px desktop sidebar renders at every screen size, so on a
  // phone it takes up most of the screen and the content gets crushed.
  return (
    <>
      <DesktopNavigation />
      <DashboardContent />
    </>
  )
}
