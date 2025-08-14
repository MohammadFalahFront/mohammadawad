<template>
    <main class="bbg relative z-[1] overflow-auto">
        <SpaceBackground :star-count="100" :shape-count="0" />
        <!-- header -->
        <div class="my-[clamp(1rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] py-[clamp(0.5rem,2vw,2rem)]">
            <h1 class="text-[clamp(1rem,3vw,3rem)] text-[var(--mainColor)] font-bold xl:text-start">
                {{ $t("Aabout") }}
            </h1>
            <TextWrite :words="words" />
        </div>
        <!-- content -->
        <!-- about me -->
        <section class="text-white px-[clamp(1rem,5vw,5rem)] flex justify-center items-center">
            <div
                class="glass-card my-[clamp(2rem,5vw,5rem)] w-[100%] sm:w-[85%] lg:w-[75%] flex flex-col p-[clamp(1rem,1.5vw,1.5rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                <!-- header -->
                <div
                    class="header-aboutme flex flex-col justify-center items-center w-full bg-[var(--mainColor)] p-[clamp(1rem,3vw,3rem)] rounded-t-4xl relative z-1">
                    <SpaceBackground :star-count="100" :shape-count="0" />
                    <a href="https://web.facebook.com/visualinnovate" target="_blank"
                        class="overflow-hidden rounded-full mb-4">
                        <img src="../assets/Visual Innovate.jpg" alt="Visual Innovate logo"
                            class="hover:scale-110 transition-all duration-300 w-[100px] lg:w-[130px]" />
                    </a>
                    <h1 class="text-[clamp(1rem,2.5vw,2.5rem)] font-bold">
                        {{ $t("myname") }}
                    </h1>
                    <p class="text-[clamp(0.675rem,1.25vw,1.25rem)] font-bold">
                        {{ $t("aboutPage.InnovateMy") }}
                    </p>
                </div>
                <svg class="relative bottom-[10px] w-full h-[50px] z-[1] rotate-180" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--mainColor)"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
                <!-- body -->
                <div>
                    <h2 class="text-[clamp(1rem,1.75vw,1.75rem)]">{{ $t("aboutPage.aboutme") }}</h2>
                    <hr />
                    <p class="my-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.675rem,1.1vw,1.1rem)] font-light">{{ $t("aboutPage.bodycontent") }}</p>
                    <blockquote class="quote text-[clamp(0.675rem,1vw,1.1rem)]">{{ $t("aboutPage.quote") }}</blockquote>
                    <p class="text-[clamp(0.675rem,1.1vw,1.1rem)]">{{ $t("aboutPage.content") }}</p>
                    <!-- all cards -->
                    <div class="cards grid grid-cols-2 xl:grid-cols-4 gap-[clamp(0.5rem,1.5vw,1.5rem)] p-[clamp(0.5rem,1vw,1rem)] max-w-7xl mx-auto">
                        <!-- card 1 -->
                        <div
                            class="glass-card flex flex-col items-center justify-center p-[clamp(0.5rem,1vw,1rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <h1 class="text-[var(--dark)] font-bold text-[clamp(2rem,4vw,4rem)]">{{ data.about.myage }}</h1>
                            <span class="text-gray-900 text-[clamp(0.75rem,0.9vw,0.9rem)] text-center">Year of age</span>
                        </div>
                        <!-- card 2 -->
                        <div
                            class="glass-card flex flex-col items-center p-[clamp(0.5rem,1vw,1rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <h1 class="text-[var(--dark)] font-bold text-[clamp(2rem,4vw,4rem)]">+{{ data.about.experience }}</h1>
                            <span class="text-gray-900 text-[clamp(0.75rem,0.9vw,0.9rem)] text-center">Years of experience</span>
                        </div>
                        <!-- card 3 -->
                        <div
                            class="glass-card flex flex-col items-center p-[clamp(0.5rem,1vw,1rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <h1 class="text-[var(--dark)] font-bold text-[clamp(2rem,4vw,4rem)]">+{{ data.about.projects }}</h1>
                            <span class="text-gray-900 text-[clamp(0.75rem,0.9vw,0.9rem)] text-center">Completed project</span>
                        </div>
                        <!-- card 3 -->
                        <div
                            class="glass-card flex flex-col items-center p-[clamp(0.5rem,1vw,1rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <h1 class="text-[var(--dark)] font-bold text-[clamp(2rem,4vw,4rem)]">∞</h1>
                            <span class="text-gray-900 text-[clamp(0.75rem,0.9vw,0.9rem)] text-center">passion</span>
                        </div>
                    </div>
                    <h2 class="mt-[clamp(1rem,2vw,2rem)] text-[clamp(1rem,1.75vw,1.75rem)]">{{ $t("aboutPage.SkillsExperience") }}</h2>
                    <hr />
                    <p class="my-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.675rem,1.1vw,1.1rem)]">{{ $t("aboutPage.skillstitle") }}</p>
                    <button class="animated-btn" @click="$router.push('/skills')">
                        <span class="text-[clamp(0.675rem,1vw,1rem)]">{{ $t("aboutPage.skillscontent") }}</span>
                    </button>
                    <h2 class="mt-[clamp(1rem,2vw,2rem)] text-[clamp(1rem,1.75vw,1.75rem)]">{{ $t("aboutPage.Idifferent") }}</h2>
                    <hr class="mb-[clamp(0.5rem,1vw,1rem)]" />
                    <div class="text-[clamp(0.675rem,1.1vw,1.1rem)]">
                        <p class="mb-[clamp(0.5rem,1vw,1rem)]">
                            <span class="text-[var(--mainColor)] font-bold">
                                {{ $t("aboutPage.problemSolvingTitle") }}
                            </span>
                            {{ $t("aboutPage.problemSolvingText") }}
                        </p>

                        <p class="mb-[clamp(0.5rem,1vw,1rem)]">
                            <span class="text-[var(--mainColor)] font-bold">
                                {{ $t("aboutPage.fastLearningTitle") }}
                            </span>
                            {{ $t("aboutPage.fastLearningText") }}
                        </p>

                        <p class="mb-[clamp(0.5rem,1vw,1rem)]">
                            <span class="text-[var(--mainColor)] font-bold">
                                {{ $t("aboutPage.ageExperienceTitle") }}
                            </span>
                            {{ $t("aboutPage.ageExperienceText") }}
                        </p>

                        <p class="mb-[clamp(0.5rem,1vw,1rem)]">
                            <span class="text-[var(--mainColor)] font-bold">
                                {{ $t("aboutPage.creativeVisionTitle") }}
                            </span>
                            {{ $t("aboutPage.creativeVisionText") }}
                        </p>
                    </div>
                </div>
                <!-- footer -->
                <div
                    class="mt-[clamp(1rem,2vw,2rem)] glass-cardnothover flex flex-col items-center rounded-4xl justify-center p-[clamp(1rem,1.5vw,1.5rem)] shadow-lg hover:shadow-xl h-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <h1 class="text-[var(--mainColor)] font-bold text-[clamp(1rem,1.5vw,1.5rem)] mb-[clamp(0.5rem,1vw,1rem)]">{{
                        $t('aboutPage.footer.h1') }}</h1>
                    <p class="mb-[clamp(1rem,2vw,2rem)] text-[clamp(0.675rem,1.1vw,1.1rem)]">{{ $t('aboutPage.footer.p') }}</p>
                    <button class="animated-btn text-[clamp(0.675rem,1vw,1rem)]" @click="$router.push('/Contactme')">{{ $t('aboutPage.footer.btn') }}</button>
                </div>
            </div>
        </section>
        <!-- My Services -->
        <section class="text-white px-[clamp(1rem,5vw,5rem)] mb-[clamp(2rem,8vw,8rem)]">
            <!-- Title -->
            <h2 class="services-title text-center text-[clamp(1.5rem,3vw,3rem)] font-bold mb-[clamp(1rem,2vw,2rem)]">
                {{ $t("aboutPage.services") }}
            </h2>
            <!-- Cards -->
            <div class="cards grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-[clamp(1rem,2vw,2rem)] p-[clamp(0.5rem,1vw,1rem)] max-w-7xl mx-auto">
                <!-- Card 1 -->
                <div
                    class="glass-card flex flex-col p-[clamp(1rem,1.5vw,1.5rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <!-- Icon -->
                    <div class="mb-[clamp(0.5rem,1vw,1rem)] h-[clamp(3rem,4vw,4rem)] bg-gray-50/20 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-blue-400">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <!-- Content -->
                    <div>
                        <h3 class="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-white mb-[clamp(0.5rem,1vw,1rem)]">
                            {{ $t("aboutPage.S1T") }}
                        </h3>
                        <p class="text-[clamp(0.75rem,0.9vw,0.9rem)] text-gray-300">{{ $t("aboutPage.S1D") }}</p>
                    </div>
                </div>
                <!-- Card 2 -->
                <div
                    class="glass-card flex flex-col p-[clamp(1rem,1.5vw,1.5rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <!-- Icon -->
                    <div class="mb-[clamp(0.5rem,1vw,1rem)] h-[clamp(3rem,4vw,4rem)] bg-gray-50/20 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-purple-400">
                            <polyline points="23 4 23 10 17 10"></polyline>
                            <polyline points="1 20 1 14 7 14"></polyline>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                    </div>
                    <!-- Content -->
                    <div>
                        <h3 class="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-white mb-[clamp(0.5rem,1vw,1rem)]">
                            {{ $t("aboutPage.S2T") }}
                        </h3>
                        <p class="text-[clamp(0.75rem,0.9vw,0.9rem)] text-gray-300">{{ $t("aboutPage.S2D") }}</p>
                    </div>
                </div>
                <!-- Card 3 -->
                <div
                    class="glass-card flex flex-col p-[clamp(1rem,1.5vw,1.5rem)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <!-- Icon -->
                    <div class="mb-[clamp(0.5rem,1vw,1rem)] h-[clamp(3rem,4vw,4rem)] bg-gray-50/20 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-green-400">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                    </div>
                    <!-- Content -->
                    <div>
                        <h3 class="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-white mb-[clamp(0.5rem,1vw,1rem)]">
                            {{ $t("aboutPage.S3T") }}
                        </h3>
                        <p class="text-[clamp(0.75rem,0.9vw,0.9rem)] text-gray-300">{{ $t("aboutPage.S3D") }}</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="flex justify-center mb-[clamp(1rem,3vw,3rem)]">
            <Footer />
        </div>
    </main>
</template>
<script setup>
import SpaceBackground from "../components/SpaceBackground.vue";
import TextWrite from "../components/Texttowrite.vue";
import Footer from "../components/footer.vue";
import data from '../database.json';
const words = data.word;

</script>

<style>
.li:hover {
    cursor: text;
    transform: scale(1);
}

.services-title::after {
    content: "";
    display: block;
    position: absolute;
    width: 2%;
    left: 40%;
    height: 2px;
    background-color: var(--mainColor);
    margin-top: 10px;
    animation: move 3s infinite ease-in-out;
    box-shadow: 0px 0px 14px 3px var(--mainColor), 0 0 0 10px #525658 inset;
}

@keyframes move {
    0% {
        left: 40%;
    }

    50% {
        left: 60%;
    }

    100% {
        left: 40%;
    }
}


.glass-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: transform 0.3s ease;
}

.glass-card::before,
.glass-cardnothover::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 70%);
    transform: rotate(30deg);
    pointer-events: none;
}

.glass-card,
.glass-cardnothover {
    transition: all 1s;
    opacity: 1;
}

.cards {
    animation: enter 3.5s ease;
}

.glass-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.4);
}

@keyframes enter {
    0% {
        opacity: 0;
    }

    60% {
        opacity: 1;
    }

    80% {
        opacity: 0.7;
    }
}

.quote {
    font-style: italic;
    color: gray;
    border-right: 3px solid gray;
    padding-right: 1rem;
    margin: 1.5rem 0;
    direction: rtl;
}

.animated-btn {
    position: relative;
    padding: 8px 10px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50px;
}

.animated-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50px;
    box-sizing: border-box;
    animation: borderAnimation 3s linear infinite;
    opacity: 0.7;
}

.animated-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05));
    z-index: -1;
    border-radius: 50px;
}

.animated-btn:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
}

.animated-btn:hover::before {
    opacity: 1;
}

.animated-btn:active {
    transform: translateY(1px);
}

@keyframes borderAnimation {

    0%,
    100% {
        border-top-color: var(--mainColor);
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }

    25% {
        border-top-color: var(--mainColor);
        border-right-color: var(--mainColor);
        border-bottom-color: transparent;
        border-left-color: transparent;
    }

    50% {
        border-top-color: var(--mainColor);
        border-right-color: var(--mainColor);
        border-bottom-color: var(--mainColor);
        border-left-color: transparent;
    }

    75% {
        border-top-color: var(--mainColor);
        border-right-color: var(--mainColor);
        border-bottom-color: var(--mainColor);
        border-left-color: var(--mainColor);
    }

    85% {
        border-top-color: transparent;
        border-right-color: var(--mainColor);
        border-bottom-color: var(--mainColor);
        border-left-color: var(--mainColor);
    }
}

.animated-btn span {
    position: relative;
    z-index: 1;
}
</style>
