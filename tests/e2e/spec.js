// describe('angularjs homepage', function() {
//   it('should have a title', function() {
//     browser.get('http://localhost:3000/');

//     expect(browser.getTitle()).toEqual('Express');
//   });
// });

describe('Todo list', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/');

    sleep(1);
  });

  it("should move todo to correct list when user toggles checkbox", function() {
    expect(repeater('.not-done').count()).toBe(2);
    expect(repeater('.done').count()).toBe(1);

    element('.not-done:nth-child(1) input').click();
    sleep(0.1);
    expect(repeater('.not-done').count()).toBe(1);
    expect(repeater('.done').count()).toBe(2);

    element('.done:nth-child(1) input').click();
    sleep(0.1);
    expect(repeater('.not-done').count()).toBe(2);
    expect(repeater('.done').count()).toBe(1);
  });
});