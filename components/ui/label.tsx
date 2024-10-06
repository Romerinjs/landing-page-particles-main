import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-700">
            {children}
        </label>
    );
};
