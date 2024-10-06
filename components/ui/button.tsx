import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outline' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', children, className, ...props }) => {
    const baseStyle = "px-4 py-2 rounded-md transition-colors duration-200";
    const variantStyle = variant === 'outline' 
        ? "border border-[#004aad] text-white hover:bg-[#004aad]" 
        : "bg-red-600 hover:bg-red-500";

    return (
        <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
            {children}
        </button>
    );
};
