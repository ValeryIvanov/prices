import {extendObservable, action} from 'mobx';
import $ from 'jquery';

export default class AppStore {
    constructor() {
        extendObservable(this, {
            maxima: [],
            selver: [],
            coop: [],
            prisma: [],
            product: '',
            viewProducts: true,
            updateProducts: action(() => {
                $.get(
                    'api/maxima?q=' + this.product,
                    (response) => {
                        this.maxima = response;
                    });
                $.get(
                    'api/selver?q=' + this.product,
                    (response) => {
                        this.selver = response;
                    });
                $.get(
                    'api/coop?q=' + this.product,
                    (response) => {
                        this.coop = response;
                    });
                $.get(
                    'api/prisma?q=' + this.product,
                    (response) => {
                        this.prisma = response;
                    });
            }),
        });
    }
}