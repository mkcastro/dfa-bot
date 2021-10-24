describe("group of tests", () => {
    context("asdf", () => {
        it.only("it passes", () => {
            cy.visit(
                "https://www.passport.gov.ph/appointment/individual/schedule"
            );
            cy.url().should("include", "/appointment/individual/schedule");
        });
    });
});
