import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface HomeDataState {
    prodList: ProductData[];
    loading: boolean;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeDataState> {
    constructor() {
        super();
        this.state = { prodList: [], loading: true };


    }
}
export class ProductData {
    productId: number = 0;
    productImage: string = "";
    productName: string = "";
    productTitle: string = "";
    productDescription: string = "";
    productPrice: number = 0.00;
    buyerName: string = "";
}