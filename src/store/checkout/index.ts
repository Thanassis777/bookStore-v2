import {BookModel} from '../../pages/AddBook/formModel';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {addNewItem, clearItemInCart, removeExistingItem} from '../../shared/reduxHelpers';

export interface CheckoutState {
    items: BookModel[];
    isOpenCart: boolean;
}

const initialState: CheckoutState = {
    items: [],
    isOpenCart: false,
};

const checkout = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BookModel>) => {
            state.items = addNewItem(state.items, action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = removeExistingItem(state.items, action.payload);
        },
        clearItem: (state, action: PayloadAction<string>) => {
            state.items = clearItemInCart(state.items, action.payload);
        },
        setIsOpenCart: (state, action: PayloadAction<boolean>) => {
            state.isOpenCart = action.payload;
        },
        clearCheckoutItems: (state) => {
            state.items = [];
            state.isOpenCart = false;
        },
    },
});

export const {addItem, clearCheckoutItems, removeItem, setIsOpenCart, clearItem} = checkout.actions;

const checkoutReducer = (state: RootState) => state.checkout;

export const checkoutData = createSelector([checkoutReducer], (slice) => slice.items);
export const isOpenCart = createSelector([checkoutReducer], (slice) => slice.isOpenCart);
export const totalAmount = createSelector([checkoutReducer], (slice) => slice.items.length);
export const totalPrice = createSelector([checkoutReducer], (slice) =>
    slice.items.reduce((total, item) => +(total + item.amount * +item.price).toFixed(2), 0)
);

// export const totalPrice = createSelector([checkoutReducer], (slice) =>
//     slice.items.reduce(
//         (total, item) => Math.round(total + item.amount * +item.price * 100) / 100,
//         0
//     )
// );

export default checkout.reducer;
