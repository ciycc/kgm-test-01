<script setup>
import PublishingListTable from '&/guide/pages/publishiing-list-table.vue';
import PubData from '&/guide/data/publist.json';

const state = reactive({ PubData });
</script>
<template>
  <div>
    <PublishingListTable :dataObj="state.PubData" />
  </div>
</template>

<style lang="scss" scoped>

</style>
