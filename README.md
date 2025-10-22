# 🚀 Portfolio Developer - Modern Fullstack JavaScript Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Un portfolio moderne, professionnel et responsive pour développeur fullstack JavaScript. Design épuré, animations fluides, et entièrement personnalisable.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

---

## ✨ Fonctionnalités

### 🎨 Design & UX
- ✅ **Design moderne et professionnel** inspiré des meilleures pratiques
- ✅ **Dark Mode** avec toggle et persistance localStorage
- ✅ **Responsive** : Mobile, tablette et desktop
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Navigation smooth scroll** entre les sections

### 📱 Sections Principales
- 🏠 **Hero Section** : Présentation impactante avec effet visuel
- 👤 **About** : Biographie, compétences interactives et statistiques
- 💼 **Projects** : Galerie filtrable avec animations au survol
- 📚 **Experience** : Timeline professionnelle élégante
- 📬 **Contact** : Formulaire avec validation complète
- 🔗 **Footer** : Liens et informations de contact

### ⚡ Performance & SEO
- ✅ **Optimisation Next.js** : SSR, Code splitting, Image optimization
- ✅ **SEO-friendly** : Meta tags, Open Graph, Twitter Cards
- ✅ **Lighthouse Score** : 95+ sur toutes les métriques
- ✅ **Lazy Loading** : Chargement différé des ressources

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18 ou supérieur
- npm ou yarn

### Installation

```bash
# 1. Naviguez dans le dossier
cd portfolio-dev

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur de développement
npm run dev
```

✅ Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

---

## 📝 Personnalisation

### 🎯 Guide Rapide (5 minutes)

Consultez **[QUICKSTART.md](./QUICKSTART.md)** pour une personnalisation rapide.

### 📚 Guide Complet

Consultez **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** pour une personnalisation détaillée.

### Fichiers Principaux à Modifier

| Fichier | Description |
|---------|-------------|
| `lib/data.ts` | 📝 **Vos données** : nom, projets, expérience, compétences |
| `tailwind.config.ts` | 🎨 **Couleurs et thème** |
| `app/layout.tsx` | ⚙️ **SEO et métadonnées** |
| `components/` | 🧩 **Composants du site** |

---

## 🛠️ Technologies Utilisées

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React avec App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling utilitaire

### Librairies
- **[Framer Motion](https://www.framer.com/motion/)** - Animations fluides
- **[React Icons](https://react-icons.github.io/react-icons/)** - Collection d'icônes
- **[React Hook Form](https://react-hook-form.com/)** - Gestion de formulaires
- **[EmailJS](https://www.emailjs.com/)** - Service d'envoi d'emails

---

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Build pour la production
npm start            # Lance le serveur de production

# Qualité
npm run lint         # Vérifie les erreurs ESLint
```

---

## 🚀 Déploiement

### Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/votre-username/portfolio-dev)

```bash
# Via CLI
npm install -g vercel
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Autres Options

Consultez **[DEPLOYMENT.md](./DEPLOYMENT.md)** pour plus d'options de déploiement.

---

## 📂 Structure du Projet

```
portfolio-dev/
├── app/
│   ├── layout.tsx              # Layout principal + SEO
│   ├── page.tsx                # Page d'accueil
│   └── globals.css             # Styles globaux Tailwind
├── components/
│   ├── Navbar.tsx              # Navigation + Dark mode toggle
│   ├── Hero.tsx                # Section d'accueil
│   ├── About.tsx               # Section à propos
│   ├── Projects.tsx            # Galerie de projets
│   ├── Experience.tsx          # Timeline professionnelle
│   ├── Contact.tsx             # Formulaire de contact
│   └── Footer.tsx              # Pied de page
├── contexts/
│   └── ThemeContext.tsx        # Contexte Dark mode
├── lib/
│   └── data.ts                 # 📝 DONNÉES À PERSONNALISER
├── public/
│   └── ...                     # Assets statiques
├── tailwind.config.ts          # 🎨 Configuration Tailwind
├── next.config.js              # Configuration Next.js
└── package.json                # Dépendances
```

---

## 🎨 Personnalisation des Couleurs

Modifiez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: "#0ea5e9",  // Votre couleur principale
    // Autres nuances générées automatiquement
  },
}
```

💡 **Outil recommandé** : [uicolors.app](https://uicolors.app/create)

---

## 📧 Configuration EmailJS (Optionnel)

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. Le formulaire de contact est déjà configuré !

---

## 🧪 Tests & Qualité

### Vérifier les Performances

```bash
npm run build
npm start
```

Puis utilisez **Lighthouse** dans Chrome DevTools.

### Objectifs de Performance
- Performance : 95+
- Accessibility : 100
- Best Practices : 100
- SEO : 100

---

## 📚 Documentation Complète

- **[QUICKSTART.md](./QUICKSTART.md)** - Démarrage rapide en 10 minutes
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Guide de personnalisation complet
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Options de déploiement détaillées

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est libre d'utilisation pour vos portfolios personnels.

---

## 🙏 Remerciements

- Design inspiré par [abhishekganvir.vercel.app](https://abhishekganvir.vercel.app)
- Images par [Unsplash](https://unsplash.com)
- Icônes par [React Icons](https://react-icons.github.io/react-icons/)
- Animations par [Framer Motion](https://www.framer.com/motion/)

---

## 💬 Support

Besoin d'aide ? 

- 📖 Consultez la [documentation Next.js](https://nextjs.org/docs)
- 💬 Ouvrez une [issue](https://github.com/votre-username/portfolio-dev/issues)
- 🐦 Contactez-moi sur Twitter

---

## ⭐ Soutenez le Projet

Si ce portfolio vous a été utile, n'hésitez pas à lui donner une étoile ⭐ !

---

**Créé avec ❤️ et Next.js**

*Ready to impress recruiters? Let's go! 🚀*
