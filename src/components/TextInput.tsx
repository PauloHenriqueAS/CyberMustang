import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
export interface TextInputRootProps {
    children: ReactNode;
}
export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className=' flex items-center gap-3 h-12 py-4 px-3 rounded bg-white w-full focus-within::ring-5 ring-primary border-4 border-tertiary'>
            {props.children}
        </div>
    )
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-primary '>
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInputIcon '

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 outline-none text-primary text-xs placeholder: text-primary'
            {...props}
        />

    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}