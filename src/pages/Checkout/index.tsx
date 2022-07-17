import FormWrapper from '../../hocs/FormWrapper';
import './Checkout.scss';
import {useAppSelector} from '../../store/storeHooks';
import {checkoutData, totalPrice} from '../../store/checkout';
import CheckoutItem from './CheckoutItem';

const titles = ['Book', 'Title', 'Amount', 'Price', 'Remove'];

const Checkout = () => {
    const booksInCart = useAppSelector(checkoutData);
    const totalBookPrice = useAppSelector(totalPrice);

    return (
        <FormWrapper title="Checkout">
            <div className="checkout-container">
                <div className="checkout-header">
                    {titles.map((title, index) => (
                        <div key={title + index} className="checkout-header-block">
                            <span>{title}</span>
                        </div>
                    ))}
                </div>
                {booksInCart.map((item) => (
                    <CheckoutItem key={item._id} bookItem={item} />
                ))}
                <div className="total">TOTAL: {totalBookPrice}€</div>
            </div>
        </FormWrapper>
    );
};

export default Checkout;
