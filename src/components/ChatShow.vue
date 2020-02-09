<template>
  <div class="chat">
    <div v-for="message in messages" :key="message.time"  >
        <div v-if="message.host" class="host message" v-show="message.show">
            <p>{{message.text}}</p>
        </div>
        <div v-else class="guest message" v-show="message.show">
            <p>{{message.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatShow',
  props: {
      transcript: Array 
  },
  methods: {
    messageIterator() {
        this.interval = setInterval(() => {
          this.messages[this.count].show = true
          this.count++
        }, 3000)
    }
  },
  data() {
      return {
          interval: '',
          count: 0,
          messages: []
    } 
  },
  mounted() {
    if (!this.transcript[0].show) {
        this.messages = this.transcript.map(message=> ({ ...message, show: false }))       
    }
    this.messageIterator()
  },
  destroy() {
      clearInterval(this.interval)
  },
}
</script>

<style scoped>

.chat {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
}

.message {
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    width: 60%;
}

.host {
    background-color: #000;
    color: #FFF;
    float: right;
}

.guest {
    background-color: cornsilk;
    float: left;
}

</style>
