# 🌐 Social Network API (MERN Stack)

![NodeJS](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

> Une API REST robuste pour un réseau social, développée dans le cadre d'un projet universitaire. Elle gère l'authentification, les publications, les commentaires et la recherche d'utilisateurs.

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
git clone [https://github.com/ton-user/nom-du-repo.git](https://github.com/ton-user/nom-du-repo.git)
cd nom-du-repo ```
