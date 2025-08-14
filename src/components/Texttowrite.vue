<template>
    <p class="backgroundAni font-bold xl:text-start" id="text">{{ currentText }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    words: {
        type: Array,
        required: true,
    }
})

const words = props.words;
const currentIndex = ref(0);
const currentText = ref('');
const isDeleting = ref(false);


const typeSpeed = 150;
const deleteSpeed = 50;
const pauseDuration = 1000;

function startTyping() {
    const currentWord = words[currentIndex.value];

    if (!isDeleting.value) {
        currentText.value = currentWord.slice(0, currentText.value.length + 1);

        if (currentText.value === currentWord) {
            setTimeout(() => {
                isDeleting.value = true;
                startTyping();
            }, pauseDuration);
            return;
        }
    } else {
        currentText.value = currentText.value.slice(0, -1);

        if (currentText.value === '') {
            isDeleting.value = false;
            currentIndex.value = (currentIndex.value + 1) % words.length;
            setTimeout(startTyping, typeSpeed);
            return;
        }
    }

    setTimeout(startTyping, isDeleting.value ? deleteSpeed : typeSpeed);
}

onMounted(startTyping);

</script>
<style>
#text {
    font-size: 28px !important;
}
</style>