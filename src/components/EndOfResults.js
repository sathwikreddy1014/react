import React from 'react';

const EndOfResults = () => {
    return (
        <div className="text-center py-12">
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-gray-500 text-lg mb-6">You've explored all the delicious options!</p>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                🔝 Back to Top
            </button>
        </div>
    );
};

export default EndOfResults;
