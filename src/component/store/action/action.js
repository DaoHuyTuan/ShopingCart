import { 
    FETCH_DATA,
    ADD_TO_CART,
    CHECK_QUALITY,
    FETCH_CART
} from "../actiontype";

export const fetchData = (url,query) => {
    return dispach => {
       dispach(asycFetchData(url,query));
       dispach(asycFetchCart(url));
    }
}
export const asycFetchData = (url,query) => {
    return (dispach) => {
        fetch(url, {
            credentials: 'omit',
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                variables: {},
                query: query,
            }),
            method: 'POST',
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((arrData) =>
           dispach({
               type:FETCH_DATA,
               payload:arrData.data.products
           })
        )
    }
}
export const asycFetchCart = (url) => {
    const query = `
    query getCart {
        cart {
          items {
            product {
              id,
              name,
              description,
              price,
              sizes,
              images{url,alt}
            }
            quantity
          }
        }
      }
`
    return (dispach) => {
        fetch(url, {
            credentials: 'omit',
            headers: {
                authorization: "badman",
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                variables: {},
                query: query,
            }),
            method: 'POST',
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((arrData) =>
      
           dispach({
               type:FETCH_CART,
               payload:arrData.data.cart.items
           })
        )
    }
}
export const checkQuality = (id,quality) => {
    const query = `
    query getCart {
        cart {
          items {
            product {`+ `"`+
              id + `"` +`,
            }
            quantity
          }
        }
      }
`
console.log(query)
    return (dispach) => {
        fetch("https://graph-api-shopingcart.herokuapp.com/", {
            credentials: 'omit',
            headers: {
                authorization: "badman",
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                variables: {},
                query: query,
            }),
            method: 'POST',
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((arrData) =>
        console.log(arrData)
        //    dispach({
        //        type:CHECK_QUALITY,
        //        payload:arrData.data.cart.items
        //    })
        )
    }
}
export const addToCart = (id) => {
    const query = `
        mutation putCart {
            putCart(productId:"`+ id + `", quantity: 1) {
                success
                userErrors {
                    message
                }
            }
        }
    `
    return (dispach) => {
        fetch("https://graph-api-shopingcart.herokuapp.com/", {
            credentials: 'omit',
            headers: {
                authorization: 'badman',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                variables: {},
                query: query,
            }),
            method: 'POST',
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((ress) =>
           
           dispach({
               type:ADD_TO_CART,
               payload:id
           })
        )
    }
}