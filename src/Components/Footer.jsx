import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
const Footer = () => {
    const year = new Date().getFullYear();

    const footerLinks = {
        Shop: [
            { label: "All Products", to: "/" },
            { label: "Categories", to: "/" },
            { label: "Deals & Offers", to: "/" },
            { label: "New Arrivals", to: "/" },
        ],
        Support: [
            { label: "Help Center", to: "/" },
            { label: "Track Order", to: "/" },
            { label: "Returns", to: "/" },
            { label: "Contact Us", to: "/" },
        ],
        Company: [
            { label: "About", to: "/" },
            { label: "Blog", to: "/" },
            { label: "Careers", to: "/" },
            { label: "Press", to: "/" },
        ],
        Legal: [
            { label: "Privacy Policy", to: "/" },
            { label: "Terms of Service", to: "/" },
            { label: "Cookie Policy", to: "/" },
        ],
    };

    const socials = [
        {
            label: "Twitter / X",
            href: "#",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            label: "Instagram",
            href: "#",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
        },
        {
            label: "Facebook",
            href: "#",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            label: "YouTube",
            href: "#",
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-gray-950 text-gray-400 mt-auto">
            {/* Top CTA strip */}
            <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-white font-bold text-lg">🚚 Free shipping on orders over $50</p>
                        <p className="text-indigo-200 text-sm">Sign up and get 10% off your first order.</p>
                    </div>
                    <NavLink
                        to="/signUp"
                        className="shrink-0 px-6 py-2.5 bg-white text-indigo-600 text-sm font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
                    >
                        Get Started →
                    </NavLink>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <NavLink to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
<img src={logo} alt="logo" />
                            </div>
                            <span className="text-xl font-black text-white tracking-tight">
                                Vista Mart<span className="text-indigo-400">.</span>
                            </span>
                        </NavLink>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Your one-stop destination for premium electronics and tech gadgets.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-2 pt-1">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest">{heading}</h4>
                            <ul className="space-y-2.5">
                                {links.map(({ label, to }) => (
                                    <li key={label}>
                                        <NavLink
                                            to={to}
                                            className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-200"
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-600">
                        © {year} Shop. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-600">Secure payments via</span>
                        {["Visa", "MC", "PayPal", "Stripe"].map((p) => (
                            <span
                                key={p}
                                className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs font-semibold rounded-md border border-gray-700"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;