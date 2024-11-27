<script setup lang="ts">
import { useRouter } from 'vue-router'
// Routing
const router = useRouter()
const go = () => {
  router.push('/users/home')
}

const nextCounter = () => {
  router.push({ name: 'counter', params: { id: String(Number(router.currentRoute.value.params.id) + 1) } })
}

// Internationalization
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
        class="underline"
      >
        Vitesse
      </a>
    </p>
    <p class="max-w-md mx-auto mt-4">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="nextCounter"
      >
        {{ t('button.next') }}
      </button>
    </div>

    <div class="py-4" />

    <div class="mx-auto mt-10 prose">
      <h1>Typography Demo</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit consequuntur optio? Earum doloremque qui adipisci magnam aliquam dolorem iste delectus! Possimus, nam beatae quisquam provident reprehenderit praesentium ipsa ullam!
      </p>
      <code>print('Hello World')</code>
    </div>
  </div>
</template>
