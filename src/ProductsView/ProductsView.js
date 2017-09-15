import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import ProductList from '../ProductList/ProductList';

class ProductView extends Component {
    render() {
        const cartStore = this.props.store.cartStore;
        const appStore = this.props.store.appStore;
        return (
            <div className="row">
                <ProductList
                    name={'Maxima'}
                    items={appStore.maxima}
                    imgBaseUrl={(img) => `https://www.e-maxima.ee/${img}`}
                    selected={(cartStore.selectedMaximaProduct || {}).index}
                    onSelect={(product) => cartStore.selectedMaximaProduct = product}
                />
                <ProductList
                    name={'Selver'}
                    items={appStore.selver}
                    imgBaseUrl={(img) => `${img}`}
                    selected={(cartStore.selectedSelverProduct || {}).index}
                    onSelect={(product) => cartStore.selectedSelverProduct = product}
                />
                <ProductList
                    name={'Coop'}
                    items={appStore.coop}
                    imgBaseUrl={(img) => `https://ecoop.ee/${img}`}
                    selected={(cartStore.selectedCoopProduct || {}).index}
                    onSelect={(product) => cartStore.selectedCoopProduct = product}
                />
                <ProductList
                    name={'Prisma'}
                    items={appStore.prisma}
                    imgBaseUrl={(img) => `https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/${img}.png`}
                    selected={(cartStore.selectedPrismaProduct || {}).index}
                    onSelect={(product) => cartStore.selectedPrismaProduct = product}
                />
            </div>
        );
    }
}

export default inject('store')(observer(ProductView));
