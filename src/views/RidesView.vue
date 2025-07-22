<script setup lang="ts">
import { onMounted } from 'vue'

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

const loadTallyEmbeds = (): void => {
  const w = 'https://tally.so/widgets/embed.js'

  const initializeEmbeds = (): void => {
    if (typeof window.Tally !== 'undefined') {
      window.Tally.loadEmbeds()
    } else {
      document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
        const element = iframe as HTMLIFrameElement
        const tallySrc = element.dataset.tallySrc
        if (tallySrc) {
          element.src = tallySrc
        }
      })
    }
  }

  if (typeof window.Tally !== 'undefined') {
    initializeEmbeds()
  } else if (!document.querySelector(`script[src="${w}"]`)) {
    const script = document.createElement('script')
    script.src = w
    script.onload = initializeEmbeds
    script.onerror = initializeEmbeds
    document.body.appendChild(script)
  }
}

onMounted(() => {
  loadTallyEmbeds()
})
</script>

<template>
  <section class="bg-stone-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Ready to ride?</h1>
      <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
        Use the form below to request your ride. I'll follow up personally to confirm details—no
        payments due until after your ride.
      </p>
    </div>
  </section>
  <section class="bg-stone-900 pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <iframe
        data-tally-src="https://tally.so/embed/w29Jj9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1278"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Turtle Cab"
      ></iframe>
    </div>
  </section>
</template>
