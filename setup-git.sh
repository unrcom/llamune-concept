#!/bin/bash

# Llamune Concept - Quick Start Script
# このスクリプトは、プロジェクトをGitHubにpushする準備を自動化します

set -e

echo "🚀 Llamune Concept - GitHubへのpush準備"
echo "========================================"
echo ""

# Step 1: リポジトリURLの入力
read -p "📝 GitHubリポジトリURL（例: https://github.com/username/llamune-concept.git）: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ リポジトリURLが入力されていません"
    exit 1
fi

echo ""
echo "✅ リポジトリURL: $REPO_URL"
echo ""

# Step 2: Git初期化確認
if [ -d ".git" ]; then
    echo "⚠️  .gitディレクトリが既に存在します"
    read -p "削除して再初期化しますか？ (y/N): " confirm
    if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
        rm -rf .git
        echo "✅ .gitディレクトリを削除しました"
    else
        echo "❌ 中止しました"
        exit 1
    fi
fi

# Step 3: Git初期化
echo ""
echo "🔧 Gitリポジトリを初期化中..."
git init
echo "✅ Git初期化完了"

# Step 4: ファイルをステージング
echo ""
echo "📦 ファイルをステージング中..."
git add .
echo "✅ ステージング完了"

# Step 5: 初回コミット
echo ""
echo "💾 初回コミット中..."
git commit -m "Initial commit: Llamune concept page"
echo "✅ コミット完了"

# Step 6: ブランチ名を設定
echo ""
echo "🌿 メインブランチを設定中..."
git branch -M main
echo "✅ ブランチ設定完了"

# Step 7: リモートリポジトリを追加
echo ""
echo "🔗 リモートリポジトリを追加中..."
git remote add origin "$REPO_URL"
echo "✅ リモート追加完了"

# Step 8: Push
echo ""
echo "🚀 GitHubにpush中..."
echo ""
echo "⚠️  認証情報の入力が求められます："
echo "   - Username: GitHubユーザー名"
echo "   - Password: Personal Access Token（パスワードではありません）"
echo ""

git push -u origin main

echo ""
echo "🎉 push完了！"
echo ""
echo "📍 リポジトリを確認："
echo "   ${REPO_URL%.git}"
echo ""
echo "次のステップ："
echo "1. GitHubでリポジトリを確認"
echo "2. Vercelにデプロイ（任意）"
echo ""
