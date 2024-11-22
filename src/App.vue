<template>
  <SiteHeader />
  <main>
    <LeftBar />
    <div class="router">
      <router-view>
      </router-view>
    </div>
  </main>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import LeftBar from './components/LeftBar.vue';

export default {
  components: {
    SiteHeader,
    LeftBar,
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
main {
  display: flex;
  height: 100%;
}
.router {
  width: 100%;
}
</style>