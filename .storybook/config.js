import { configure } from '@storybook/react'

const req = require.context('../src', true, /\.stories.+(tsx|ts)$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
