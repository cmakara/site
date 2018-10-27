<template>
  <div class="nav-menu-item" @click="$emit('menu-item-selected', link)">
    <nuxt-link :to="link" v-if="!external">
      <MenuItem :text="text" :icon="icon" :expanded="expanded"/>
    </nuxt-link>
    <a :href="link" target="_blank" v-else>
      <MenuItem :text="text" :icon="icon" :expanded="expanded"/>
    </a>
  </div>
</template>

<script>
import MenuItem from "~/components/MenuItem.vue";
export default {
  props: ["expanded", "text", "icon", "link", "external"],
  components: {
    MenuItem
  }
};
</script>

<style>
.nav-menu-item a {
  color: white;
  text-decoration: none;
}
</style>

