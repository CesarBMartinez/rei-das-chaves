<template>
  <div id="home">
    <header-navbar></header-navbar>
    <main class="container">

    </main>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNavbar from '@/components/HeaderNavbar.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'home',
  components: {
    'header-navbar': HeaderNavbar,
    'footer-comp': FooterComp
  }
};
</script>
