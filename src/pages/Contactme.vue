<template>
    <main class="bbg relative min-h-[100vh] z-[1] overflow-auto">
        <SpaceBackground :star-count="50" :shape-count="0" />
        <section class="text-white px-4 sm:px-8 flex justify-center items-center py-8">
            <div class="relative my-8 w-full max-w-2xl">
                <!-- Main Card -->
                <div ref="card"
                    class="glass-card w-full flex flex-col p-4 sm:p-6 rounded-xl h-full bg-white/5 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-300">
                    <!-- Header with Gmail icon -->
                    <div
                        class="header-contact flex flex-col justify-center items-center w-full p-4 sm:p-6 relative z-1">
                        <div class="relative transition-transform duration-300" v-tooltip="'Gmail'">
                            <svg class="h-14 sm:h-18" viewBox="0 0 512 512" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M501.551 387.058c0 28.498-23.312 51.808-51.809 51.808H62.258c-28.496 0-51.809-23.311-51.809-51.808V124.942c0-28.497 23.313-51.808 51.809-51.808h387.484c28.497 0 51.809 23.311 51.809 51.808V387.058z"
                                    fill="white" />
                                <path
                                    d="M62.258 438.867h10.885V162.547l182.716 147.187 182.716-147.187v276.319h11.166c26.683 0 48.816-20.435 51.528-46.43V124.942c0-28.498-23.313-51.808-51.809-51.808L255.859 229.627 62.258 73.133c-28.496 0-51.809 23.311-51.809 51.808v262.117C10.449 415.556 33.762 438.867 62.258 438.867z"
                                    fill="#D50707" />
                            </svg>
                        </div>

                        <h1 class="text-xl sm:text-2xl font-bold mt-3 text-white">
                            {{ $t('Contactme.title') }}
                        </h1>
                        <p class="text-xs sm:text-sm text-center font-medium mt-1 text-white/80">
                            {{ $t('Contactme.subtitle') }}
                        </p>
                    </div>

                    <!-- Contact Form -->
                    <div class="contact-form px-3 sm:px-4 py-3">
                        <div class="mb-4">
                            <label for="email" class="block text-xs sm:text-sm font-medium mb-1 text-white/90">
                                {{ $t('Contactme.email') }}
                            </label>
                            <input type="email" id="email"
                                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-200 placeholder-white/60"
                                :placeholder="$t('Contactme.emailPlaceholder')" />
                        </div>

                        <div class="mb-4">
                            <label for="message" class="block text-xs sm:text-sm font-medium mb-1 text-white/90">
                                {{ $t('Contactme.message') }}
                            </label>
                            <textarea id="message" rows="4"
                                class="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-200 placeholder-white/60"
                                :placeholder="$t('Contactme.messagePlaceholder')"></textarea>
                        </div>

                        <button
                            class="w-full py-2 px-4 rounded-lg font-medium text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-200 active:scale-95">
                            {{ $t('Contactme.send') }}
                        </button>
                    </div>

                    <!-- Social Media Section -->
                    <div
                        class="mt-6 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 transition-colors duration-200">
                        <p class="text-center text-sm font-medium mb-4 text-white">
                            {{ $t('Contactme.social') }}
                        </p>

                        <div class="w-full">
                            <ul class="flex justify-center gap-3 sm:gap-4 items-center">
                                <li v-for="social in socials" :key="social.name"  v-tooltip="social.name"
                                    class="social-icon w-10 h-10 sm:w-11 sm:h-11 rounded-full flex justify-center items-center bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200">
                                    <a :href="social.link" target="_blank" class="p-2">
                                        <svg :viewBox="social.viewBox" fill="white" class="w-4 h-4 sm:w-5 sm:h-5">
                                            <path :d="social.path" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="flex justify-center pb-4 pt-8">
            <Footer />
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SpaceBackground from "../components/SpaceBackground.vue";
import Footer from "../components/footer.vue";
import data from '../database.json';

const card = ref(null);

const socials = [
    {
        name: 'Facebook',
        link: data.media.Facebook,
        viewBox: '0 0 24 24',
        path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    },
    {
        name: 'Instagram',
        link: data.media.Instagram,
        viewBox: '0 0 24 24',
        path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
    },
    {
        name: 'Github',
        link: data.media.Gethub,
        viewBox: '0 0 24 24',
        path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'
    },
    // {
    //     name: 'LinkedIn',
        // link: data.media.Linkedin,
    //     viewBox: '0 0 24 24',
    //     path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    // }
];

// Mouse move effect for card
onMounted(() => {
    if (card.value) {
        card.value.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.value.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            card.value.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
            card.value.style.boxShadow = `${x * 15}px ${y * 15}px 30px rgba(0, 0, 0, 0.2)`;
        });

        card.value.addEventListener('mouseleave', () => {
            card.value.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
            card.value.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
    }
});
</script>

<style scoped>
.glass-card {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icon {
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-icon:hover {
    transform: translateY(-2px) scale(1.05);
}

.social-icon:active {
    transform: translateY(0) scale(0.98);
}

input,
textarea,
button {
    transition: all 0.2s ease;
}

input:focus,
textarea:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
}
</style>