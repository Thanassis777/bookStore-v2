import {BookModel} from '../../pages/AddBook/formModel';

export const addNewItem = (bookItems: BookModel[], bookToAdd: BookModel) => {
    const existingCartItem = bookItems.find((bookItem) => bookItem._id === bookToAdd._id);

    if (existingCartItem)
        return bookItems.map((bookItem) =>
            bookItem._id === bookToAdd._id ? {...bookItem, amount: bookItem.amount + 1} : bookItem
        );

    return [...bookItems, {...bookToAdd, amount: 1}];
};

export const removeExistingItem = (bookItems: BookModel[], bookId: string) => {
    const existingCartItem = bookItems.find((bookItem) => bookItem._id === bookId);

    if (existingCartItem.amount === 1) {
        return bookItems.filter((bookItem) => bookItem._id !== bookId);
    }

    return bookItems.map((bookItem) =>
        bookItem._id === bookId ? {...bookItem, amount: bookItem.amount - 1} : bookItem
    );
};

export const clearItemInCart = (bookItems: BookModel[], bookId: string) =>
    bookItems.filter((bookItem) => bookItem._id !== bookId);
