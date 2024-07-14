import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProvider, TooltipProps } from '@ignite-ui/react'
import { Info } from 'phosphor-react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Story
            args={{
              content: 'Test',
              children: <Info size={20} />,
            }}
          />
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
