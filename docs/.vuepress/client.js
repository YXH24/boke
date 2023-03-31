import { defineClientConfig,usePagesData } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData=usePagesData()
    Promise.all(Object.keys(pagesData.value).map(key=>pagesData.value[key]())).then(pages=>{
        console.log(pages);
        app.provide('page',pages)
    })
  },
  setup() {
    console.log('setup');
  },
  rootComponents: [],
})