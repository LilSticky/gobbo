<template>
  <div class="Map">
    <hex-grid width="1000" height="1000">
      <layout :size="{ x: 7, y: 7 }">
        <hexagon
          v-for="(hex, i) in hexagons"
          :key="i"
          :q="hex.q"
          :r="hex.r"
          :s="hex.s"
        ></hexagon>
      </layout>
    </hex-grid>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { HexGrid, Layout, Hexagon, GridGenerator } from "vue-hexgrid";
export default {
  name: "Map",
  components: {
    HexGrid,
    Layout,
    Hexagon,
  },
  data() {
    return { hexagons: GridGenerator.hexagon(2) };
  },
};
</script>

<style lang="scss">
svg {
  g {
    fill: #ffd54f;
    fill-opacity: 0.6;
    &:hover {
      fill-opacity: 1;
      text {
        fill-opacity: 1;
      }
    }
    polygon {
      stroke: #a9acb9;
      stroke-width: 0.2;
      transition: fill-opacity 0.2s;
    }
    text {
      font-size: 0.2em;
      fill: #000;
      fill-opacity: 0.9;
      transition: fill-opacity 0.2s;
    }
  }
  path {
    fill: none;
    stroke: hsl(60, 20%, 70%);
    stroke-width: 0.4em;
    stroke-opacity: 0.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}
</style>