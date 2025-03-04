
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-5xl font-light text-gray-900 tracking-tight mb-4">404</h1>
      <div className="h-px w-16 bg-luxury/30 mx-auto mt-2 mb-6"></div>
      <p className="text-xl text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-luxury hover:bg-luxury-dark text-white transition-colors duration-300 text-sm"
      >
        RETURN TO HOME
      </button>
    </div>
  );
};

export default NotFound;
