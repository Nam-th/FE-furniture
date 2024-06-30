import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export default function CategorySelection({ name }: { name: string }) {
  const { control } = useFormContext();
  const categories = [
    {
      id: 1,
      name: 'Bàn cà phê',
    },
    {
      id: 2,
      name: 'Đèn ngủ',
    },
    {
      id: 3,
      name: 'Đèn trang trí',
    },
    {
      id: 4,
      name: 'Bộ rèm cửa',
    },
  ];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          onValueChange={(value) => field.onChange(Number(value))}
          value={field.value ? String(field.value) : ''}
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
