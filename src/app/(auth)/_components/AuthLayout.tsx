import Link from 'next/link';
import { type FC, type ReactNode } from 'react';
import { Alert } from '@/components/ui/Alert';

type Props = {
  title: string;
  error?: string;
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ title, error, children }) => {
  return (
    <div className='flex min-h-[calc(100vh_-_73px)] flex-col items-center justify-center gap-6 bg-neutral-50 p-10'>
      <div className='text-center'>
        <Link href='/' className='text-3xl font-semibold'>
          Conectle
        </Link>
      </div>
      <div className='mx-auto w-full max-w-[480px] rounded-lg border border-neutral-200 bg-white p-10 shadow-sm'>
        <h1 className='text-center text-2xl font-bold'>{title}</h1>
        {error && (
          <Alert className='mt-4' type='error'>
            {error}
          </Alert>
        )}
        <div className='mt-8'>{children}</div>
      </div>
    </div>
  );
};
