// Shimmer.js
const Shimmermenu = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 animate-pulse px-4 py-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
                <div className="text-center mb-6">
                    <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4" />
                    <div className="flex justify-center gap-4 mb-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="h-10 w-24 bg-gray-200 rounded-xl" />
                        ))}
                    </div>
                    <div className="h-6 w-40 bg-gray-200 rounded mx-auto mb-2" />
                    <div className="h-5 w-52 bg-gray-200 rounded mx-auto" />
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="h-20 bg-gray-200 rounded-xl" />
                    ))}
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                    <div className="h-6 w-40 bg-gray-200 rounded" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="h-10 w-36 bg-gray-200 rounded-xl" />
                    ))}
                </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow border border-gray-100">
                        <div className="h-6 w-48 bg-gray-200 rounded mb-4" />
                        {[1, 2].map((_, idx) => (
                            <div key={idx} className="flex items-center justify-between mb-4">
                                <div className="h-4 w-56 bg-gray-200 rounded" />
                                <div className="h-4 w-16 bg-gray-200 rounded" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmermenu;
