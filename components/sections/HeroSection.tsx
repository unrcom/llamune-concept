'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-darker)] via-[var(--background)] to-[var(--bg-card)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[120px] opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[120px] opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent"
            style={{ backgroundSize: '200% auto' }}
            animate={{
              backgroundPosition: ['0% center', '200% center', '0% center'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Llamune Code
          </motion.h1>
        </motion.div>

        {/* Subtitle Animations */}
        <motion.p 
          className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[var(--text-primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          完全クローズド環境で動作する
        </motion.p>
        
        <motion.p 
          className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[var(--text-primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ローカルLLMコーディング支援プラットフォーム
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          データは一切外部に送信されません。<br />
          エンタープライズグレードのセキュリティと生成AIの力を、あなたの手元に。
        </motion.p>

        {/* Buttons with Hover Effects */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/unrcom/llamune_code"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[var(--primary)] text-black font-semibold rounded-lg relative overflow-hidden inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              GitHubで詳細を見る
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-[var(--primary-dark)]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#demo"
            className="group px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg relative overflow-hidden inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              デモを見る
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-[var(--primary)]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center gap-2 text-black font-semibold opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              デモを見る
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* 3D Mockup Placeholder (次のステップで実装) */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Terminal Window Mockup */}
            <div className="bg-[var(--bg-card)] rounded-xl shadow-2xl border border-[var(--border)] overflow-hidden transform perspective-1000">
              {/* Terminal Header */}
              <div className="bg-[var(--bg-darker)] px-4 py-3 flex items-center gap-2 border-b border-[var(--border)]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-[var(--text-secondary)]">
                  llamune_code
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-[var(--secondary)] mb-2">$ llamune chat</div>
                <div className="text-[var(--text-secondary)] mb-4">
                  🔒 完全クローズド環境で起動中...
                </div>
                <div className="text-[var(--text-primary)]">
                  <span className="text-[var(--primary)]">You:</span> package.jsonを読んで依存関係を教えて
                </div>
                <div className="mt-2 text-[var(--text-secondary)] animate-pulse">
                  <span className="text-[var(--secondary)]">AI:</span> <span className="inline-block w-2 h-4 bg-[var(--primary)] animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🔐 AES-256-GCM
            </motion.div>
            
            <motion.div
              className="absolute -bottom-10 -left-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              📁 Function Calling
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[var(--text-secondary)] text-sm mb-2">スクロールして詳細を見る</div>
        <div className="w-6 h-10 border-2 border-[var(--primary)] rounded-full mx-auto relative">
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
