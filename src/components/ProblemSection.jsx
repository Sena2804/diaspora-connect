import React from 'react'
import { TrendingDown, AlertCircle } from 'lucide-react'

/**
 * ProblemSection Component
 * 
 * Présente les chiffres clés du problème :
 * - Montants envoyés par la diaspora
 * - Frais prélevés par les acteurs traditionnels
 * - Objectif ODD de réduction à 3%
 */
const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Le Problème Actuel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La diaspora béninoise soutient son pays, mais les frais cachés érodent les bénéfices
          </p>
        </div>

        {/* Grille de statistiques */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Statistique 1 : Montants */}
          <div className="card-hover bg-gradient-to-br from-emerald/5 to-emerald/10 border border-emerald/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald/20 rounded-lg p-3">
                <TrendingDown className="w-8 h-8 text-emerald" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">450-550 Millions USD</h3>
                <p className="text-gray-700">
                  Montant envoyé chaque année par la diaspora béninoise à ses familles
                </p>
                <p className="text-emerald font-semibold mt-2">Soit ~40% du PIB du Bénin</p>
              </div>
            </div>
          </div>

          {/* Statistique 2 : Frais */}
          <div className="card-hover bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-lg p-3">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">7-15% de Frais</h3>
                <p className="text-gray-700">
                  Prélevés par les acteurs traditionnels (Western Union, banques, etc.)
                </p>
                <p className="text-red-600 font-semibold mt-2">
                  Soit 31.5-82.5 Millions USD perdus par an
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparaison détaillée */}
        <div className="bg-navy-dark rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8">Comparaison des Frais</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Western Union */}
            <div className="border-l-4 border-red-500 pl-6">
              <p className="text-gray-400 text-sm mb-2">Western Union</p>
              <p className="text-3xl font-bold mb-2">12-15%</p>
              <p className="text-gray-300 text-sm">Frais + taux de change</p>
            </div>

            {/* Banques traditionnelles */}
            <div className="border-l-4 border-orange-500 pl-6">
              <p className="text-gray-400 text-sm mb-2">Banques Traditionnelles</p>
              <p className="text-3xl font-bold mb-2">7-10%</p>
              <p className="text-gray-300 text-sm">Frais + frais bancaires</p>
            </div>

            {/* Diaspora Connect */}
            <div className="border-l-4 border-emerald pl-6">
              <p className="text-gray-400 text-sm mb-2">Diaspora Connect</p>
              <p className="text-3xl font-bold mb-2">&lt;1%</p>
              <p className="text-gray-300 text-sm">Frais blockchain minimaux</p>
            </div>
          </div>
        </div>

        {/* Objectif ODD */}
        <div className="bg-emerald/10 border-2 border-emerald rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Notre Objectif : ODD 10.c</h3>
          <p className="text-lg text-gray-700 mb-4">
            Réduire les coûts de transfert de fonds à <span className="font-bold text-emerald">3%</span> d'ici 2030
          </p>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Aligned with the Sustainable Development Goal 10.c - Facilitate orderly, safe, regular and responsible migration and mobility of people, including through implementation of planned and well-managed migration policies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
