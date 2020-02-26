<template>
  <div class="chat">
    <div v-for="message in messages" :key="message.time" >
        <div v-if="message.host" class="host message">
            <p>{{message.text}}</p>
        </div>
        <div v-else class="guest message">
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
    data() {
        return {
            interval: '',
            count: 0,
            messages: []
    } 
    },
  methods: {
    messageIterator() {
        this.interval = setInterval(() => {
          this.messages[this.count].show = true
          this.count++
        }, 2000)
    }
  },
  mounted() {
    if (!this.transcript[0].show) {
        this.messages = this.transcript.map(message=> ({ ...message, show: false }))       
    }
    // this.messageIterator()
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
