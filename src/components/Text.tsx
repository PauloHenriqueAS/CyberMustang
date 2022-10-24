import { ReactNode, TextareaHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextRootProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function TextRoot({ size = 'md', children, asChild, className }: TextRootProps) {
    const Comp = asChild ? Slot : 'span';
    return (
        <Comp className={clsx(
            'flex items-center gap-6 font-sans',
            {
                'text-sm': size == 'sm',
                'text-md': size == 'md',
                'text-lg': size == 'lg'
            },
            className,
        )}>
            {children}
        </Comp>
    )
}

export interface TextIconProps {
    children: ReactNode;
}
function TextIcon(props: TextIconProps) {
    return (
        <Slot className='w-6 h-6 '>
            {props.children}
        </Slot>
    )
}

TextIcon.displayName = 'TextIcon'

export interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

function TextText(props: TextProps) {
    return (
        <span className=''
            {...props}
        />
    )
}

export const Text = {
    Root: TextRoot,
    Text: TextText,
    Icon: TextIcon,
}