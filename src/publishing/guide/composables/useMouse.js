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
  const mouseShape = ref('');

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
  const mouseLinkOverHandler = (e) => {
    const self = e.target;
    const tgName = self.tagName.toLowerCase();
    if (tgName !== 'a' && tgName !== 'button') return;
    if (self.classList.contains('cursor-zoom')) {
      mouseShape.value = 'cursor-zoom';
    }
  };
  const mouseLinkLeaveHandler = (e) => {
    const self = e.target;
    const tgName = self.tagName.toLowerCase();
    if (tgName !== 'a' && tgName !== 'button') return;
    mouseShape.value = '';
  };
  onMounted(() => {
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousemove', mouseEnterHandler, { once: true });
    document.addEventListener('mouseover', mouseLinkOverHandler);
    document.addEventListener('mouseout', mouseLinkLeaveHandler);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseleave', mouseLeaveHandler);
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseover', mouseLinkOverHandler);
    document.removeEventListener('mouseout', mouseLinkLeaveHandler);
    bodyEl.classList.remove('custom-mouse');
  });
  // document.addEventListener('mouseover', )

  return {
    mouseStatus,
    mouseShape,
  };
}