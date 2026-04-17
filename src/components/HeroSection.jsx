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
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-4 py-20 relative text-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute top-10 left-8 h-40 w-40 rounded-full bg-emerald/20 blur-3xl animate-blob" />
        <span className="absolute top-24 right-24 h-52 w-52 rounded-full bg-white/60 blur-3xl animate-blob delay-2000 dark:bg-slate-700/60" />
        <span className="absolute bottom-10 left-1/2 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl animate-blob delay-4000 dark:bg-slate-800/40" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
        <div className="space-y-8 lg:text-left text-center">
          <div data-aos="fade-down" className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm text-cyan-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-cyan-200">
            Nouvelle plateforme pour les transferts de la diaspora
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Diaspora Connect : plus de flux, moins de frais,
            <span className="block text-emerald">plus d’impact réel</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Construisez un pont financier transparent entre la diaspora et les familles au Bénin, avec un modèle de transfert plus rapide, plus sûr et plus accessible.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#simulator"
              className="btn-hover inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald/20 transition-colors hover:bg-emerald-dark"
            >
              Je veux économiser
              <ArrowRight size={20} />
            </a>
            <a
              href="#impact"
              className="btn-hover inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-950 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Voir l’impact
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mt-10">
            <div data-aos="fade-up" data-aos-delay="400" className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald">Economies</p>
              <p className="mt-4 text-3xl font-bold">6x</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Plus de fonds envoyés aux familles</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Rapidité</p>
              <p className="mt-4 text-3xl font-bold"><span className="text-emerald">Instantané</span></p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Paiements plus rapides et transparents</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-500 dark:text-violet-300">Confiance</p>
              <p className="mt-4 text-3xl font-bold">0</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Intermédiaires cachés</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-100 px-5 py-4 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald">Diaspora Connect</p>
              <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-slate-100">Solution de transfert</p>
            </div>
            <span className="rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-slate-950 dark:text-slate-100">Top</span>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Frais estimés</p>
              <p className="text-3xl font-bold text-slate-950 dark:text-slate-100">&lt; 1%</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Une économie visible sur chaque transfert.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Confiance</p>
              <p className="text-3xl font-bold text-slate-950 dark:text-slate-100">Blockchain</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Sécurité immuable, sans commission cachée.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald/20 to-emerald/5 p-6 text-slate-950 dark:from-emerald-900/20 dark:to-slate-900 dark:text-slate-100">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-dark">Impact prévu</p>
            <p className="mt-4 text-3xl font-bold">+25-30 milliards de FCFA</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Économisés chaque année pour les familles béninoises (calcul basé sur les transferts annuels).</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
