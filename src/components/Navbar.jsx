function Navbar({cartCount, onCartClick}){
    return(
        <nav className="navbar">
            <h2>🛍️ My Shop</h2>
            <button onClick={onCartClick}>
                🛒Cart ({cartCount})
            </button>
        </nav>
    );
}

export default Navbar;