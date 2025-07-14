<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import IconTurtleCab from '@/components/icons/IconTurtleCab.vue'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Log in', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <section class="bg-stone-900">
    <header class="absolute inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl">
        <div class="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
          <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Turtle Cab</span>
              <IconTurtleCab class="h-8 w-auto" dark-mode />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-stone-700 lg:hidden"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <font-awesome-icon :icon="['fadr', 'bars']" aria-hidden="true" />
            </button>
            <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-sm/6 font-semibold text-stone-900"
                >{{ item.name }}</a
              >
            </div>
          </nav>
        </div>
      </div>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-stone-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <IconTurtleCab class="h-8 w-auto" dark-mode />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-stone-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <font-awesome-icon :icon="['fadr', 'xmark']" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-stone-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-900 hover:bg-stone-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-stone-900 hover:bg-stone-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-stone-900 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div class="hidden sm:mb-10 sm:flex">
                <div
                  class="relative rounded-full px-3 py-1 text-sm/6 text-stone-400 ring-1 ring-white/10 hover:ring-white/20"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt.
                  <a href="#" class="text-lightning-yellow-500 font-semibold whitespace-nowrap"
                    ><span class="absolute inset-0" aria-hidden="true" />Read more
                    <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </div>
              <h1 class="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                Data to enrich your business
              </h1>
              <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  class="bg-lightning-yellow-500 hover:bg-lightning-yellow-600 focus-visible:outline-lightning-yellow-500 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                  >Get started</a
                >
                <a href="#" class="text-sm/6 font-semibold text-stone-400"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-stone-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
          src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
