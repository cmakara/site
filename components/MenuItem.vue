<template>
  <div :class="['menu-item', expanded ? 'expanded' : '' ]">
    <div class="uk-flex uk-flex-row uk-flex-center">
      <div class="nav-icon uk-flex uk-flex-center" :uk-icon="`icon: ${icon}`" title="About me" />
      <div class="nav-text" v-if="expanded">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["expanded", "text", "icon"]
};
</script>


<style>
.menu-item {
  width: 4rem;
  align-items: center;
  text-align: center;
  padding: 1rem 0 1rem 0;
}
.menu-item a:hover {
  text-decoration: none;
}
.nav-text {
  margin-left: 1em;
}
.nav-icon a {
  color: white;
}
</style>

