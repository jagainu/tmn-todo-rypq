'use client';

import { useState, useEffect } from 'react';
import { TodoItem } from '@/components/todo-item';
import { TodoForm } from '@/components/todo-form';
import { Todo } from '@/types/todo';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'todos';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // localStorage からデータを読み込み
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setTodos(JSON.parse(stored));
        } catch (error) {
          console.error('Failed to parse stored todos:', error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  // todosが変更されたらlocalStorageに保存
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditTodo = (id: string, title: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, title: title.trim() } : todo
    ));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo App</h1>
        <p className="text-gray-600">
          {totalCount === 0 ? (
            "タスクを追加して始めましょう"
          ) : (
            `${completedCount} / ${totalCount} 完了`
          )}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <TodoForm onSubmit={handleAddTodo} />
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">📝</div>
            <p className="text-gray-500">まだタスクがありません</p>
            <p className="text-sm text-gray-400">上のフォームから新しいタスクを追加してください</p>
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}