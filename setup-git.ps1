# Llamune Concept - Quick Start Script (PowerShell)
# このスクリプトは、プロジェクトをGitHubにpushする準備を自動化します

Write-Host "🚀 Llamune Concept - GitHubへのpush準備" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: リポジトリURLの入力
$repoUrl = Read-Host "📝 GitHubリポジトリURL（例: https://github.com/username/llamune-concept.git）"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ リポジトリURLが入力されていません" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ リポジトリURL: $repoUrl" -ForegroundColor Green
Write-Host ""

# Step 2: Git初期化確認
if (Test-Path ".git") {
    Write-Host "⚠️  .gitディレクトリが既に存在します" -ForegroundColor Yellow
    $confirm = Read-Host "削除して再初期化しますか？ (y/N)"
    if ($confirm -eq "y" -or $confirm -eq "Y") {
        Remove-Item -Recurse -Force .git
        Write-Host "✅ .gitディレクトリを削除しました" -ForegroundColor Green
    } else {
        Write-Host "❌ 中止しました" -ForegroundColor Red
        exit 1
    }
}

# Step 3: Git初期化
Write-Host ""
Write-Host "🔧 Gitリポジトリを初期化中..." -ForegroundColor Yellow
git init
Write-Host "✅ Git初期化完了" -ForegroundColor Green

# Step 4: ファイルをステージング
Write-Host ""
Write-Host "📦 ファイルをステージング中..." -ForegroundColor Yellow
git add .
Write-Host "✅ ステージング完了" -ForegroundColor Green

# Step 5: 初回コミット
Write-Host ""
Write-Host "💾 初回コミット中..." -ForegroundColor Yellow
git commit -m "Initial commit: Llamune concept page"
Write-Host "✅ コミット完了" -ForegroundColor Green

# Step 6: ブランチ名を設定
Write-Host ""
Write-Host "🌿 メインブランチを設定中..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ ブランチ設定完了" -ForegroundColor Green

# Step 7: リモートリポジトリを追加
Write-Host ""
Write-Host "🔗 リモートリポジトリを追加中..." -ForegroundColor Yellow
git remote add origin $repoUrl
Write-Host "✅ リモート追加完了" -ForegroundColor Green

# Step 8: Push
Write-Host ""
Write-Host "🚀 GitHubにpush中..." -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  認証情報の入力が求められます：" -ForegroundColor Yellow
Write-Host "   - Username: GitHubユーザー名"
Write-Host "   - Password: Personal Access Token（パスワードではありません）"
Write-Host ""

git push -u origin main

Write-Host ""
Write-Host "🎉 push完了！" -ForegroundColor Green
Write-Host ""
Write-Host "📍 リポジトリを確認："
Write-Host "   $($repoUrl -replace '\.git$', '')"
Write-Host ""
Write-Host "次のステップ："
Write-Host "1. GitHubでリポジトリを確認"
Write-Host "2. Vercelにデプロイ（任意）"
Write-Host ""
