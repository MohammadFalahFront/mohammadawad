<template>
    <div class="min-h-screen flex items-center justify-center bbg">
        <div class="bgglass p-8 rounded-xl w-full max-w-md" ref="card">
            <div class="myphoto rounded-full relative mx-auto mb-4 h-[200px] w-[200px] mt-8 xl:mt-0"></div>
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--mainColor)] mb-2">
                    MOHAMMAD FALAH
                </h1>
                <p class="text-white">{{ $t("login_welcome") }}</p>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-white mb-1">{{ $t("email") }}</label>
                    <input id="email" v-model="email" type="email" required
                        class="w-full px-4 py-3 rounded-lg bg-[#ffffff16] border border-[rgba(255,255,255,0.3)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--mainColor)]"
                        :placeholder="$t('email_placeholder')" />
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-white mb-1">{{ $t("password") }}</label>
                    <input id="password" v-model="password" type="password" required
                        class="w-full px-4 py-3 rounded-lg bg-[#ffffff16] border border-[rgba(255,255,255,0.3)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--mainColor)]"
                        :placeholder="$t('password_placeholder')" />
                </div>

                <button type="submit"
                    class="w-full py-3 px-4 hover:bg-[var(--mainColor)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all duration-500 flex items-center justify-center gap-2">
                    <span>{{ $t("login") }}</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import data from "../../database.json";

const { t } = useI18n();
const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);

function generateToken(length = 32) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}
const handleLogin = () => {
    if (email.value && password.value) {    
        if (
            email.value == data.dashbord.email &&
            password.value == data.dashbord.password
        ) {
            loading.value = true;
            card.value.style.cssText =
                "border: 1px solid var(--blue); box-shadow: var(--blue) 0px 0px 20px 4px; transition: all 0.5s ease;";
            setTimeout(() => {
                card.value.style.cssText =
                    "border: 1px solid white; box-shadow: none; transition: all 0.5s ease;";
            }, 2000);
            setTimeout(() => {  
                loading.value = false;
                router.push({ name: "dashboard" });
            }, 2000);
            localStorage.setItem("dashboard", generateToken(320));
        } else {
            card.value.style.cssText =
                "border: 1px solid var(--red); box-shadow: var(--red) 0px 0px 20px 4px; transition: all 0.5s ease;";
            setTimeout(() => {
                card.value.style.cssText =
                    "border: 1px solid white; box-shadow: none; transition: all 0.5s ease;";
            }, 2000);
        }
    }
};
const card = ref(null);

onMounted(() => {
    if (card.value) {
        card.value.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = card.value.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            card.value.style.transform = `perspective(1000px) rotateY(${x * 5
                }deg) rotateX(${y * -5}deg)`;
            card.value.style.boxShadow = `${x * 15}px ${y * 15
                }px 30px rgba(0, 0, 0, 0.2)`;
        });

        card.value.addEventListener("mouseleave", () => {
            card.value.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
            card.value.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
        });
    }
});
</script>

<style scoped>
.bgglass {
    background-color: #ffffff16;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

button {
    box-shadow: 0 0 15px var(--mainColor), 0 0 30px var(--mainColor);
    animation: pulseGlow 2s infinite alternate;
}

@keyframes pulseGlow {
    0% {
        box-shadow: 0 0 10px var(--mainColor), 0 0 20px var(--mainColor);
    }

    100% {
        box-shadow: 0 0 20px var(--mainColor), 0 0 40px var(--mainColor);
    }
}
</style>
