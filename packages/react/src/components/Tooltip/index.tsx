import { ComponentProps } from 'react'
import * as RadixTootltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <RadixTootltip.Root>
      <RadixTootltip.Trigger asChild>{children}</RadixTootltip.Trigger>
      <TooltipContent {...props}>
        {content}
        <TooltipArrow />
      </TooltipContent>
    </RadixTootltip.Root>
  )
}

export interface TooltipProviderProps
  extends ComponentProps<typeof RadixTootltip.Provider> {}

export function TooltipProvider(props: TooltipProviderProps) {
  return (
    <RadixTootltip.Provider {...props}>{props.children}</RadixTootltip.Provider>
  )
}
