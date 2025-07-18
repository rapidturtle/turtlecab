<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigation = [
  {
    name: 'text',
    href: 'sms:5037738785?body=Hi,%20Andy!%20I%E2%80%99m%20interested%20in%20booking%20a%20ride.',
    icon: ['fas', 'comment'],
  },
  {
    name: 'email',
    href: 'mailto:andy@turtle.cab?subject=Hi,%20Andy!%20I%E2%80%99m%20interested%20in%20booking%20a%20ride.',
    icon: ['fas', 'envelope'],
  },
  { name: 'Facebook', href: 'https://facebook.com/turtlecab', icon: ['fab', 'facebook'] },
  { name: 'Messenger', href: 'https://m.me/turtlecab', icon: ['fab', 'facebook-messenger'] },
]
</script>

<template>
  <footer class="bg-stone-900">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center gap-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-stone-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ item.name }}</span>
          <font-awesome-icon :icon="item.icon" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-center text-sm/6 text-stone-400 md:order-1 md:mt-0">
        &copy; {{ currentYear }} Turtle Cab. All rights reserved. Designed by
        <a
          href="https://rapidturtle.com"
          class="text-stone-300 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fak', 'rapidturtle']" class="mr-1" aria-hidden="true" />Rapid
          Turtle</a
        >.
      </p>
    </div>
  </footer>
</template>
