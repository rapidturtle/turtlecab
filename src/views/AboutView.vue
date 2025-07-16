<script setup lang="ts">
import imageAndy from '@/assets/images/andy.jpg'

const benefits = [
  'I built this site myself',
  'Big fan of Indian, Thai, and Cajun',
  'Music, silence, or audiobook—your choice',
  'Jinx the cockapoo rides on request',
  'Favorite show? <em>Avatar: The Last Airbender</em>',
  'I probably won’t wear the suit from the photo 😉',
]
</script>

<template>
  <div class="overflow-hidden bg-stone-900 py-24 sm:py-32">
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/[0.03] px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
        >
          <img
            class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            :src="imageAndy"
            alt=""
          />
          <div class="w-full flex-auto">
            <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Meet your driver
            </h2>
            <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
              Hey, I’m Andy—founder and driver behind Turtle Cab. I live in Hendersonville and
              started this service to offer a more personal, trustworthy alternative to rideshare
              apps. Whether you’re headed to the airport or just across town, I’m here to make your
              ride comfortable, reliable, and stress-free.
            </p>
            <ul
              role="list"
              class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-stone-200 sm:grid-cols-2"
            >
              <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                <font-awesome-icon
                  :icon="['fadr', 'circle-check']"
                  class="mt-1 text-white"
                  fixed-width
                />
                <span v-html="benefit"></span>
              </li>
            </ul>
            <div class="mt-10 flex">
              <RouterLink
                :to="{ name: 'rides' }"
                class="text-primary-400 hover:text-primary-300 flex items-center gap-x-2 text-sm/6 font-semibold"
              >
                <span>Book a ride</span>
                <font-awesome-icon :icon="['fadr', 'arrow-right']" aria-hidden="true" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[var(--color-lightning-yellow-500)] to-[var(--color-blue-ribbon-500)] opacity-20"
          style="
            clip-path: polygon(
              73.6% 51.7%,
              91.7% 11.8%,
              100% 46.4%,
              97.4% 82.2%,
              92.5% 84.9%,
              75.7% 64%,
              55.3% 47.5%,
              46.5% 49.4%,
              45% 62.9%,
              50.3% 87.2%,
              21.3% 64.1%,
              0.1% 100%,
              5.4% 51.1%,
              21.4% 63.9%,
              58.9% 0.2%,
              73.6% 51.7%
            );
          "
        />
      </div>
    </div>
  </div>
</template>
