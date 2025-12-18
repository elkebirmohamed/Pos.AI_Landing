# Guide de Déploiement - POS.AI Landing Page

Ce document détaille la procédure pour déployer l'application React (Landing Page) sur **Vercel** (via GitHub) et sur **Google Cloud Run**.

## Prérequis

L'application a été configurée pour utiliser **Vite** comme outil de build. Les fichiers de configuration suivants ont été ajoutés à la racine du projet pour permettre le déploiement :
- `package.json` : Dépendances et scripts de build.
- `vite.config.ts` : Configuration du compilateur.
- `tsconfig.json` : Configuration TypeScript.

---

## Option 1 : Déploiement via Vercel (Recommandé)

C'est la méthode la plus simple et la plus rapide pour une Landing Page statique.

### Étape 1 : Pousser le code sur GitHub
1. Créez un nouveau dépôt (repository) sur [GitHub](https://github.com).
2. Ouvrez votre terminal à la racine du projet et exécutez :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - POS.AI Landing Page"
   git branch -M main
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/VOTRE_PROJET.git
   git push -u origin main
   ```

### Étape 2 : Connecter Vercel
1. Créez un compte ou connectez-vous sur [Vercel](https://vercel.com).
2. Cliquez sur **"Add New..."** > **"Project"**.
3. Sélectionnez **"Continue with GitHub"**.
4. Importez le dépôt que vous venez de créer.

### Étape 3 : Configuration du Build
Vercel détecte automatiquement Vite. Vérifiez simplement ces paramètres par défaut :
- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

Cliquez sur **Deploy**. Votre site sera en ligne en moins d'une minute (ex: `https://pos-ai-landing.vercel.app`).

---

## Option 2 : Déploiement sur Google Cloud Run

Cette option est idéale si vous souhaitez conteneuriser l'application (Docker) pour une infrastructure plus robuste ou d'entreprise.

### Étape 1 : Créer le Dockerfile
Créez un fichier nommé `Dockerfile` (sans extension) à la racine du projet avec le contenu suivant :

```dockerfile
# Étape 1 : Build de l'application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Web (Nginx) pour servir les fichiers statiques
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Configuration Nginx pour le routing React (SPA)
RUN echo 'server { listen 80; server_name localhost; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Étape 2 : Préparer Google Cloud
1. Installez le [Google Cloud SDK](https://cloud.google.com/sdk/docs/install).
2. Initialisez et connectez-vous :
   ```bash
   gcloud init
   gcloud auth login
   ```
3. Activez les services nécessaires (Cloud Build et Cloud Run) dans votre projet GCP.

### Étape 3 : Déployer
Exécutez la commande suivante (remplacez `pos-ai-landing` par le nom souhaité) :

```bash
gcloud run deploy pos-ai-landing \
  --source . \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated
```

Google Cloud va :
1. Uploader vos fichiers sources.
2. Utiliser le `Dockerfile` pour construire l'image conteneur.
3. Déployer l'image sur une URL sécurisée (ex: `https://pos-ai-landing-xyz-ew.a.run.app`).

---

## Gestion des Mises à Jour

Une fois l'application en ligne, vous aurez probablement besoin de faire des modifications (texte, images, fonctionnalités). Voici comment procéder selon votre méthode d'hébergement.

### 1. Cycle de développement recommandé

Avant de mettre à jour la version en ligne (production), testez toujours vos changements localement :

1. Faites vos modifications dans le code.
2. Testez en local :
   ```bash
   npm run dev
   ```
3. Vérifiez que tout fonctionne sur `http://localhost:5173`.

### 2. Mettre à jour sur Vercel

Si vous avez connecté Vercel à votre dépôt GitHub, la mise à jour est **automatique**.

1. Sauvegardez vos modifications via Git :
   ```bash
   git add .
   git commit -m "Description de vos modifications"
   git push origin main
   ```
2. Vercel détectera le nouveau commit, lancera le build et redéploiera le site automatiquement.
3. Vous pouvez suivre l'avancement dans le tableau de bord Vercel.

### 3. Mettre à jour sur Google Cloud Run

Pour Cloud Run, vous devez reconstruire l'image Docker et la redéployer.

1. Assurez-vous d'être connecté et sur le bon projet :
   ```bash
   gcloud config set project ID_DE_VOTRE_PROJET
   ```
2. Relancez simplement la commande de déploiement (la même que lors de l'installation) :
   ```bash
   gcloud run deploy pos-ai-landing \
     --source . \
     --platform managed \
     --region europe-west1 \
     --allow-unauthenticated
   ```
   *Note : Cela va créer une nouvelle révision du service. Google Cloud gère la bascule du trafic automatiquement une fois le nouveau conteneur prêt.*

---

## Notes Importantes

- **URL d'achat** : L'application est configurée pour rediriger les achats vers `https://posaiform-ld6bhcl9n-elkebirs-projects.vercel.app`. Si cette URL change, modifiez le fichier `components/Pricing.tsx` et `components/Hero.tsx`.
- **Mises à jour** : 
    - Pour **Vercel** : Chaque `git push` déclenche un nouveau déploiement automatique.
    - Pour **Cloud Run** : Relancez la commande `gcloud run deploy` après vos modifications.

---

## Dépannage / Erreurs Courantes

### Échec du Build (Error TS6133)
Si vous rencontrez l'erreur `Command "npm run build" exited with 2` accompagnée de messages `error TS6133: '...' is declared but its value is never read` :

**Cause :** TypeScript est configuré en mode strict (`noUnusedLocals: true`). Il refuse de compiler si des variables, des composants ou des imports sont déclarés mais jamais utilisés dans le code.

**Solution :**
1. Repérez le fichier et la ligne indiqués dans les logs d'erreur (ex: `components/AIFeature.tsx(3,1)`).
2. Supprimez l'import ou la variable inutile.
3. Poussez à nouveau votre code.

Ceci garantit que le code de production reste propre et optimisé.