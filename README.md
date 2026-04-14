# 🌍 Diaspora Connect - Landing Page

Une landing page moderne et minimaliste pour **Diaspora Connect**, un projet de révolution financière au Bénin utilisant la blockchain pour réduire les frais de transfert de la diaspora.

## 📋 Projet du Miabe Hackathon 2026

Diaspora Connect utilise la technologie blockchain (Stellar/Celo) pour offrir des transferts monétaires à moins de 1% de frais, contre 7-15% actuellement.

---

## 🎯 Fonctionnalités de la Landing Page

### 1. **Hero Section** 🚀
- Titre percutant sur l'inclusion financière
- Message clé : réduction des frais de 7-15% à <1%
- Statistiques d'accroche
- Appel à l'action dual

### 2. **Problem Section** 📊
- Chiffres clés : 450-550M USD envoyés annuellement
- Frais prélevés par les acteurs traditionnels
- Comparaison des coûts (Western Union vs Banques vs Diaspora Connect)
- Objectif ODD 10.c - réduction à 3%

### 3. **Impact Simulator** 🎯 (Interactif)
- Slider/Input pour saisir un montant en USD
- Calcul dynamique des frais traditionnels (12%) vs Diaspora Connect (<1%)
- Affichage en USD et conversion FCFA
- Impact annuel pour transferts récurrents

### 4. **Blockchain Section** ⚡
- 4 avantages clés avec icônes (vitesse, sécurité, pas d'intermédiaires, frais minimaux)
- Comparaison visuelle : systèmes traditionnels vs blockchain
- Détails sur Stellar et Celo
- Avantages spécifiques de chaque réseau

### 5. **Social Impact Section** 💚
- Statistique clé : 60% des ménages ruraux dépendent des transferts
- Utilisation des fonds (santé, éducation, logement, entrepreneuriat)
- Bénéfices directs chiffrés
- Histoires réelles (témoignages)
- Appel à l'action humanisé

### 6. **Footer** 🔗
- Informations détaillées (liens, contact)
- Réseaux sociaux
- Conditions légales

---

## 🎨 Design

### Palette de Couleurs
- **Bleu Nuit** : `#001a4d` et `#000f2e` (primaire)
- **Blanc** : `#FFFFFF` (fond/texte principal)
- **Vert Émeraude** : `#10b981` (accents/CTA)
- **Vert Émeraude Clair** : `#a7f3d0` (highlights)

### Caractéristiques
- ✅ Minimaliste et moderne
- ✅ Épuré sans fioritures
- ✅ Entièrement responsive (mobile-first)
- ✅ Tailwind CSS (0 CSS externe)
- ✅ Animations fluides et subtiles
- ✅ Performance optimisée

---

## 🛠️ Stack Technique

- **Framework** : React 18.2.0
- **Build Tool** : Vite 5.0
- **Styling** : Tailwind CSS 3.3.5
- **Icons** : Lucide React 0.294.0
- **Node.js** : Compatible avec v16+

---

## 📦 Installation et Démarrage

### Prérequis
- Node.js 16+ et npm/yarn/pnpm

### Installation
```bash
# Cloner le projet
git clone <repo-url>
cd diaspora-connect

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev

# Accéder à http://localhost:5173
```

### Build Production
```bash
# Générer les fichiers optimisés
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du Projet

```
diaspora-connect/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx          # Section hero avec accroche
│   │   ├── ProblemSection.jsx       # Contexte du problème
│   │   ├── ImpactSimulator.jsx      # Calculateur interactif
│   │   ├── BlockchainSection.jsx    # Solution blockchain
│   │   ├── ImpactSocialSection.jsx  # Impact social humanisé
│   │   └── Footer.jsx               # Pied de page
│   ├── App.jsx                      # Composant principal
│   ├── App.css                      # Styles globaux Tailwind
│   └── main.jsx                     # Point d'entrée
├── index.html                       # HTML principal
├── tailwind.config.js               # Configuration Tailwind
├── postcss.config.js                # Configuration PostCSS
├── vite.config.js                   # Configuration Vite
├── package.json                     # Dépendances
└── README.md                        # Ce fichier
```

---

## 💡 Points Clés

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints : sm (640px), md (768px), lg (1024px)
- ✅ Layouts adaptatifs avec Tailwind CSS

### Interactivité
- Simulateur avec état React
- Calculs en temps réel
- Transitions fluides

### Accessibilité
- Sémantique HTML correcte
- Contraste couleurs conforme WCAG
- Navigation logique

### Performance
- Bundle léger avec Vite
- Images optimisées
- CSS critiques inline

---

## 🎓 Conventions de Code

- ✅ Composants fonctionnels React avec hooks
- ✅ Commentaires JSDoc pour chaque composant
- ✅ Props déstructurées
- ✅ Pas de fichiers CSS externes (Tailwind uniquement)
- ✅ Noms de fichiers en PascalCase (composants) ou camelCase (utils)

---

## 📞 Support & Contact

**Miabe Hackathon 2026**
- 📧 contact@diaspora-connect.com
- 🌍 Cotonou, Bénin

---

## 📄 Licence

Ce projet est développé pour le Miabe Hackathon 2026.

---

## 🚀 Prochaines Étapes

- [ ] Intégration API réelle du service Diaspora Connect
- [ ] Authentification utilisateur
- [ ] Dashboard utilisateur
- [ ] Intégration paiement
- [ ] Support multi-langue
- [ ] Analyse des transferts

---

**Construit avec ❤️ pour l'inclusion financière au Bénin**
