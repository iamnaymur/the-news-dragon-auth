import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and conditions are given below</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perferendis ipsam doloribus necessitatibus eveniet ut! Voluptas quisquam neque corrupti enim voluptate soluta molestiae quo, ullam consequuntur, reprehenderit libero? Natus corrupti ipsum iste possimus rerum facilis sequi quas soluta non animi accusantium voluptas, libero, veniam sed dolorum omnis excepturi molestias quisquam, eum assumenda consequatur. Ratione earum explicabo unde adipisci, porro, eligendi neque cupiditate iure atque totam laudantium repudiandae dolorum odit ab magni vero aperiam sint reprehenderit perspiciatis molestias, laborum ullam? Minus dolore doloribus sint facilis sapiente asperiores voluptatem voluptatibus quod molestias nam illum labore tempora exercitationem, vel accusamus inventore mollitia consequatur?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;