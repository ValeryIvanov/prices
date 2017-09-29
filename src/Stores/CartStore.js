import {extendObservable, action, toJS} from 'mobx';
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
                this.selectedCoopProduct = null;
                this.selectedMaximaProduct = null;
                this.selectedPrismaProduct = null;
                this.selectedSelverProduct = null;
            }),
            get addToCartButtonDisabled() {
                return this.selectedMaximaProduct === null ||
                    this.selectedSelverProduct === null ||
                    this.selectedCoopProduct === null ||
                    this.selectedPrismaProduct === null;
            },
            get maximaTotalPrice() {
                return this.maxima.reduce((a, b) => a += parseFloat(b.unitprice || b.price), 0).toFixed(2);
            },
            get coopTotalPrice() {
                return this.coop.reduce((a, b) => a += parseFloat(b.unitprice || b.price), 0).toFixed(2);
            },
            get selverTotalPrice() {
                return this.selver.reduce((a, b) => a += parseFloat(b.unitprice || b.price), 0).toFixed(2);
            },
            get prismaTotalPrice() {
                return this.prisma.reduce((a, b) => a += parseFloat(b.unitprice || b.price), 0).toFixed(2);
            },
            get saveCartButtonDisabled() {
                return !this.maxima.length || !this.selver.length || !this.coop.length || !this.prisma.length;
            },
            get cart() {
                return {
                    ts: new Date(),
                    cart: {
                        maxima: toJS(this.maxima),
                        selver: toJS(this.selver),
                        coop: toJS(this.coop),
                        prisma: toJS(this.prisma),
                    },
                };
            },
            saveCart: action(() => {
                $.post(
                    'api/cart',
                    this.cart,
                    (response) => {
                        console.log(response);
                    });
            }),
        });
    }
}