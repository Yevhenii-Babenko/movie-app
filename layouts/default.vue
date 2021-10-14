 <template>
  <div class="app">
    <Navbar />
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
})
</script>