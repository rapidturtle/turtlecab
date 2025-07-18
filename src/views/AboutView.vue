<script setup lang="ts">
import BaseTextGradient from '@/components/base/BaseTextGradient.vue'
import imageAndy from '@/assets/images/andy.jpg'
import imageJinx from '@/assets/images/jinx.jpg'

const people = [
  {
    name: 'Andrew Porter',
    role: 'Driver & Founder',
    imageUrl: imageAndy,
  },
  {
    name: 'Jinx',
    role: 'Co-Pilot',
    imageUrl: imageJinx,
  },
]
</script>

<template>
  <div class="bg-stone-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Meet your driver <BaseTextGradient class="no-wrap">(and co-pilot)</BaseTextGradient>
        </h2>
        <p class="mt-6 text-lg text-stone-400 sm:text-xl/8">
          I’m Andy—founder and driver of Turtle Cab. I started this service to offer a friendly,
          reliable alternative to rideshare apps. Whether you’re headed to the airport, across town,
          or out for the day, I’ll make sure you get there safely and comfortably. And if you’re
          lucky, Jinx might join the ride too.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="rounded-2xl bg-stone-800 px-8 py-10">
          <img
            class="mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-white/10 md:size-56"
            :src="person.imageUrl"
            alt=""
          />
          <h3 class="mt-6 text-base/7 font-semibold tracking-tight text-white">
            {{ person.name }}
          </h3>
          <p class="text-sm/6 text-stone-400">{{ person.role }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
