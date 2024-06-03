import { computed, reactive, ref } from "vue";

const loaderSet = reactive(new Set<string>());
const loading = computed(() => loaderSet.size > 0);

export function useAppLoader() {
  const _uuid: string = uuid();

  function startLoading() {
    loaderSet.add(_uuid);
  }
  function stopLoading() {
    loaderSet.delete(_uuid);
  }

  return { loading, startLoading, stopLoading };
}

export function uuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
