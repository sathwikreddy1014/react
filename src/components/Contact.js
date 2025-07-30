import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        {}
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            info: "sathwik1014@gmail.com",
            description: "Send us an email anytime",
            action: "mailto:sathwikreddy.dev@example.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            info: "+1 (555) 123-4567",
            description: "Call us during business hours",
            action: "tel:+15551234567"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            info: "Hyderabad, India",
            description: "Come visit our Place",
            action: "#"
        },
        
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Get In Touch
                            </span>
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Have questions about the project? Want to collaborate? 
                            I'd love to hear from you. Let's start a conversation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
                            
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.action}
                                        className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-200 group cursor-pointer"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h3>
                                            <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Developer Card */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <User className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sathwik Reddy</h3>
                                <p className="text-blue-600 font-medium mb-4">Frontend Developer</p>
                                <p className="text-gray-600 leading-relaxed">
                                    Passionate about creating beautiful, functional web applications 
                                    that provide exceptional user experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
                        <h3 className = "pb-5 text-red-600">THIS PART IS UNDER DEVELOPMENT, IF U HAVE ANY SUGGESTIONS YOU CAN SEND AN EMAIL IN CONTACT INFORMATION. </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 resize-none"
                                        placeholder="Tell me about your project or question..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                            >
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="p-6 bg-blue-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-800 mb-2">What technologies were used?</h3>
                                <p className="text-gray-600">This project uses React, Redux, Tailwind CSS, and Vite for a modern development experience.</p>
                            </div>
                            
                            <div className="p-6 bg-purple-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-800 mb-2">Is the source code available?</h3>
                                <p className="text-gray-600">Yes! The source code is available on GitHub for learning and collaboration purposes.</p>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="p-6 bg-indigo-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-800 mb-2">Can I contribute to the project?</h3>
                                <p className="text-gray-600">Absolutely! I welcome contributions, suggestions, and feedback from the community.</p>
                            </div>
                            
                            <div className="p-6 bg-pink-50 rounded-2xl">
                                <h3 className="font-semibold text-gray-800 mb-2">How can I learn more?</h3>
                                <p className="text-gray-600">Feel free to reach out via email or check the GitHub repository for documentation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;