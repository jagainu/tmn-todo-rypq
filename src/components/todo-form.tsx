'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = input.trim();
    if (title) {
      onSubmit(title);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいタスクを入力してください..."
        className="flex-1 text-base"
      />
      <Button 
        type="submit" 
        disabled={!input.trim()}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
      >
        <Plus className="h-4 w-4 mr-1" />
        追加
      </Button>
    </form>
  );
}