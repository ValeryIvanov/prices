import {extendObservable, action} from 'mobx';
import $ from 'jquery';

export default class AppStore {
    constructor(cartStore) {
        this.cartStore = cartStore;
        extendObservable(this, {
            maxima: [],
            selver: [],
            coop: [],
            prisma: [],
            product: '',
            viewProducts: true,
            typingTimeout: null,
            updateProducts: action(() => {
                clearTimeout(this.typingTimeout);
                this.typingTimeout = setTimeout(() => {
                    if (!this.cartStore.selectedMaximaProduct) this.updateMaximaProducts();
                    if (!this.cartStore.selectedSelverProduct) this.updateSelverProducts();
                    if (!this.cartStore.selectedCoopProduct) this.updateCoopProducts();
                    if (!this.cartStore.selectedPrismaProduct) this.updatePrismaProducts();
                }, 500);
            }),
            updateMaximaProducts: action(() => {
                $.get(
                    'api/maxima?q=' + this.product,
                    (response) => {
                        this.maxima = response;
                    });
            }),
            updateSelverProducts: action(() => {
                $.get(
                    'api/selver?q=' + this.product,
                    (response) => {
                        this.selver = response;
                    });
            }),
            updateCoopProducts: action(() => {
                $.get(
                    'api/coop?q=' + this.product,
                    (response) => {
                        this.coop = response;
                    });
            }),
            updatePrismaProducts: action(() => {
                $.get(
                    'api/prisma?q=' + this.product,
                    (response) => {
                        this.prisma = response;
                    });
            }),
        });
    }
}