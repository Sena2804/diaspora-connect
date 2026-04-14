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
    <section className="py-20 px-4 bg-white dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-slate-100 mb-4">
            Le Problème Actuel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            La diaspora béninoise soutient son pays, mais des frais élevés réduisent souvent l'impact réel.
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
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-2">450-550 Millions USD</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Estimation des montants envoyés par la diaspora béninoise à ses familles chaque année.
                </p>
                <p className="text-emerald font-semibold mt-2">Soit une contribution significative à l'économie nationale</p>
              </div>
            </div>
          </div>

          {/* Statistique 2 : Frais */}
          <div className="card-hover bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-3">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-2">7-15% de Frais</h3>
                <p className="text-gray-700 dark:text-gray-300">
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
        <div className="bg-slate-100 rounded-2xl p-8 md:p-12 text-slate-900 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 mb-16">
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
        <div className="bg-emerald/10 border-2 border-emerald rounded-2xl p-8 text-center dark:bg-slate-900 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">Notre Objectif : ODD 10.c</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Réduire les coûts de transfert de fonds à <span className="font-bold text-emerald">3%</span> ou moins, conformément aux objectifs de l'ONU.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
            L'objectif 10.c vise à diminuer les coûts du transfert de fonds et à rendre les envois de la diaspora plus accessibles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
