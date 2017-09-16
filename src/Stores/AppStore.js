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