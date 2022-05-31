<template>
  <div id="home-layout">
    <NavbarItem />
    <div class="pages-container">
      <router-view></router-view>
    </div>
    <FooterItem />
  </div>
</template>

<script>
import NavbarItem from "../components/NavbarItem.vue";
import FooterItem from "../components/FooterItem.vue";

export default {
  name: "HomePageLayout",
  components: {
    NavbarItem,
    FooterItem,
  }
};
</script>
