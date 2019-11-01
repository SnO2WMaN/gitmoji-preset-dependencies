// eslint-disable-next-line import/no-extraneous-dependencies
const { default: write } = require('comment-inserter')

const gitmojis = require('.')

;

(async () => {
  await write('README.md', 'gitmojis', [
    '|emoji|code|description|',
    '|:-:|:-:|-|',
    ...gitmojis.map(
      ({ emoji, name, description }) => `|${emoji}|\`:${name}:\`|${description}`
    )
  ])
})()
