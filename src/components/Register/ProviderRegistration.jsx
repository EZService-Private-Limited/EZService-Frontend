import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plug,
  LibraryBig,
  Car,
  Wrench,
  BriefcaseBusiness,
  Dumbbell,
  ScanHeart,
  PartyPopper,
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Check,
} from 'lucide-react';
import api from '../../config/axios-config';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    country: '',
    otp: '',
  });
  const [otpRequested, setOtpRequested] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Mobile number as typed, without spaces (saved on the provider's account).
  const cleanMobile = () => formData.mobile.replace(/\s+/g, '');
  // Twilio needs the full international format; Indian numbers get +91 like on customer sign-up.
  const otpPhone = () => {
    const mobile = cleanMobile();
    return mobile.startsWith('+') ? mobile : `+91${mobile.slice(-10)}`;
  };

  const totalSteps = 6;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateStep = (step) => {
    const errors = {};
    switch (step) {
      case 0:
        if (formData.name.trim().length < 3) {
          errors.name = 'Please enter your full name (at least 3 characters)';
        }
        break;
      case 1:
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
        break;
      case 2:
        if (!/^\+?[0-9]{10,15}$/.test(formData.mobile.replace(/\s+/g, ''))) {
          errors.mobile = 'Please enter a valid mobile number';
        }
        break;
      case 3:
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@#$%^&*.]{8,}$/.test(formData.password)) {
          errors.password = 'Password must be at least 8 characters with a number and special character';
        }
        if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        break;
      case 4:
        if (formData.address.trim() === '') {
          errors.address = 'Please enter your address';
        }
        if (formData.city.trim() === '') {
          errors.city = 'Please enter your city';
        }
        if (formData.state.trim() === '') {
          errors.state = 'Please enter your state';
        }
        if (formData.country.trim() === '') {
          errors.country = 'Please enter your country';
        }
        break;
      case 5:
        if (!otpRequested) {
          errors.otp = 'Please request OTP before submitting';
        } else if (!/^\d{4,6}$/.test(formData.otp)) {
          errors.otp = 'Please enter a valid OTP';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const nextStep = () => {
    const errors = validateStep(currentStep);
    if (Object.keys(errors).length === 0) {
      setErrorMessage('');
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setErrorMessage(Object.values(errors)[0]);
    }
  };

  const prevStep = () => {
    setErrorMessage('');
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const errors = validateStep(currentStep);
    if (Object.keys(errors).length > 0) {
      setErrorMessage(Object.values(errors)[0]);
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    setErrorMessage('');
    try {
      await api.post('/otp/verify-otp', { phone: otpPhone(), code: formData.otp });
    } catch (error) {
      setErrorMessage(
        error.response?.status === 400
          ? 'Incorrect OTP. Please check the code and try again.'
          : error.response?.data?.errorMessage || 'Could not verify the OTP. Please try again.'
      );
      setSubmitting(false);
      return;
    }
    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, otp, ...details } = formData;
      await api.post('/provider/register', { ...details, mobile: cleanMobile() });
      setCurrentStep(totalSteps);
      setTimeout(() => navigate('/provider/login', { replace: true }), 1500);
    } catch (error) {
      setErrorMessage(
        error.response?.status === 409
          ? 'An account with this email or mobile number already exists. Please log in instead.'
          : error.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleGetOtp = async () => {
    if (!/^\+?[0-9]{10,15}$/.test(cleanMobile())) {
      setErrorMessage('Please enter a valid mobile number');
      return;
    }
    setErrorMessage('');
    try {
      await api.post('/otp/send-otp', { phone: otpPhone() });
      setOtpRequested(true);
    } catch (error) {
      setErrorMessage(error.response?.data?.errorMessage || 'Could not send the OTP. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full bg-gray-200 h-2 absolute top-0">
          <div
            className="bg-indigo-400 h-2 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      {/* Background Icons */}
      <div className="text-gray-400 overflow-hidden absolute top-0 left-0 w-full h-full pointer-events-none">
        <Plug className="absolute top-24 left-60 rotate-[330deg] z-0" />
        <LibraryBig className="absolute top-[30vh] right-20 z-0" />
        <Car className="absolute top-[70vh] left-[30vw] rotate-[330deg] z-0" />
        <Wrench className="absolute top-[80vh] right-60 rotate-[10deg] z-0" />
        <BriefcaseBusiness className="absolute top-24 right-[25vw] rotate-[330deg] z-0" />
        <Dumbbell className="absolute top-[90vh] left-20 rotate-[330deg] z-0" />
        <ScanHeart className="absolute top-[35vh] left-10 rotate-[330deg] z-0" />
        <PartyPopper className="absolute top-[30vh] right-[40%] rotate-[330deg] z-0" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-3xl rounded-lg overflow-hidden z-10">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Your Account</h1>
          <form className="space-y-4">
            {currentStep === 0 && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center">
                  <User className="w-4 h-4 mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="+1234567890"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 flex items-center">
                  <Lock className="w-4 h-4 mr-2" /> Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="confirmPassword" className="block mt-4 text-sm font-medium text-gray-700 flex items-center">
                  <Lock className="w-4 h-4 mr-2" /> Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must include at least 8 characters, a number, and a special character.
                </p>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> Address
                </label>
                <textarea
                  id="address"
                  rows="3"
                  className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                  placeholder="Street, Apartment, etc."
                  value={formData.address}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    className="px-3 py-2 border border-gray-300 rounded-sm"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    className="px-3 py-2 border border-gray-300 rounded-sm"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    className="px-3 py-2 border border-gray-300 rounded-sm"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <div className="text-sm text-gray-600 mb-2">
                  We’ll send a one-time passcode to <span className="font-semibold">{formData.mobile}</span>
                </div>

                {!otpRequested ? (
                  <button
                    type="button"
                    className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-sm hover:bg-indigo-600"
                    onClick={handleGetOtp}
                  >
                    Get OTP
                  </button>
                ) : (
                  <>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 flex items-center mt-4">
                      <Lock className="w-4 h-4 mr-2" /> Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      maxLength={6}
                      className="w-full mt-1 px-4 py-3 outline-none border border-gray-300 rounded-sm"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
            )}

            {currentStep === totalSteps && (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Complete!</h2>
                <p className="text-gray-600">Your account has been successfully created.</p>
              </div>
            )}

            {errorMessage && currentStep < totalSteps && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-2">
              <button
                type="button"
                className={`px-5 py-3 font-medium text-gray-700 bg-gray-100 rounded-sm hover:bg-gray-200 ${
                  currentStep === 0 || currentStep === totalSteps ? 'hidden' : ''
                }`}
                onClick={prevStep}
              >
                <ArrowLeft className="w-4 h-4 inline mr-1" /> Back
              </button>

              {currentStep < totalSteps - 1 && (
                <button
                  type="button"
                  className="ml-auto px-5 py-3 font-medium text-white bg-indigo-400 rounded-sm hover:bg-indigo-400/90"
                  onClick={nextStep}
                >
                  Next <ArrowRight className="w-4 h-4 inline ml-1" />
                </button>
              )}

              {currentStep === totalSteps - 1 && otpRequested && (
                <button
                  type="button"
                  className="ml-auto px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-sm hover:bg-green-600"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  Complete <Check className="w-4 h-4 inline ml-1" />
                </button>
              )}
            </div>
          </form>
                      {currentStep < totalSteps && (
  <div className="text-center mt-4 text-sm text-gray-600">
    Already have an account?{' '}
    <Link to="/provider/login" className="text-indigo-500 hover:underline">
      Login here
    </Link>
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
