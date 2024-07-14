import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',
  color: '$gray100',
  fontFamily: '$default',
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})
