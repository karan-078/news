const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((CartItem) => CartItem.id !== action.payload),
    };
  }

//   if (action.type === "INCREASE") {
//     let tempCart = state.cart.map((cartItem) => {
//       if (cartItem.id === action.payload) {
//         return { ...cartItem, amount: cartItem.amount + 1 };
//       }
//       return cartItem;
//     });
//     return { ...state, cart: tempCart };
//   }

//   if (action.type === "DECREASE") {
//     let tempCart = state.cart
//       .map((cartItem) => {
//         if (cartItem.id === action.payload) {
//           return { ...cartItem, amount: cartItem.amount - 1 };
//         }

//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.amount !== 0);
//     return { ...state, cart: tempCart };
//   }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        const itemTotal = amount * price;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEM") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "TOGLE") {
    let cartItem = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === "inc") {
          return { ...item, amount: item.amount + 1 };
        }
        if (action.payload.type === "dic") {
          return { ...item, amount: item.amount - 1 };
        }
      }

      return item;
    }).filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: cartItem };
  }
  return state;
};

export default reducer;
