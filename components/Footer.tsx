'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[var(--text-secondary)] text-sm">
            © 2025{' '}
            <a 
              href="https://unremoted.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              unremoted.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
