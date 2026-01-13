/// <reference types = "cypress"/>

describe("DELETE API call validation", () => {
  it("Learning DELETE call using cypress", function () {
    cy.request("DELETE", "https://dummy.restapiexample.com/api/v1/delete/2").then(
      (res) => {

        expect(res.status).equal(200);

      }
    );
  });
});