<script setup lang="ts">
import ImageSantaFe from '@/assets/images/2023-hyundai-santa-fe-hybrid.jpg'
import BaseTextGradient from '@/components/base/BaseTextGradient.vue'

const features = [
  {
    name: 'Private rides only',
    description: 'You won’t be sharing with strangers—ever.',
    icon: ['fadr', 'user-secret'],
  },
  {
    name: 'Advanced booking required',
    description: 'Book at least 2 days in advance for a guaranteed ride.',
    icon: ['fadr', 'calendar-clock'],
  },
  {
    name: 'Contactless payments accepted',
    description: 'Venmo, Apple Pay, Google Pay, and tap-to-pay cards—no cash needed.',
    icon: ['fadr', 'credit-card'],
  },
  {
    name: 'Optional furry companion',
    description: 'Request a ride with Jinx, my friendly cockapoo—or bring your own.',
    icon: ['fadr', 'dog'],
  },
  {
    name: 'Based in Hendersonville',
    description: 'Serving Middle Tennessee, including BNA airport.',
    icon: ['fadr', 'map-location-dot'],
  },
  {
    name: 'Smooth, quiet ride',
    description: 'Late-model black SUV, well-maintained and comfortable.',
    icon: ['fadr', 'car-side'],
  },
]
</script>

<template>
  <section class="bg-stone-900">
    <div class="relative isolate pt-14">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[var(--color-spring-green-700)] to-[var(--color-blue-ribbon-700)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="py-24 sm:py-32 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Private rides.
              <BaseTextGradient>Personal service.</BaseTextGradient>
            </h1>
            <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
              Welcome to <strong class="text-white">Turtle Cab</strong>—a small, private car service
              based in Hendersonville, TN. Whether you’re headed to the airport, a doctor’s
              appointment, or just need a relaxed ride across town, I’ll get you there on time and
              hassle-free.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <RouterLink
                :to="{ name: 'rides' }"
                class="bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-500 inline-flex items-center gap-x-2 rounded-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                >Book a ride <font-awesome-icon :icon="['fadr', 'car-side']" class="-mr-0.5"
              /></RouterLink>
            </div>
          </div>
          <img
            :src="ImageSantaFe"
            alt="App screenshot"
            width="1920"
            height="614"
            class="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
          />
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[var(--color-spring-green-700)] to-[var(--color-lightning-yellow-700)] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </section>

  <section class="bg-stone-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          Why ride with Turtle Cab?
        </h2>
        <p class="mt-6 text-lg/8 text-stone-400">
          Personal service, clear pricing, and no surprises.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="text-base/7 font-semibold text-white">
              <div
                class="bg-primary-500 mb-6 flex size-10 items-center justify-center rounded-full"
              >
                <font-awesome-icon :icon="feature.icon" class="text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base/7 text-stone-400">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section class="bg-primary-700">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Let’s make your next ride simple.
        </h2>
        <p class="text-primary-300 mx-auto mt-6 max-w-xl text-lg/8 text-pretty">
          No apps. No surge pricing. Just a clean car, a friendly driver, and a smooth experience
          from start to finish.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <RouterLink
            :to="{ name: 'rides' }"
            class="text-primary-600 hover:bg-primary-50 inline-flex items-center gap-x-2 rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a ride
            <font-awesome-icon :icon="['fadr', 'car-side']" class="-mr-0.5" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
