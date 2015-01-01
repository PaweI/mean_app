describe('Todo list', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it("should have a title", function() {
    expect(browser.getTitle()).toEqual('Express');
  });

  it("should move todo to correct list when user toggles checkbox", function() {
    expect(element.all(by.css('.notDone li')).count()).toBe(3)

    element(by.css('.notDone li')).click();

    expect(element.all(by.css('.notDone li')).count()).toBe(2)

    element(by.css('.done li')).click();

    expect(element.all(by.css('.notDone li')).count()).toBe(3)
  });
});