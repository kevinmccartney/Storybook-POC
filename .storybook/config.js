import { configure } from '@storybook/angular';

function loadStories() {
  require('./stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);