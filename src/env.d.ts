/// <reference types="vite/client" />
/// <reference types="naive-ui" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  addOverlayListener: Function
  removeOverlayListener: Function
  startOverlayEvents: Function

  $message: MessageApiInjection
  $dialog: DialogApiInjection
}
