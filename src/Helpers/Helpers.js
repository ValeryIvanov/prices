export default class Helpers {
    static calculateProductsSum(products = []) {
        return products.reduce((a, b) => a += parseFloat(b.unitprice || b.price), 0).toFixed(2);
    }
}
