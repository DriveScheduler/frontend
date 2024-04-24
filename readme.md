# Frontend - DriveScheduler

## Introduction

DriveScheduler est une application web de gestion de planning d'auto école

## Présentation
- 3 rôles principaux : véhicule, élève, moniteur  
    - Véhicule : parc de gestion des véhicules, au moment où un élève choisit un créneau, un véhicule est automatiquement attribué pour ce créneau  
    - Moniteur : peut s'occuper de différents types de permis (moto, voiture, bâteau, poids lourd), peut s'occuper de X élèves simultanément, il a un emploi du temps avec ses dispos qu'il doit renseigner dans l'application  
    - Elève : Prend des RDV en fonction du type de permis pour lequel il est inscrit, et de la disponibilité des moniteurs
  
### Use Case Elève
- En tant qu'élève, je veux pouvoir créer un compte avec les informations suivantes : nom, prénom, adresse email, type de permis
- En tant qu'élève, je veux pouvoir sélectionner une plage horaire et m'y inscrire
- En tant qu'élève je veux pouvoir me désister d'un cours auquel je me suis inscrit (au moins 24h avant le cours)
- En tant qu'élève, je veux pouvoir être informé par mail/alerte si une disponibilité se libère pour une plage horaire dont j'ai décidé d'être alerté
- En tant qu'élève, je veux pouvoir filtrer mon planning. Par exemple voir les disponibilités d'un moniteur spécifique, voir toutes les dispos pour tous les permis, voir les créneaux qui sont déjà complets, etc...
- En tant qu'élève, je veux voir PAR DEFAUT les disponibilités pour le type de permis que j'ai choisi lors de mon inscription
- En tant qu'élève, je veux avoir accès à une page de suivi où je peux consulter mes différentes heures futures et passées
- En tant qu'élève, je veux, depuis ma page de suivi, voir le nombre d'heure que j'ai effectuées
- En tant qu'élève, je veux, depuis ma page de suivi, voir les commentaires que les moniteurs m'ont laissés

### Use Case Moniteur
- En tant que moniteur, je veux pouvoir entrer mes disponibilités dans l'application, ainsi que le nombre de personnes que je peux gérer simultanémment
- En tant que moniteur, je veux pouvoir spécifier le type de permis dont je peux m'occuper (moto, voiture, bateau, poids lourd, etc..)
- En tant que moniteur, je veux être alerté lorsqu'un élève s'inscrit/se désinscrit à une de mes plages horaires
- En tant que moniteur, je veux savoir quel véhicule m'a été attribué lorsqu'un élève s'inscrit à une de mes plages horaires
- En tant que moniteur, je veux pouvoir annuler un cours
- En tant que moniteur, je veux pouvoir ajouter un commentaire sur un élève pour un cours qu'il a effectué
- En tant que moniteur, je veux avoir accès à une page suivi avec différentes informations telles que : cours futurs, cours passés (+ possibilité de filtrage)

## Technos utilisées

### Frontend  

Angular  

Tests :   
Playwright 

### Backend  

C#  
BDD : on sait pas

Tests :  
Xunit