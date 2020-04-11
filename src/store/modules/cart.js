import {today, calcTotalInCart} from '@/plugins/helpers'

export default {
    state: {
        cart: [],
        cartTotal: 0,
        purchases: [],
    },
    getters: {
        cart: state => state.cart,
        cartTotal: state => state.cartTotal,
        purchases: state => state.purchases,
    },
    mutations: {
        setPurchases(state) {
            state.purchases = {
                date: today(),
                cart: state.cart
            };
        },
        addProductToCart(state, product) {
            state.cart.push(product);
            state.cartTotal += product.price;
        },
        removeProductFromCart(state, product) {
            const index = state.cart.indexOf(product);
            const item = state.cart[index];

            item.count = 1;
            state.cartTotal -= (item.price * item.count);
            state.cart.splice(index, 1);
            state.cartTotal = calcTotalInCart(state.cart)
        },
        clearCartTotal(state) {
            state.cartTotal = 0;
        },
        clearCart(state) {
            state.cart = [];
        },
        increase(state, product) {
            const index = state.cart.indexOf(product);
            const item = state.cart[index];
            item.count += 1;
            state.cartTotal += item.price;
        },
        decrease(state, product) {
            const index = state.cart.indexOf(product);
            const item = state.cart[index];
            item.count -= 1;
            state.cartTotal -= item.price;
        },
        input(state, args) {
            const num = Number(args.count);
            const index = state.cart.indexOf(args.product);
            const item = state.cart[index];

            item.count = !num || isNaN(num) ? 1 : num;
            state.cartTotal = calcTotalInCart(state.cart)
        },
    },
    actions: {
        addProductToCart({commit, state}, product) {
            const productPosition = state.cart.indexOf(product);
            if (productPosition === -1) {
                commit('addProductToCart', product)
            } else {
                commit('setSnackbar', {
                    state: true,
                    msg: `${product.title} is in the cart`,
                    abbr: 'warning'
                })
            }
        }
    }
}

