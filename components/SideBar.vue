<template>
  <div :class="['sidebar uk-flex uk-flex-column uk-flex-between', expanded ? 'expanded' : '' ]">
    <div class="header">
      <Avatar @click.native="resetSelection" />
      <nav class="navigation">
        <NavMenuItem :class="['nav-menu-item', isSelected(page.id) ? 'selected' : '']" v-for="page in pages" :key="page.id" :text="page.text" :icon="page.icon" :link="page.link" :expanded="expanded" @menu-item-selected="selectMenu" />
      </nav>
    </div>
    <div class="menu uk-flex uk-flex-column">
      <NavMenuItem :class="['nav-menu-item']" v-for="link in externalLinks" :key="link.id" :text="link.text" :icon="link.icon" :link="link.link" :expanded="expanded" :external="true" />
      <MenuItem :class="['nav-menu-item']" :text="'Collapse'" :icon="`triangle-${expanded ? 'left' : 'right'}`" :expanded="expanded" @click.native="toggleExpand" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "Vuex";
import Avatar from "~/components/Avatar.vue";
import NavMenuItem from "~/components/NavMenuItem.vue";
import MenuItem from "~/components/MenuItem.vue";

export default {
  components: {
    Avatar,
    NavMenuItem,
    MenuItem
  },
  data: function() {
    return {
      expanded: false,
      selectedMenu: ""
    };
  },
  computed: {
    ...mapGetters("navigation", ["pages", "externalLinks"])
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
    isSelected(menu) {
      return this.selectedMenu === menu;
    },
    selectMenu(menu) {
      this.selectedMenu = menu;
    },
    resetSelection() {
      this.selectedMenu = "";
    }
  }
};
</script>


<style>
.sidebar {
  width: 4rem;
  min-height: 100vh;
  align-items: center;
  text-align: center;
  border-right: 1px black solid;
  background-color: #005571;
  color: white;
  -webkit-transition: width 0.5s linear;
  overflow: hidden;
}

.nav-menu-item:hover {
  background-color: #004561;
}

.selected {
  background-color: #004561;
}

.sidebar span.leader {
  opacity: 1;
  width: 7px;
  -webkit-transition: opacity 0.2s ease-out;
  font-weight: bold;
}

.sidebar span.detail {
  -webkit-transition: opacity 0.5s ease-out;
  opacity: 0;
}
.expanded .sidebar span.detail {
  opacity: 1;
}

.header {
  width: 100%;
}

.navigation {
  justify-content: center;
}
.menu {
  margin: 1em 0 1em 0;
  width: 100%;
}
.menu-item:hover {
  cursor: pointer;
}
.expanded {
  width: 10rem;
}
</style>

