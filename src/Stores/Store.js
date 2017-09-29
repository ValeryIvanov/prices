import AppStore from './AppStore';
import CartStore from './CartStore';

export default class Store {
    constructor() {
        this.cartStore = new CartStore();
        this.appStore = new AppStore(this.cartStore);
    }
}
