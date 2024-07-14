import * as RadixToast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(RadixToast.Root, {
  listStyle: 'none',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  maxWidth: '400px',
  padding: '$3 $5',
  position: 'relative',
  border: '1px solid $gray600',
})

export const ToastTitle = styled(RadixToast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
  marginBottom: '$1',
})

export const ToastDescription = styled(RadixToast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const ToastClose = styled(RadixToast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$3',
  right: '$5',
  color: '$gray200',
  cursor: 'pointer',
})
