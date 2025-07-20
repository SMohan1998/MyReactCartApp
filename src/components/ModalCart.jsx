function ModalCart({cartItems, onClose, removeFromCart}){
    return(
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>X</button>
                <h3>Your Cart</h3>
                {
                    cartItems.length === 0 ? (<p>No items in the cart.</p>):
                    (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title}/>
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>${item.price}</p>
                                    <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default ModalCart;