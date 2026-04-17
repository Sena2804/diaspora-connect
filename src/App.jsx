import React, { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ImpactSimulator from './components/ImpactSimulator'
import BlockchainSection from './components/BlockchainSection'
import ImpactSocialSection from './components/ImpactSocialSection'
import Footer from './components/Footer'

function App() {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 50,
      });

      // En React, on utilise des setTimeout pour être 100% sûr 
      // que le DOM est dessiné avant que AOS calcule les hauteurs
      const timer1 = setTimeout(() => AOS.refresh(), 100);
      const timer2 = setTimeout(() => AOS.refresh(), 1000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }, [])

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-black dark:text-slate-100">
      {/* En-tête sticky */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 text-slate-950 backdrop-blur-md border-b border-slate-200 px-4 py-4 transition-colors duration-300 dark:bg-slate-950/95 dark:text-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="font-bold text-slate-950 dark:text-slate-100">Diaspora Connect</span>
          </div>

          <nav className="hidden md:flex gap-6 text-slate-700 dark:text-slate-300 text-sm">
            <a href="#problem" className="hover:text-emerald transition-colors">Problème</a>
            <a href="#simulator" className="hover:text-emerald transition-colors">Simulateur</a>
            <a href="#blockchain" className="hover:text-emerald transition-colors">Technologie</a>
            <a href="#impact" className="hover:text-emerald transition-colors">Impact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#simulator"
              className="btn-hover bg-emerald hover:bg-emerald-dark text-white px-6 py-2 rounded-lg text-sm font-bold"
            >
              Voir le simulateur
            </a>
          </div>
        </div>
      </header>

      {/* CORRECTION ICI : On a enlevé overflow-hidden qui bloquait le Hero en remontant */}
      <main className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>

        <div id="problem" >
          <ProblemSection />
        </div>

        <div id="simulator" >
          <ImpactSimulator />
        </div>

        <div id="blockchain" >
          <BlockchainSection />
        </div>

        <div id="impact" >
          <ImpactSocialSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App