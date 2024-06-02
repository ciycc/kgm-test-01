<template>
  <div>
    <ul class="items-color-list">
      <li v-for="item in items">
        <div class="item-color-box" :style="{'background': item.color, 'color': item.fc}">{{ item.color }}</div>
        <div class="item-color-name"  :style="{'background': item.color}"><button class="btn-color-name cursor-zoom" :style="{'color': item.fc}" @click="colorNameCopyHandler">{{ item.name }}</button></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const { items } = defineProps({
    items: {
      type: Array,
      default: []
    },
  });
  const colorNameCopyHandler = (e) => {
    const self = e.target;
    let tempInput = document.createElement("input")
    tempInput.value = `var(${self.textContent})`;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
</script>

<style lang="scss" scoped>
.items-color-list {
  .item-color-box,
  .item-color-name {
    font-size: rem(13);
    width: rem(200);
    padding: rem(10) 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }
  .item-color-name {
    line-height: 1;
    padding: 0 rem(10) rem(10);
    font-size: rem(15);
  }
}
</style>