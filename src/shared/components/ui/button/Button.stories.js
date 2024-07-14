import Button from './Button.vue';
import './button.scss';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    text: {
      control: { type: 'text' }
    },
    class: {
      control: { type: 'text' }
    }
  }
};

const Template = (args) => ({
  components: { Button },
  setup () {
    return { args };
  },
  template: '<Button v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  class: 'btn',
  type: 'submit',
  disabled: false,
  text: 'Submit Form'
};

export const Disabled = Template.bind({});
Disabled.args = {
  class: 'btn',
  type: 'button',
  disabled: true,
  text: 'Disabled Button'
};
