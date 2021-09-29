export default class Product
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
}

function CalculerVAT()
{
    return Product.price * (vat/100);
}

function priceVAT(product, vat)
{
    return Product.price + CalculerVAT(product, vat);
}