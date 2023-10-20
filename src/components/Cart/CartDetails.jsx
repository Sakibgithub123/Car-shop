

const CartDetails = ({cart}) => {
    const {name}=cart;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CartDetails;