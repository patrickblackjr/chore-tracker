import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useChoresStore = defineStore('chores', {
  state: () => {
    return {
      chores: [],
    }
  },
  getters: {
    getChores(state) {
      return state.chores
    },
  },
  actions: {
    async fetchChores() {
      try {
        const data = await api.get('/chores')
        this.chores = data.data
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
})
