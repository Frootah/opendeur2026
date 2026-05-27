<script lang="ts">
  import { Application, Sprite } from 'svelte-pixi';
  import { Assets } from 'pixi.js';

  let texture = $state();

  let appWidth = 600;
  let appHeight = 600;

  async function load() {
    texture = await Assets.load('/background.png');

    // Pixi v8
    texture.source.scaleMode = 'nearest';
  }
   
  load();
</script>

  {#if texture}
    <Sprite
      texture={texture}
      x={0}
      y={0}
      width={appWidth}
      height={appHeight}
    />
  {/if}