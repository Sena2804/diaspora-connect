import React, { useState } from 'react'
import { Zap, DollarSign } from 'lucide-react'

/**
 * ImpactSimulator Component
 * 
 * Composant interactif permettant à l'utilisateur de voir l'impact réel
 * de la réduction des frais sur ses transferts.
 * Affiche :
 * - Frais traditionnels (12%)
 * - Frais Diaspora Connect (<1%)
 * - Économie réalisée en USD et FCFA
 */
const ImpactSimulator = () => {
  // État pour le montant en USD
  const [usdAmount, setUsdAmount] = useState(500)

  // Taux de change USD -> FCFA (taux approximatif)
  const EXCHANGE_RATE = 610

  // Calculs
  const traditionalFee = (usdAmount * 0.12).toFixed(2)
  const diasporaFee = (usdAmount * 0.008).toFixed(2) // <1% = 0.8%
  const savings = (traditionalFee - diasporaFee).toFixed(2)
  const savingsInFCFA = (savings * EXCHANGE_RATE).toFixed(0)

  const amountAfterTraditional = (usdAmount - parseFloat(traditionalFee)).toFixed(2)
  const amountAfterDiaspora = (usdAmount - parseFloat(diasporaFee)).toFixed(2)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy-dark to-navy">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simulateur d'Impact
          </h2>
          <p className="text-lg text-gray-300">
            Découvrez combien vous économiseriez avec Diaspora Connect
          </p>
        </div>

        {/* Conteneur principal du simulateur */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Input du montant */}
          <div className="mb-12">
            <label className="block text-navy font-bold text-lg mb-4">
              Montant à envoyer (USD)
            </label>
            
            {/* Slider */}
            <div className="mb-6">
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={usdAmount}
                onChange={(e) => setUsdAmount(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>100 USD</span>
                <span>5000 USD</span>
              </div>
            </div>

            {/* Input texte alternatif */}
            <div className="flex gap-4">
              <input
                type="number"
                min="100"
                max="5000"
                value={usdAmount}
                onChange={(e) => setUsdAmount(parseFloat(e.target.value))}
                className="flex-1 px-4 py-3 border-2 border-emerald rounded-lg font-bold text-lg focus:outline-none focus:ring-2 focus:ring-emerald/50"
              />
              <span className="px-4 py-3 bg-gray-100 rounded-lg font-bold text-lg text-navy">
                USD
              </span>
            </div>
          </div>

          {/* Comparaison des frais */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Option 1 : Frais Traditionnels */}
            <div className="card-hover bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-navy font-bold text-lg mb-4">Services Traditionnels</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Montant initial</span>
                  <span className="font-bold text-navy">${usdAmount.toFixed(2)}</span>
                </div>
                <div className="border-t border-red-200"></div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Frais (12%)</span>
                  <span className="font-bold text-red-600">-${traditionalFee}</span>
                </div>
                <div className="bg-red-100 rounded p-3 mt-4">
                  <p className="text-xs text-gray-600 mb-1">Arrivée à destination</p>
                  <p className="text-2xl font-bold text-red-600">
                    ${amountAfterTraditional}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 text-center">
                Western Union, MoneyGram, Banques traditionnelles
              </p>
            </div>

            {/* Option 2 : Diaspora Connect */}
            <div className="card-hover bg-emerald-50 border-2 border-emerald rounded-xl p-6">
              <h3 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald" />
                Diaspora Connect
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Montant initial</span>
                  <span className="font-bold text-navy">${usdAmount.toFixed(2)}</span>
                </div>
                <div className="border-t border-emerald/20"></div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Frais (&lt;1%)</span>
                  <span className="font-bold text-emerald">-${diasporaFee}</span>
                </div>
                <div className="bg-emerald-100 rounded p-3 mt-4">
                  <p className="text-xs text-gray-600 mb-1">Arrivée à destination</p>
                  <p className="text-2xl font-bold text-emerald">
                    ${amountAfterDiaspora}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 text-center">
                Blockchain Stellar • Zéro intermédiaires
              </p>
            </div>
          </div>

          {/* Zone d'économies */}
          <div className="bg-gradient-to-r from-emerald/10 to-emerald-light/20 rounded-xl p-8 border-2 border-emerald/30">
            <h3 className="text-center text-navy font-bold text-lg mb-6">
              Vous Économisez
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold gradient-text mb-2">
                  ${savings}
                </p>
                <p className="text-gray-600">par transfert</p>
              </div>
              
              <div className="text-center">
                <p className="text-5xl font-bold text-emerald mb-2">
                  {savingsInFCFA.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA
                </p>
                <p className="text-gray-600">impacte directement les familles</p>
              </div>
            </div>

            {/* Exemple d'impact annuel */}
            <div className="mt-8 pt-8 border-t border-emerald/30 text-center">
              <p className="text-gray-700 mb-2">
                Si vous transférez {usdAmount.toFixed(0)} USD chaque mois :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Économies annuelles</p>
                  <p className="text-2xl font-bold text-emerald">
                    ${(savings * 12).toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Soit en FCFA</p>
                  <p className="text-2xl font-bold text-emerald">
                    {(savingsInFCFA * 12).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} FCFA
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
