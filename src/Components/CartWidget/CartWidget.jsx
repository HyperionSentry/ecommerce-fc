import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CartWidget.css"

function CartWidget() {
    const [itemCount, setItemCount] = React.useState(1);

    return (
        <div>
            <ShoppingCartIcon color="secondary" id ="cart"/>
        </div>
    )
}

export default CartWidget