import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProvider, ToastProps, Button } from '@ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Notification/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      function handleShowToast() {
        setOpen(true)
      }

      return (
        <ToastProvider>
          <Button onClick={handleShowToast}>Show</Button>
          <Story
            args={{
              title: 'Test',
              content: 'Test content',
              open,
              onOpenChange: setOpen,
            }}
          />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
