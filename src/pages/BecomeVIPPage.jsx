import React, { useState } from 'react';
import '../styles/BecomeVIP.css';

const BecomeVIP = () => {
    const [formState, setFormState] = useState({
        email: '',
        emailError: '',
        name: '',
        nameError: '',
        confirmEmail: '',
        confirmEmailError: '',
        birthdayMonth: '',
        birthdayDay: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
        errors.emailError = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(formState.email.trim())) {
        errors.emailError = 'Invalid email format';
        isValid = false;
    } else {
        errors.emailError = '';
    }

        if (!formState.name.trim()) {
            errors.nameError = 'Name is required';
            isValid = false;
        } else {
            errors.nameError = '';
        }

        if (formState.confirmEmail !== formState.email) {
            errors.confirmEmailError = 'Emails do not match';
            isValid = false;
        } else {
            errors.confirmEmailError = '';
        }

        setFormState((prevState) => ({
            ...prevState,
            ...errors,
        }));

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully! Welcome to VIP!');
        }
    };

    return (
        <div className="vip-container">
            <div className="vip-logo">
            <img src="/assets/images/vip.avif" alt="VIP Logo" className="vip-logo-img" />
            </div>

            <h1>Become a VIP</h1>
            <p className="vip-description">
                Join our VIP program and enjoy exclusive benefits!
            </p>

            <div className="vip-benefits">
                <p>
                    Be the first to receive updates on exclusive events, secret menus, special offers/discounts, loyalty rewards & more!
                </p>
                <p>
                    Elevate your experience with unmatched perks designed to make your orders even more rewarding. Don't miss out!
                </p>
            </div>

            <form className="signup" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                    {formState.nameError && <p className="error">{formState.nameError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                    />
                    {formState.emailError && <p className="error">{formState.emailError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmEmail">Confirm Email:</label>
                    <input
                        id="confirmEmail"
                        name="confirmEmail"
                        type="email"
                        value={formState.confirmEmail}
                        onChange={handleChange}
                        placeholder="Confirm Email Address"
                        required
                    />
                    {formState.confirmEmailError && <p className="error">{formState.confirmEmailError}</p>}
                </div>
                <div className="form-group birthday-group">
                    <label>Birthday (optional):</label>
                    <div className="birthday-fields">
                        <select
                            name="birthdayMonth"
                            value={formState.birthdayMonth}
                            onChange={handleChange}
                            className="birthday-select"
                        >
                            <option value="">Month</option>
                            {[
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ].map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            name="birthdayDay"
                            value={formState.birthdayDay}
                            onChange={handleChange}
                            className="birthday-select"
                        >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="vip-submit-btn">
                    Join Now
                </button>
            </form>
        </div>
    );
};

export default BecomeVIP;
