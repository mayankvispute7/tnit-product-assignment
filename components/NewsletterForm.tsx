"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Task Requirement: Log submitted data to the console
    console.log("Newsletter Submission:", formData);

    setStatus("Success! Thank you for subscribing.");
    setFormData({ name: "", email: "" }); // Reset form
  };

  return (
    <section className="mt-24 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
      <h2 className="text-3xl font-bold mb-4">Join our Newsletter</h2>
      <p className="mb-8 text-blue-100 max-w-md mx-auto">
        Stay updated with the latest trends and exclusive TNIT offers.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full md:w-64 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full md:w-64 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-gray-900 hover:bg-black transition-colors rounded-lg font-bold"
        >
          Subscribe
        </button>
      </form>
      
      {status && (
        <p className={`mt-4 font-medium ${status.includes("Success") ? "text-green-300" : "text-red-200"}`}>
          {status}
        </p>
      )}
    </section>
  );
}
