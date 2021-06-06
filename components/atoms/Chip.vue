<template>
    <div class="chip">
        {{ text }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { books } from '@/store'

    export default Vue.extend({
        props: {
            text:{
                type: String,
                required: true
            }
        },
        computed: {
            $book(){
                return books.$single
            }
        }
    })
</script>

<style lang="scss" scoped>
.chip {
  display: inline-block;
  background: #292929;
  font-weight: 700;
  font-size: 13px;
  color: #f7f7f7;
  padding: 6px 19px;
  border-radius: 20px;
}
</style>