<template>
  <div class="home">
    <FullPage :options="options" id="fullpage">
      // can refactor later
      // pepper in some v directives
      <div v-for="mixtape in mixtapes" class="section" :key="'issue' + mixtape.issue">
        <div class="title slide">
          <h1>mixtape 00{{mixtape.issue}}</h1>
          <h2>{{mixtape.title}}</h2>
        </div>
        <div v-for="(transcript, index) in mixtape.transcripts" class="slide" :key="'transcript'+mixtape.issue+index">
          <h1>{{transcript.title}}</h1>
          <ChatShow :transcript="transcript.messages "/>            
        </div>
      </div>
    </FullPage>


  </div>





</template>



<script>
import ChatShow from '@/components/ChatShow.vue'
import FullPage from 'vue-fullpage.js/src/FullPage.vue'; 

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
        scrollOverflow: true,
        slidesNavigation: true,
        controlArrows: false,
      },
      mixtapes: [
        {
          issue: 2,
          title: 'life in the time of coronavirus',
          transcripts: [
            transcript4
          ]
           
        },
        {
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
