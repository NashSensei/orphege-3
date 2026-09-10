import { SiteNavbar } from '@/components/site-navbar'
import { SiteHero } from '@/components/site-hero'
import { SiteServices } from '@/components/site-services'
import { SiteAbout } from '@/components/site-about'
import { SiteDiagnostic } from '@/components/site-diagnostic'
import { SiteZone } from '@/components/site-zone'
import { SiteContact } from '@/components/site-contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNavbar />
      <main>
        <SiteHero />
        <SiteServices />
        <SiteAbout />
        <SiteDiagnostic />
        <SiteZone />
        <SiteContact />
      </main>
      <SiteFooter />
    </>
  )
}
