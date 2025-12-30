# tmn-todo-rypq

シンプルで使いやすいTodoアプリケーションです。Next.js 14とTailwind CSSを使用して構築されています。

## 機能

- ✅ タスクの追加
- ✏️ タスクの編集
- 🗑️ タスクの削除
- ✔️ タスクの完了状態切り替え
- 📋 タスク一覧表示
- 💾 ブラウザローカルストレージでのデータ永続化

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React useState
- **Data Persistence**: localStorage
- **Icons**: Lucide React

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## ビルド

```bash
npm run build
npm start
```

## 使い方

1. **タスクの追加**: 上部の入力フィールドに新しいタスクを入力して「追加」ボタンをクリック
2. **タスクの完了**: チェックボックスをクリックしてタスクを完了状態に
3. **タスクの編集**: 鉛筆アイコンをクリックして編集モードに入り、テキストを修正
4. **タスクの削除**: ごみ箱アイコンをクリックしてタスクを削除

## データの保存

すべてのタスクはブラウザのlocalStorageに自動的に保存されます。ページを更新してもデータは保持されます。

## ライセンス

MIT