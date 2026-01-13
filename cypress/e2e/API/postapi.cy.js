/// <reference types = "cypress"/>

describe("POST API call validation", () => {
  it("Learning POST call using cypress", function () {
    cy.request("POST", "https://dummy.restapiexample.com/api/v1/create", {
        "name":"Sanidhya",
        "salary":"47000",
        "age":"22"
    }).then(
      (res) => {
        let empsalary = res.body.data.salary
        expect(empsalary).equal('47000')
        expect(res.status).equal(200);
        expect(res.body).to.have.property(
          "message",
          "Successfully! Record has been added."
        );
        // expect(res.body).to.deep.equal({
        //   status: "success",
        //   data: {
        //     id: 1,
        //     employee_name: "Tiger Nixon",
        //     employee_salary: "320800",
        //     employee_age: "61",
        //     profile_image: "",
        //   },
        //   message: "Successfully! Record has been fetched.",
        // });
      }
    );
  });
});