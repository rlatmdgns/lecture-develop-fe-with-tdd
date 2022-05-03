const ClickCountView = (clickCounter, updateEl) => {
  if (!clickCounter) {
    throw Error("clickCounter");
  }

  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getCounter();
    },
  };
};
