import React from 'react';

const Button = ({ children, className = "", link = "", ...props }) => {
    if (link.length > 0)
        return (
<<<<<<< HEAD
            <a href={link} className={`rounded-2xl flex items-center justify-center gap-x-3 px-8 text-white ${className || ""}`}
=======
            <a href={link} className={`rounded-2xl flex items-center gap-x-3 px-8 text-white ${className || ""}`}
>>>>>>> eeec9f863e801b93a1f85ccd1803c2b02c10b5d7
                {...props}>
                {children}
            </a>
        );
    return (
<<<<<<< HEAD
        <button className={`rounded-2xl flex items-center justify-center gap-x-3 px-8 text-white ${className || ""}`}
=======
        <button className={`rounded-2xl flex items-center gap-x-3 px-8 text-white ${className || ""}`}
>>>>>>> eeec9f863e801b93a1f85ccd1803c2b02c10b5d7
            {...props}>
            {children}
        </button>
    );
};

export default Button;


