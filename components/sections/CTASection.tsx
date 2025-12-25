'use client';

import { motion } from 'framer-motion';
import { Github, BookOpen, Rocket, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--bg-darker)]" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            今すぐ始めよう
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            GitHubで詳細を確認して、ローカル環境でLlamune Codeをセットアップできます。
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://github.com/unrcom/llamune_code"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[var(--primary)] text-black font-bold text-lg rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[var(--primary-dark)] hover:scale-105 transition-all"
          >
            <Github className="w-6 h-6" />
            <span>GitHubリポジトリを見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://github.com/unrcom/llamune_code"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-[var(--primary)] text-[var(--primary)] font-bold text-lg rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[var(--primary)] hover:text-black hover:scale-105 transition-all"
          >
            <BookOpen className="w-6 h-6" />
            <span>ドキュメントを読む</span>
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Rocket, label: "セットアップ", value: "簡単", color: "from-blue-500 to-cyan-500" },
            { icon: Github, label: "ライセンス", value: "MIT", color: "from-purple-500 to-pink-500" },
            { icon: BookOpen, label: "ドキュメント", value: "充実", color: "from-green-500 to-emerald-500" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "var(--primary)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                <Icon className="w-8 h-8 text-[var(--primary)] mb-3 mx-auto" />
                <div className="text-3xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-[var(--text-muted)]"
        >
          <p className="mb-2">
            🔒 完全にローカルで動作 | 🚀 オープンソース | 💚 コミュニティ主導
          </p>
          <p className="text-xs">
            作成者: <a href="https://github.com/unrcom" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">@unrcom</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
