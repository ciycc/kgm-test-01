import { mouseStore } from '&/guide/store/mouseStore';

const msStore = mouseStore();
const { setGxy } = msStore;

export function useMouse() {
  const changeNum = (num1, num2) => {
    setGxy(num1, num2);
  };

  return { changeNum };
}

export function useSetMouseShape() {
  // const
  const bodyEl = document.body;
  const mouseStatus = ref(false);

  bodyEl.classList.add('custom-mouse');
  const mouseMoveHandler = (e) => {
    const pointerEl = document.querySelector('.mouse-cursor-pointer');
    if (!pointerEl) return;

    const x = e.clientX;
    const y = e.clientY;

    pointerEl.style.cssText = `
      top: ${y}px;
      left: ${x}px;
    `;
  };
  const mouseEnterHandler = () => {
    mouseStatus.value = true;
  };
  const mouseLeaveHandler = () => {
    mouseStatus.value = false;
  };
  onMounted(() => {
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousemove', mouseEnterHandler, { once: true });
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseleave', mouseLeaveHandler);
    document.removeEventListener('mousemove', mouseMoveHandler);
    bodyEl.classList.remove('custom-mouse');
  });
  // document.addEventListener('mouseover', )

  return {
    mouseStatus,
  };
}