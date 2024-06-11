'use client';

import { usePathname, useRouter } from '@/libs/navigation';
import { cn } from '@/utils/helpers';
import { useParams } from 'next/navigation';
import React, { ChangeEvent, ReactNode, useTransition } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const LocaleSwitcherSelect: React.FC<Props> = ({
  children,
  defaultValue,
  label,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <label
      className={cn(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex cursor-pointer appearance-none bg-transparent py-3 pl-2 pr-6 focus-visible:outline-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleSelectChange}
      >
        {children}
      </select>
      <FaChevronDown className="pointer-events-none absolute right-2 top-4 pl-1" />
    </label>
  );
};

export default LocaleSwitcherSelect;
