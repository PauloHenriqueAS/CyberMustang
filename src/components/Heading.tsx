import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    return (
        <Comp className={clsx(
            ' flex items-center font-bold font-sans',
            {
                'text-lg': size == 'sm',
                'text-xl': size == 'md',
                'text-3xl': size == 'lg'
            },
            className
        )}>
            {children}
        </Comp>
    )
}