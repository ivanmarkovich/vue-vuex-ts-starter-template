<template>
  <h5>App status: {{ getGameStatus }}</h5>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ts-ignore
import { mapGetters } from "vuex";

import { getters } from "@/store";

export default defineComponent({
  name: "App",
  components: {},
  computed: {
    ...mapGetters({
      getGameStatus: getters.GET_GAME_STATUS,
    }),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
