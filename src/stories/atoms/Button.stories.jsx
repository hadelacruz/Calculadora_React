import Button from "../../components/atoms/Button"

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
    className: { control: "text" }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "7",
  className: "calc-button"
}

export const Operator = Template.bind({})
Operator.args = {
  label: "+",
  className: "calc-button operator"
}

export const Clear = Template.bind({})
Clear.args = {
  label: "C",
  className: "calc-button clear"
}
