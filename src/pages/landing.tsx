import { Benefits } from '@/components/benefits'
import { ContactSection } from '@/components/contact-section'
import { CtaSection } from '@/components/cta-section'
import { PublicFooter } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { WppContact } from '@/components/wpp-contact'
import { Pricing } from '@/components/pricing'
import { About } from '@/components/about'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <CtaSection />
        <About />
        <ContactSection />
      </main>
      <WppContact />
      <PublicFooter />
    </div>
  )
}
