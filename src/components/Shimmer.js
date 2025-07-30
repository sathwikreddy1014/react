const Shimmer = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Shimmer */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-pulse">
                    <div className="text-center">
                        <div className="h-12 bg-gray-200 rounded-lg w-2/3 mx-auto mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto mb-6"></div>
                        <div className="flex justify-center space-x-4 mb-6">
                            <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
                            <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
                            <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
                        </div>
                    </div>
                </div>

                {/* Results Header Shimmer */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="h-8 bg-gray-200 rounded-lg w-64 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
                    </div>
                </div>

                {/* Grid Shimmer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(12)].map((_, index) => (
                        <ShimmerCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ShimmerCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-pulse">
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-200"></div>
            
            {/* Content */}
            <div className="p-5">
                {/* Title */}
                <div className="h-6 bg-gray-200 rounded-lg mb-3"></div>
                
                {/* Subtitle */}
                <div className="h-4 bg-gray-200 rounded-lg mb-3 w-3/4"></div>
                
                {/* Info Row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="h-4 bg-gray-200 rounded-lg w-20"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-16"></div>
                </div>
                
                {/* Button */}
                <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};

export default Shimmer;
export { ShimmerCard };