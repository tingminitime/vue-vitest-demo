module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  singleAttributePerLine: true,
  printWidth: 72,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
}
