import React, { useContext } from 'react';
import Cards from './Cards';
import "bootstrap/dist/css/bootstrap.min.css";
import { Poststore } from '../Poststore/Postprovider';

export default function Postlist() {
    const { posts, deletpost, like } = useContext(Poststore);

    if (!posts || posts.length === 0) {
        return (
            <div className="text-center mt-5">
                <h5>No posts available.</h5>
            </div>
        );
    }

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {posts.map((card, index) => (
                <Cards card={card} key={card.title || index} deletpost={deletpost} like={like} />
            ))}
        </div>
    );
}
