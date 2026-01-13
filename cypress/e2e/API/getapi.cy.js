/// <reference types = "cypress"/>

describe("Get API call validation", () => {
  it("Learning get call using cypress", function () {
    cy.request("https://dummy.restapiexample.com/api/v1/employee/1").then(
      (res) => {
        let empsalary = res.body.data.employee_salary
        expect(empsalary).equal('320800')
        expect(res.status).equal(200);
        expect(res.body).to.have.property(
          "message",
          "Successfully! Record has been fetched."
        );
        expect(res.body).to.deep.equal({
          status: "success",
          data: {
            id: 1,
            employee_name: "Tiger Nixon",
            employee_salary: "320800",
            employee_age: "61",
            profile_image: "",
          },
          message: "Successfully! Record has been fetched.",
        });
      }
    );
  });
});
