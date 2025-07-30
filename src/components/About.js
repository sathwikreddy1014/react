import { User, Mail, Github, Heart, Code, Zap, Globe, Star } from "lucide-react";

const About = () => {
    const technologies = [
        { name: "React", color: "from-blue-500 to-cyan-500", icon: "⚛️" },
        { name: "Tailwind", color: "from-cyan-500 to-blue-500", icon: "🎨" },
        { name: "Redux", color: "from-purple-500 to-pink-500", icon: "🔄" },
        { name: "JavaScript", color: "from-yellow-500 to-orange-500", icon: "⚡" },
        { name: "Vite", color: "from-green-500 to-emerald-500", icon: "⚡" },
        { name: "Live APIs", color: "from-red-500 to-orange-500", icon: "🌐" }
    ];

    const features = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Live API Integration",
            description: "Real-time data from restaurant APIs with seamless user experience"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Performance",
            description: "Optimized with Vite bundler for lightning-fast load times"
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Modern Architecture",
            description: "Built with latest React patterns and best practices"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Responsive Design",
            description: "Beautiful UI that works perfectly on all devices"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                About This Project
                            </span>
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            A modern food ordering platform showcasing the power of React ecosystem
                            with real-time data integration and beautiful user interface design.
                        </p>
                    </div>
                </div>
            </div>

            {/* Developer Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 mb-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                                <User className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Developer</h2>
                            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Sathwik Reddy</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Passionate frontend developer with expertise in modern web technologies. 
                                Focused on creating exceptional user experiences through clean code and beautiful design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="mailto:sathwikreddy.dev@example.com"
                                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <Mail size={20} />
                                    <span>Get in Touch</span>
                                </a>
                                <a
                                    href="https://github.com/sathwikreddy1014/netflix-gpt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-200"
                                >
                                    <Github size={20} />
                                    <span>View Source</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Features */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technology Stack</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                                    {tech.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                                    {tech.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                This project demonstrates a modern food ordering interface with live restaurant data integration. 
                                The application provides real-time menu information and seamless user interactions.
                            </p>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Built with <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">React</span> and 
                                styled with <span className="font-semibold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">Tailwind CSS</span> for 
                                optimal performance and responsive design. <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">Vite</span> powers 
                                the development environment for lightning-fast builds.
                            </p>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-indigo-500 rounded-full mt-2"></div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                State management is handled by <span className="font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">Redux Toolkit</span>, 
                                enabling smooth cart functionality and real-time updates across components. Users can add items, 
                                view quantities, and manage their orders efficiently.
                            </p>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                The application integrates with <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">live APIs</span> to 
                                fetch restaurant data, menus, and real-time information. This showcases practical API integration 
                                and data management in modern web applications.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full">
                            <span>Built with</span>
                            <Heart className="w-5 h-5 fill-current" />
                            <span>using modern web technologies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;