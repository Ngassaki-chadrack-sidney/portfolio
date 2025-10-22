"use client";

import React from "react";
import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

function ComingSoon({ 
  title = "Bientôt disponible", 
  description = "Cette page est actuellement en développement. Revenez bientôt pour découvrir du nouveau contenu !"
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto"
          >
            Retour à l&apos;accueil
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
          >
            Me contacter
          </Link>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
            </span>
            <span>En cours de développement...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;