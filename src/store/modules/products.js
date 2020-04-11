import {filterProduct} from '@/plugins/helpers'

export default {
    state: {
        products: [
            {
                id: 0,
                count: 1,
                price: 15,
                category: 'men',
                sale: false,
                url: 'poster_2_up-600x600.jpg',
                title: 'Flying Ninja',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 1,
                count: 1,
                price: 15,
                category: 'women',
                sale: true,
                url: 'T_7_front-600x600.jpg',
                title: 'Happy Ninja',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 2,
                count: 1,
                price: 25,
                category: 'men',
                sale: true,
                url: 'hoodie_4_front-600x600.jpg',
                title: 'Happy Ninja',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 3,
                count: 1,
                price: 20,
                category: 'women',
                sale: false,
                url: 'T_5_front-600x600.jpg',
                title: 'Ninja Silhouette',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 4,
                count: 1,
                price: 35,
                category: 'men',
                sale: false,
                url: 'hoodie_5_front-600x600.jpg',
                title: 'Ninja Silhouette',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 5,
                count: 1,
                price: 35,
                sale: true,
                category: 'men',
                url: 'hoodie_3_front.jpg',
                title: 'Patient Ninja',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 6,
                count: 1,
                price: 20,
                category: 'men',
                sale: true,
                url: 'T_2_front-600x600.jpg',
                title: 'Premium Quality',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            }, {
                id: 7,
                count: 1,
                price: 12,
                category: 'men',
                sale: false,
                url: 'poster_3_up-600x600.jpg',
                title: 'Premium Quality',
                text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
            },
        ],
        range: [0, 0],
        isMen: false,
        isWomen: false,
        isSale: false
    },
    getters: {
        products: state => {
            //filtered products by categories, sale and prices
            let products = [];
            const isAllProducts = state.isMen && state.isWomen || !state.isMen && !state.isWomen;

            if (isAllProducts) {
                products = state.products
            } else {
                if (state.isMen) {
                    products = filterProduct(state.products, 'category', 'men')
                }
                if (state.isWomen) {
                    products = filterProduct(state.products, 'category', 'women')
                }
            }

            if (state.isSale) {
                products = filterProduct(products, 'sale', true)
            }

            if (state.range[0] > 0 && state.range[1] > 0) {
                products = products.filter(item =>
                    item.price >= state.range[0] &&
                    item.price <= state.range[1]);
            }

            return products
        }
    },
    mutations: {
        setRange(state, range) {
            state.range = range;
        },
        setMen(state, isMen) {
            state.isMen = isMen;
        },
        setWomen(state, isWomen) {
            state.isWomen = isWomen;
        },
        setSale(state, isSale) {
            state.isSale = isSale;
        },
    }
}



