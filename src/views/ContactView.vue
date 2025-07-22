<script setup lang="ts">
const contactOptions = [
  {
    icon: ['fadr', 'comment'],
    title: 'Text me',
    description:
      'Fastest way to reach me—especially while I’m on the road. I can reply quickly through CarPlay.',
    action: 'Send a text',
    link: 'sms:5037738785?body=Hi%20there!%20I%20have%20questions%20about%20booking%20a%20ride.',
  },
  {
    icon: ['fadr', 'envelope'],
    title: 'Send an email',
    description:
      'Great for ride requests or questions. I usually check and respond within a few hours.',
    action: 'Send an email',
    link: 'mailto:andy@turtle.cab?subject=Ride%20Inquiry&body=Hi%20Andy,%0A%0AI%20have%20a%20question%20about%20booking%20a%20ride.%0A%0AThanks!',
  },
  {
    icon: ['fab', 'facebook-messenger'],
    title: 'Message me on Messenger',
    description:
      'I check messages occasionally—feel free to reach out, but for a quick reply, try text or email.',
    action: 'Open messenger',
    link: 'https://m.me/TurtleCab',
  },
  {
    icon: ['fab', 'facebook'],
    title: 'Visit the Facebook page',
    description:
      'See updates or drop a comment. It’s not the best way to reach me, but I’ll check if something comes through.',
    action: 'Go to Facebook',
    link: 'https://facebook.com/TurtleCab',
  },
]
</script>

<template>
  <section class="relative isolate overflow-hidden bg-stone-900 px-6 py-24 sm:py-32 lg:px-8">
    <img
      src="https://images.unsplash.com/photo-1693871619509-d439714233dc?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend=1c1917&sat=-100&exp=15&blend-mode=multiply"
      alt="Young man calling on his mobile phone"
      class="absolute inset-0 -z-10 size-full object-cover object-right md:object-[50%_30%]"
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
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
        Get in touch
      </h2>
      <p class="mt-8 text-lg font-medium text-pretty text-stone-400 sm:text-xl/8">
        Have a question before you book? Want to check availability or request something specific?
        I’d love to hear from you.
      </p>
    </div>
    <div class="mx-auto mt-20 max-w-lg space-y-16">
      <div v-for="option in contactOptions" :key="option.title" class="flex gap-x-6">
        <div class="bg-primary-500 flex size-10 shrink-0 items-center justify-center rounded-full">
          <font-awesome-icon :icon="option.icon" class="text-white" />
        </div>
        <div>
          <h3 class="text-base/7 font-semibold text-white">{{ option.title }}</h3>
          <p class="mt-2 text-base/7 text-stone-400">
            {{ option.description }}
          </p>
          <p class="mt-4 text-sm/6 font-semibold">
            <a
              :href="option.link"
              class="text-primary-400 hover:text-primary-300"
              target="_blank"
              rel="noopener noreferrer"
              >{{ option.action }} <font-awesome-icon :icon="['fadr', 'arrow-right']" class="ml-1"
            /></a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
