import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = ({
                                         label,
                                         error,
                                         helperText,
                                         fullWidth = false,
                                         className = '',
                                         id,
                                         ...rest
                                     }) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    // Base classes
    const baseClasses = 'block rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm';

    // Error classes
    const errorClasses = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : '';

    // Width classes
    const widthClasses = fullWidth ? 'w-full' : '';

    return (
        <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputId}
                    className={`${baseClasses} ${errorClasses} ${widthClasses}`}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...rest}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
                    {error}
                </p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-gray-500" id={`${inputId}-helper`}>
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Input;