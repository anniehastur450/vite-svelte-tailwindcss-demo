module.exports = {
    // useTabs: true,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSameLine: true,
    trailingComma: 'none',
    printWidth: 120,
    plugins: ['prettier-plugin-svelte'],
    pluginSearchDirs: ['.'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
