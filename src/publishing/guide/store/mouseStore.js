export const mouseStore = defineStore('mouseStore', () => {
  // const state = reactive({
  //   gx: 0,
  //   gy: 0,
  // });
  const gx = ref(0);
  const gy = ref(0);

  const setGxy = (x, y) => {
    gx.value = x;
    gy.value = y;
  };

  return {
    // ...toRefs(state),
    gx,
    gy,
    setGxy,
  };
});

export const test = defineStore('testStore', () => {
  const myX = ref(0);
  return {
    myX,
  };
});