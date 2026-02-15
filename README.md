# 🌐 Social Network API (MERN Stack)

![NodeJS](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

> Une API REST robuste pour un réseau social. Elle gère l'authentification, les publications, les commentaires et la recherche d'utilisateurs.

## ✨ Fonctionnalités Principales

* **🔐 Authentification Sécurisée :** Gestion des utilisateurs (Inscription/Connexion) via `authRoutes`.
* **📝 Gestion des Posts :** Création, lecture et suppression de publications (supporte les contenus lourds jusqu'à 50mb).
* **💬 Système de Commentaires :** Interaction complète sur les publications via `commentRoutes`.
* **👤 Profils Utilisateurs :** Gestion et mise à jour des profils via `userRoutes`.
* **🔍 Recherche :** Fonctionnalité de recherche avancée via `searchRoutes`.
* **🛡️ Sécurité & Logs :** Protection via `Helmet` et logs des requêtes via `Morgan`.

## 🛠️ Stack Technique

* **Runtime :** Node.js
* **Framework :** Express.js
* **Base de données :** MongoDB (avec Mongoose ODM)
* **Sécurité/Utils :** Cors, Helmet, Morgan, Dotenv

## 🚀 Installation et Configuration

Suivez ces étapes pour lancer le serveur localement : 

### 1. Cloner le projet
```bash
git clone [https://github.com/barakatyoussef/social-network-api.git](https://github.com/barakatyoussef/social-network-api.git)
cd nom-du-repo
```


### 2. Installer les dépendances
```npm install```

### 3. Configuration d'environnement (.env)
```
PORT=5000
MONGO_URI=votre_lien_mongodb_atlas
JWT_SECRET=votre_cle_secrete_jwt
```

### 4. Lancer le serveur
```bash
# Mode développement (avec logs détaillés)
npm run dev

# Mode production
npm start
```

## 📡 Endpoints de l'API

Voici les routes principales accessibles via `http://localhost:5000` :

| Domaine | Méthode | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/register` | Inscription d'un nouvel utilisateur |
| | `POST` | `/api/auth/login` | Connexion (retourne un Token JWT) |
| **Posts** | `GET` | `/api/posts` | Récupérer le fil d'actualité |
| | `POST` | `/api/posts` | Créer une publication |
| | `DELETE`| `/api/posts/:id` | Supprimer une publication |
| **Users** | `GET` | `/api/users/:id` | Voir le profil d'un utilisateur |
| | `PUT` | `/api/users/:id` | Mettre à jour son profil |
| **Comments**| `POST` | `/api/comments` | Ajouter un commentaire |
| **Search** | `GET` | `/api/search` | Rechercher un utilisateur ou un post |

## 👤 Auteur

**Youssef Barakat**
* Projet réalisé dans le cadre académique.
* [GitHub](https://github.com/barakatyoussef)



