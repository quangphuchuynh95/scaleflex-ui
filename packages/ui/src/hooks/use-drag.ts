function useDrag(onMove: any, onStart: any, onEnd: any) {
  const onDragging = (e: any) => {
    if (typeof onMove === 'function') {
      onMove(e.touches?.[0] || e);
    }
  };

  const disableSliding = (e: any) => {
    document.removeEventListener('mousemove', onDragging);
    document.removeEventListener('mouseup', disableSliding);
    document.removeEventListener('mouseleave', disableSliding);
    document.removeEventListener('touchmove', onDragging);
    document.removeEventListener('touchend', disableSliding);
    document.removeEventListener('touchcancel', disableSliding);

    if (typeof onEnd === 'function') {
      onEnd(e.touches?.[0] || e);
    }
  };

  const enableDrag = (e: any) => {
    document.addEventListener('mousemove', onDragging);
    document.addEventListener('mouseup', disableSliding);
    document.addEventListener('mouseleave', disableSliding);
    document.addEventListener('touchmove', onDragging);
    document.addEventListener('touchend', disableSliding);
    document.addEventListener('touchcancel', disableSliding);

    if (typeof onStart === 'function') {
      onStart(e.touches?.[0] || e);
    }
  };

  return {
    onMouseDown: enableDrag,
    onTouchStart: enableDrag,
  };
}

export default useDrag;
