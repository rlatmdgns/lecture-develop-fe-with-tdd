describe("ClickCountView 모듈", () => {
  let clickCounter, updateEl, view;

  beforeEach(() => {
    clickCounter = ClickCounter();
    updateEl = document.createElement("span");
    view = ClickCountView(clickCounter, updateEl);
  });

  it("clickCounter를 주입하지 않으면 에러를 던진다.", () => {
    const clickCounter = null;
    const updateEl = document.createElement("span");

    const actual = () => ClickCountView(clickCounter, updateEl);
    expect(actual).toThrowError();
  });

  // it("updateEl를 주입하지 않으면 에러를 던진다.", () => {});

  describe("updateView()", () => {
    it("ClickCounter의 getCounter() 실행결과를 출력한다", () => {
      const counterValue = clickCounter.getCounter();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });
});
