<script lang="ts">
  import { Sprite } from 'svelte-pixi';
  import { Assets, Texture } from 'pixi.js';
  import { Player } from '$lib/game/Player.svelte';

  let { game } = $props();

  const players = $derived(game.players);

  let textures = $state<Record<string, Texture>>({});

  async function loadTextures() {
    for (const player of players) {
      if (!textures[player.color]) {
        const texture = await Assets.load(`/${player.color}pion.png`);

        texture.source.scaleMode = 'nearest';

        textures[player.color] = texture;
      }
    }
  }

  loadTextures();
</script>

{#each players as player}
  {#if textures[player.color]}
    <Sprite
      texture={textures[player.color]}
      x={game.board.getXY(player.position).x}
      y={game.board.getXY(player.position).y}
      anchor={0.5}
      scale={3}
    />
  {/if}
{/each}