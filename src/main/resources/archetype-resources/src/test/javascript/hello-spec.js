describe('hello',function(){
  it('greets you',function(){
    expect(window.hello).toBe("Hello There, ");
  });
});

describe('testAlex',function() {
  it('it message',function() {
    expect(window.hello).toBe("Hello There1, ");
  });
});