<template>
  <div class="home">
    <FullPage :options="options" id="fullpage">
        <div v-for="(item, type, index) in playlist" :class="type + ' section'" :key="index">
          <article v-if="item.illustration">
            <p>illustration</p>
          </article>
          <article v-if="item.mixtape">
            <div class="slide">
              <h1>mixtape 00{{item.issue}}</h1>
              <h2>{{item.title}}</h2>
            </div>
            <div v-for="(transcript, index) in item.transcripts" class="slide" :key="'transcript'+item.issue+index">
              <h1>{{transcript.title}}</h1>
              <ChatShow :transcript="transcript.messages"/>
            </div>
          </article>
        </div>

        <!-- <div :bind="mixtapes[0] in mixtapes" class="mixtape section" :id="'mixtape' + mixtape.issue">
          <div class="title slide">
            <h1>mixtape 00{{mixtape.issue}}</h1>
            <h2>{{mixtape.title}}</h2>
          </div>
          <div v-for="(transcript, index) in mixtape.transcripts" class="slide" :key="'transcript'+mixtape.issue+index">
            <h1>{{transcript.title}}</h1>
            <ChatShow :transcript="transcript.messages "/>            
          </div>
        </div> -->
    </FullPage>


  </div>





</template>



<script>
import ChatShow from '@/components/ChatShow.vue'
import FullPage from 'vue-fullpage.js/src/FullPage.vue'; 
import 'fullpage.js/vendors/scrolloverflow'

import transcript1 from '@/assets/transcriptA.json'
import transcript2 from '@/assets/transcriptH.json'
import transcript3 from '@/assets/transcriptC.json' 
import transcript4 from '@/assets/transcriptY.json'

// hmm tricky
// have to abstract

export default {
  name: 'home',
  components: {
    ChatShow,
    FullPage
  },
  data() {
    return {
      options: {
        licenseKey: '8857DA6E-01F3472C-8AD8BF1A-CA320A28',
        navigation: true,
        navigationPosition: 'left',
        scrollOverflow: true,
        slidesNavigation: true,
        controlArrows: false,
      },
      playlist: [
        {
          illustration: true,
          issue: 2,
          title: 'space station blue'
        },
        {
          mixtape: true,
          issue: 2,
          title: 'life in the time of coronavirus',
          transcripts: [
            transcript4
          ]
        },
        {
          illustration: true,
          issue: 1,
          title: 'test'
        },
        {
          mixtape: true,
          issue: 1,
          title: 'on the issue of hong kong',
          transcripts: [
            transcript1,
            transcript2,
            transcript3,
          ]
        }
      ]
    }
  }
}
</script>
