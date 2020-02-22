
<template>
  <div class="home">
    <FullPage :options="fullpageOptions" id="fullpage">
      <div v-for="(edition, index) in shuffle(playlist)" class="playlist section" :key="'edition ' + index">
      <!-- // will need to move out the shufflePlaylist up the chain of operations
      // for now use a separate function
      // but can refactor -->
        <div class="title slide">
          <img class="cover image" src="@/assets/mixtape1.jpg"/>
          <div class="masthead">
            <h1>{{edition.title}}</h1>
            <h2>v{{edition.version}}</h2>
            <div class="verse">
              <p class="line">a collection of poetry</p>
              <p class="line">around the time of the troubles</p>
            </div>
            <div class="verse">
              <p class="line"><span class="magazine">seen</span> relies on contributions</p>
              <p class="line">from Hong Kong writers</p>
            </div>
            <div class="verse">
              <p class="line">in print, <span class="magazine">seen</span> is available</p>
              <p class="line">via mail (coming soon)</p>
            </div> 
            <div class="verse">
              <p class="line">get in touch</p>
              <p class="line">everythingisnovel@gmail.com</p>
            </div>
          </div>
          <nav>
            <ul>
              <li v-for="(title, index) in listOfTitles(edition.poems)" class="link" :key="'link' + index">
                {{title}}
              </li>
            </ul>
          </nav>
        </div>
        <div v-for="(poem, index) in edition.poems" class="slide" :id="poem.slug" :key="'poem ' + index">
          <h1 class="poem">{{poem.title}}</h1>
          <div v-for="(verse, index) in poem.text" class="poem verse" :key="'verse ' + index">
            <p v-for="(line, index) in verse" class="line" :key="'line ' + index">
              {{line}}
            </p>
          </div>
          <footer>
            <h2>by {{poem.author}}</h2>
          </footer>
        </div>
      </div>
    </FullPage>
  </div>
</template>

// things to add
// submissions slide and about section
// navigation, too


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
    shuffleList: (...poetry) => {
      // this shuffle algo doesn't produce totally random combinations
      const shuffledPoems = []
      let chance
      poetry.forEach(poem => {

        chance = (Math.random() > 0.5) ? true: false
     
        if (chance) {
          shuffledPoems.unshift(poem)
        } else {
          shuffledPoems.push(poem)
        }

      })
      return shuffledPoems
    },
    listOfTitles: (...poems) => {
      console.log('poetry', poems) // eslint-disable-line
      const poemTitles = [] 
      poems.forEach((poem) => {
        poemTitles.push(poem.title)
      })
      return poemTitles
    },

    shuffle: function(...playlist) {
      const shuffledPlaylist = []
      playlist.forEach(edition => {
        console.log('edition', edition) // eslint-disable-line
        shuffledPlaylist.push(this.shuffleList(edition[0].poems))
      })
      console.log('shuffled', shuffledPlaylist) // eslint-disable-line
      return shuffledPlaylist;
    }
  },
  data() {
    return {
      fullpageOptions: {
        licenseKey: '8857DA6E-01F3472C-8AD8BF1A-CA320A28',
        navigation: false,
        navigationPosition: 'left',
        scrollOverflow: true,
        slidesNavigation: true,
        controlArrows: false,
        verticalCentered: false,
        anchors: []
      },
      playlist: [
        Edition
      ]
    }
  }
}
</script>

<style>
  
  @font-face {
    font-family: 'SF Mono';
  src: url('~@/assets/fonts/SFMonoSemibold.woff') format('woff');
}

  @import url("https://use.typekit.net/fcr0yqy.css");

  * {
    box-sizing: border-box;
  }

  .title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  nav {
    width: 400px;
  }

  .link {
    font-size: 1.2em;
    text-align: left;
    list-style: none;  
  }
  .masthead {
    width: 200px; 
    font-size: 0.7em;
  }

  .masthead > h1, .link, .magazine {
    font-family: stratos, helvetica, sans-serif;
    font-weight: bolder;
    font-style: italic;
    color: rgb(191,45,40, 0.9);
  }

  .masthead > h1 {
    font-size: 8em;
    margin-bottom: -50px;
  }

  .masthead > h2 {
    font-size: 2em;
    margin-bottom: 50px;    
  }

  .cover {
    height: 375px;
    width: 375px;
    align-self: flex-end;
  }
  
  h1.poem {
    color: rgb(191,45,40, 0.9);
    margin-top: 100px;
    font-size: 4em;
    font-family: stratos, helvetica, sans-serif;
    max-width: 600px;
  }

  h2.poem {
    font-family: stratos, helvetica, sans-serif;
    margin-bottom: 3em;
  }

  .poem {
    width: 80%; 
    margin: 0 auto 0 auto;
  }
  
  .verse {
    margin-bottom: 3em;
  }

  footer {
    height: 100px;
    margin-bottom: 78px;
    display: block;
  }
</style>
