import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const BlogDetail = () => {
    const location = useLocation();
    const { title, description, img, article } = location.state; // Assuming you're passing these details
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-3">{title}</h1>
            <img src={img} alt={title} className="my-4 shadow-md " style={{ "borderRadius": "20px" }} />
            <p className="text-gray-700 m-3 font-bold text-lg">{description}</p>
            <p className='mx-3'>{article}</p>
        </div>
    );
};

export default BlogDetail;
