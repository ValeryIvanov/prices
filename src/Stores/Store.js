import AppStore from './AppStore';
import CartStore from './CartStore';

export default class Store {
    constructor() {
        this.appStore = new AppStore();
        this.cartStore = new CartStore();
    }
}
