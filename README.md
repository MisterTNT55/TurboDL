# 🚀 TurboDL

Bienvenue dans **l’installeur qui fait gagner du temps** ! Fini les installations qui prennent une éternité : cet outil est conçu pour copier, déplacer et installer vos fichiers en un éclair.

---

## 📝 Description

Cet installeur simplifie et accélère le processus d’installation de fichiers sur votre machine. Que ce soit pour déployer des ressources, copier des gros dossiers ou préparer un environnement, il vous évite les longues attentes.

---

## ⚡ Fonctionnalités principales

- Transfert de fichiers optimisé pour la vitesse  
- Gestion intelligente des conflits de fichiers (écrasement, renommage)  
- Installation en mode silencieux ou avec interface simplifiée  
- Support des chemins longs et caractères spéciaux  
- Journalisation des opérations pour un suivi précis  

---

## 🚀 Installation rapide

1. Téléchargez l’installeur (le fichier `.exe` ou `.sh` selon votre OS)  
2. Lancez-le avec les droits nécessaires  
3. Sélectionnez le dossier source et le dossier de destination  
4. Appuyez sur **Installer** et profitez de la rapidité !  

---

## 💡 Astuces

- Pour une installation silencieuse (sans interface), lancez l’installeur avec l’option `--silent`  
- Vérifiez bien que vous avez les permissions suffisantes sur les dossiers  
- Utilisez le mode journal (`--log`) pour garder un historique des transferts  

---

## 🛠️ Configuration avancée

Vous pouvez personnaliser les paramètres via un fichier `config.json` :

```json
{
  "default_segments": 4,
  "temp_dir": "data/temp/"
}
