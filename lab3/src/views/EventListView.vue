<template>
  <h1>Events For Goods</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  name: 'EventListView',
  components: {
    EventCard //register it as a child component.
  },
  data() {
    return {
      events: null
    }
  }
},
  created() {
    axios
      .get('http://localhost:3004/events')
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
 }

</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>
