import React from 'react'

const PtoductPage = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <p>This is a product page. You can add products here.</p>
            <form action="">
                Product Name:<br />
                <input type='text' name='name' /><br />
                Description:<br />
                <textarea name='description'></textarea><br />
                Price:<br />
                <input type='number' name='price' /><br />
                In Stock?<br />
                <input type='checkbox' name='inStock' /><br />
                <input type='submit' value='Submit' />
                </form>
                </div>
        
        );
};