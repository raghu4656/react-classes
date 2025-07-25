import React, { useRef, useContext } from 'react';
import { Poststore } from '../Poststore/Postprovider';

export default function FormsCreatPost() {
    const { addpost } = useContext(Poststore);
    const Titlename = useRef();
    const Profile = useRef();
    const About = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        addpost(
            Titlename.current.value,
            About.current.value,
            Profile.current.value
        );
        // Optionally clear the fields after submit
        Titlename.current.value = '';
        Profile.current.value = '';
        About.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Titlename</label>
                <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    ref={Titlename}
                    placeholder="Enter title"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="profileInput" className="form-label">Profile Link</label>
                <input
                    type="text"
                    className="form-control"
                    id="profileInput"
                    ref={Profile}
                    placeholder="Enter profile image URL"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="aboutInput" className="form-label">About Text</label>
                <input
                    type="text"
                    className="form-control"
                    id="aboutInput"
                    ref={About}
                    placeholder="Enter about text"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
