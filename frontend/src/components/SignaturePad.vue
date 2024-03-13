<template>
    <div class="signature-pad">
        <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"
            @mouseleave="stopDrawing" @touchstart="startDrawing" @touchmove="draw" @touchend="stopDrawing"></canvas>
        <br>
        <fluent-button appearance="accent" @click="clearCanvas">Löschen</fluent-button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);
const emits = defineEmits(['updateSignature']);
let isDrawing = false;

const adjustCanvasSize = () => {
    if (!canvas.value) return;

    const screenWidth = window.innerWidth;
    const canvasWidth = Math.min(screenWidth * 0.9, 900); // Nutze bis zu 90% der Bildschirmbreite, maximal jedoch 900px
    const aspectRatio = 4 / 1;
    const canvasHeight = canvasWidth / aspectRatio;

    canvas.value.width = canvasWidth;
    canvas.value.height = canvasHeight;

    if (!context.value) {
        context.value = canvas.value.getContext('2d');
    }

    if (context.value) {
        context.value.strokeStyle = "#000000";
        context.value.lineWidth = 2;
    }
};

onMounted(() => {
    adjustCanvasSize();
    window.addEventListener('resize', adjustCanvasSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', adjustCanvasSize);
});

function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    // Überprüfe, ob das TouchEvent-Objekt existiert und ob das aktuelle Ereignis ein TouchEvent ist
    return typeof TouchEvent !== 'undefined' && event instanceof TouchEvent;
}

function getEventPosition(event: MouseEvent | TouchEvent) {
    if (!canvas.value) return { offsetX: 0, offsetY: 0 };

    const rect = canvas.value.getBoundingClientRect();
    let x = 0;
    let y = 0;

    if (isTouchEvent(event)) {
        // Es ist sicher, auf event.touches zuzugreifen, da wir wissen, dass es ein TouchEvent ist
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
    } else {
        // Behandle es als MouseEvent
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }

    return { offsetX: x, offsetY: y };
}

function startDrawing(event: MouseEvent | TouchEvent) {
    isDrawing = true;
    const { offsetX, offsetY } = getEventPosition(event);
    if (!context.value) return;
    context.value.beginPath();
    context.value.moveTo(offsetX, offsetY);
}

function draw(event: MouseEvent | TouchEvent) {
    if (!isDrawing || !context.value) return;
    const { offsetX, offsetY } = getEventPosition(event);
    context.value.lineTo(offsetX, offsetY);
    context.value.stroke();
}

function stopDrawing() {
    isDrawing = false;
    if (!canvas.value) return;
    const signatureImage = canvas.value.toDataURL('image/png');
    emits('updateSignature', signatureImage);
}

function clearCanvas() {
    if (!context.value || !canvas.value) return;
    context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
}
</script>

<style scoped>
.signature-pad {
    width: 100%;
    /* Nutzt die volle Breite des Elternelements */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .1rem;
}

.signature-pad canvas {
    border: 1px solid #000;
    touch-action: none;
    /* Prevent scrolling on touch devices */
}
</style>