'use client'

import React, {useEffect, useState} from "react";
import Cart_Comp_Navigation from "@/app/root_comp/cart/Cart_Comp_Navigation";
import Cart_Comp_Body from "@/app/root_comp/cart/Cart_Comp_Body";
import index_Styles from "./../../css/index_container.module.css";


// import initSqlJs from 'sql.js';
// const fs = require('fs-extra')

export interface Cart_Comp_Root_Props {

}

const Cart_Comp_Root: React.FC<Cart_Comp_Root_Props> = ({}) => {

    const [db, setDb] = useState(null);
    // const [users, setUsers] = useState([]);
    // const [name, setName] = useState('');

    /*
    useEffect(() => {


        // Initialize SQL.js and create an in-memory database
        initSqlJs().then((SQL:any) => {
            const db = new SQL.Database();
            setDb(db);

            // Create a users table and insert initial data
            db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");
            db.run("INSERT INTO users (name) VALUES ('Alice'), ('Bob')");

            // Fetch users to display
            const result = db.exec("SELECT * FROM users");
            if (result.length > 0) {

                console.log("result",result);
                // setUsers(result[0].values);
            }
        });
    }, []);

    */

    // Add a new user to the database

    return(
        <div className={index_Styles.root_container}>


            <Cart_Comp_Navigation/>

            <Cart_Comp_Body/>
        </div>
    );
}

export default Cart_Comp_Root;
