'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center min-h-screen text-center px-4 pt-24 pb-8 md:py-4 overflow-y-auto md:overflow-visible">
      
      {/* Mobile Layout - Vertical Stack */}
      <div className="flex flex-col items-center gap-6 md:hidden w-full max-w-sm">
        {/* Polaroid 1 - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="bg-white p-4 shadow-xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: '280px',
              height: '340px',
              transform: 'rotate(-3deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-3deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/srilanka.jpg"
                  alt="Sri Lanka"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  sri lanka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Polaroid 2 - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className="bg-white p-4 shadow-xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: '280px',
              height: '340px',
              transform: 'rotate(3deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(3deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/london.jpg"
                  alt="London"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  london
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Polaroid 3 - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div
            className="bg-white p-4 shadow-xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: '280px',
              height: '340px',
              transform: 'rotate(-2deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-2deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/northwestern.jpg"
                  alt="Northwestern"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  northwestern
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Torn paper note - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <div
            className="transform transition-all duration-300 cursor-pointer relative"
            style={{
              transform: 'rotate(2deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(2deg)';
            }}
          >
            <svg
              width="300"
              height="160"
              viewBox="0 0 300 160"
              className="w-[280px] h-auto"
            >
              <defs>
                <filter id="torn-paper-filter-mobile" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" result="noise" seed="2" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="paper-shadow-mobile" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.25" />
                </filter>
              </defs>
              <path
                d="M 8,10 
                   Q 15,6 30,12 L 60,8 Q 100,14 150,9 L 200,12 Q 250,7 280,11 L 292,8
                   L 295,30 Q 290,70 296,110 L 293,135 Q 297,145 294,152
                   L 270,150 Q 220,156 150,151 L 80,154 Q 30,149 15,153 L 6,150
                   L 4,120 Q 8,80 5,45 L 8,10 Z"
                fill="#f5f0e8"
                style={{ filter: 'url(#torn-paper-filter-mobile) url(#paper-shadow-mobile)' }}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center px-8 py-4"
              style={{
                fontFamily: "var(--font-im-fell), serif",
                fontStyle: "italic",
              }}
            >
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Hi, my name is Jevin Benthotage Wijenayake. I am a first generation, low income British-born Sri Lankan navigating my undergraduate college journey at Northwestern.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Under construction note - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mb-20"
        >
          <div
            className="bg-[#a0bfd4] px-6 py-4 shadow-lg transform transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: '3px 4px 8px rgba(0,0,0,0.2)',
              transform: 'rotate(-2deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-2deg)';
            }}
          >
            <p
              className="text-gray-800 text-sm"
              style={{
                fontFamily: "var(--font-im-fell), serif",
                fontStyle: "italic",
              }}
            >
              This site is under construction!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout - Absolute Positioning (hidden on mobile) */}
      <div className="hidden md:block relative w-full max-w-5xl h-[550px]">
        
        {/* Polaroid 1 - Left */}
        <motion.div
          className="absolute z-[15]"
          style={{
            left: '10%',
            top: '20%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="bg-white p-5 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: 'clamp(240px, 28vw, 300px)',
              height: 'clamp(280px, 34vw, 360px)',
              transform: 'rotate(-8deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-8deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/srilanka.jpg"
                  alt="Sri Lanka"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl sm:text-3xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  sri lanka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Polaroid 2 - Center */}
        <motion.div
          className="absolute z-10"
          style={{
            left: '38%',
            top: '12%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className="bg-white p-5 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: 'clamp(240px, 28vw, 300px)',
              height: 'clamp(280px, 34vw, 360px)',
              transform: 'rotate(2deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(2deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/london.jpg"
                  alt="London"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl sm:text-3xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  london
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Polaroid 3 - Right */}
        <motion.div
          className="absolute z-[5]"
          style={{
            left: '67%',
            top: '17%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div
            className="bg-white p-5 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: 'clamp(240px, 28vw, 300px)',
              height: 'clamp(280px, 34vw, 360px)',
              transform: 'rotate(-5deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-5deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/northwestern.jpg"
                  alt="Northwestern"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl sm:text-3xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  northwestern
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Under construction note - left side */}
        <motion.div
          className="absolute z-20"
          style={{
            left: '-10%',
            top: '60%',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <div
            className="bg-[#a0bfd4] px-6 py-4 sm:px-8 sm:py-5 shadow-lg transform transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: '3px 4px 8px rgba(0,0,0,0.2)',
              transform: 'rotate(-3deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-3deg)';
            }}
          >
            <p
              className="text-gray-800 text-base sm:text-lg"
              style={{
                fontFamily: "var(--font-im-fell), serif",
                fontStyle: "italic",
              }}
            >
              This site is under construction!
            </p>
          </div>
        </motion.div>

        {/* Torn paper note - bottom center */}
        <motion.div
          className="absolute z-20"
          style={{
            left: '50%',
            top: '80%',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div
            className="transform transition-all duration-300 cursor-pointer relative"
            style={{
              transform: 'rotate(2deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(2deg)';
            }}
          >
            <svg
              width="580"
              height="130"
              viewBox="0 0 580 130"
              className="w-[500px] sm:w-[540px] md:w-[580px] h-auto"
            >
              <defs>
                <filter id="torn-paper-filter" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.25" />
                </filter>
              </defs>
              <path
                d="M 8,10 
                   Q 20,6 55,12 L 115,8 Q 200,14 290,9 L 400,12 Q 490,7 550,11 L 572,8
                   L 575,28 Q 570,55 576,85 L 573,108 Q 577,118 574,125
                   L 535,123 Q 430,129 290,124 L 130,127 Q 55,122 22,126 L 6,123
                   L 4,95 Q 8,65 5,38 L 8,10 Z"
                fill="#f5f0e8"
                style={{ filter: 'url(#torn-paper-filter) url(#paper-shadow)' }}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center px-6"
              style={{
                fontFamily: "var(--font-im-fell), serif",
                fontStyle: "italic",
              }}
            >
              <p className="text-gray-800 text-base sm:text-lg text-center leading-relaxed">
                Hi, my name is Jevin Benthotage Wijenayake. I am a first generation, low income British-born Sri Lankan navigating my undergraduate college journey at Northwestern.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
