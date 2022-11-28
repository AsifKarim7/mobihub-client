import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const { displayName, email } = user;



    const handleAddProduct = event => {



    }

    return (
        <div></div>
    );
};

export default AddProduct;