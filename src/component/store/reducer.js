const initState = {
    arrayCart: [],
    numCart:0,
    product:{},
    detailPageID:"",
    searchName:""
}
const reducer = (state = initState, action) => {
    let newState = {...state};
    
    if(action.type === "ADD_TO_CART") {
        newState.numCart++;
        newState.product = {
            id:action.ProductID,
            name:action.ProductName,
            image:action.ProductImage,
            price:action.ProductPrice
        }
        newState.arrayCart.push(newState.product);
        console.log(newState)
    }
    if(action.type === "VIEW_DETAIL") {
        newState.detailPageID = action.detailPageID
        console.log(newState.detailPageID);
    }
    if(action.type === "SEARCH_BY_NAME") {
    }
    return newState;
}
export default reducer;