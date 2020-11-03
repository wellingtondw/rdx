export const selectAllProducts = state => state.products
export const selectSelectedProducts = state => state.products.filter(product => product.checked)
export const selectedProductsTotalPrice = state => 
    state.products.filter(product => product.checked)
    .reduce((accumulatorProduct, currentProduct) => accumulatorProduct + currentProduct.price, 0)