'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, FileText, FolderOpen, X } from 'lucide-react';

const dependencies = [
  { name: "bcrypt", description: "パスワードのハッシュ化と検証", version: "^6.0.0" },
  { name: "better-sqlite3", description: "SQLite データベースの高速・シンプルな操作", version: "^9.2.2" },
  { name: "chalk", description: "ターミナル出力のカラーリング", version: "^5.3.0" },
  { name: "commander", description: "CLI コマンドラインインターフェースの作成", version: "^11.1.0" },
  { name: "cors", description: "Express で CORS（クロスオリジンリクエスト）を有効化", version: "^2.8.5" },
  { name: "cosmiconfig", description: "設定ファイルの検索と読み込み", version: "^9.0.0" },
  { name: "dotenv", description: ".env ファイルから環境変数をロード", version: "^17.2.3" },
  { name: "express", description: "Node.js の Web フレームワーク（API サーバ）", version: "^5.1.0" },
  { name: "express-rate-limit", description: "API へのリクエストレートリミット", version: "^8.2.1" },
  { name: "ink", description: "ターミナル UI を作るための React ライブラリ", version: "^4.4.1" },
  { name: "jsonwebtoken", description: "JWT（JSON Web Token）の生成・検証", version: "^9.0.2" },
  { name: "knex", description: "SQL ビルダー（マイグレーションやクエリ構築）", version: "^3.1.0" },
  { name: "react", description: "UI コンポーネント（CLI でも UI を描画）", version: "^18.2.0" },
  { name: "systeminformation", description: "システム情報（CPU, メモリ, OS など）の取得", version: "^5.27.11" },
];

const devDependencies = [
  { name: "@types/...", description: "TypeScript の型定義" },
  { name: "@typescript-eslint/...", description: "ESLint + TypeScript 用プラグイン・パーサー" },
  { name: "eslint", description: "コード品質・スタイルチェック" },
  { name: "prettier", description: "コード整形" },
  { name: "tsx", description: "TSX ファイルを直接実行（開発サーバやスクリプト）" },
  { name: "typescript", description: "TypeScript コンパイラ" },
  { name: "vitest", description: "ユニットテストフレームワーク" },
];

const models = [
  { id: 1, name: "gpt-oss:20b", preset: "default", isDefault: true },
  { id: 2, name: "gpt-oss:20b", preset: "creative" },
  { id: 3, name: "qwen2.5-coder:7b", preset: "default" },
  { id: 4, name: "qwen2.5-coder:7b", preset: "creative" },
  { id: 5, name: "mistral-nemo:12b", preset: "default" },
  { id: 6, name: "mistral-nemo:12b", preset: "creative" },
  { id: 7, name: "llama3.1:8b", preset: "default" },
  { id: 8, name: "llama3.1:8b", preset: "creative" },
];

const alternativeResponse = 'プロジェクトフォルダのpackage.jsonファイルには、以下の主な依存関係が記載されています：\n\ndependencies: bcrypt: "^6.0.0"（パスワードのハッシュ化などに使用） better-sqlite3: "^9.2.2"（SQLiteデータベースの操作） chalk: "^5.3.0"（コンソール出力の色付け） commander: "^11.1.0"（CLIアプリケーションの構築） cors: "^2.8.5"（CORSの設定） cosmiconfig: "^9.0.0"（設定ファイルの読み込み） dotenv: "^17.2.3"（環境変数の読み込み） express: "^5.1.0"（Webサーバーの構築） express-rate-limit: "^8.2.1"（リクエスト制限） ink: "^4.4.1"（ReactでTerminal UIを作成） jsonwebtoken: "^9.0.2"（JWTの生成と検証） knex: "^3.1.0"（SQLクエリビルダー） react: "^18.2.0"（UIコンポーネント） systeminformation: "^5.27.11"（システム情報の取得）\n\ndevDependencies: "@types/bcrypt": "^6.0.0" "@types/better-sqlite3": "^7.6.8" "@types/cors": "^2.8.19" "@types/express": "^5.0.5" "@types/jsonwebtoken": "^9.0.10" "@types/knex": "^0.15.2" "@types/node": "^20.19.25" "@types/react": "^18.2.46" "@typescript-eslint/eslint-plugin": "^6.16.0"（ESLintのTypeScriptプラグイン） "@typescript-eslint/parser": "^6.16.0"（ESLint用のTypeScript解析器） eslint: "^8.56.0"（静的コード解析ツール） prettier: "^3.1.0"（コードフォーマッター） tsx: "^4.7.0"（TypeScriptでReactを使用する際のヘルパー） typescript: "^5.3.3"（TypeScriptコンパイラ） vitest: "^1.1.0"（テストフレームワーク）';

export default function InteractiveDemoSection() {
  const [step, setStep] = useState(0);
  const [showThinking, setShowThinking] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModelSelector, setShowModelSelector] = useState(false);
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);
  const [currentResponse, setCurrentResponse] = useState<'default' | 'alternative'>('default');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    let timer: NodeJS.Timeout;

    if (step === 0) {
      timer = setTimeout(() => setStep(1), 1000);
    } else if (step === 1) {
      timer = setTimeout(() => setStep(2), 2000);
    } else if (step === 2) {
      timer = setTimeout(() => {
        setStep(3);
        setTimeout(() => setShowThinking(true), 500);
      }, 1500);
    } else if (step === 3) {
      timer = setTimeout(() => setStep(4), 3000);
    } else if (step === 4) {
      timer = setTimeout(() => {
        setStep(5);
        setIsPlaying(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const resetDemo = () => {
    setStep(0);
    setShowThinking(false);
    setIsPlaying(false);
    setShowModelSelector(false);
    setSelectedModel(null);
    setCurrentResponse('default');
    setShowConfirmDialog(false);
  };

  const startDemo = () => {
    resetDemo();
    setTimeout(() => setIsPlaying(true), 100);
  };

  const handleRetryClick = () => {
    setShowModelSelector(true);
  };

  const handleModelSelect = (model: typeof models[0]) => {
    setShowModelSelector(false);
    setCurrentResponse('alternative');
    setSelectedModel(model);
    // 代替応答を表示してから、確認ダイアログを表示
    setTimeout(() => setShowConfirmDialog(true), 1000);
  };

  const handleAccept = () => {
    setShowConfirmDialog(false);
  };

  const handleReject = () => {
    setCurrentResponse('default');
    setSelectedModel(null);
    setShowConfirmDialog(false);
  };

  return (
    <section id="demo" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--bg-card)] to-[var(--background)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            インタラクティブデモ
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            実際のLlamune Codeの動作を体験してみましょう
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <motion.button
              onClick={startDemo}
              className="px-6 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isPlaying}
            >
              {isPlaying ? '再生中...' : 'デモを開始'}
            </motion.button>
            <motion.button
              onClick={resetDemo}
              className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              リセット
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[var(--bg-card)] rounded-xl shadow-2xl border border-[var(--border)] overflow-hidden">
            <div className="bg-[var(--bg-darker)] px-6 py-4 flex items-center justify-between border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-semibold">
                  {selectedModel ? selectedModel.name : 'gpt-oss:20b'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></div>
                完全クローズド環境
              </div>
            </div>

            <div className="p-6 max-h-[600px] overflow-y-auto font-mono text-sm space-y-4">
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[var(--primary)] bg-opacity-10 border border-[var(--primary)] rounded-lg p-4"
                  >
                    <div className="text-[var(--text-primary)]">
                      プロジェクトフォルダのpackage.jsonを確認して主な依存関係を教えてください。
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {step >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs">
                      <FolderOpen className="w-4 h-4 text-[var(--secondary)]" />
                      <span className="font-bold text-[var(--secondary)]">Function Calling</span>
                    </div>
                    <motion.div
                      className="bg-[var(--bg-darker)] border border-[var(--border)] rounded-lg p-3"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1 }}
                    >
                      <div className="text-xs text-[var(--text-secondary)] space-y-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3 h-3" />
                          <span>read_file("/project/package.json")</span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-[var(--secondary)]"
                        >
                          ✓ ファイルを読み込みました
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {step >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    <motion.button
                      onClick={() => setShowThinking(!showThinking)}
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {showThinking ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      🧠 思考過程を{showThinking ? '非表示' : '表示'}
                    </motion.button>

                    <AnimatePresence>
                      {showThinking && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[var(--bg-darker)] border border-purple-500/30 rounded-lg p-4 overflow-hidden"
                        >
                          <div className="text-xs space-y-2 text-purple-300">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              Need to summarize main dependencies. Provide Japanese.
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {currentResponse === 'default' ? (
                <>
                  <AnimatePresence>
                    {step >= 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <div className="text-[var(--text-primary)] font-bold mb-2">
                          package.json の主要な依存関係（dependencies）
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="overflow-x-auto"
                        >
                          <table className="w-full text-xs border border-[var(--border)]">
                            <thead className="bg-[var(--bg-darker)]">
                              <tr>
                                <th className="border border-[var(--border)] px-3 py-2 text-left">パッケージ</th>
                                <th className="border border-[var(--border)] px-3 py-2 text-left">主な用途</th>
                                <th className="border border-[var(--border)] px-3 py-2 text-left">バージョン範囲</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dependencies.map((dep, i) => (
                                <motion.tr
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="hover:bg-[var(--bg-darker)]"
                                >
                                  <td className="border border-[var(--border)] px-3 py-2 font-semibold">{dep.name}</td>
                                  <td className="border border-[var(--border)] px-3 py-2 text-[var(--text-secondary)]">{dep.description}</td>
                                  <td className="border border-[var(--border)] px-3 py-2 text-[var(--text-muted)]">{dep.version}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {step >= 5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                      >
                        <div className="text-[var(--text-primary)] font-bold">
                          devDependencies（開発時のみ）
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border border-[var(--border)]">
                            <thead className="bg-[var(--bg-darker)]">
                              <tr>
                                <th className="border border-[var(--border)] px-3 py-2 text-left">パッケージ</th>
                                <th className="border border-[var(--border)] px-3 py-2 text-left">主な用途</th>
                              </tr>
                            </thead>
                            <tbody>
                              {devDependencies.map((dep, i) => (
                                <motion.tr
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="hover:bg-[var(--bg-darker)]"
                                >
                                  <td className="border border-[var(--border)] px-3 py-2 font-semibold">{dep.name}</td>
                                  <td className="border border-[var(--border)] px-3 py-2 text-[var(--text-secondary)]">{dep.description}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-xs text-[var(--text-secondary)] mt-4 p-3 bg-[var(--bg-darker)] rounded-lg"
                        >
                          このリストはプロジェクトの「主要」な依存関係を抜粋したものです。実際のコードベースで使用しているすべての機能をカバーしています。もし特定の機能やサブモジュールの詳細な依存関係が必要であれば、再度お知らせください。
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="flex gap-2 mt-4"
                        >
                          <button 
                            onClick={handleRetryClick}
                            className="px-4 py-2 bg-[var(--bg-darker)] border border-[var(--border)] rounded text-xs hover:border-[var(--primary)] transition-colors"
                          >
                            🔄 Retry
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <>
                  <AnimatePresence>
                    {step >= 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        {selectedModel && (
                          <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-darker)] px-3 py-1 rounded inline-block">
                            {selectedModel.name} ({selectedModel.preset})
                          </div>
                        )}
                        
                        <div className="text-[var(--text-primary)] text-xs whitespace-pre-wrap">
                          {alternativeResponse}
                        </div>

                        {/* Inline Confirmation */}
                        {showConfirmDialog && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-4 mt-4"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className="text-2xl">💡</div>
                              <h3 className="text-sm font-bold">この回答を採用しますか？</h3>
                            </div>
                            <div className="flex gap-3">
                              <motion.button
                                onClick={handleReject}
                                className="flex-1 px-4 py-2 border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors text-xs"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                破棄（元の回答を採用）
                              </motion.button>
                              <motion.button
                                onClick={handleAccept}
                                className="flex-1 px-4 py-2 bg-[var(--primary)] text-black font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-colors text-xs"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                採用
                              </motion.button>
                            </div>
                          </motion.div>
                        )}

                        {/* Retry Button - Only show when confirmation dialog is not shown */}
                        {!showConfirmDialog && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-2 mt-4"
                          >
                            <button 
                              onClick={handleRetryClick}
                              className="px-4 py-2 bg-[var(--bg-darker)] border border-[var(--border)] rounded text-xs hover:border-[var(--primary)] transition-colors"
                            >
                              🔄 Retry
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

              {isPlaying && step >= 2 && step < 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-[var(--text-secondary)]"
                >
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-[var(--primary)] rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-[var(--primary)] rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-[var(--primary)] rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="border-t border-[var(--border)] p-4 bg-[var(--bg-darker)]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="メッセージを入力... (Enterで改行、送信ボタンで送信)"
                  className="flex-1 bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                  disabled
                />
                <button
                  className="px-6 py-2 bg-[var(--primary)] text-black font-semibold rounded-lg transition-colors disabled:opacity-50"
                  disabled
                >
                  送信
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 text-center"
            >
              <div className="text-2xl mb-2">📁</div>
              <div className="text-sm font-semibold mb-1">Function Calling</div>
              <div className="text-xs text-[var(--text-secondary)]">
                ローカルファイルに直接アクセス
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 text-center"
            >
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm font-semibold mb-1">思考過程の可視化</div>
              <div className="text-xs text-[var(--text-secondary)]">
                LLMの推論プロセスを確認
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 text-center"
            >
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-semibold mb-1">完全ローカル</div>
              <div className="text-xs text-[var(--text-secondary)]">
                データは外部に送信されません
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModelSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowModelSelector(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--bg-card)] rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">モデルとプリセットの組み合わせ</h3>
                <button
                  onClick={() => setShowModelSelector(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-2">
                {models.map((model) => (
                  <motion.button
                    key={model.id}
                    onClick={() => handleModelSelect(model)}
                    className="w-full text-left px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      {model.isDefault && <span className="text-yellow-500">⭐</span>}
                      <span className="text-sm">
                        {model.id}. <span className="font-semibold">{model.name}</span>{' '}
                        <span className="text-[var(--text-secondary)]">({model.preset})</span>
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowModelSelector(false)}
                  className="px-6 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  キャンセル
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
