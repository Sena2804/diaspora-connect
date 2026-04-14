import React from 'react'
import { Heart, Stethoscope, BookOpen, Home, Briefcase } from 'lucide-react'

/**
 * ImpactSocialSection Component
 * 
 * Rappelle l'importance sociale des transferts de la diaspora
 * 60% des ménages ruraux dépendent de ces fonds pour la santé et l'éducation
 */
const ImpactSocialSection = () => {
  const impactAreas = [
    {
      icon: Heart,
      title: 'Santé et Bien-être',
      description: 'Accès aux soins médicaux pour les enfants et les personnes âgées',
      percentage: '35%'
    },
    {
      icon: BookOpen,
      title: 'Éducation',
      description: 'Frais de scolarité et fournitures scolaires',
      percentage: '30%'
    },
    {
      icon: Home,
      title: 'Logement',
      description: 'Construction et amélioration du habitat familial',
      percentage: '20%'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneuriat',
      description: 'Démarrage de petits commerces et activités génératrices',
      percentage: '10%'
    },
    {
      icon: Stethoscope,
      title: 'Nutrition',
      description: 'Alimentation suffisante et équilibrée',
      percentage: '5%'
    }
  ]

  const impactChartData = impactAreas.map((area) => ({
    name: area.title,
    value: parseFloat(area.percentage),
  }))

  const impactBars = [
    { label: 'Santé', value: 35 },
    { label: 'Éducation', value: 30 },
    { label: 'Logement', value: 20 },
    { label: 'Entrepreneuriat', value: 10 },
    { label: 'Nutrition', value: 5 },
  ]

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
        <div className="bg-gradient-to-r from-emerald/10 to-emerald-light/20 dark:from-slate-900/40 dark:to-slate-900/20 border-2 border-emerald rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-bold gradient-text mb-4">60%</p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Estimation : 60% des ménages ruraux béninois dépendent des transferts de la diaspora
              <span className="block text-lg mt-2 text-gray-600 dark:text-gray-400">
                pour couvrir leurs besoins essentiels
              </span>
            </p>
          </div>
        </div>

        {/* Utilisation des fonds */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Où vont les transferts ?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className="card-hover bg-gradient-to-br from-emerald/5 to-navy/5 dark:from-emerald-900/20 dark:to-slate-900/40 border border-emerald/20 dark:border-slate-700 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald/20 dark:bg-emerald-900/30 rounded-lg p-2">
                      <Icon className="w-5 h-5 text-emerald" />
                    </div>
                    <span className="text-3xl font-bold text-emerald">{area.percentage}</span>
                  </div>
                  <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="rounded-[2rem] border border-emerald/10 bg-white p-8 shadow-xl dark:bg-slate-900 dark:border-slate-700">
            <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">Graphique d’impact social</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">
              Chaque pourcentage économisé est réinvesti dans la santé, l’éducation et le logement local.
            </p>
            <div className="space-y-5">
              {impactBars.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{item.label}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}%</p>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald/10 bg-gradient-to-br from-emerald/10 via-white/40 to-slate-100 p-8 shadow-2xl dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:border-slate-700">
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Pourquoi c’est plus joli et plus utile</h3>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white/90 p-6 shadow-lg dark:bg-slate-950 dark:shadow-black/20">
                <p className="text-sm text-emerald font-semibold uppercase">Avantage 1</p>
                <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Moins de frais, plus de pouvoir d’achat</p>
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
        <div className="rounded-[2rem] border border-emerald/10 bg-white p-8 shadow-xl dark:bg-slate-900 dark:border-slate-700 mb-16">
          <h3 className="text-2xl font-bold mb-8">Bénéfices Directs de Diaspora Connect</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-emerald pt-6">
              <p className="text-4xl font-bold text-emerald mb-2">+450K</p>
              <p className="text-gray-300">Enfants scolarisés supplémentaires par an</p>
              <p className="text-xs text-gray-400 mt-2">Grâce aux frais réduits</p>
            </div>
            <div className="border-t-4 border-emerald pt-6">
              <p className="text-4xl font-bold text-emerald mb-2">+200K</p>
              <p className="text-gray-300">Familles sortant de la pauvreté</p>
              <p className="text-xs text-gray-400 mt-2">Investissements plus élevés</p>
            </div>
            <div className="border-t-4 border-emerald pt-6">
              <p className="text-4xl font-bold text-emerald mb-2">+15M FCFA</p>
              <p className="text-gray-300">Investis en entrepreneuriat local</p>
              <p className="text-xs text-gray-400 mt-2">Création d'emplois</p>
            </div>
          </div>
        </div>

        {/* Témoignages / Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Histoires Réelles</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald rounded-xl p-6 shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald/20 dark:bg-emerald-900/30 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-emerald" />
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
            </div>

            {/* Story 2 */}
            <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald rounded-xl p-6 shadow-md dark:shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald/20 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-emerald" />
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
            </div>
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="bg-gradient-to-r from-slate-100 via-emerald/10 to-slate-100 rounded-2xl p-8 md:p-12 text-center text-slate-900 mb-16 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <h3 className="text-3xl font-bold mb-4">Faites la Différence</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
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
            <p className="text-emerald text-4xl font-bold mb-2">2.3M</p>
            <p className="text-gray-700 font-semibold">Bénéficiaires potentiels</p>
          </div>
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">35B FCFA</p>
            <p className="text-gray-700 font-semibold">À économiser annuellement</p>
          </div>
          <div>
            <p className="text-emerald text-4xl font-bold mb-2">500K</p>
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
