/// <reference types = "cypress"/>

describe("PUT API call validation", () => {
  it("Learning PUT call using cypress", function () {
    cy.request("PUT", "https://dummy.restapiexample.com/api/v1/update/21", {
        "name":"Sanidhya",
        "salary":"47000",
        "age":"23"
    }).then(
      (res) => {
        let empage = res.body.data.age
        expect(empage).equal('23')
        expect(res.status).equal(200);

      }
    );
  });
});