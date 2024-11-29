'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zen_Kaku_Gothic_New, Crimson_Pro } from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_New({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-zen-kaku'
})

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-crimson'
})

export default function NotFound() {
  return (
    <div className={`min-h-screen relative overflow-hidden ${crimsonPro.variable} ${zenKaku.variable} font-serif`}>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center space-y-20"
        >
          <motion.h1 
            className="relative text-[8rem] sm:text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none"
            animate={{
              textShadow: [
                '0 0 180px rgba(255,51,119,0.9)',
                '0 0 240px rgba(136,102,255,0.8)',
                '0 0 180px rgba(255,51,119,0.9)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b 
                            from-[#ff3377] via-[#ffffff] to-[#6677ff]
                            drop-shadow-[0_2px_60px_rgba(255,51,119,0.8)]">
              404
            </span>
          </motion.h1>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.p 
                className="text-4xl sm:text-5xl md:text-6xl tracking-wider font-zen-kaku"
                animate={{ opacity: [0.95, 1, 0.95] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r 
                                from-[#ff3377] via-[#ffffff] to-[#6677ff]
                                drop-shadow-[0_2px_50px_rgba(255,51,119,0.9)]">
                  君の名の向こうへ
                </span>
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.25em]"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r 
                                from-[#ff3377] via-[#ffffff] to-[#6677ff]
                                drop-shadow-[0_2px_40px_rgba(255,51,119,0.7)]">
                  Beyond Your Name
                </span>
              </motion.p>
            </div>

            <motion.div
              className="pt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="group relative inline-flex flex-col items-center gap-1.5 px-16 sm:px-20 py-4 sm:py-5
                         overflow-hidden
                         backdrop-blur-xl bg-black/20
                         border-y border-white/50
                         transition-all duration-700
                         hover:bg-black/30"
              >
                <span className="relative text-lg sm:text-xl font-zen-kaku font-medium tracking-[0.3em]
                               bg-clip-text text-transparent bg-gradient-to-r 
                               from-[#ff3377] via-[#ffffff] to-[#6677ff]
                               drop-shadow-[0_2px_40px_rgba(255,51,119,0.7)]">
                  あの日の空へ
                </span>
                <span className="relative text-sm text-white/95 tracking-[0.25em] font-light">
                  To That Day's Sky
                </span>

                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-white/50"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute top-0 right-0 h-[1px] bg-white/50"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}