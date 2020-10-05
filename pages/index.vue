<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">Reactive Router query: {{ item_id }}</h2>
      <div class="links">
        <a class="button--grey" @click="handleClick">
          Change Router Query
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watch } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'
import useRouter from '~/use/useRouter'
import { get } from '@/use/orderRepo'
export default defineComponent({
  components: {
    Logo
  },
  setup() {
    const { route, router } = useRouter()
    const item_id = computed(() => route.value.query.item_id)
    onMounted(() => {
      get(item_id)
    })
    watch(route, () => {
      get(item_id)
    })
    const handleClick = (e: Event) => {
      e.preventDefault()
      router.push({ query: { item_id: [1, 3] as any } })
    }
    return {
      item_id,
      handleClick
    }
  }
})
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495E;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
