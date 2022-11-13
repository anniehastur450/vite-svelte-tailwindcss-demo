<script>
    import Icon from './Icon.svelte';

    let view = 'sign-in';
    $: isSignIn = view == 'sign-in';

    $: {
        console.log('view', view);
    }
</script>

<svelte:head>
    <title>Week 1</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

    <!--
        style in svelte:head instead of :global(body)
        see https://github.com/sveltejs/svelte/issues/3105#issuecomment-1118831153
        and https://github.com/sveltejs/svelte/issues/5530
    -->
    <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        /* layer is needed here to override tailwind */
        @layer base {
            body {
                @apply flex h-screen
                    flex-col items-center justify-center
                    bg-zinc-100;
            }

            h1 {
                @apply text-3xl font-bold;
            }

            h2 {
                @apply text-2xl font-bold;
                line-height: normal;
            }

            input {
                @apply my-2 w-full bg-zinc-100 py-3 px-4 text-sm leading-none;
                line-height: normal;
            }

            button {
                @apply rounded-full bg-orange-600 px-12 py-3;
                @apply font-sans text-sm uppercase text-white;
                @apply transition-transform duration-[80ms];
                @apply active:scale-95 active:transform;
                line-height: normal;
            }
        }
    </style>
</svelte:head>

<h2 class="my-5">Weekly Coding Challenge #1: Sign in/up Form</h2>

<div
    class="relative min-h-[480px] w-[768px]
        overflow-hidden rounded-xl
        bg-white shadow-xl
">
    <!-- container -->

    <div class="absolute h-full w-1/2 translate-x-full transform overflow-hidden">
        <!-- sign up -->

        <form action="#" on:submit|preventDefault class={isSignIn ? `transform -translate-x-full` : ''}>
            <h1>Create Account</h1>
            <div class="my-5">
                <Icon fa="facebook-f" />
                <Icon fa="google-plus-g" />
                <Icon fa="linkedin-in" />
            </div>
            <span class="text-xs">or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    </div>

    <div class="absolute h-full w-1/2 overflow-hidden">
        <!-- sign in -->

        <form action="#" on:submit|preventDefault class={!isSignIn ? `transform translate-x-full` : ''}>
            <h1>Sign in</h1>
            <div class="my-5">
                <Icon fa="facebook-f" />
                <Icon fa="google-plus-g" />
                <Icon fa="linkedin-in" />
            </div>
            <span class="text-xs">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#demo-only" class="text-dark-200 my-4 text-sm">Forgot your password?</a>
            <button>Sign In</button>
        </form>
    </div>

    <div
        class="absolute left-1/2 h-full w-1/2 overflow-hidden text-center
            transition-transform duration-[0.6s]
            {!isSignIn ? `transform -translate-x-full` : ''}
    ">
        <!-- overlay -->

        <div
            class="relative -left-full h-full w-[200%]
                bg-gradient-to-r from-[#FF4B2B] to-[#FF416C]
                text-white
                transition-transform duration-[0.6s]
                {!isSignIn ? `transform translate-x-1/2` : ''}
        ">
            <div
                class="absolute flex h-full w-1/2
                    flex-col items-center justify-center px-10
                    transition-transform duration-[0.6s]
                    {isSignIn ? `transform translate-x-[-20%]` : ''}
            ">
                <!-- left -->

                <h1>Welcome Back!</h1>
                <p class="mt-5 mb-7">To keep connected with us please login with your personal info</p>
                <button
                    on:click={() => (view = 'sign-in')}
                    class="border border-white bg-transparent
                ">Sign In</button>
            </div>
            <div
                class={`absolute w-1/2 h-full px-10 right-0
                    flex flex-col justify-center items-center
                    transition-transform duration-[0.6s]
                    ${!isSignIn ? `transform translate-x-[20%]` : ''}
            `}>
                <!-- right -->

                <h1>Hello, Friend!</h1>
                <p class="mt-5 mb-7 text-sm">Enter your personal details and start journey with us</p>
                <button
                    on:click={() => (view = 'sign-up')}
                    class="border border-white bg-transparent
                ">Sign Up</button>
            </div>
        </div>
    </div>
</div>

<style>
    form {
        @apply flex h-full
            flex-col items-center justify-center px-12
            transition-transform duration-[0.6s];
    }
</style>
