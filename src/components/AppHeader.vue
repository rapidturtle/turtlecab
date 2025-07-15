<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import IconTurtleCab from '@/components/icons/IconTurtleCab.vue'

const navigation = [
  { name: 'Pricing', href: { name: 'pricing' } },
  { name: 'About', href: { name: 'about' } },
  { name: 'Contact', href: { name: 'contact' } },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Turtle Cab</span>
          <IconTurtleCab class="h-8 w-auto" dark-mode />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-400"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon :icon="['fadr', 'bars']" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm/6 font-semibold text-white"
          active-class="border-b-2 border-primary-500"
          >{{ item.name }}</RouterLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink :to="{ name: 'rides' }" class="text-sm/6 font-semibold text-white"
          >Book a ride
          <span aria-hidden="true"><font-awesome-icon :icon="['fadr', 'arrow-right']" /></span
        ></RouterLink>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink :to="{ name: 'home' }" class="-m-1.5 p-1.5">
            <span class="sr-only">Turtle Cab</span>
            <IconTurtleCab class="h-8 w-auto" dark-mode />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-stone-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <font-awesome-icon :icon="['fadr', 'xmark']" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-stone-500/25">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-stone-800"
                >{{ item.name }}</RouterLink
              >
            </div>
            <div class="py-6">
              <RouterLink
                :to="{ name: 'rides' }"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-stone-800"
                >Book a ride</RouterLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
