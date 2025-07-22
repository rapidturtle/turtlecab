<script setup lang="ts">
import UICard from '@/components/ui/UICard.vue'
import imageSantaFe from '@/assets/images/hyundai-santa-fe-2023-exterior-oem-01.webp'

const flatRateDestinations = [
  { name: 'BNA Airport', price: 50, icon: ['fadr', 'plane'] },
  { name: 'Downtown Nashville', price: 45, icon: ['fadr', 'city'] },
]

const bookingPolicies = [
  {
    name: 'Book at least <span class="font-semibold text-white">2 days</span> in advance',
    icon: ['fadr', 'calendar-day'],
  },
  { name: 'No same-day or on-demand rides*', icon: ['fadr', 'ban'] },
  {
    name: 'Cancel <span class="font-semibold text-white">24 hours</span> in advance; <span class="text-white font-semibold">$10 fee</span> otherwise',
    icon: ['fadr', 'triangle-exclamation'],
  },
]

const includedFeatures = [
  { name: 'Up to 4 passengers', icon: ['fadr', 'people-group'] },
  { name: 'Pet-friendly', icon: ['fadr', 'dog'] },
]

const paymentMethods = [
  { name: 'Apple Pay' },
  { name: 'Google Pay' },
  { name: 'Tap to Pay credit cards' },
]
</script>

<template>
  <section class="relative isolate overflow-hidden bg-stone-900 py-24 sm:py-32">
    <img
      src="https://images.unsplash.com/photo-1726056652582-7c9d202d4018?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend=1c1917&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    >
      <div
        class="aspect-1097/845 w-274.25 bg-linear-to-tr from-[var(--color-radical-red-500)] to-[var(--color-blue-ribbon-500)] opacity-20"
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
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    >
      <div
        class="aspect-1097/845 w-274.25 bg-linear-to-tr from-[var(--color-radical-red-500)] to-[var(--color-lightning-yellow-500)] opacity-20"
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Simple, fair pricing
        </h2>
        <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
          Turtle Cab offers reliable, private rides with flat rates to popular destinations and
          clear per-mile pricing for everything else.
          <span class="text-nowrap">No surge pricing. No surprises.</span>
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <UICard title="Flat-rate destinations" :icon="['fadr', 'dollar-sign']">
          <ul role="list" class="mt-4 space-y-4">
            <li
              v-for="destination in flatRateDestinations"
              :key="destination.name"
              class="flex gap-x-2"
            >
              <font-awesome-icon
                :icon="destination.icon"
                class="text-primary-400 mt-2.5 flex-none"
                fixed-width
              />
              <div class="flex w-full items-baseline justify-between">
                <span>{{ destination.name }}</span>
                <span class="text-2xl font-semibold text-white">${{ destination.price }}</span>
              </div>
            </li>
          </ul>
        </UICard>
        <UICard title="Everywhere else" :icon="['fadr', 'map-location-dot']">
          <div class="mt-4 flex items-baseline gap-x-2">
            <span class="text-2xl font-semibold text-white">$2</span>
            <span>/mile</span>
          </div>
          <p class="mt-2 italic">You’ll get a quote when you book.</p>
        </UICard>
        <UICard class="hidden sm:order-last sm:block lg:order-0">
          <img
            :src="imageSantaFe"
            alt="2023 Hyundai Santa Fe"
            class="absolute inset-0 size-full object-cover object-center"
          />
        </UICard>
        <UICard title="Booking & policies" :icon="['fadr', 'scroll']">
          <ul role="list" class="mt-4 space-y-4">
            <li v-for="policy in bookingPolicies" :key="policy.name" class="flex gap-x-2">
              <font-awesome-icon
                :icon="policy.icon"
                class="text-primary-400 mt-1 flex-none"
                fixed-width
              />
              <span v-html="policy.name"></span>
            </li>
          </ul>
        </UICard>
        <UICard title="What’s included" :icon="['fadr', 'list-check']">
          <ul role="list" class="mt-4 space-y-4">
            <li v-for="feature in includedFeatures" :key="feature.name" class="flex gap-x-2">
              <font-awesome-icon
                :icon="feature.icon"
                class="text-primary-400 no-flex mt-1"
                fixed-width
              />
              <span>{{ feature.name }}</span>
            </li>
          </ul>
        </UICard>
        <UICard title="How to pay" :icon="['fadr', 'circle-dollar-to-slot']">
          <ul role="list" class="mt-4 space-y-2">
            <li class="flex gap-x-2">
              <a
                href="https://venmo.com/TurtleCab"
                class="group"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon
                  :icon="['fadr', 'circle-check']"
                  class="text-spring-green-400 no-flex mt-1"
                  fixed-width
                />
                <span class="text-stone-400 group-hover:text-white">
                  Venmo
                  <span class="text-sm text-stone-500">(preferred)</span>
                </span></a
              >
            </li>

            <li
              v-for="paymentMethod in paymentMethods"
              :key="paymentMethod.name"
              class="flex gap-x-2"
            >
              <font-awesome-icon
                :icon="['fadr', 'circle-arrow-right']"
                class="text-primary-400 no-flex mt-1"
                fixed-width
              />
              <span>{{ paymentMethod.name }}</span>
            </li>
          </ul>
        </UICard>
      </div>
    </div>
  </section>
</template>
