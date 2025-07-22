<script setup lang="ts">
import BaseTextGradient from '@/components/base/BaseTextGradient.vue'
import imageAndy from '@/assets/images/andy.avif'
import imageJinx from '@/assets/images/jinx-carseat.avif'
import imageInterior from '@/assets/images/23Hyundai-SantaFe-InteriorFrontToBack-5x3-1.avif'

const people = [
  {
    name: 'Andrew Porter',
    role: 'Driver & Founder',
    description: 'Tech-savvy, friendly, and focused—online and on the road.',
    imageUrl: imageAndy,
  },
  {
    name: 'Jinx',
    role: 'Co-Pilot',
    description: 'Polite passenger, part-time deer impersonator, full-time good boy.',
    imageUrl: imageJinx,
  },
  {
    name: 'Your Ride',
    role: '2023 Hyundai Santa Fe',
    description: 'Clean, comfortable, and just the right size for up to four passengers.',
    imageUrl: imageInterior,
  },
]
</script>

<template>
  <div class="bg-stone-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Meet your driver <BaseTextGradient class="no-wrap">(and crew)</BaseTextGradient>
        </h1>
        <p class="mt-6 text-lg text-stone-400 sm:text-xl/8">
          Turtle Cab is more than a ride. Get to know your driver, your co-pilot, and the
          comfortable SUV that’ll get you there.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="rounded-2xl bg-stone-800 px-8 py-10">
          <img
            class="mx-auto size-48 rounded-full object-cover outline-1 -outline-offset-1 outline-white/10 md:size-56"
            :src="person.imageUrl"
            alt=""
          />
          <h3 class="mt-6 text-base/7 font-semibold tracking-tight text-white">
            {{ person.name }}
          </h3>
          <p class="text-sm/6 text-stone-400">{{ person.role }}</p>
          <p v-if="person.description" class="mt-6 text-sm/6 text-stone-400">
            {{ person.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
