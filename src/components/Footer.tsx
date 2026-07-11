'use client';

import React from 'react';
import { work, open } from '@/utils/font';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socials = [
  { href: 'https://github.com/maxellmilay', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/maxell-milay-354517207/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mirai.max', icon: FaInstagram, label: 'Instagram' },
  { href: 'mailto:milaymaxell@gmail.com', icon: FaEnvelope, label: 'Email' },
];

function Footer() {
  return (
    <div id="footer" className="flex flex-col items-center pt-20 pb-16 w-full">
      {/* Contact CTA */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className={`${work.className} text-3xl sm:text-4xl font-semibold mb-3 text-center`}>
          Let&apos;s work together.
        </p>
        <p className={`${open.className} font-thin text-sm text-white/60 mb-8 text-center mx-[10%]`}>
          Open to AI engineering, machine learning, and full-stack opportunities.
        </p>
        <a
          href="mailto:milaymaxell@gmail.com"
          className={`${work.className} px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 text-sm`}
        >
          GET IN TOUCH
        </a>
      </motion.div>

      {/* Divider */}
      <div className="w-[80%] max-w-xl h-px bg-white/10 mb-8" />

      {/* Social icons */}
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {socials.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white transition-colors duration-200"
            whileHover={{ y: -3 }}
          >
            <Icon className="text-base" />
          </motion.a>
        ))}
      </motion.div>

      <p className={`${work.className} font-extralight text-xs text-white/30`}>
        Designed &amp; Developed by Maxell Milay
      </p>
    </div>
  );
}

export default Footer;
