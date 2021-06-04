<template>
    <div class="presentation">
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptatum nam accusantium laudantium dolorum illo, cupiditate libero numquam eos incidunt consequuntur minima perferendis praesentium culpa. Alias nam a labore aut vel, illo consectetur cumque ipsam, porro, dolorum eos qui vero mollitia iste. Rerum alias ex ipsum suscipit consequuntur iste quod aliquid obcaecati voluptatem reprehenderit? Quos praesentium et illum doloremque atque nostrum quibusdam magni illo cum? Tempora odit odio sapiente inventore magnam, at nobis quasi illo doloribus explicabo quis? Aspernatur officia fugit corporis hic commodi laborum cumque nostrum accusantium saepe. Minima nesciunt sapiente harum est repellendus aut qui quod voluptas accusantium?
        </p>
        <img src="@/assets/img/presentation.svg" alt="presentation">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>