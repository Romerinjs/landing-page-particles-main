import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {children}
        </div>
    );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-[#004aad] p-4 border-b">{children}</div>
    );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="p-4">{children}</div>
    );
};

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="p-4 border-t">{children}</div>
    );
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h2 className="text-lg font-bold">{children}</h2>
    );
};

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="text-sm text-white">{children}</p>
    );
};
