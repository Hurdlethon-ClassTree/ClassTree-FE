<template>
  <SiteHeader />
  <router-view>
  </router-view>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'

export default {
  components: {
    SiteHeader,
  },
};

</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.link {
  text-decoration: none;
  color: black;
}
</style>