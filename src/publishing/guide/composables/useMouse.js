import { mouseStore } from '&/guide/store/mouseStore';

const msStore = mouseStore();
const { setGxy } = msStore;

export default function useMouse() {
  // const x = ref(0);
  // const y = ref(0);

  // a composable can update its managed state over time.
  // function update(event) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  // onMounted(() => window.addEventListener('mousemove', update));
  // onUnmounted(() => window.removeEventListener('mousemove', update));

  // expose managed state as return value
  const changeNum = (num1, num2) => {
    setGxy(num1, num2);
  };

  // return { x, y, changeNum };
  return { changeNum };
}