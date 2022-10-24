import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import {clsx} from 'clsx';

export interface CardProps{
    size?: 'sm' | 'md' |'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Card(props: CardProps) {
    return (
        <div className=' flex flex-col items-start gap-3 h-[362px] py-4 px-8 rounded-3xl bg-white w-[281px] focus-within::ring-5 ring-primary border-4 border-tertiary'>
            {props.children}
        </div>
    )
}