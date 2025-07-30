import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 flex items-center justify-center px-4">
            <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-lg border border-gray-100">
                {/* Error Icon */}
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                </div>

                {/* Error Content */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                    We encountered an unexpected error while loading this page. 
                    This might be a temporary issue.
                </p>

                {/* Error Details */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-left">
                        <p className="text-sm text-red-700 font-mono">
                            <strong>Error:</strong> {error.status || error.statusText || error.message}
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={refreshPage}
                        className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <RefreshCw className="w-5 h-5" />
                        <span>Try Again</span>
                    </button>
                    
                    <Link
                        to="/"
                        className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
                    >
                        <Home className="w-5 h-5" />
                        <span>Go Home</span>
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        If the problem persists, please contact our support team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;