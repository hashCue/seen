<template>
  <div class="home">
    <FullPage :options="options" id="fullpage">
      <div class="section">
        <div class="slide">
          <h1>mixtape 000</h1>
          <h2>on the issue of Hong Kong</h2>
        </div>
        <div v-for="(transcript, index) in transcripts" class="slide" :key="index">
          <h1>{{transcript.title}}</h1>
          <ChatShow :messages="transcript.messages "/>
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
      transcripts: [
        transcript1,
        transcript2,
        transcript3
      ]
    }
  }
}
</script>
