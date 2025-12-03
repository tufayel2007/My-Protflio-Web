"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Validation
    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All fields are required!");
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError({ email: true });
      toast.error("Please enter a valid email!");
      return;
    }

    setIsLoading(true);

    try {
      // ১. তোমার কাছে মেসেজ পাঠানো (মূল টেমপ্লেট)
      await emailjs.send(
        "service_22b4peiprotflio",
        "template_bas04ijmyauto",
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
          to_name: "Tufayel",
        },
        "hvLBFM1c8ddmZYX3_" // Public Key
      );

      // ২. Sender কে অটো-রিপ্লাই পাঠানো
      await emailjs.send(
        "service_22b4pej",
        "template_ym0bjjj", // ← তোমার Auto-Reply Template ID (Settings থেকে চেক করো)
        {
          from_name: userInput.name,
          to_email: userInput.email, // এটা ছাড়া ইমেইল যাবে না!
          message: userInput.message,
        },
        "Q-anB_0Teb0AWe3TE"
      );

      toast.success("Message sent! Check your inbox for confirmation");
      setUserInput({ name: "", email: "", message: "" });
      setError({ email: false });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send message. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-4 lg:p-8 shadow-xl bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-md">
        <p className="text-sm text-gray-300 mb-8">
          Have a project in mind? Let's talk! I'm open to freelance work and
          collaboration.
        </p>

        <form onSubmit={handleSendMail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Your Email</label>
            <input
              type="email"
              value={userInput.email}
              onChange={(e) => {
                setUserInput({ ...userInput, email: e.target.value });
                setError({ email: false });
              }}
              className="mt-2 w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300"
              placeholder="john@example.com"
              required
            />
            {error.email && (
              <p className="text-red-400 text-xs mt-1">Invalid email address</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300">Your Message</label>
            <textarea
              value={userInput.message}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              } // ← ঠিক করা!
              rows={5}
              className="mt-2 w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
              placeholder="Hi Tufayel, I saw your portfolio and..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center gap-3 mx-auto px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              }`}
            >
              {isLoading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <TbMailForward size={24} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
