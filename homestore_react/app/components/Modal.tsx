import React, { useState, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    closeOnOverlayClick?: boolean;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         title,
                                         children,
                                         footer,
                                         size = 'md',
                                         closeOnOverlayClick = true,
                                         className = '',
                                     }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle escape key press
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            setIsVisible(true);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = ''; // Restore scrolling when modal is closed
        };
    }, [isOpen, onClose]);

    // Handle closing animation
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 200); // Match this with the CSS transition duration
    };

    if (!isOpen) return null;

    // Size classes
    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-200`}
            aria-labelledby={title ? 'modal-title' : undefined}
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={closeOnOverlayClick ? handleClose : undefined}
            />

            {/* Modal */}
            <div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${sizeClasses[size]} w-full ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {title && (
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white" id="modal-title">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Body */}
                <div className="px-4 py-5 sm:p-6">{children}</div>

                {/* Footer */}
                {footer && (
                    <div className="px-4 py-3 sm:px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
