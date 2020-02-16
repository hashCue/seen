<template>
  <div class="home">
    <FullPage :options="options" id="fullpage">
      <div v-for="(edition, index) in playlist" class="section" :key="'edition ' + index">
        <div class="title slide">
          <img class="cover image" src="@/assets/mixtape1.jpg"/>
          <h1>{{edition.title}}</h1>
        </div>
        <div v-for="(poem, index) in shuffledPlaylist(edition.poems)" class="slide" :key="'poem ' + index">
          <h1>{{poem.title}}</h1>
          <h2>by {{poem.author}}</h2>
          <div v-for="(verse, index) in poem.text" class="verse" :key="'verse ' + index">
            <p v-for="(line, index) in verse" class="line" :key="'line ' + index">
              {{line}}
            </p>
          </div>
        </div>
      </div>
    </FullPage>
  </div>
</template>



<script>
// import Mixtape from '@/components/Mixtape.vue'
import 'fullpage.js/vendors/scrolloverflow'
import FullPage from 'vue-fullpage.js/src/FullPage.vue'

import Edition from '@/assets/mixtape.json'

export default {
  name: 'home',
  components: {
    FullPage
  },
  methods: {
    shuffledPlaylist: (...poetry) => {

      const shuffledPoems = []
      let chance
      poetry[0].forEach(poem => {

        chance = (Math.random() > 0.5) ? true: false
     
        if (chance) {
          shuffledPoems.unshift(poem)
        } else {
          shuffledPoems.push(poem)
        }

      })

      return shuffledPoems
    }
  },
  data() {
    return {
      options: {
        licenseKey: '8857DA6E-01F3472C-8AD8BF1A-CA320A28',
        navigation: false,
        navigationPosition: 'left',
        scrollOverflow: true,
        slidesNavigation: true,
        controlArrows: false,
      },
      playlist: [
        Edition
      ]
    }
  }
}
</script>

<style scoped>
  
  @import url("https://use.typekit.net/fcr0yqy.css");
  .cover {
    margin-top: 100px;
    width: 375px;
    margin-bottom: -150px;
  }
  .title {
    font-family: stratos, helvetica, sans-serif;
    font-weight: bolder;
    font-style: italic;
    font-size: 4em;
    color: rgb(191,45,40, 0.9);
  }

  h2 {
    margin-bottom: 4em;
  }

  .poem {
    width: 80%; 
  }
  
  .verse {
    margin-bottom: 4em;
  }

</style>