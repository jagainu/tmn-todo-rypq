# tmn-todo-rypq

> **Status**: 🎨 DESIGNING

## 概要

ユーザーがタスクを管理できるシンプルなTodoアプリケーション。タスクの追加、編集、削除、完了状態の切り替えが可能です。

## 機能

- [ ] タスク追加
- [ ] タスク編集
- [ ] タスク削除
- [ ] タスク完了トグル
- [ ] タスク一覧表示

## 画面

| パス | 画面名 | 説明 |
|------|--------|------|
| `/` | Todo一覧ページ | すべてのTodoタスクを表示し、新規タスクの追加、既存タスクの編集や削除ができるメインページ |

## データ

### Todo

| フィールド | 型 | 説明 |
|-----------|-----|------|
| id | string | タスクの一意の識別子 |
| title | string | タスクのタイトル |
| completed | boolean | タスクの完了状態 |
| createdAt | string | タスク作成日時 |

## 認証

なし

---

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Database: localStorage (ブラウザストレージ)
- Hosting: Vercel
