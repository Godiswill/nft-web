import React, { PropsWithChildren } from 'react';

const Button: React.FC<
    PropsWithChildren<{
        onClick?: () => void;
    }>
> = ({ onClick, children }) => {
    return (
        <div className="flex justify-center">
            <button
                className="font-bold bg-[#D7C19A] text-black ease-linear transform hover:scale-105 duration-150 h-10 px-4 rounded"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
