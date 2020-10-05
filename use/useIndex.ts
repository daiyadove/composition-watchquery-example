import { computed, ComputedRef, defineComponent, onMounted, Ref, watch } from '@vue/composition-api'
import useRouter from '~/use/useRouter'

const useIndex = () => {
  const { route, router } = useRouter()
  const item_id = computed(() => route.value.query.item_id)

  return {
    item_id,
    route,
    router,
  }
}

export default useIndex
