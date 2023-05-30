// Fonction contructeur
function Products(name, description, priceExcludingTaxes, stock, active, ageLimit) {
    this.name = name,
    this.description = description,
    this.priceExcludingTaxes = Number(priceExcludingTaxes).toFixed(2),
    this.stock = stock,
    this.active = active,
    this.ageLimit = ageLimit
};

// Prototypes
Products.prototype.taxe = 20;
Products.prototype.discount = 0;

// Méthodes
Products.prototype.priceIncludingTaxes = function () {
    return this.priceExcludingTaxes * (1 + this.taxe / 100);
};

Products.prototype.checkingStatus = function () {
    this.active = this.stock > 0;
    return this.active;
};

Products.prototype.getDiscount = function () {
    if (this.discount > 0) {
        const fullPrice = this.priceIncludingTaxes();
        return fullPrice * (1 - this.discount / 100);
    } else {
        return "Il n'y a pas de remise pour ce produit.";
    }
};

Products.prototype.getString = function () {
    return `Le produit ${this.name} est vendu au prix de ${this.priceExcludingTaxes
    } €, soit ${this.priceIncludingTaxes().toFixed(2)} € TTC. ${
        this.ageLimit 
        ? "Vous devez avoir " + this.ageLimit + "ans pour l'acheter. " : ""
    } ${this.discount 
        ? "Une remise de " + this.discount + "% est disponible." : ""
    }`;
};

const product1 = new Products("ps5", "console", 500, 10, true, 18);
console.log(product1);
console.log(product1.priceIncludingTaxes().toFixed(2));
console.log(product1.checkingStatus());

product1.stock = 0;
console.log(product1.checkingStatus());

console.log(product1.getDiscount());

product1.discount = 50;
console.log(product1.getDiscount().toFixed(2));

console.log(product1.getString());