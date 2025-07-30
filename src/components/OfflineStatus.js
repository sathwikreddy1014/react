import React from 'react';

const OfflineStatus = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">You're Offline</h1>
                <p className="text-gray-600">Please check your internet connection and try again.</p>
            </div>
        </div>
    );
};

export default OfflineStatus;