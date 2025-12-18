import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
 <main className="min-h-screen bg-[#0b1020] text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-black pointer-events-none" />
    <HeroSection/>
    <ServicesSection/>
 </main>

  )
}