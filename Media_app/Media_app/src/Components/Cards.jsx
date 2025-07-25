import React from 'react';
import { BiLike } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";


export default function Cards({ card, deletpost, like }) {
    return (
        <div className="card mx-5 post-card" style={{ width: "18rem" }}>
            <img src={card.imgadd} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.about}</p>
                <button type="button" className="btn btn-primary" onClick={() => like(card.title)}>
                    <BiLike /> <span className="badge text-bg-secondary" >{card.Likes[0]}</span>
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-buttone" onClick={() => deletpost(card.title)}>
                    <MdDeleteOutline />
                </span>
            </div>
        </div>
    );
}
