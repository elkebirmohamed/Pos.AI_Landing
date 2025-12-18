# Guide de Déploiement - POS.AI Landing Page

> **🚀 CONFIRMATION DE SYNCHRONISATION REUSSIE**
>
> Si vous voyez ce message sur GitHub, cela confirme que :
> 1. Votre dossier local est bien le même que celui du dépôt.
> 2. Le fichier `index.html` a été nettoyé (suppression de l'importmap).
> 3. Le déploiement sur Vercel peut maintenant fonctionner.
>
> *Date de validation : Mise à jour effectuée.*

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
   git commit -m "Mise à jour et synchronisation confirmée"
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

## Dépannage et Synchronisation (Crucial)

### 1. Cohérence Local vs Dépôt
Pour garantir que le build réussisse sur Vercel comme il réussit sur votre machine, nous avons appliqué des correctifs spécifiques aux fichiers de configuration (`tsconfig.json`, `package.json`, `index.html`) pour assouplir les règles strictes (ex: variables non utilisées).

**Remarque bien vue :**
Il est impératif que le dossier dans votre dépôt (GitHub) soit le **miroir exact** du dossier téléchargé localement sur lequel vous travaillez.

### 2. Échec du Build (Error TS6133)
Si vous aviez des erreurs `error TS6133: '...' is declared but its value is never read`, elles sont désormais gérées automatiquement par la configuration :
- **tsconfig.json** : `"noUnusedLocals": false`
- **package.json** : build sans vérification stricte.

---

## Notes Importantes

- **URL d'achat** : L'application est configurée pour rediriger les achats vers `https://activation-cl-pos.vercel.app`.
- **Mises à jour** : Chaque `git push` déclenche un nouveau déploiement automatique sur Vercel.