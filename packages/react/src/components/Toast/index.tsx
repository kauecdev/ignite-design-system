import { ComponentProps, Dispatch, SetStateAction } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  content: string
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function Toast({ title, content, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{content}</ToastDescription>
      <ToastClose>
        <X size={20} />
      </ToastClose>
    </ToastContainer>
  )
}

export interface ToastProviderProps
  extends ComponentProps<typeof RadixToast.Provider> {}

export function ToastProvider(props: ToastProviderProps) {
  return (
    <RadixToast.Provider {...props}>
      {props.children}
      <RadixToast.Viewport />
    </RadixToast.Provider>
  )
}
