import { About } from '@/components/about'
import { Benefits } from '@/components/benefits'
import { ContactSection } from '@/components/contact-section'
import { CtaSection } from '@/components/cta-section'
import { PublicFooter } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { WppContact } from '@/components/wpp-contact'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowItWorks />
        <About />
        <CtaSection />
        <ContactSection />
      </main>
      <WppContact />
      <PublicFooter />
    </div>
  )
}
