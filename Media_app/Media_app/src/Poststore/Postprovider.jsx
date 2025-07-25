import { createContext, useReducer } from "react";

export const Poststore = createContext();

const defaultvalue = {
    posts: [
        {
            title: "Manish Nagar",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos est veritatis nam voluptatum nobis, cum laborum minima soluta inventore? Deleniti libero nobis quod? Modi doloremque animi delectus cupiditate nostrum?",
            imgadd: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740",
            Likes: [10, false]
        },
        {
            title: "Raghunandan Nagar",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos est veritatis nam voluptatum nobis, cum laborum minima soluta inventore? Deleniti libero nobis quod? Modi doloremque animi delectus cupiditate nostrum?",
            imgadd: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            Likes: [15, false]
        },
        {
            title: "Ankush Nagar",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos est veritatis nam voluptatum nobis, cum laborum minima soluta inventore? Deleniti libero nobis quod? Modi doloremque animi delectus cupiditate nostrum?",
            imgadd: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
            Likes: [17, false]
        }
    ]
};

const Reducerfun = (state, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                posts: [
                    ...state.posts,
                    {
                        title: action.payload.title,
                        about: action.payload.about,
                        imgadd: action.payload.imgadd,
                        Likes: [0, false]
                    }
                ]
            };
        case "DELETE_POST":
            return {
                posts: state.posts.filter(
                    (post) => post.title !== action.payload.title
                )
            };
        case "Liked":
            return {
                posts: state.posts.map((post) => {
                    if (post.title === action.payload.title) {
                        // Toggle like state and update like count immutably
                        if (post.Likes[1] === false) {
                            return {
                                ...post,
                                Likes: [post.Likes[0] + 1, true]
                            };
                        } else {
                            return {
                                ...post,
                                Likes: [post.Likes[0] - 1, false]
                            };
                        }
                    }
                    return post;
                })
            };
        default:
            return state;
    }
};

const Postprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducerfun, defaultvalue);

    const addpost = (title, about, imgadd) => {
        dispatch({
            type: "ADD_POST",
            payload: { title, about, imgadd }
        });
    };

    const deletpost = (title) => {
        dispatch({
            type: "DELETE_POST",
            payload: { title }
        });
    };

    const like = (title) => {
        dispatch({
            type: "Liked",
            payload: {
                title
            }
        });
    };

    return (
        <Poststore.Provider value={{ posts: state.posts, addpost, deletpost, like }}>
            {children}
        </Poststore.Provider>
    );
};

export default Postprovider;