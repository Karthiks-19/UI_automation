const LoginPage = require("../pageobjects/login.page");
const CustomerPage = require("../pageobjects/customer.page");
const Logindata = require("../testdata.js/logindata");
const Customerdata = require("../testdata.js/customerData");
const Alertspage = require("../pageobjects/genericAlertMessages");
const assert = require("assert");

describe("As an new admin, user", function () {
  it("logins and search for customer", function () {
    LoginPage.login(Logindata.username, Logindata.password);
    LoginPage.loginSuccessMessage.waitForClickable();
    Alertspage.closeAlertMessage();
    CustomerPage.clickOnCustomerMenu.waitForDisplayed();
    CustomerPage.customerSearchMenu();
    assert.equal("Customer Management", CustomerPage.customerHeading.getText());
  });

  it("should be able to see error message on blank search", function () {
    CustomerPage.enterCustomerSearchDetails();
    CustomerPage.clickOnCustomerSearch.setValue("");
    CustomerPage.clickSearchButton();
    CustomerPage.errorOnBlankSearch.waitForClickable();
    assert.equal(
      "Search field can't be empty, please enter a valid email ID",
      CustomerPage.errorOnBlankSearch.getText()
    );
    Alertspage.closeAlertMessage();
  });

  it("should be able to enter customer details and search", function () {
    CustomerPage.enterCustomerSearchDetails();
    CustomerPage.clickOnCustomerSearch.setValue(Customerdata.customerEmailId);
    CustomerPage.clickSearchButton();
    assert.equal(
      Customerdata.customerId,
      CustomerPage.customerSearchResults.getText()
    );
  });

  it("should be able to expand customer details", function () {
    CustomerPage.viewCustomerDetails();
    assert.equal(
      "Customer Details",
      CustomerPage.expandAndVerifyText.getText()
    );
  });

  it("should get error message with wrong customer email-id", function () {
    CustomerPage.enterCustomerSearchDetails();
    CustomerPage.clickOnCustomerSearch.setValue(Customerdata.wrongCustomerId);
    CustomerPage.clickSearchButton();
    CustomerPage.errorOnWrongCustomerId.waitForClickable();
    assert.equal(
      "No customer matching the search found",
      CustomerPage.errorOnWrongCustomerId.getText()
    );
    Alertspage.closeAlertMessage();
  });

  it("should get error message with invalid email-id", function () {
    CustomerPage.enterCustomerSearchDetails();
    CustomerPage.clickOnCustomerSearch.setValue(Customerdata.invalidEmailId);
    CustomerPage.clickSearchButton();
    CustomerPage.errorOnInvalidEmailId.waitForClickable();
    assert.equal(
      "Invalid email ID, please enter a valid email ID",
      CustomerPage.errorOnInvalidEmailId.getText()
    );
    Alertspage.closeAlertMessage();
  });

  it("should be able to logout", function () {
    LoginPage.clickOnLogout();
    LoginPage.titleOnLoginPage.waitForDisplayed();
    assert.equal("Welcome back!", LoginPage.titleOnLoginPage.getText());
    browser.pause(1000);
  });
});
