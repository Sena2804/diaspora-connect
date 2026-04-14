import React from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * HeroSection Component
 * 
 * Section d'accueil (Hero) avec titre fort et appel à l'action
 * Inclut un message percutant sur l'inclusion financière au Bénin
 * et la réduction des frais de transfert de la diaspora
 */
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy-dark via-navy to-navy-dark flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre Principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Inclusion Financière
          <span className="block text-emerald">pour la Diaspora Béninoise</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Réduisez vos frais de transfert de <span className="font-bold text-emerald">7-15%</span> à 
          <span className="font-bold text-emerald"> moins de 1%</span> avec la blockchain
        </p>

        {/* Statistique clé */}
        <div className="mb-12 inline-block bg-emerald/10 border border-emerald/30 rounded-lg px-8 py-4">
          <p className="text-gray-300">Rejoignez une révolution financière</p>
          <p className="text-3xl font-bold text-emerald">Zéro intermédiaires • Maximum de clarté</p>
        </div>

        {/* Bouton d'appel à l'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-hover bg-emerald hover:bg-emerald-dark text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2">
            Découvrez le Simulateur
            <ArrowRight size={20} />
          </button>
          <button className="btn-hover border-2 border-emerald text-emerald hover:bg-emerald/10 px-8 py-4 rounded-lg font-bold text-lg">
            En Savoir Plus
          </button>
        </div>

        {/* Éléments decoratifs */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-gray-300">
          <div>
            <p className="text-emerald-light text-sm font-semibold">450-550M USD</p>
            <p className="text-sm">Envoyés par an</p>
          </div>
          <div>
            <p className="text-emerald-light text-sm font-semibold">7-15%</p>
            <p className="text-sm">Frais actuels</p>
          </div>
          <div>
            <p className="text-emerald-light text-sm font-semibold">&lt;1%</p>
            <p className="text-sm">Nos frais</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
