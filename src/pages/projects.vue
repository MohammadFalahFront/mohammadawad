<template>
    <main class="bbg relative min-h-[100vh] z-[1] overflow-auto">
        <SpaceBackground :star-count="100" :shape-count="0" />
        
        <div class="flex justify-center mb-4">
            <Footer />
        </div>
    </main>
</template>

<script setup>
import SpaceBackground from "../components/SpaceBackground.vue";
import Footer from "../components/footer.vue";
</script>