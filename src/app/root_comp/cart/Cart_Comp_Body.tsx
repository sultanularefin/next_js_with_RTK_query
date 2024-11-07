import React from "react";
import index_Styles from "./../../css/index_container.module.css";
import {products} from "@/app/root_comp/cart/products/all_Products";
import product_type_interface from "@/app/root_comp/cart/products/product_interfaces";

export interface Cart_Comp_Body_Props {

}

const Cart_Comp_Body: React.FC<Cart_Comp_Body_Props> = ({}) => {


    return (

        <main>


            <div className={index_Styles.left_index_root_div}>
                <h2 style={{
                    fontSize: "1.5rem",
                    lineHeight: "2rem"
                }}>
                    Filters</h2>

                <h3 style={{
                    marginBottom: "0.5rem",
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem"
                }}>Category</h3>
                <div id="filters-container" style={{marginTop: '0.5rem', fontSize: '1.25rem', lineHeight: '1.75rem'}}>


                    <div>
                        <div>
                            <input type="checkbox" id="cameras"/>
                            <label htmlFor="cameras">Cameras</label>
                        </div>
                        <div>
                            <input type="checkbox" id="smartphones"/>
                            <label htmlFor="smartphones">Smartphones</label>
                        </div>
                        <div>
                            <input type="checkbox" id="games"/>
                            <label htmlFor="games">Games</label>
                        </div>
                        <div>
                            <input type="checkbox" id="televisions"/>
                            <label htmlFor="televisions">Televisions</label>
                        </div>
                    </div>
                </div>
            </div>

            <div id="products-wrapper" className={index_Styles.product_wrapper}>

                {
                    products.map((one_product: product_type_interface) =>
                        (
                            <div

                                key={one_product.index}
                                className={index_Styles.item}>
                                <div
                                    // className="group"
                                    className={index_Styles.single_item}
                                >
                                    <img
                                        src={one_product.url}
                                        alt={one_product.name}
                                        className={index_Styles.image_style}
                                    />
                                    <span
                                        className={index_Styles.status}
                                        // style={"position":"relative","right":"0","bottom":"0","left":"0","display":"none"}
                                    >Add To Cart</span
                                    >
                                </div>
                                <p style={{
                                    fontSize: "1.25rem", lineHeight: "1.75rem"
                                }}>{one_product.name}
                                </p>
                                <strong>{one_product.price}</strong>
                            </div>


                        ))
                }

            </div>
        </main>


    )
        ;
}
export default Cart_Comp_Body;

