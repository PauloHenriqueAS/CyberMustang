import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonfffProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export interface ButtonRootProps {
    children: ReactNode;
    className?: string;
}
export function ButtonRoot({ className, children }: ButtonRootProps) {
    return (
        <div className={clsx(
            'flex items-center gap-4 py-3 px-12 bg-white rounded-full font-medium text-primary text-sm  border-2 border-primary transition-colors focus:ring-2 ring-primary hover:bg-primary hover:text-white',
            className,
        )}>
            {children}
        </div>
    )
}

export interface ButtonIconProps {
    children: ReactNode;
}

function ButtonIcon(props: ButtonIconProps) {
    return (
        <Slot className='w-6 h-6 '>
            {props.children}
        </Slot>
    )
}

ButtonIcon.displayName = 'ButtonIcon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

function ButtonButton(props: ButtonProps) {
    return (
        <button className=''
            {...props}
        />
    )
}

export const Button = {
    Root: ButtonRoot,
    Button: ButtonButton,
    Icon: ButtonIcon,
}