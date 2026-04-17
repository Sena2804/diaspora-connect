import React, { useState } from 'react'
import { Zap, DollarSign } from 'lucide-react'

/**
 * ImpactSimulator Component
 * 
 * Composant interactif permettant à l'utilisateur de voir l'impact réel
 * de la réduction des frais sur ses transferts.
 * Affiche les frais pour différentes solutions de transfert
 */
const ImpactSimulator = () => {
  // État pour le montant en USD
  const [usdAmount, setUsdAmount] = useState(500)

  // Taux de change USD -> FCFA (taux approximatif)
  const EXCHANGE_RATE = 610

  // Solutions de transfert avec leurs frais (basés sur des données du marché 2024)
  const transferSolutions = [
    { name: 'Western Union', feePercent: 12, description: 'Service traditionnel' },
    { name: 'MoneyGram', feePercent: 8, description: 'Service traditionnel' },
    { name: 'Wise', feePercent: 1.5, description: 'Transfert moderne' },
    { name: 'Remitly', feePercent: 2, description: 'Transfert en ligne' },
    { name: 'WorldRemit', feePercent: 1, description: 'Transfert international' },
    { name: 'PayPal', feePercent: 3, description: 'Portefeuille numérique' },
    { name: 'Banque', feePercent: 10, description: 'Virement bancaire' },
    { name: 'Diaspora Connect', feePercent: 0.8, description: 'Blockchain Stellar' }
  ]

  // Calculs pour chaque solution
  const calculateForSolution = (feePercent) => {
    const fee = (usdAmount * (feePercent / 100)).toFixed(2)
    const amountAfter = (usdAmount - parseFloat(fee)).toFixed(2)
    return { fee, amountAfter }
  }

  // Diaspora Connect comme référence
  const diasporaData = calculateForSolution(0.8)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy-dark to-navy">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simulateur d'Impact
          </h2>
          <p className="text-lg text-gray-300">
            Découvrez combien vous économiseriez avec Diaspora Connect
          </p>
        </div>

        {/* Conteneur principal du simulateur */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl dark:shadow-none">
          {/* Input du montant */}
          <div className="mb-12">
            <label className="block text-navy dark:text-slate-100 font-bold text-lg mb-4">
              Montant à envoyer (USD)
            </label>
            
          {/* Slider */}
            <div className="mb-6">
              <input
                type="range"
                min="100"
                max="1000000"
                step="50"
                value={usdAmount}
                onChange={(e) => setUsdAmount(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald"
              />
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>100 USD</span>
                <span>1,000,000 USD</span>
              </div>
            </div>

            {/* Input texte alternatif */}
            <div className="flex gap-4">
              <input
                type="number"
                min="100"
                max="1000000"
                value={usdAmount}
                onChange={(e) => setUsdAmount(parseFloat(e.target.value))}
                className="flex-1 px-4 py-3 border-2 border-emerald rounded-lg font-bold text-lg focus:outline-none focus:ring-2 focus:ring-emerald/50 bg-white dark:bg-slate-950 dark:text-slate-100"
              />
              <span className="px-4 py-3 bg-gray-100 dark:bg-slate-800 rounded-lg font-bold text-lg text-navy dark:text-slate-100">
                USD
              </span>
            </div>
          </div>

          {/* Comparaison des frais pour toutes les solutions */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Solutions concurrentes à gauche */}
            <div className="flex-1">
              <h3 className="text-navy dark:text-slate-100 font-bold text-lg mb-6 text-center lg:text-left">
                Solutions Traditionnelles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {transferSolutions.filter(s => s.name !== 'Diaspora Connect').map((solution, index) => {
                  const { fee, amountAfter } = calculateForSolution(solution.feePercent)
                  const bgColor = 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700'
                  const textColor = 'text-red-600'

                  return (
                    <div key={index} className={`card-hover ${bgColor} border-2 rounded-xl p-6`}>
                      <h3 className="text-navy dark:text-slate-100 font-bold text-base mb-3">
                        {solution.name}
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-700 dark:text-gray-300">Initial</span>
                          <span className="font-bold text-navy dark:text-slate-100">${usdAmount.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-gray-300 dark:border-gray-600"></div>
                        <div className="flex justify-between">
                          <span className="text-gray-700 dark:text-gray-300">Frais ({solution.feePercent}%)</span>
                          <span className={`font-bold ${textColor}`}>-${fee}</span>
                        </div>
                      </div>

                      <div className="bg-red-100 dark:bg-red-900/40 rounded p-4 mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Arrivée à destination</p>
                        <p className={`text-xl font-bold ${textColor}`}>
                          ${amountAfter}
                        </p>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-300 text-center mt-3">
                        {solution.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Diaspora Connect à droite */}
            <div className="lg:w-1/3">
              <h3 className="text-navy dark:text-slate-100 font-bold text-lg mb-6 text-center">
                Notre Solution
              </h3>
              {(() => {
                const solution = transferSolutions.find(s => s.name === 'Diaspora Connect')
                const { fee, amountAfter } = calculateForSolution(solution.feePercent)
                const bgColor = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald dark:border-emerald/70'
                const textColor = 'text-emerald'
                const icon = <Zap className="w-6 h-6 text-emerald" />

                return (
                  <div className={`card-hover ${bgColor} border-2 rounded-xl p-8`}>
                    <h3 className="text-navy dark:text-slate-100 font-bold text-xl mb-4 flex items-center justify-center gap-2">
                      {icon}
                      {solution.name}
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Montant initial</span>
                        <span className="font-bold text-navy dark:text-slate-100 text-lg">${usdAmount.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-emerald/20 dark:border-emerald/50"></div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Frais ({solution.feePercent}%)</span>
                        <span className={`font-bold ${textColor} text-lg`}>-${fee}</span>
                      </div>
                    </div>

                    <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded p-6 mt-6">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Arrivée à destination</p>
                      <p className={`text-3xl font-bold ${textColor}`}>
                        ${amountAfter}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-4">
                      {solution.description}
                    </p>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Zone d'économies */}
          <div className="bg-gradient-to-r from-emerald/10 to-emerald-light/20 dark:from-slate-900/40 dark:to-slate-900/20 rounded-xl p-10 border-2 border-emerald/30 dark:border-slate-700">
            <h3 className="text-center text-navy dark:text-slate-100 font-bold text-xl mb-8">
              Comparaison avec Diaspora Connect
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {transferSolutions.filter(s => s.name !== 'Diaspora Connect').map((solution, index) => {
                const { fee } = calculateForSolution(solution.feePercent)
                const loss = (parseFloat(fee) - parseFloat(diasporaData.fee)).toFixed(2)
                const lossFCFA = (loss * EXCHANGE_RATE).toFixed(0)

                return (
                  <div key={index} className="text-center bg-red-50 dark:bg-red-900/20 rounded-lg p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                    <p className="text-base font-bold text-navy dark:text-slate-100 mb-2">{solution.name}</p>
                    <p className="text-xl font-bold text-red-600">-${loss}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">perte par transfert</p>
                    <p className="text-base font-bold text-red-600">{lossFCFA.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Avec Diaspora Connect, vous économisez en moyenne :
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-6xl font-bold gradient-text mb-3">
                    ${(transferSolutions.filter(s => s.name !== 'Diaspora Connect').reduce((acc, s) => acc + (parseFloat(calculateForSolution(s.feePercent).fee) - parseFloat(diasporaData.fee)), 0) / (transferSolutions.length - 1)).toFixed(2)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">par transfert (moyenne)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Calcul détaillé : {transferSolutions.filter(s => s.name !== 'Diaspora Connect').map(s => `${s.name.split(' ')[0].substring(0, 3)}: ${(parseFloat(calculateForSolution(s.feePercent).fee) - parseFloat(diasporaData.fee)).toFixed(2)}`).join(' + ')} ÷ {transferSolutions.length - 1}
                  </p>
                </div>
                
                <div>
                  <p className="text-6xl font-bold text-emerald mb-3">
                    {((transferSolutions.filter(s => s.name !== 'Diaspora Connect').reduce((acc, s) => acc + (parseFloat(calculateForSolution(s.feePercent).fee) - parseFloat(diasporaData.fee)), 0) / (transferSolutions.length - 1)) * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">impacte directement les familles</p>
                </div>
              </div>
            </div>

            {/* Exemple d'impact annuel */}
            <div className="mt-10 pt-10 border-t border-emerald/30 dark:border-slate-700 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Si vous transférez {usdAmount.toFixed(0)} USD chaque mois :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base text-gray-600 dark:text-gray-300">Économies annuelles moyennes</p>
                  <p className="text-4xl font-bold text-emerald">
                    ${((transferSolutions.filter(s => s.name !== 'Diaspora Connect').reduce((acc, s) => acc + (parseFloat(calculateForSolution(s.feePercent).fee) - parseFloat(diasporaData.fee)), 0) / (transferSolutions.length - 1)) * 12).toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-base text-gray-600 dark:text-gray-300">Soit en FCFA</p>
                  <p className="text-4xl font-bold text-emerald">
                    {(((transferSolutions.filter(s => s.name !== 'Diaspora Connect').reduce((acc, s) => acc + (parseFloat(calculateForSolution(s.feePercent).fee) - parseFloat(diasporaData.fee)), 0) / (transferSolutions.length - 1)) * 12 * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' '))} FCFA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSimulator
