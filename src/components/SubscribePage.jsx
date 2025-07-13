import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import netflix_bg from '../assets/images/netflix_bg.jpg'
import Netflix_Logo_CMYK from '../assets/images/Netflix_Logo_CMYK.png'
import { Link } from 'react-router-dom';

const SubscribePage = () => {
    const navigate = useNavigate();

    const loadRazorpayScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        return script;
    };

    const handlePayment = () => {
        const script = loadRazorpayScript();

        script.onload = () => {
            const user = auth.currentUser;
            if (!user) {
                alert('You must be logged in to subscribe.');
                navigate('/login');
                return;
            }

            const options = {
                key: "rzp_test_jXnmzwOGO8Kmje", // Your Razorpay Key ID
                amount: "14900", // in paise
                currency: "INR",
                name: "Netflix Clone Premium", // FIX: Correct casing for 'name'
                description: "Monthly Subscription",
                handler: async function (response) {
                    console.log("Payment Successful", response);
                    try {
                        // FIX: Correct collection name "users" (plural)
                        const userDocRef = doc(db, "users", user.uid);
                        await setDoc(userDocRef, { isPremium: true }, { merge: true });
                        alert("Subscription Successful! You now have premium access.");
                        navigate('/browse');
                    } catch (error) {
                        console.error("Error updating user status:", error);
                        alert("Payment successful but we couldn't update your status. Please contact support.");
                    }
                },
                prefill: {
                    email: user.email,
                },
                theme: {
                    color: "#E50914",
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        };
    };

    return (
        <div className=' relative flex flex-col items-center justify-center h-screen bg-black text-white'>
            <img
                    src={netflix_bg}
                    alt="Movies and TV shows background"
                    className="hidden sm:block absolute top-0 left-0 h-full w-full object-cover z-0"
            />
                  
            <header className="absolute top-0 left-0 z-20 p-4 sm:p-6">
                    <Link to='/'>
                      <img
                        src={Netflix_Logo_CMYK}
                        alt='netflix-logo'
                        className='w-28 sm:w-36 md:w-44'
                      />
                    </Link>
            </header>

            <div className='absolute flex flex-col items-center  bg-gradient-to-r from-[#2b3a8d] to-[#c81d25] text-white p-5 sm:p-10 sm:w-md sm:h- border rounded-3xl m-5 divide- focus:border'>
            <h1 className='text-4xl font-bold mb-4 p-2 bg- rounded-2xl '>Upgrade to Premium</h1>
            <p className='text-lg mb-8 '>Get unlimited access to all movies and shows. </p> 
            <p className='text-lg mb-8'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans from ₹149 a month. No extra costs, no contracts. </p> <hr className='mt-4' />
            <button
                onClick={handlePayment} // FIX: Added the onClick handler
                className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded text-xl'
            >
                Pay ₹149 Now
            </button>
            </div>
        </div>
    );
};

export default SubscribePage;