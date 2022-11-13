<script>
    import { onDestroy, onMount } from 'svelte';

    let items = [
        {
            img: 'https://images.unsplash.com/photo-1431444393712-19267bd26144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80',
            title: 'Nature View',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum.`,
        },
        {
            img: 'https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
            title: 'Rain View',
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, vero earum perspiciatis officia`,
        },
        {
            img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            title: 'Ocean View',
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt recusandae unde autem`,
        },
    ];

    let active = 0;
    let sliding = false;

    /* we might able to use on:transitionend and in:fly here instead of setTimeout and manual transition */

    function nextSlide(incr = 1) {
        console.log('nextSlide', incr);
        // Step 1.
        sliding = true;

        // Step 2.
        setTimeout(() => {
            // Step 3, 4 and 5.
            active = (active + incr + items.length) % items.length;

            // Step 6.
            setTimeout(() => (sliding = false), 200);
        }, 700);
    }

    /** @type {ReturnType<setInterval> | undefined} */
    let sliderInterval = setInterval(nextSlide, 5000);

    function btnClick(/** @type {number} */ incr) {
        nextSlide(incr);
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 5000);
    }

    onDestroy(() => {
        console.log('onDestroy');
        if (sliderInterval != undefined) {
            clearInterval(sliderInterval);
            sliderInterval = undefined;
        }
    });
</script>

<svelte:head>
    <title>Week 2</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css" />

    <style>
        @import url('https://fonts.googleapis.com/css?family=Lato');

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        body {
            font-family: 'Lato', sans-serif;
        }

        @layer base {
            h1 {
                @apply text-3xl font-bold;
            }
            h4 {
                @apply font-bold;
            }
        }
    </style>
</svelte:head>

<div class="relative overflow-hidden">
    <!-- slider -->
    <div>
        <!-- slider container -->
        {#each items as { img, title, desc }, i}
            {#if i == active}
                <div
                    style:background-image="url({img})"
                    class="h-screen w-screen bg-cover bg-center
                ">
                    <div
                        class="absolute top-16 left-8 w-[300px]
                            bg-white/70 py-5 px-4 text-center
                             transition-all delay-[0.6s] duration-[0.5s]
                            {!sliding ? 'opacity-100 translate-y-[-40px]' : 'opacity-0 translate-y-0'}
                    ">
                        <!-- info -->
                        <h1 class="py-2">{title}</h1>
                        <p class="py-4">{desc}</p>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <div
        class="absolute top-0 left-full z-50 h-full w-full bg-white
            transition-transform duration-[700ms]
            {sliding ? '-translate-x-full' : ''}
    ">
        <!-- eraser -->
    </div>

    <div class="absolute bottom-6 right-6">
        <!-- buttons-container -->
        <button on:click={() => btnClick(-1)}><i class="fa fa-arrow-left" /></button>
        <button on:click={() => btnClick(1)}><i class="fa fa-arrow-right" /></button>
    </div>
</div>

<h4 class="fixed top-0 right-0 bg-white py-1 px-2">Weekly Coding Challenge #2 - Slider</h4>

<style>
    button {
        @apply border-2 border-white bg-transparent py-2 px-5 text-sm text-white
            hover:bg-white hover:text-neutral-800;
        line-height: normal;
    }
</style>
