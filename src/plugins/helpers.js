export const today = () => {
    const dt = new Date();
    return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate()
};

export const filterProduct = (arr, key, val) => arr.filter(item => item[key] === val);

export const calcTotalInCart = cart => cart.reduce((a, v) => {
    return a + (v.price * v.count);
}, 0);

export const getImgUrl = picture => require('@/assets/images/' + picture);

export const minNum = arr => {
    return Math.min(...arr)
};

export const maxNum = arr => {
    return Math.max(...arr)
};
