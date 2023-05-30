# Atelier 1: Produits

# Objectifs:

- Créer des fonctions constructeur
- Utiliser les prototype

# Sujet: 

Dans ce premier atelier, vous devez implémenter une fonction constructeur permettant de créer de objets modélisant un produit pour un site ecommerce. Chaque objet produit devra proposer les propriétés et méthodes ci-dessous. Cependant, il vous appartient de décider quelles propriétés ou méthodes doivent être assignées aux objets (lors de la construction) ou au prototype.

Le produit est décrit par :

- un nom
- un description
- un prix HT
- un taux de TVA (taux par défaut 20%)
- un niveau de stock
- une restriction d'age (nombre)
- une liste de de déclinaisons (tailles, couleurs) optionnelle
- un état en vente ou non
- un taux de remise (par défaut 0)

Il doit également être possible à l'aide des méthodes :

- d'obtenir le prix TTC
- de retirer de la vente un produit (stock à 0 et mise hors vente)
- de vérifier si un age (passé en argument) est suffisant pour acheter le produit
- d'obtenir le prix promotionnel du produit (remise incluse) ou un message "Pas de remise" s'il le produit n'en a pas
- d'obtenir une chaine de caractère décrivant le produit du type selon ses propriétés. Par exemple : "Le produit ..... est vendu au prix de .... € soit .... € TTC. Vous devez avoir ..... ans pour l'acheter. Une remise de ...... % est disponible.". Le texte devant faire sens, certaines parties sont a masquer si les propriétés sont non-definies ou à 0.

Vous pouvez tester votre constructeur et prototype avec des données en dur.