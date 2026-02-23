import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import logo from '../assets/logo.png';

const EyeIcon = ({ open }) => open ? (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [agreed, setAgreed] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const { setUser, createUser, setLoading, loading, updateUserProfile } = use(AuthContext)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "At least 6 characters";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        if (!agreed) newErrors.agreed = "You must agree to the terms";
        return newErrors;
    };

    const showToast = (message, type) => {
        if (type === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        createUser(formData.email, formData.confirmPassword)
            .then((result) => {
                setUser(result.user)
                const profile = {
                    displayName: `${formData.firstName} ${formData.lastName}`,

                }
                updateUserProfile(profile)
                    .then(() => {
                    })
                    .catch((err) => {
                        showToast(err.message, 'error')
                    })
                showToast('Sign Up Successful', 'success')
            })
            .catch((err) => {
                showToast(err.message, 'error')
                setLoading(false)
            })
    };

    const getPasswordStrength = () => {
        const p = formData.password;
        if (!p) return null;
        if (p.length < 4) return { label: "Weak", color: "bg-red-400", width: "w-1/4" };
        if (p.length < 6) return { label: "Fair", color: "bg-amber-400", width: "w-2/4" };
        if (p.length < 10 || !/[A-Z]/.test(p) || !/[0-9]/.test(p)) return { label: "Good", color: "bg-indigo-400", width: "w-3/4" };
        return { label: "Strong", color: "bg-emerald-500", width: "w-full" };
    };

    const strength = getPasswordStrength();

    const inputBase =
        "w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:bg-white transition-all";

    const inputClass = (field) =>
        `${inputBase} ${errors[field] ? "border-red-300 bg-red-50/30" : "border-gray-200 hover:border-indigo-300"}`;


    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">

            {/* Decorative blobs */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-lg">

                {/* Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white shadow-2xl shadow-indigo-100/50 p-8 sm:p-10">

                    {/* Brand */}
                    <div className="flex flex-col items-center mb-8">
                        <NavLink to="/" className="flex items-center gap-2.5 group mb-6">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
                                 <img src={logo} alt='logo' />
                            </div>
                            <span className="text-2xl font-black text-gray-900 tracking-tight">
                                Vista Mart<span className="text-indigo-600">.</span>
                            </span>
                        </NavLink>
                        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Create your account</h1>
                        <p className="text-sm text-gray-500 mt-1.5">Join thousands of happy shoppers today</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* First + Last name */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={inputClass("firstName")}
                                />
                                {errors.firstName && <p className="text-xs text-red-500 font-medium">{errors.firstName}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={inputClass("lastName")}
                                />
                                {errors.lastName && <p className="text-xs text-red-500 font-medium">{errors.lastName}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${inputClass("email")} pl-10`}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Min. 6 characters"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`${inputClass("password")} pl-10 pr-11`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    tabIndex={-1}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                            {/* Password strength bar */}
                            {strength && (
                                <div className="space-y-1 pt-0.5">
                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-500 ${strength.color} ${strength.width}`} />
                                    </div>
                                    <p className={`text-xs font-semibold ${strength.label === "Weak" ? "text-red-500" :
                                        strength.label === "Fair" ? "text-amber-500" :
                                            strength.label === "Good" ? "text-indigo-500" : "text-emerald-600"
                                        }`}>
                                        {strength.label} password
                                    </p>
                                </div>
                            )}
                            {errors.password && <p className="text-xs text-red-500 font-medium">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Confirm Password</label>
                            <div className="relative">
                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`${inputClass("confirmPassword")} pl-10 pr-11`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    tabIndex={-1}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                >
                                    <EyeIcon open={showConfirm} />
                                </button>
                            </div>
                            {/* Match indicator */}
                            {formData.confirmPassword && (
                                <p className={`text-xs font-semibold flex items-center gap-1 ${formData.password === formData.confirmPassword ? "text-emerald-600" : "text-red-500"}`}>
                                    {formData.password === formData.confirmPassword ? (
                                        <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Passwords match</>
                                    ) : (
                                        <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg> Passwords do not match</>
                                    )}
                                </p>
                            )}
                            {errors.confirmPassword && !formData.confirmPassword && (
                                <p className="text-xs text-red-500 font-medium">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Terms checkbox */}
                        <div className="space-y-1">
                            <label className="flex items-start gap-2.5 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => { setAgreed(e.target.checked); setErrors((prev) => ({ ...prev, agreed: "" })); }}
                                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400 cursor-pointer shrink-0"
                                />
                                <span className="text-sm text-gray-600 leading-relaxed">
                                    I agree to Vista Mart's{" "}
                                    <NavLink className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">Terms of Service</NavLink>
                                    {" "}and{" "}
                                    <NavLink className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">Privacy Policy</NavLink>
                                </span>
                            </label>
                            {errors.agreed && <p className="text-xs text-red-500 font-medium pl-6">{errors.agreed}</p>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-[1.01] active:scale-100 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 mt-1"
                        >
                            {loading ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Creating account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400 font-medium">or sign up with</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Social buttons */}
                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>

                    {/* Login link */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{" "}
                        <NavLink
                            to="/login"
                            className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            Sign in
                        </NavLink>
                    </p>
                </div>

                {/* Fine print */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    Protected by industry-standard encryption. Your data is safe with us.
                </p>
            </div>
        </div>
    );
};

export default Register;