import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export const Input: React.FC<InputProps> = ({ id, label, ...props }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <input id={id} className="p-2 border border-gray-300 rounded-md w-full max-w-sm text-black placeholder:text-gray-400" {...props} />
        </div>
    );
};
