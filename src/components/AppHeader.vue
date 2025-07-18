<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import IconTurtleCab from '@/components/icons/IconTurtleCab.vue'

const navigation = [
  { name: 'Pricing', href: { name: 'pricing' } },
  { name: 'About', href: { name: 'about' } },
  { name: 'Contact', href: { name: 'contact' } },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-50 -mb-20 backdrop-blur-xl">
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
          class="text-sm/6 font-semibold text-white text-shadow-xs/50"
          active-class="border-b-2 border-primary-500"
          >{{ item.name }}</RouterLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink
          :to="{ name: 'rides' }"
          class="bg-primary-500 hover:bg-primary-400 focus-visible:outline-primary-500 inline-flex items-center gap-x-2 rounded-full px-2.5 py-1 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >Book a ride
          <font-awesome-icon :icon="['fadr', 'car-side']" class="-mr-0.5" aria-hidden="true"
        /></RouterLink>
      </div>
    </nav>
    <TransitionRoot :show="mobileMenuOpen" as="template">
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 z-40 bg-black/50" />
        </TransitionChild>

        <div class="fixed inset-0 z-50" />
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
          >
            <div class="flex items-center justify-between">
              <RouterLink
                :to="{ name: 'home' }"
                class="-m-1.5 p-1.5"
                @click="mobileMenuOpen = false"
              >
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
                    active-class="bg-stone-800"
                    @click="mobileMenuOpen = false"
                    >{{ item.name }}</RouterLink
                  >
                </div>
                <div class="py-6">
                  <RouterLink
                    :to="{ name: 'rides' }"
                    class="bg-primary-500 -mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-stone-800"
                    @click="mobileMenuOpen = false"
                    >Book a ride
                    <font-awesome-icon
                      :icon="['fadr', 'car-side']"
                      class="ml-1"
                      aria-hidden="true"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
