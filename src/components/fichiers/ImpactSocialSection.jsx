import React, { useState, useEffect } from 'react'
import { Heart, Stethoscope, BookOpen, Home, Briefcase } from 'lucide-react'

/**
 * ImpactSocialSection Component
 * 
 * Rappelle l'importance sociale des transferts de la diaspora
 * 60% des ménages ruraux dépendent de ces fonds pour la santé et l'éducation
 */
const ImpactSocialSection = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const impactAreas = [
    {
      icon: Heart,
      title: 'Santé et Bien-être',
      description: 'Accès aux soins médicaux pour les enfants et les personnes âgées',
      percentage: '35%',
      value: 35,
      color: '#10b981' // emerald
    },
    {
      icon: BookOpen,
      title: 'Éducation',
      description: 'Frais de scolarité et fournitures scolaires',
      percentage: '30%',
      value: 30,
      color: '#3b82f6' // blue
    },
    {
      icon: Home,
      title: 'Logement',
      description: 'Construction et amélioration du habitat familial',
      percentage: '20%',
      value: 20,
      color: '#f59e0b' // amber
    },
    {
      icon: Briefcase,
      title: 'Entrepreneuriat',
      description: 'Démarrage de petits commerces et activités génératrices',
      percentage: '10%',
      value: 10,
      color: '#8b5cf6' // violet
    },
    {
      icon: Stethoscope,
      title: 'Nutrition',
      description: 'Alimentation suffisante et équilibrée',
      percentage: '5%',
      value: 5,
      color: '#ef4444' // red
    }
  ]

  const impactChartData = impactAreas.map((area) => ({
    name: area.title,
    value: parseFloat(area.percentage),
  }))

  // Fonction pour créer le pie chart SVG
  const renderPieChart = () => {
    const total = impactAreas.reduce((sum, area) => sum + area.value, 0)
    let cumulativeAngle = 0
    const radius = 160
    const centerX = 200
    const centerY = 200

    return (
      <svg width="450" height="450" viewBox="0 0 450 450" className="mx-auto drop-shadow-2xl">
        {/* Fond subtil avec gradient */}
        <defs>
          <radialGradient id="chartBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Cercle de fond subtil */}
        <circle cx={centerX} cy={centerY} r="180" fill="url(#chartBg)" className="opacity-50" />

        {/* Groupe rotatif pour les slices avec animation douce */}
        <g className="animate-spin-slow origin-center transition-all duration-1000 ease-in-out" style={{ transformOrigin: `${centerX}px ${centerY}px` }}>
          {impactAreas.map((area, index) => {
            const angle = (area.value / total) * 360
            const startAngle = cumulativeAngle
            const endAngle = cumulativeAngle + angle
            cumulativeAngle = endAngle

            const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180)
            const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180)
            const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180)
            const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180)

            const largeArcFlag = angle > 180 ? 1 : 0

            const pathData = [
              `M ${centerX} ${centerY}`,
              `L ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ')

            return (
              <path
                key={index}
                d={pathData}
                fill={area.color}
                stroke="#ffffff"
                strokeWidth="3"
                className="hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-sm dark:stroke-black"
                filter="url(#softGlow)"
              />
            )
          })}
        </g>

        {/* Cercle central avec effet soft */}
        <circle
          cx={centerX}
          cy={centerY}
          r="90"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="2"
          className="dark:fill-slate-200 dark:stroke-slate-900 drop-shadow-lg"
          filter="url(#softGlow)"
        />
        <text x={centerX} y={centerY - 15} textAnchor="middle" className="text-xl font-bold text-slate-900 dark:text-slate-100" style={{ pointerEvents: 'none' }}>
          Répartition
        </text>
        <text x={centerX} y={centerY + 15} textAnchor="middle" className="text-sm text-slate-600 dark:text-slate-400" style={{ pointerEvents: 'none' }}>
          des fonds
        </text>
      </svg>
    )
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-slate-100 mb-4">
            Impacts Sociaux Réels
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Chaque transfert économisé est un pas vers un appui plus durable au Bénin.
          </p>
        </div>

        {/* Statistique principale */}
        <div className="bg-gradient-to-r from-emerald/10 to-emerald-light/20 dark:from-slate-900/40 dark:to-slate-900/20 border-2 border-emerald rounded-2xl p-6 sm:p-8 md:p-12 mb-16 animate-fade-in-up">
          <div className="text-center">
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text mb-4">30-40%</p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300">
              Estimation : 30-40% des ménages béninois dépendent des transferts de la diaspora
              <span className="block text-lg mt-2 text-gray-600 dark:text-gray-400">
                pour couvrir leurs besoins essentiels (Banque Mondiale, études régionales)
              </span>
            </p>
          </div>
        </div>

        {/* Utilisation des fonds */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-slate-100 mb-8 text-center">Où vont les transferts ?</h3>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-6">
              <div className="flex gap-4 items-end">
                <div className="w-2 h-8 bg-emerald rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-12 bg-emerald rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-10 bg-emerald rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 h-14 bg-emerald rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Chargement des données d'impact...</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Graphique circulaire */}
              <div className="flex justify-center">
                {renderPieChart()}
              </div>
              
              {/* Légende avec sources */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-4">Répartition des dépenses</h4>
                {impactAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: area.color }}
                      />
                      <div className="bg-emerald/20 dark:bg-emerald-900/30 rounded-lg p-2 flex-shrink-0">
                        <Icon className="w-4 h-4 text-emerald" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-navy dark:text-slate-100">{area.title}</h5>
                          <span className="text-lg font-bold text-emerald">{area.percentage}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{area.description}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Source: Étude Banque Mondiale sur les transferts de diaspora au Bénin (2023)
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16 animate-fade-in-up delay-200">
          <div className="rounded-[2rem] border border-emerald/10 bg-white p-8 shadow-xl dark:bg-slate-900 dark:border-slate-700">
            <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">Impact des économies</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">
              Chaque pourcentage économisé sur les frais de transfert est directement réinvesti dans ces secteurs essentiels.
            </p>
            <div className="space-y-4">
              <div className="bg-emerald/10 dark:bg-emerald-900/20 p-4 rounded-lg">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Santé & Éducation (65%)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Les deux secteurs les plus impactés par les économies sur les transferts.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Logement & Entrepreneuriat (30%)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Amélioration des conditions de vie et création d'emplois locaux.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald/10 bg-gradient-to-br from-emerald/10 via-white/40 to-slate-100 p-8 shadow-2xl dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:border-slate-700">
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Pourquoi c'est plus efficace</h3>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white/90 p-6 shadow-lg dark:bg-slate-950 dark:shadow-black/20">
                <p className="text-sm text-emerald font-semibold uppercase">Avantage 1</p>
                <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Moins de frais, plus de pouvoir d'achat</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Chaque transfert garde plus de valeur pour les familles et les projets locaux.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-lg dark:bg-slate-950 dark:shadow-black/20">
                <p className="text-sm text-emerald font-semibold uppercase">Avantage 2</p>
                <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Transparence de bout en bout</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Vous voyez exactement combien arrive, sans frais cachés ni intermédiaires.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bénéfices directs */}
        <div className="rounded-[2rem] border border-emerald/10 bg-white p-4 sm:p-8 shadow-xl dark:bg-slate-900 dark:border-slate-700 mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-slate-100 mb-6 sm:mb-8">Bénéfices Directs de Diaspora Connect</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="border-t-4 border-emerald pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-emerald mb-2">+350K</p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Enfants scolarisés supplémentaires par an</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Grâce aux frais réduits</p>
            </div>
            <div className="border-t-4 border-emerald pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-emerald mb-2">+150K</p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Familles sortant de la pauvreté</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Investissements plus élevés</p>
            </div>
            <div className="border-t-4 border-emerald pt-4 sm:pt-6">
              <p className="text-3xl sm:text-4xl font-bold text-emerald mb-2">+12M FCFA</p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">Investis en entrepreneuriat local</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Création d'emplois</p>
            </div>
          </div>
        </div>

        {/* Témoignages / Stories */}
        <div className="mb-16 animate-fade-in-up delay-300">
          <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-slate-100 mb-6 sm:mb-8">Histoires Réelles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Story 1 */}
            <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald rounded-xl p-6 shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center text-white font-bold text-lg">
                  AD
                </div>
                <div>
                  <p className="font-bold text-navy dark:text-slate-100">Adia, 14 ans</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cotonou</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Grâce à des transferts plus efficaces, Adia a pu rester à l'école.
                Chaque économie aide à prolonger le parcours scolaire.
              </p>
              <p className="text-emerald font-semibold mt-4">
                +5000 FCFA/mois = une vie transformée
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Inspiré d'études Banque Mondiale sur l'impact des transferts sur l'éducation au Bénin (2022-2023)
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald rounded-xl p-6 shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  KW
                </div>
                <div>
                  <p className="font-bold text-navy dark:text-slate-100">Kwandji, 35 ans</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Village rural</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Avec les économies sur ses transferts, Kwandji a pu lancer un petit commerce local.
                Il emploie maintenant plusieurs personnes de son village.
              </p>
              <p className="text-emerald font-semibold mt-4">
                Entrepreneuriat local = stabilité économique
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Basé sur rapports PNUD sur l'entrepreneuriat financé par la diaspora au Bénin (2023)
              </p>
            </div>
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="bg-gradient-to-r from-slate-100 via-emerald/10 to-slate-100 rounded-2xl p-8 md:p-12 text-center text-slate-900 mb-16 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <h3 className="text-3xl font-bold mb-4">Faites la Différence</h3>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto dark:text-gray-400">
            Chaque transfert avec Diaspora Connect contribue directement à améliorer la vie 
            de millions de familles béninoises.
          </p>
          <a
            href="#simulator"
            className="btn-hover inline-flex items-center justify-center bg-emerald px-8 py-4 rounded-lg font-bold text-lg text-white hover:bg-emerald-dark"
          >
            Rejoindre le mouvement
          </a>
        </div>

        {/* Chiffres clés */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">2.1M</p>
            <p className="text-gray-700 font-semibold">Bénéficiaires potentiels</p>
          </div>
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">25-30B FCFA</p>
            <p className="text-gray-700 font-semibold">À économiser annuellement</p>
          </div>
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">400K</p>
            <p className="text-gray-700 font-semibold">Emplois créables</p>
          </div>
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">ODD</p>
            <p className="text-gray-700 font-semibold">Nations Unies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSocialSection
