describe('User can view a list of peeps', () => {
  it('shows a list of peeps', (done) => {
    let controller = new PeepListController();
    controller.display().then(() => {
      let container = document.querySelector("#main");
      expect(container.innerHTML).toEqual("<ul><li>yo wadupppp</li></ul>")
      done();
    });
  });
});

// Using done to specify when async testing is finished.