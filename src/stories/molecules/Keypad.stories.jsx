import Keypad from '../../components/molecules/Keypad'

export default {
  title: 'Molecules/Keypad',
  component: Keypad,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onButtonClick: { action: 'button-clicked' }
  }
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {}
