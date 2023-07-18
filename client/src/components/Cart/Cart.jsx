import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

export const Cart = () => {

    // const data = [

    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=400",
    //         img2: "https://images.pexels.com/photos/13678349/pexels-photo-13678349.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         title: "T-shirt",
    //         desc: "Deep embroidered white Men's T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Jeans",
    //         desc: "Classic denim from Polo",
    //         isNew: true,
    //         oldPrice: 22,
    //         price: 15,
    //     },
    // ];

    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price
        });

        return total.toFixed(2);
    };

    const stripePromise = loadStripe(
        'pk_test_51MQ4pCSH8VHi5UreCIzd4dJOavXjqSMZmpSjL6gkjOkaJNa038FYjp7pWNiqsKCRyl5cOcIHcwiihqDfrcfO3AK9009IwW84AK'
        );

    const handlePayment = async () => {
        try{
            const stripe = await stripePromise;
            // console.log(products)
            // console.log('products...')
            const res = await makeRequest.post('/orders', {
                products,
            });
            // await stripe.redirectToCheckout({
            //     sessionId: res.data.stripeSession.id,
            // })
            console.log('success-stripe')
        }
        catch(err) {
           console.error(err); 
           console.log('err')
        }
    }

  return (
    <div className="cart-container">
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item=>(
                <div className='item' key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="cart-img"/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">
                            {item.quantity} * ${item.price}
                        </div>
                    </div>
                    <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
        <hr/>
    </div>
  )
}
