import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import ResumeSection from "@/components/resume-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main>
        <HeroSection />
        <ResumeSection />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}
