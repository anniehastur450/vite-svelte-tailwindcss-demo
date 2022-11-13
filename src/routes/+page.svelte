<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each Array(2) as _, i}
    <p><a href="w{i + 1}">Week {i + 1}</a></p>
{/each}

<style>
    a {
        @apply font-medium text-blue-600 hover:underline dark:text-blue-500;
    }
</style>
