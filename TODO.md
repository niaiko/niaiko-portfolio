# ✅ TODO LIST - Portfolio Niaiko Rakoto

## 🔥 Priorité 1 - Essentiel (À faire en premier)

### 1. Compléter les traductions multilingues
**Temps estimé : 2-3 heures**

- [ ] **About.tsx**
  - [ ] Traduire le titre et sous-titre
  - [ ] Traduire les labels des statistiques
  - [ ] Traduire les onglets de compétences
  - [ ] Traduire la description bio

- [ ] **Projects.tsx**
  - [ ] Traduire le titre et sous-titre
  - [ ] Traduire les filtres (Tous, Web App, Mobile, Dashboard)
  - [ ] Traduire les boutons ("Voir le code", "Démo en ligne")

- [ ] **Experience.tsx**
  - [ ] Traduire le titre et sous-titre
  - [ ] Remplacer "Present" par la traduction dynamique

- [ ] **Contact.tsx**
  - [ ] Traduire tous les labels du formulaire
  - [ ] Traduire les messages de succès/erreur
  - [ ] Traduire les informations de contact

- [ ] **Footer.tsx**
  - [ ] Traduire le copyright
  - [ ] Traduire les liens et mentions

📖 **Référence** : `TRANSLATION-GUIDE.md`

---

### 2. Ajouter vos vrais projets
**Temps estimé : 4-6 heures**

- [ ] **Préparer les informations**
  - [ ] Lister vos 6-10 meilleurs projets
  - [ ] Pour chaque projet : titre, description (FR + EN), technologies, liens
  - [ ] Prendre des screenshots de qualité (1200x800px minimum)

- [ ] **Mettre à jour lib/data.ts**
  - [ ] Remplacer les 6 projets d'exemple
  - [ ] Ajouter les vraies descriptions en français
  - [ ] Ajouter les traductions anglaises
  - [ ] Mettre les vrais liens GitHub et démos

- [ ] **Ajouter les images**
  - [ ] Créer le dossier `/public/projects/`
  - [ ] Placer les screenshots (projet1.jpg, projet2.jpg, etc.)
  - [ ] Optimiser les images (compression)
  - [ ] Mettre à jour les chemins dans data.ts

📝 **Exemple de structure** :
```typescript
{
  id: 1,
  title: {
    fr: "Plateforme de Gestion",
    en: "Management Platform"
  },
  description: {
    fr: "Application web complète...",
    en: "Full-featured web application..."
  },
  image: "/projects/projet1.jpg",
  tech: ["Angular", "NestJS", "PostgreSQL"],
  category: "Web App",
  github: "https://github.com/niaiko-rakoto/nom-projet",
  live: "https://demo.com",
  featured: true,
}
```

---

### 3. Ajouter votre expérience professionnelle
**Temps estimé : 2-3 heures**

- [ ] **Préparer les informations**
  - [ ] Lister vos expériences (6 ans)
  - [ ] Pour chaque poste : titre, entreprise, période, réalisations
  - [ ] Ajouter 3-5 points de réalisations par poste

- [ ] **Mettre à jour lib/data.ts**
  - [ ] Section `experience`
  - [ ] Remplacer les 4 entrées d'exemple
  - [ ] Ajouter vos vrais postes
  - [ ] Traduire en français ET anglais

📝 **Format suggéré** :
```typescript
{
  id: 1,
  role: {
    fr: "Développeur Full Stack Senior",
    en: "Senior Full Stack Developer"
  },
  company: "Nom de l'entreprise",
  location: "Antananarivo, Madagascar",
  period: "2020 - Présent", // ou "2020 - Present" pour EN
  description: {
    fr: "Description du poste en français...",
    en: "Job description in English..."
  },
  achievements: [
    {
      fr: "Développé 10+ applications...",
      en: "Developed 10+ applications..."
    },
    // ... autres réalisations
  ],
  type: "work",
}
```

---

## 🔨 Priorité 2 - Important (À faire ensuite)

### 4. Ajouter vos vraies images
**Temps estimé : 1-2 heures**

- [ ] **Photo de profil**
  - [ ] Prendre/choisir une photo professionnelle
  - [ ] Format carré (500x500px minimum)
  - [ ] Placer dans `/public/profile.jpg`
  - [ ] Mettre à jour dans Hero.tsx

- [ ] **Favicon et logo**
  - [ ] Créer un favicon personnalisé
  - [ ] Placer dans `/public/favicon.ico`
  - [ ] Créer un logo (optionnel)

- [ ] **Images de projets**
  - [ ] Voir section "Ajouter vos vrais projets" ci-dessus

---

### 5. Configurer le formulaire de contact EmailJS
**Temps estimé : 30-45 minutes**

- [ ] **Compte EmailJS**
  - [ ] Créer un compte sur [emailjs.com](https://www.emailjs.com/)
  - [ ] Créer un service email
  - [ ] Créer un template
  - [ ] Récupérer les clés API

- [ ] **Configuration**
  - [ ] Créer le fichier `.env.local`
  - [ ] Ajouter les variables :
    ```
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
    ```
  - [ ] Mettre à jour Contact.tsx avec les vraies clés
  - [ ] Tester l'envoi d'email

---

### 6. Personnaliser les couleurs (optionnel)
**Temps estimé : 30 minutes**

- [ ] **Si vous voulez changer de bleu à une autre couleur**
  - [ ] Ouvrir `tailwind.config.ts`
  - [ ] Modifier la palette `primary`
  - [ ] Tester dans le navigateur
  - [ ] Ajuster si nécessaire

📝 **Couleurs actuelles** : Bleu (#0ea5e9)

**Alternatives suggérées** :
- Violet : `#8b5cf6`
- Vert : `#10b981`
- Orange : `#f97316`
- Rose : `#ec4899`

---

## 💎 Priorité 3 - Nice to Have (Améliorations)

### 7. Ajouter votre CV téléchargeable
**Temps estimé : 15 minutes**

- [ ] Exporter votre CV en PDF
- [ ] Placer dans `/public/cv.pdf`
- [ ] Le bouton est déjà configuré dans le code
- [ ] Tester le téléchargement

---

### 8. Optimiser le SEO
**Temps estimé : 1 heure**

- [ ] **Métadonnées**
  - [ ] Vérifier `app/layout.tsx`
  - [ ] Ajouter Open Graph tags
  - [ ] Ajouter Twitter Card tags

- [ ] **Sitemap et Robots**
  - [ ] Créer `public/sitemap.xml`
  - [ ] Créer `public/robots.txt`

- [ ] **Performance**
  - [ ] Optimiser les images (WebP)
  - [ ] Vérifier les Core Web Vitals
  - [ ] Tester sur PageSpeed Insights

---

### 9. Déployer en ligne
**Temps estimé : 30-60 minutes**

- [ ] **Choix de la plateforme**
  - [ ] Option 1 : Vercel (recommandé) ⭐
  - [ ] Option 2 : Netlify
  - [ ] Option 3 : GitHub Pages

- [ ] **Déploiement sur Vercel**
  - [ ] Créer un compte Vercel
  - [ ] Connecter le repo GitHub
  - [ ] Configurer les variables d'environnement
  - [ ] Déployer
  - [ ] Configurer un domaine personnalisé (optionnel)

📖 **Guide complet** : `DEPLOYMENT.md`

---

### 10. Ajouter des certifications
**Temps estimé : 30 minutes**

- [ ] Lister vos certifications
- [ ] Mettre à jour `lib/data.ts` section `certificates`
- [ ] Ajouter les liens vers les credentials
- [ ] Ajouter les logos (optionnel)

---

## 🧪 Tests et Validation

### Tests essentiels avant mise en ligne

- [ ] **Fonctionnalités**
  - [ ] Navigation entre sections fonctionne
  - [ ] Changement de langue FR/EN fonctionne
  - [ ] Mode sombre/clair fonctionne
  - [ ] Menu mobile fonctionne
  - [ ] Formulaire de contact fonctionne
  - [ ] Tous les liens externes s'ouvrent correctement

- [ ] **Contenu**
  - [ ] Aucune faute d'orthographe
  - [ ] Toutes les images chargent correctement
  - [ ] Tous les textes sont traduits
  - [ ] Informations personnelles à jour
  - [ ] Liens sociaux corrects

- [ ] **Responsive**
  - [ ] Test sur mobile (320px-768px)
  - [ ] Test sur tablette (768px-1024px)
  - [ ] Test sur desktop (1024px+)
  - [ ] Test sur grand écran (1920px+)

- [ ] **Navigateurs**
  - [ ] Chrome ✅
  - [ ] Firefox ✅
  - [ ] Safari ✅
  - [ ] Edge ✅

- [ ] **Performance**
  - [ ] PageSpeed score > 90
  - [ ] Temps de chargement < 3s
  - [ ] Pas d'erreurs console

---

## 📊 Progression

```
Priorité 1 (Essentiel)      [░░░░░░░░░░] 0%
Priorité 2 (Important)      [░░░░░░░░░░] 0%
Priorité 3 (Nice to Have)   [░░░░░░░░░░] 0%

Total                       [░░░░░░░░░░] 0%
```

**Mettez à jour cette barre au fur et à mesure !**

---

## 🎯 Plan d'action recommandé

### Jour 1 (4-6h)
1. Compléter toutes les traductions
2. Commencer à lister vos projets

### Jour 2 (4-6h)
1. Ajouter tous vos projets réels
2. Prendre/optimiser les screenshots

### Jour 3 (3-4h)
1. Ajouter votre expérience professionnelle
2. Configurer EmailJS
3. Ajouter vos images

### Jour 4 (2-3h)
1. Tests complets
2. Corrections et ajustements
3. Déploiement

**Total : 13-19 heures de travail**

---

## 💡 Conseils

1. **Faites une tâche à la fois** : Ne vous éparpillez pas
2. **Testez régulièrement** : Après chaque modification importante
3. **Sauvegardez** : Faites des commits Git réguliers
4. **Demandez des avis** : Montrez à des amis/collègues
5. **Itérez** : Vous pouvez toujours améliorer plus tard

---

## 🎉 Félicitations !

Quand vous aurez coché toutes les cases de Priorité 1, vous aurez un **portfolio professionnel fonctionnel** prêt à être montré ! 🚀

---

**Bon courage !** 💪

Vous pouvez mettre à jour ce fichier au fur et à mesure de votre progression.
