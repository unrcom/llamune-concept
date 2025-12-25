'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock, FolderOpen, Brain, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Lock,
    emoji: "🔒",
    title: "完全クローズド環境",
    description: "すべてのデータはローカルに保存",
    details: "インターネット接続不要。機密情報が外部に送信されることは一切ありません。",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FolderOpen,
    emoji: "📁",
    title: "プロジェクト統合",
    description: "Function Callingでプロジェクトに直接アクセス",
    details: "read_file、list_filesなどのツールで、ローカルプロジェクトを直接操作。",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "思考過程の可視化",
    description: "推論モデルの思考プロセスをリアルタイム表示",
    details: "LLMがどのように考えて答えを導いたかを理解できます。",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ShieldCheck,
    emoji: "🔐",
    title: "E2E暗号化",
    description: "AES-256-GCMで会話内容を保護",
    details: "メッセージ、思考過程、システムプロンプトを認証付き暗号化。",
    color: "from-orange-500 to-red-500"
  },
];

export default function FeaturesSection() {
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
            4つの特徴
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            エンタープライズグレードのセキュリティと、最新のローカルLLM技術を組み合わせた、
            完全にプライベートなコーディング支援環境
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="group h-full p-8 bg-[var(--background)] rounded-xl border border-[var(--border)] relative overflow-hidden cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "var(--border-hover)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Animation */}
                    <motion.div 
                      className="mb-6 flex items-center gap-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        {/* Emoji */}
                        <motion.div
                          className="text-5xl"
                          animate={{ 
                            rotate: [0, -10, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        >
                          {feature.emoji}
                        </motion.div>

                        {/* Icon Background Glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-full filter blur-xl opacity-0 group-hover:opacity-30`}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Lucide Icon */}
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <Icon className="w-8 h-8 text-[var(--primary)]" />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Details (shown on hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[var(--text-muted)] border-t border-[var(--border)] pt-4 mt-2">
                        {feature.details}
                      </p>
                    </motion.div>

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[var(--primary)] opacity-0 group-hover:opacity-20 rounded-tr-lg"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-secondary)] mb-6">
            これらの機能により、完全にプライベートな環境でAI支援コーディングが実現します
          </p>
          <motion.a
            href="https://github.com/unrcom/llamune_code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            詳細なドキュメントを見る
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
