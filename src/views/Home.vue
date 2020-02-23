
<template>
  <div class="home">
    <div v-for="(edition, index) in shuffle(playlist)" class="playlist" :key="'edition ' + index">
      <FullPage ref="fullpage" :options="fullpageOptions" id="fullpage">
        <div class="section">
        <!-- // will need to move out the shufflePlaylist up the chain of operations
        // for now use a separate function
        // but can refactor -->
          <div class="title slide">
            <img class="cover image" src="@/assets/mixtape1.jpg"/>
            <div class="masthead">
              <h1>{{edition.title}}</h1>
              <h2>v{{edition.version}}</h2>
              <div class="verse">
                <p class="line">a collection of anon. poetry around the time of the troubles</p>
              </div>
              <div class="verse">
                <p class="line"><span class="zine">seen</span> relies on contributions from Hong Kong writers</p>
              </div>
              <div class="verse">
                <p class="line">in print, <span class="zine">seen</span> is available</p>
                <p class="line">via mail <em>(coming soon)</em></p>
              </div> 
              <div class="verse">
                <p class="line">get in touch everythingisnovel@gmail.com</p>
              </div>
            </div>
            <nav>
              <ul id="tableOfContents">
                <li v-for="(poem, index) in navScrub(edition.poems)" class="link" :key="'link' + index">
                  <a @click="goTo(index)">
                  {{poem.title}}
                  </a>
                </li>
              </ul>
            </nav>
        </div>
          <!-- can be abstracted to a poem component -->
          <div v-for="(poem, index) in edition.poems" class="slide" :key="'poem ' + index">
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
    shuffleList: (...poems) => {
      const shuffledPoems = []
      let chance
      poems[0].forEach(poem => {
        chance = (Math.random() > 0.5) ? false: true
        if (chance) {
          shuffledPoems.unshift(poem)
        } else {
          shuffledPoems.push(poem)
        }
      })
      return shuffledPoems
    },
    navScrub: function(...poems) {
      let poemInfo = [] 
      poems[0].forEach(poem => {
          poemInfo.push({
            title: poem.title,
            slug: poem.slug
          })
      })
      // can partition later
      let anchors = []
      poemInfo.forEach(poem => {
        anchors.push(poem.slug)
      })
      let tooltips = ['seen']
      poemInfo.forEach(poem => {
        tooltips.push(poem.title)
      })

      this.fullpageOptions.navigationTooltips = tooltips;
      return poemInfo
    },

    shuffle: function(playlist) {
      let shuffledPlaylist = []
      playlist.forEach(edition => {
        let shuffle = {...edition}
        shuffle.poems = this.shuffleList(edition.poems)
        shuffledPlaylist.push(shuffle)
      })
      return shuffledPlaylist
    },
    goTo: function(index) {
      this.$refs.fullpage[0].api.moveTo(1, index+1)
    }
  },
  data() {
    return {
      fullpageOptions: {
        licenseKey: '8857DA6E-01F3472C-8AD8BF1A-CA320A28',
        slidesNavigation: true,
        scrollOverflow: true,
        navigationTooltips: [],
        controlArrows: false,
        verticalCentered: false,
        recordHistory: true,
        showActiveTooltip: false,
        // anchors: [],
        // menu: "#tableOfContents",
        // lockAnchors: true,
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

 nav {
    width: 400px;
    align-self: center;
  }


  .title {
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
    align-items: center;
  }

 

  .link {
    font-size: 1.2em;
    margin-top: 5px;
    text-align: left;
    list-style: none;
    text-decoration-line: underline;
    /* text-decoration-color: #2c3e50;    */
    text-decoration-color: rgb(191,45,40, 0.9);

  }
  .masthead {
    width: 200px; 
    font-size: 0.7em;
  }

  .masthead > h1, .link, .zine {
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
    align-self: center;
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
