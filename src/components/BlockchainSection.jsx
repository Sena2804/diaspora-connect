import React from 'react'
import { Zap, Lock, Globe, Cpu } from 'lucide-react'

/**
 * BlockchainSection Component
 * 
 * Explique visuellement pourquoi nous utilisons la blockchain (Stellar/Celo)
 * Avantages : vitesse, frais proches de zéro, sans intermédiaires
 */
const BlockchainSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Vitesse Extrême',
      description: 'Transferts en quelques secondes, 24h/24, 7j/7',
      stats: '~5 secondes'
    },
    {
      icon: Lock,
      title: 'Sécurité Maximale',
      description: 'Transactions immuables sur la blockchain',
      stats: 'Cryptographiquement sécurisé'
    },
    {
      icon: Globe,
      title: 'Sans Intermédiaires',
      description: 'De pair-à-pair, sans banque ou service tiers',
      stats: 'Réduction drastique des frais'
    },
    {
      icon: Cpu,
      title: 'Frais Minimaux',
      description: 'Coûts réseau proches de zéro',
      stats: '< 0.5% en frais'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-slate-100 mb-4">
            La Technologie Blockchain
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
            Pourquoi nous choisissons Stellar ou Celo pour rendre les transferts plus rapides et moins coûteux.
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-navy/5 to-emerald/5 dark:from-slate-900/40 dark:to-emerald-900/20 border border-emerald/20 dark:border-slate-700 rounded-xl p-4 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald/20 rounded-lg p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-emerald" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-slate-100 mb-2">{benefit.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{benefit.description}</p>
                    <div className="bg-emerald/10 rounded px-3 py-1 inline-block">
                      <p className="text-sm font-semibold text-emerald">{benefit.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparaison visuelle : Traditional vs Blockchain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-16">
          {/* Système Traditionnel */}
          <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4 sm:p-8 border-2 border-red-200 dark:border-red-700">
            <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-slate-100 mb-6">Systèmes Traditionnels</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="font-semibold text-gray-200">Vous initiez le transfert</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Frais de démarrage</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="font-semibold text-gray-200">Passage par des intermédiaires</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Chaque intermédiaire prend sa part</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <p className="font-semibold text-gray-200">Conversion de devises</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Mauvais taux de change</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <p className="font-semibold text-gray-200">Délai d'attente</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Plusieurs jours</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg border-2 border-red-300">
                <p className="text-center font-bold text-red-700">
                  Coût total : 7-15% + délais
                </p>
              </div>
            </div>
          </div>

          {/* Système Blockchain */}
          <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-8 border-2 border-emerald dark:border-emerald/70">
            <h3 className="text-xl font-bold text-gray-200 dark:text-slate-100 mb-6">Diaspora Connect (Blockchain)</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="font-semibold text-gray-200">Vous initiez le transfert</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Interface simple</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="font-semibold text-gray-200">La blockchain traite</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Aucun intermédiaire</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <p className="font-semibold text-gray-200">Conversion optimale</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Meilleur taux du marché</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <p className="font-semibold text-gray-200">Arrivée instantanée</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Quelques secondes</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-100 rounded-lg border-2 border-emerald">
                <p className="text-center font-bold text-emerald">
                  Coût total : &lt;1% + instantané ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-gradient-to-r from-slate-100 via-slate-200 to-white rounded-xl p-8 text-slate-950 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100">
          <h3 className="text-2xl font-bold mb-8 text-center">Réseaux Blockchain Supportés</h3>
          <div className="flex items-center justify-center gap-40 ">
            <div className="border-l-4 border-emerald pl-6">
              <h4 className="text-xl font-bold mb-2">Stellar</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
                  Confirmation en ~5 secondes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
                  Frais minimaux (&lt;0.001 XLM)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
                  Scalabilité infinie
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
                  Partenaire de la Banque Mondiale
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-emerald-light pl-6">
              <h4 className="text-xl font-bold mb-2">Celo</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-light rounded-full"></span>
                  Optimisé pour les marchés émergents
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-light rounded-full"></span>
                  Paiements mobiles sans banque
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-light rounded-full"></span>
                  Stablecoin (cUSD, cEUR)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-light rounded-full"></span>
                  Éco-responsable (carbone-négatif)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockchainSection
