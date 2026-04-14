import React from 'react'
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
  return (
    <div className="bg-white">
      {/* En-tête sticky optionnel */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-emerald/20 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="text-white font-bold">Diaspora Connect</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-gray-300 text-sm">
            <a href="#problem" className="hover:text-emerald transition-colors">Problème</a>
            <a href="#simulator" className="hover:text-emerald transition-colors">Simulateur</a>
            <a href="#blockchain" className="hover:text-emerald transition-colors">Technologie</a>
            <a href="#impact" className="hover:text-emerald transition-colors">Impact</a>
          </nav>

          {/* CTA Button */}
          <button className="btn-hover bg-emerald hover:bg-emerald-dark text-white px-6 py-2 rounded-lg text-sm font-bold">
            Démarrer
          </button>
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
