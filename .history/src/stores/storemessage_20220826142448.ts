import { defineStore } from 'pinia'



export const useMessageStore = defineStore({
  id: 'messages',
  state: () => {
    return {
      message: [
        {
          fromId: 1,
          name: 'Lê Thiện Viễn',
        },
        {
          fromId: 2,
          name: 'Alexandre',
        },
        {
          fromId:  3,
          name: 'Quinn Farbey Roger',
        },
        {
          id: 4,
          name: 'Elena Nguyen',
        },
        {
          id: 5,
          name: 'Fatima',
        },
        {
          id: 6,
          name: 'Mr Taylor',
        },
      ]
    }
  },
  getters: {
  },
  actions: {

  }
})
