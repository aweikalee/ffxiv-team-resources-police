import { useTimeout } from '@vueuse/core'

/**
 * 所有事件由子页面发起，宿主页面只允许被动回复
 *
 * 事件名构成：[PageName]@EventName[?:replay]
 * 含有 :replay 的是宿主页面发起的回复
 */

export type IMessageEvent = {
  'reference-row@loaded': {}
  'reference-row@loaded:replay': {
    phases: ITimelinePhase[]
    form?: ITimelineReference
  }
  'reference-row@save': ITimelineReference
  'reference-row@save:replay': {}
  'reference-row@close': {}
}

const MESSAGE_SYMBOL = '__MESSAGE_SYMBOL__'

const eventMap = new Map<string, Function[]>()
addEventListener('message', (e: MessageEvent) => {
  const data = e.data
  if (!data || !data[MESSAGE_SYMBOL]) return

  const fns = eventMap.get(data.eventName)
  fns?.forEach((fn) => fn(data.data, e))
})

export function useMessage<K extends keyof IMessageEvent>(
  eventName: K,
  fn: (data: IMessageEvent[K], e: MessageEvent) => void
) {
  onMounted(() => {
    const arr = eventMap.get(eventName) ?? []
    eventMap.set(eventName, arr)

    arr.push(fn)
  })

  onUnmounted(() => {
    const arr = eventMap.get(eventName) ?? []
    eventMap.set(
      eventName,
      arr.filter((item) => item !== fn)
    )
  })
}

export function postMessage<K extends keyof IMessageEvent>(
  windowProxy: Window | WindowProxy | MessageEventSource | null,
  eventName: K,
  data: IMessageEvent[K]
) {
  if (!windowProxy) return console.error('windowProxy is null')
  const _data = createMessageData(eventName, data)
  windowProxy?.postMessage?.(_data)
}

export function createMessageData<K extends keyof IMessageEvent>(
  eventName: K,
  data: IMessageEvent[K]
) {
  return {
    [MESSAGE_SYMBOL]: true,
    eventName,
    data,
  }
}

export function useMessageLoading(
  options: {
    timeout?: number
    onTimeout?: Function
    immediate?: boolean
  } = {}
) {
  const { timeout = 2000, onTimeout, immediate = true } = options

  const { ready, stop, start } = useTimeout(timeout, {
    controls: true,
  })

  const loading = computed(() => !ready.value)
  let isWaiting = false

  watch(loading, (loading) => {
    if (!loading && isWaiting) {
      onTimeout?.()
    }
  })

  if (!immediate) {
    stop()
  }

  return reactive({
    loading,
    start() {
      isWaiting = true
      start()
    },
    stop() {
      isWaiting = false
      stop()
    },
  })
}

export function openWindow(
  url: string,
  features: {
    width?: number
    height?: number
    left?: number
    top?: number
  } = {}
) {
  const { width = 600, height = 600 } = features

  const _features = {
    ...features,
    width,
    height,
  }

  const featuresString = Object.entries(_features)
    .map(([key, value]) => `${key}=${value}`)
    .join(',')

  return window.open(url, 'childWindow', featuresString)
}

export function useOpenWindow(...args: Parameters<typeof openWindow>) {
  const windowProxy = openWindow(...args)
  onUnmounted(() => windowProxy?.close())
  return windowProxy
}
