import { createSlice } from "@reduxjs/toolkit";


const UserCartSlice = createSlice({
    name:"usercart",
    initialState:{
        cartItem:[],
        information: {
            name:""
        },
        isAddCart:false
    },
    reducers:{

        updateQuantity: (state, action) => {
          console.log(action.payload)
            const { itemId, change } = action.payload;
          
            state.cartItem = state.cartItem.map((item) => {
              
              if (item.itemId === itemId) {
                if(item.oldPrice === "free"){
                  item.oldPrice = 0
                }
                
                const currentQuantity = Number(item.quantity);
                const updatedQuantity = currentQuantity + Number(change);
                
                // Ensure the quantity doesn't go below 1
                const newQuantity = Math.max(updatedQuantity, 1);
          
                const newPrice = Number(item.oldPrice) * newQuantity;
          
                return {
                  ...item,
                  quantity: newQuantity,
                  price: newPrice
                };
              }
              return item;
            });
          },
          
        addToCart:(state, action)=>{
            const newItem = action.payload;
            
            const existingItem = state.cartItem.find(item => {
              console.log(item.itemId)
              return(item.itemId === newItem.itemId)});
          
            if (existingItem) {
              // If the item already exists in the cart, update its quantity
            //   existingItem.quantity += newItem.quantity;
            state.isAddCart = true
            } else {
              // If it's a new item, add it to the cart
              state.cartItem.push(newItem);
            }
          },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.itemId !== action.payload);
          

        },
        removeAllCart: (state, action) => {
            state.cartItem = []
        
        },

        orderConfirm : (state , action)=>{
       
            state.information = action.payload
        }
    }
});

export const UserCartAction = UserCartSlice.actions

export default UserCartSlice
