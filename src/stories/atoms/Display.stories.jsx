import Display from '../../components/atoms/Display'

export default {
  title: 'Atoms/Display',
  component: Display,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    value: { control: 'text' }
  }
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '12345'
}
