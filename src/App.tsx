import { Navbar } from '@/components/sections/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { FocusSection } from '@/components/sections/FocusSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <main>
        <HeroSection />
        <JourneySection />
        <FocusSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
