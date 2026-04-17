import React from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'

/**
 * Footer Component
 *
 * Pied de page avec informations de contact, liens utiles et social media
 */
const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      {/* Contenu principal du footer */}
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Colonne 1 : À propos */}
            <div>
              <h4 className="text-slate-950 font-bold text-lg mb-4 dark:text-white">Diaspora Connect</h4>
              <p className="text-sm leading-relaxed">
                Révolutionner les transferts de la diaspora avec la blockchain pour l'inclusion financière du Bénin.
              </p>
              <div className="mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">Miabe Hackathon 2026</p>
              </div>
            </div>

            {/* Colonne 2 : Produit */}
            <div>
              <h4 className="text-slate-950 font-bold text-lg mb-4 dark:text-white">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">Tarification</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">Sécurité</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Colonne 3 : Ressources */}
            <div>
              <h4 className="text-slate-950 font-bold text-lg mb-4 dark:text-white">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">API</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h4 className="text-slate-950 font-bold text-lg mb-4 dark:text-white">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald" />
                  <a href="mailto:contact@diaspora-connect.com" className="hover:text-emerald transition-colors">
                    contact@diaspora-connect.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-emerald" />
                  <span>Cotonou, Bénin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald" />
                  <span>+229 XX XX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-gray-300 dark:border-slate-700 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Copyright */}
              <div className="text-sm text-slate-700 dark:text-slate-400">
                <p>&copy; 2026 Diaspora Connect. Tous droits réservés.</p>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex justify-end gap-4">
                <a href="#" className="hover:text-emerald transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-emerald transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-emerald transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bande légale */}
      <div className="bg-slate-200 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-700 px-4 py-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-emerald transition-colors">Conditions d'utilisation</a>
          <span>•</span>
          <a href="#" className="hover:text-emerald transition-colors">Politique de confidentialité</a>
          <span>•</span>
          <a href="#" className="hover:text-emerald transition-colors">Conformité</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
