'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 overflow-hidden">
      
      {/* Mobile Layout - Vertical Stack */}
      <div className="flex flex-col items-center gap-6 md:hidden w-full max-w-sm pt-16 pb-8">
        {/* Polaroid 1 - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="bg-white p-4 shadow-xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: '260px',
              height: '320px',
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
                  sizes="260px"
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
              width: '260px',
              height: '320px',
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
                  sizes="260px"
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
              width: '260px',
              height: '320px',
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
                  sizes="260px"
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

        {/* Polaroid 4 - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <div
            className="bg-white p-4 shadow-xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: '260px',
              height: '320px',
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
                  src="/headshot.JPG"
                  alt="Jevin"
                  fill
                  sizes="260px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl text-center px-1 font-bold"
                  style={{ fontFamily: "var(--font-reenie), cursive" }}
                >
                  me!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Torn paper note - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mb-8"
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
      </div>

      {/* Desktop Layout - 2x2 Grid with centered note */}
      <div className="hidden md:flex items-center justify-center relative w-full h-[720px]">
        
        {/* Grid container for polaroids */}
        <div className="relative w-[620px] h-[690px]">
          
          {/* Polaroid 1 - Top Left (Sri Lanka) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '0',
              top: '0',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div
              className="bg-white p-4 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
              style={{
                width: '240px',
                height: '300px',
                transform: 'rotate(-6deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.zIndex = '30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-6deg)';
                e.currentTarget.style.zIndex = '10';
              }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  <Image
                    src="/srilanka.jpg"
                    alt="Sri Lanka"
                    fill
                    sizes="240px"
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

          {/* Polaroid 2 - Top Right (London) */}
          <motion.div
            className="absolute z-10"
            style={{
              right: '0',
              top: '0',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="bg-white p-4 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
              style={{
                width: '240px',
                height: '300px',
                transform: 'rotate(5deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.zIndex = '30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(5deg)';
                e.currentTarget.style.zIndex = '10';
              }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  <Image
                    src="/london.jpg"
                    alt="London"
                    fill
                    sizes="240px"
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

          {/* Polaroid 3 - Bottom Left (Northwestern) */}
          <motion.div
            className="absolute z-10"
            style={{
              left: '20px',
              bottom: '0',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <div
              className="bg-white p-4 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
              style={{
                width: '240px',
                height: '300px',
                transform: 'rotate(4deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.zIndex = '30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(4deg)';
                e.currentTarget.style.zIndex = '10';
              }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  <Image
                    src="/northwestern.jpg"
                    alt="Northwestern"
                    fill
                    sizes="240px"
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

          {/* Polaroid 4 - Bottom Right (Headshot) */}
          <motion.div
            className="absolute z-10"
            style={{
              right: '10px',
              bottom: '20px',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div
              className="bg-white p-4 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
              style={{
                width: '240px',
                height: '300px',
                transform: 'rotate(-4deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                e.currentTarget.style.zIndex = '30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-4deg)';
                e.currentTarget.style.zIndex = '10';
              }}
            >
              <div className="w-full h-full flex flex-col">
                <div className="flex-1 overflow-hidden relative">
                  <Image
                    src="/headshot.JPG"
                    alt="Jevin"
                    fill
                    sizes="240px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="bg-white pt-2 pb-1 flex-shrink-0">
                  <p 
                    className="text-gray-800 text-2xl text-center px-1 font-bold"
                    style={{ fontFamily: "var(--font-reenie), cursive" }}
                  >
                    me!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Torn paper note - Center (overlapping polaroids) */}
          <div
            className="absolute z-20 flex items-center justify-center"
            style={{
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              pointerEvents: 'none',
            }}
          >
          <motion.div
            style={{ pointerEvents: 'auto' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <div
              className="transform transition-all duration-300 cursor-pointer relative overflow-visible"
              style={{
                transform: 'rotate(1deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(1deg)';
              }}
            >
              <svg
                width="520"
                height="150"
                viewBox="-10 -10 540 170"
                className="w-[460px] sm:w-[490px] md:w-[520px] h-auto overflow-visible"
              >
                <defs>
                  <filter id="torn-paper-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.3" />
                  </filter>
                </defs>
                <path
                  d="M 8,12 
                     Q 20,6 55,14 L 105,9 Q 180,16 260,10 L 360,14 Q 440,8 490,13 L 512,9
                     L 516,30 Q 510,60 517,95 L 514,122 Q 518,132 515,140
                     L 480,137 Q 380,144 260,138 L 120,142 Q 55,136 22,141 L 6,138
                     L 3,108 Q 8,72 4,40 L 8,12 Z"
                  fill="#f5f0e8"
                  style={{ filter: 'url(#torn-paper-filter) url(#paper-shadow)' }}
                />
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center px-14 py-4"
                style={{
                  fontFamily: "var(--font-im-fell), serif",
                  fontStyle: "italic",
                }}
              >
                <p className="text-gray-800 text-sm sm:text-base text-center leading-relaxed">
                  Hi, my name is Jevin Benthotage Wijenayake. I am a first generation, low income British-born Sri Lankan navigating my undergraduate college journey at Northwestern.
                </p>
              </div>
            </div>
          </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
