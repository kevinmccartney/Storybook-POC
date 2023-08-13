import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../src/button.component';
import { ProgressSpinnerComponent } from '../src/progress-spinner.component';

storiesOf('UI Primitives/Button', module)
  .add('Primary', () => ({
    component: ButtonComponent,
    props: {
      text: 'Submit',
    },
  }));

storiesOf('UI Primitives/Progress Spinner', module)
  .add('Indeterminate', () => ({
    component: ProgressSpinnerComponent,
    props: {
      text: 'Submit',
    },
  }));