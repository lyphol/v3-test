import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    font: 12,
  }),
  getters: {
    fontSize: (state) => `${state.font}px`,
  },
  actions: {
    fontSizeAdd() {
      this.fontSize++
    },
    setFontSize(payload) {
      this.font = payload
    },
  },
})
