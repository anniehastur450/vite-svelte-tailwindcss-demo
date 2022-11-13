module.exports = {
    // useTabs: true,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 100,
    plugins: ['prettier-plugin-svelte'],
    pluginSearchDirs: ['.'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};