const initState = {
    arrayCart: [],
    numCart:0,
    product:{}
}
const reducer = (state = initState, action) => {
    let newState = {...state};
    if(action.type === "ADD_TO_CART") {
        newState.numCart++;
        console.log(action.ProductPrice)
        newState.product = {
            id:action.ProductID,
            name:action.ProductName,
            image:action.ProductImage,
            price:action.ProductPrice
        }
        newState.arrayCart.push(newState.product);
        console.log(newState)
    }
    return newState;
}
export default reducer;