import DashboardContent from './DashboardContent'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Dashboard() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
      <DashboardContent />
    </>
  )
}
