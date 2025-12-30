'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditValue(todo.title);
  };

  const handleSaveEdit = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue && trimmedValue !== todo.title) {
      onEdit(todo.id, trimmedValue);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  const formattedDate = new Date(todo.createdAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={cn(
      "todo-item bg-white rounded-lg shadow-sm border p-4 flex items-center gap-3",
      todo.completed && "todo-completed"
    )}>
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleSaveEdit}
            className="text-base"
            autoFocus
          />
        ) : (
          <div>
            <div className={cn(
              "todo-title text-base font-medium",
              todo.completed && "text-gray-500"
            )}>
              {todo.title}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {formattedDate}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        {isEditing ? (
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSaveEdit}
              className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCancelEdit}
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleStartEdit}
              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              disabled={todo.completed}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(todo.id)}
              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}