import React, { useState, useRef } from 'react';
import Spinner from './Spinner';
import emailjs from 'emailjs-com';

const initialFormData = { name: '', email: '', message: '' };
const initialErrors = { name: '', email: '', message: '' };

function validate(formData) {
    const errors = { ...initialErrors };
    if (!formData.name.trim()) {
        errors.name = 'Name is required.';
    } else if (formData.name.length > 50) {
        errors.name = 'Name is too long.';
    }
    if (!formData.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) {
        errors.message = 'Message is required.';
    } else if (formData.message.length > 1000) {
        errors.message = 'Message is too long.';
    }
    return errors;
}

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [touched, setTouched] = useState({ name: false, email: false, message: false });
    const [isOpen, setIsOpen] = useState(false);
    const firstErrorRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setTouched((prev) => ({ ...prev, [field]: true }));
        const fieldError = validate({ ...formData, [field]: value })[field];
        setErrors((prev) => ({ ...prev, [field]: fieldError }));
    };

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        formData.message.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        const hasError = Object.values(validationErrors).some(Boolean);
        if (hasError) {
            const firstErrorField = Object.keys(validationErrors).find(
                (key) => validationErrors[key]
            );
            if (firstErrorField && firstErrorRef.current) {
                firstErrorRef.current.focus();
            }
            return;
        }
        setIsLoading(true);
        setResult(null);
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        }, USER_ID)
            .then(() => {
                setResult({ type: 'success', message: 'Message sent successfully!' });
                setFormData(initialFormData);
                setIsLoading(false);
            })
            .catch((error) => {
                setResult({ type: 'error', message: 'Failed to send message. Please try again.' });
                setIsLoading(false);
                console.error('EmailJS error:', error);
            });
    };

    return (
        <section id="contact" className="w-full max-w-[350px] mx-auto my-12">
            <div className="rounded-2xl border-2 border-[#c9a6e1] dark:border-[#4b006e] shadow-lg overflow-hidden">
                <button
                    type="button"
                    className="w-full flex items-center justify-between px-8 py-6 text-2xl font-semibold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-t-2xl focus:outline-none focus:ring transition-colors"
                    aria-expanded={isOpen}
                    aria-controls="contact-panel"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span>Contact Me</span>
                    <span className="ml-2 text-3xl font-bold select-none">{isOpen ? '-' : '+'}</span>
                </button>
                <div id="contact-panel" className={isOpen ? 'block' : 'hidden'}>
                    <form onSubmit={handleSubmit} noValidate aria-describedby="form-result" className="bg-white dark:bg-gray-800 rounded-b-2xl px-8 py-6 mt-[-1.5rem]">
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium mb-1">Name<span className="text-red-500">*</span></label>
                            <input
                                ref={errors.name ? firstErrorRef : null}
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                                maxLength={50}
                                required
                                autoComplete="off"
                                tabIndex={0}
                            />
                            {errors.name && touched.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-1">Email<span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                                maxLength={100}
                                required
                                autoComplete="off"
                                tabIndex={0}
                            />
                            {errors.email && touched.email && <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-medium mb-1">Message<span className="text-red-500">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                                rows={5}
                                maxLength={1000}
                                required
                                autoComplete="off"
                                tabIndex={0}
                            />
                            {errors.message && touched.message && <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring disabled:opacity-60 w-full sm:w-auto mt-2"
                                disabled={isLoading || !isFormValid}
                            >
                                {isLoading ? <Spinner size={20} /> : 'Send Message'}
                            </button>
                            {result && (
                                <span
                                    id="form-result"
                                    className={`mt-4 text-sm font-medium ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                                    role={result.type === 'success' ? 'status' : 'alert'}
                                    tabIndex={-1}
                                >
                                    {result.message}
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
