import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkyImg from "../assets/Media/Sky.png";
import Img1 from "../assets/Media/Team.jpg";
import Img2 from "../assets/Media/Location.jpg";

const CareersPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // Send formData to backend (e.g., via axios/fetch)
    }

    alert("Form submitted successfully!");
    navigate("/CareersPage");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-0 md:px-0 relative overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={SkyImg}
          alt="Sky Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2">
            Careers
          </h1>
          <p className="text-white max-w-3xl text-base md:text-lg">
            Digitalic is growing and we want to continue to do so. We are proud of what we achieve and are very keen to continue growing. We currently have sufficient strength in our team.
          </p>
        </div>
      </div>

      {/* Careers Info Section (Inline) */}
      <section className="w-full py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mb-24">
          <img src={Img1} alt="Team" className="w-full rounded-lg shadow-md" />
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Teams</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find your team</h2>
            <p className="mb-6">
              Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-blue-700">
              <div>
                <p>Engineering & Tech</p>
                <p>People</p>
              </div>
              <div>
                <p>Sales, Service & Support</p>
                <p>Consumer Hardware</p>
              </div>
            </div>
            <a href="#" className="mt-4 inline-block text-blue-700 text-sm font-medium">
              View all teams
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Locations</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our locations</h2>
            <p className="mb-6">
              Large or small, each one of our offices is designed to inspire innovation, big ideas, and community.
            </p>
            <div className="grid grid-cols-3 gap-2 text-sm font-medium text-blue-700">
              <div>
                <p>Mountain View</p>
                <p className="text-gray-600">315 jobs</p>
              </div>
              <div>
                <p>New York</p>
                <p className="text-gray-600">212 jobs</p>
              </div>
              <div>
                <p>London</p>
                <p className="text-gray-600">58 jobs</p>
              </div>
              <div>
                <p>Dublin</p>
                <p className="text-gray-600">156 jobs</p>
              </div>
              <div>
                <p>Singapore</p>
                <p className="text-gray-600">72 jobs</p>
              </div>
              <div>
                <p>Hyderabad</p>
                <p className="text-gray-600">137 jobs</p>
              </div>
            </div>
          </div>
          <img src={Img2} alt="Locations" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Form Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white mt-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Career with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward a rewarding future. We're excited to meet passionate candidates like you!
          </p>
          <div className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Email Address"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Phone Number"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="4"
                  placeholder="Why do you want to work with us?"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600 resize-none"
                  aria-label="Message"
                ></textarea>
              </div>
              <div className="mb-6 text-left text-gray-100">
                <label className="block mb-1 font-semibold">Upload Resume or Portfolio</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg w-full transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
