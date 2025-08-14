<template>
  <main class="bbg relative min-h-screen">
    <!-- main body -->
    <!-- header -->
    <div class="my-5 px-12 py-4">
      <h1
        class="text-[clamp(1rem,3vw,3rem)] text-[var(--mainColor)] font-bold xl:text-start"
      >
        {{ $t("Askills") }}
      </h1>
      <TextWrite :words="words" />
    </div>

    <!-- skills cards -->
    <div class="flex justify-center items-center mx-auto">
      <div
        class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-12 cards"
      >
        <!-- Skill cards using v-for -->
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="glass-card w-full flex flex-col p-6 text-white skill-card"
          v-tooltip="`${skill.name} - ${skill.mastery}% mastery`"
        >
          <!-- card head -->
          <div class="flex justify-start items-center gap-6">
            <!-- icon -->
            <img
              v-if="skill.iconImg"
              :src="icons[skill.iconImg]"
              height="40px"
              width="40px"
              :alt="skill.name"
            />

            <!-- title -->
            <h1 class="font-bold">{{ skill.name }}</h1>
          </div>

          <!-- body -->
          <div class="my-3">
            <!-- content -->
            <p class="text-xs h-[45%]">
              {{ $t(`skillsPage.${skill.translationKey}`) }}
            </p>

            <!-- level line -->
            <div class="mb-4 mt-6">
              <div class="flex justify-between items-center">
                <span class="text-white/80 block mb-1 text-xs">{{
                  $t("skillsPage.Mastery_level")
                }}</span>
                <span class="text-white/70 mt-1 block text-xs"
                  >{{ skill.mastery }}%</span
                >
              </div>
              <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  class="level-bar"
                  :style="{ width: skill.mastery + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div>
            <div class="flex gap-2 absolute bottom-2 justify-evenly w-[80%]">
              <span
                v-for="(tag, tagIndex) in skill.tags"
                :key="tagIndex"
                class="px-1 sm:px-3 bg-white/10 rounded-full text-[.6rem] lg:text-xs text-white"
                v-tooltip="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Footer from '../components/footer.vue';
import TextWrite from '../components/Texttowrite.vue';
import skill from '../database.json';
const iconsModules = import.meta.glob('../assets/icons/*.{png,jpg,jpeg,svg}', { eager: true });
const words = ['Vue.js', 'HTML & CSS', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'PrimeVue'];
const icons = {};

for (const path in iconsModules) {
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, '');
  icons[fileName] = iconsModules[path].default;
}

const skills = skill.skills
</script>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.skill-card {
  position: relative;
  transition: all 0.3s ease;
  opacity: 1;
}

.skill-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: rotate(30deg);
  pointer-events: none;
}

.cards {
  animation: enter 3.5s ease;
}

.skill-card:hover {
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

.level-bar {
  background: linear-gradient(135deg, #1b1f3b, var(--mainColor), #fff);
  border-radius: 50px;
  animation: levelup 1.5s ease-in-out;
  height: 100%;
}

@keyframes levelup {
  0% {
    width: 0;
  }

  60% {
    width: 100%;
  }
}
</style>
