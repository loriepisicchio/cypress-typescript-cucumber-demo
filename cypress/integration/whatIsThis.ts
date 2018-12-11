describe("hello", () => {
  it("world", () => {
    // @ts-ignore
    cy.visit("http://google.com");
    // @ts-ignore
    cy.get(".hello")
  })
})
