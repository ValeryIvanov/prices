import {extendObservable, action} from 'mobx';
import $ from 'jquery';

export default class CartStore {
    constructor() {
        extendObservable(this, {
            maxima: [],
            selver: [],
            coop: [],
            prisma: [],
            selectedMaximaProduct: null,
            selectedSelverProduct: null,
            selectedCoopProduct: null,
            selectedPrismaProduct: null,
            addProductsToCart: action(() => {
                this.coop.push(this.selectedCoopProduct.product);
                this.maxima.push(this.selectedMaximaProduct.product);
                this.prisma.push(this.selectedPrismaProduct.product);
                this.selver.push(this.selectedSelverProduct.product);
                console.log('added products to cart');
                this.selectedCoopProduct = null;
                this.selectedMaximaProduct = null;
                this.selectedPrismaProduct = null;
                this.selectedSelverProduct = null;
                console.log('cleared selected products');
            }),
            get addToCartButtonDisabled() {
                return this.selectedMaximaProduct === null ||
                    this.selectedSelverProduct === null ||
                    this.selectedCoopProduct === null ||
                    this.selectedPrismaProduct === null;
            },
            get maximaTotalPrice() {
                return this.maxima.reduce((a, b) => a += parseFloat(b.unitprice), 0);
            },
            get coopTotalPrice() {
                return this.coop.reduce((a, b) => a += parseFloat(b.unitprice), 0);
            },
            get selverTotalPrice() {
                return this.selver.reduce((a, b) => a += parseFloat(b.unitprice), 0);
            },
            get prismaTotalPrice() {
                return this.prisma.reduce((a, b) => a += parseFloat(b.unitprice), 0);
            },
        });
    }
}