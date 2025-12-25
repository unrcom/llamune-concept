'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  {
    name: "Ollama",
    description: "ローカルLLMエンジン",
    icon: "🦙",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Node.js",
    description: "JavaScriptランタイム",
    icon: "💚",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "React",
    description: "UIライブラリ",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "SQLite",
    description: "ローカルDB",
    icon: "🗄️",
    color: "from-gray-500 to-slate-500"
  },
  {
    name: "AES-256-GCM",
    description: "暗号化",
    icon: "🔐",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "TypeScript",
    description: "型安全な開発",
    icon: "📘",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Express",
    description: "APIサーバー",
    icon: "🚂",
    color: "from-gray-600 to-gray-400"
  },
  {
    name: "Tailwind CSS",
    description: "CSSフレームワーク",
    icon: "🎨",
    color: "from-teal-500 to-cyan-500"
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-[var(--bg-card)] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            技術スタック
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            最新の技術を組み合わせて、安全で高性能なローカルLLM環境を実現
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="group relative h-full p-6 bg-[var(--background)] rounded-xl border border-[var(--border)] text-center cursor-pointer overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "var(--primary)",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-3 relative z-10"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>

                {/* Name */}
                <div className="font-bold text-lg mb-1 relative z-10 group-hover:text-[var(--primary)] transition-colors">
                  {tech.name}
                </div>

                {/* Description */}
                <div className="text-xs text-[var(--text-secondary)] relative z-10">
                  {tech.description}
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">オープンソース & MIT ライセンス</h3>
            <p className="text-[var(--text-secondary)] mb-6">
              すべてのコードはGitHubで公開されています。
              コミュニティによる改善や、独自のカスタマイズが可能です。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["JWT認証", "SSE", "Function Calling", "暗号化DB", "Hot Reload"].map((feature, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)]"
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: "var(--primary)",
                    color: "var(--primary)"
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
