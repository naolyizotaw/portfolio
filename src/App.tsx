import { Navbar } from '@/components/sections/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { FocusSection } from '@/components/sections/FocusSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FocusSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
