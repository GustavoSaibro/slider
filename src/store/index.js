import { createStore } from 'vuex'
// import { getSrc } from '@/utils/util.js'


const store = createStore({
  state: {
    content: [
      {
        headline: 'Teste',
        paragraph: 'this is a paragraph',
        img: 'img.jpg'
      },
      {
        headline: 'Teste2',
        paragraph: 'this is a paragraph',
        img: 'img2.jpg'
      },
      {
        headline: 'Teste3',
        paragraph: 'this is a paragraph',
        img: 'img3.jpg'
      },
      {
        headline: 'Teste4',
        paragraph: 'this is a paragraph',
        img: 'img4.jpg'
      },
      {
        headline: 'Teste5',
        paragraph: 'this is a paragraph',
        img: 'img5.jpg'
      },

    ]
  },
  getters: {
    getContent (state) {
      return state.content
    }
  },
  mutations: {},
  actions: {}
})

export default store