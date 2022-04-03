import { createStore } from 'vuex'
// import { getSrc } from '@/utils/util.js'


const store = createStore({
  state: {
    content: [
      {
        headline: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas placerat sem vel ultricies. Proin finibus est vel lacus hendrerit, sit amet fringilla nulla gravida. Sed vel efficitur nibh. Aenean ut justo porttitor, laoreet lacus et, viverra ipsum. Cras ac bibendum lectus. Proin eget malesuada risus, sit amet accumsan lorem. Nam volutpat libero lectus, sit amet vehicula lorem laoreet nec. Curabitur congue porttitor lorem, at ullamcorper ipsum rutrum eu. Sed finibus justo nec condimentum lacinia. Suspendisse id leo eget justo mollis blandit. Cras vehicula tortor vitae vehicula porta",
        img: 'img.jpg'
      },
      {
        headline: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas placerat sem vel ultricies. Proin finibus est vel lacus hendrerit, sit amet fringilla nulla gravida. Sed vel efficitur nibh. Aenean ut justo porttitor, laoreet lacus et, viverra ipsum. Cras ac bibendum lectus. Proin eget malesuada risus, sit amet accumsan lorem. Nam volutpat libero lectus, sit amet vehicula lorem laoreet nec. Curabitur congue porttitor lorem, at ullamcorper ipsum rutrum eu. Sed finibus justo nec condimentum lacinia. Suspendisse id leo eget justo mollis blandit. Cras vehicula tortor vitae vehicula porta',
        img: 'img2.jpg'
      },
      {
        headline: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas placerat sem vel ultricies. Proin finibus est vel lacus hendrerit, sit amet fringilla nulla gravida. Sed vel efficitur nibh. Aenean ut justo porttitor, laoreet lacus et, viverra ipsum. Cras ac bibendum lectus. Proin eget malesuada risus, sit amet accumsan lorem. Nam volutpat libero lectus, sit amet vehicula lorem laoreet nec. Curabitur congue porttitor lorem, at ullamcorper ipsum rutrum eu. Sed finibus justo nec condimentum lacinia. Suspendisse id leo eget justo mollis blandit. Cras vehicula tortor vitae vehicula porta',
        img: 'img3.jpg'
      },
      {
        headline: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas placerat sem vel ultricies. Proin finibus est vel lacus hendrerit, sit amet fringilla nulla gravida. Sed vel efficitur nibh. Aenean ut justo porttitor, laoreet lacus et, viverra ipsum. Cras ac bibendum lectus. Proin eget malesuada risus, sit amet accumsan lorem. Nam volutpat libero lectus, sit amet vehicula lorem laoreet nec. Curabitur congue porttitor lorem, at ullamcorper ipsum rutrum eu. Sed finibus justo nec condimentum lacinia. Suspendisse id leo eget justo mollis blandit. Cras vehicula tortor vitae vehicula porta',
        img: 'img4.jpg'
      },
      {
        headline: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas placerat sem vel ultricies. Proin finibus est vel lacus hendrerit, sit amet fringilla nulla gravida. Sed vel efficitur nibh. Aenean ut justo porttitor, laoreet lacus et, viverra ipsum. Cras ac bibendum lectus. Proin eget malesuada risus, sit amet accumsan lorem. Nam volutpat libero lectus, sit amet vehicula lorem laoreet nec. Curabitur congue porttitor lorem, at ullamcorper ipsum rutrum eu. Sed finibus justo nec condimentum lacinia. Suspendisse id leo eget justo mollis blandit. Cras vehicula tortor vitae vehicula porta',
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