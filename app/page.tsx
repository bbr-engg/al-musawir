import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Leadership from '@/components/Leadership'
import ProjectHighlights from '@/components/ProjectHighlights'
import Amenities from '@/components/Amenities'
import WhyInvest from '@/components/WhyInvest'
import ConstructionUpdates from '@/components/ConstructionUpdates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Leadership />
      <ProjectHighlights />
      <Amenities />
      <WhyInvest />
      <ConstructionUpdates />
      <Contact />
      <Footer />
    </main>
  )
}

