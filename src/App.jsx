import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import './App.css'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ImpactSimulator from './components/ImpactSimulator'
import BlockchainSection from './components/BlockchainSection'
import ImpactSocialSection from './components/ImpactSocialSection'
import Footer from './components/Footer'

/**
 * App Component - Composant principal
 *
 * C'est le point d'entrée de l'application.
 * Il compose tous les sections de la landing page dans un ordre logique :
 * 1. Hero Section - Accroche forte
 * 2. Problem Section - Contextualisation du problème
 * 3. Impact Simulator - Engagement interactif
 * 4. Blockchain Section - Explication de la solution
 * 5. Impact Social Section - Humanisation et impact réel
 * 6. Footer - Contacte et liens
 */
function App() {
    const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-black dark:text-slate-100">
      {/* En-tête sticky */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 text-slate-950 backdrop-blur-md border-b border-slate-200 px-4 py-4 transition-colors duration-300 dark:bg-slate-950/95 dark:text-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="font-bold text-slate-950 dark:text-slate-100">Diaspora Connect</span>
          </div>

          {/* Navigation */}
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
                {/* On utilise un rendu conditionnel simple */}
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

      {/* Contenu principal - avec padding-top pour le header sticky */}
      <main className="pt-16">
        {/* Section Hero */}
        <HeroSection />

        {/* Section Problème */}
        <section id="problem">
          <ProblemSection />
        </section>

        {/* Section Simulateur Interactif */}
        <section id="simulator">
          <ImpactSimulator />
        </section>

        {/* Section Blockchain */}
        <section id="blockchain">
          <BlockchainSection />
        </section>

        {/* Section Impact Social */}
        <section id="impact">
          <ImpactSocialSection />
        </section>
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  )
}

export default App
