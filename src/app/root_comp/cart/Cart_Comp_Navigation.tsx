'use client'
import React from "react";

import index_Styles from "./../../css/index_container.module.css";
export interface Cart_Comp_Props {

}

const Cart_Comp_Navigation: React.FC<Cart_Comp_Props> = ({}) => {


    const cartButton_Pressed = () => {

        console.log("at here <<cartButton_Pressed>>");
        window.location.href = "./cart_page.html";

// Simulate an HTTP redirect:
//         window.location.replace("./cart_page.html");

    }


    return (



            <nav>


                <div className={index_Styles.product_search_container}>


                    <div className={index_Styles.input_wrapper}>

                        <input
                            type="text"
                            id="search"
                            className={index_Styles.input_box}
                            placeholder="Search products..."
                        />


                        {/*<svg
                    style="top:8px"
                    class="input_wrapper_svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>*/}

                    </div>


                    <button
                        onClick={() => {
                            cartButton_Pressed();
                        }} id="cartButton" className={index_Styles.position_relative}>
                        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
            />
            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>*/}


                        <small
                            id="cartCount"

                            className={index_Styles.cart_count}

                        >0</small
                        >
                    </button>
                </div>
            </nav>







    );
}

export default Cart_Comp_Navigation;

