/**
 * Fonction constructeur Product
 */

function Product(
    name, 
    description, 
    price, 
    vat, 
    stock, 
    ageLimit,
    active,
    discount
) {
    this.name = String(name).trim();
    this.description = String(description).trim();

    if (typeof price !== "number" | price < 0) {
        throw new Error("Price must be a positive number")
    };
    this.price = price;

    if (typeof vat === "number") {
        this.vat = vat;
    };

    if (typeof stock !== "number" | stock < 0) {
        throw new Error("Stock must be a positive number")
    };
    this.stock = stock;

    if (typeof ageLimit === "number") {
        this.ageLimit = ageLimit > 0 ? ageLimit : 0;
    };

    if (typeof active === "boolean") {
        this.active = active;
    };

    if (typeof discount === "number") {
        this.discount = discount > 0 ? discount : 0;
    };
};

/**
 * Protoype
 */

Product.prototype.vat = 20;
Product.prototype.discount = 0;

/**
 * 
 * Méthodes
 */

Product.prototype.getFullPrice = function () {
    return (this.price * (1 + this.vat / 100)) + "€";
};

Product.prototype.removeFromSale = function () {
    if (this.stock === 0) {
        return this.active === false;
    };
};

Product.prototype.checkAge = function (age) {
    return age > this.ageLimit;
};

Product.prototype.getDiscountPrice = function () {
    if (this.discount > 0) {
        const fullPrice = this.getFullPrice();
        return (fullPrice * (1 - this.discount / 100)).toFixed(2);
    };
    return "Pas de remise.";
};

Product.prototype.getInformation = function () {
    return `Le produit ${this.name} est vendu au prix de ${this.getFullPrice()} € TTC. ${
        this.ageLimit 
        ? "Vous devez avoir " + this.ageLimit + " ans pour l'acheter." 
        : ""
    } ${
        this.discount 
        ? " Une remise de " + this.discount + " % est disponible." 
        : ""
    }`;
};

/**
 * Tests
 */

const product1 = new Product("ps5", "console", 500, 20, 10, null, true, 20);

console.log(product1);
console.log(product1.getFullPrice());
console.log(product1.getDiscountPrice());
console.log(product1.getInformation());