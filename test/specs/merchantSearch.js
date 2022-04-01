const LoginPage = require("../pageobjects/login.page");
const MerchantPage = require("../pageobjects/merchant.page");
const Logindata = require("../testdata.js/logindata");
const Alertspage = require("../pageobjects/genericAlertMessages");
const assert = require("assert");

describe("As an admin user,, user", function () {
  it("logins and search merchants", function () {
    LoginPage.login(Logindata.username, Logindata.password);
    assert.equal(
      "You have successfully logged in 🎉",
      LoginPage.loginSuccessMessage.getText()
    );
    Alertspage.closeAlertMessage();

    MerchantPage.merchantSearch();
    const url = browser.getUrl();
    assert.equal("https://uat01-admin.socashapp.io/cash-point", url);
  });

  it("should get error message if merchant searches with blank search", function () {
    MerchantPage.clickOnMerchantName.setValue("");
    MerchantPage.searchForMerchant();
    browser.waitUntil(
      () =>
        MerchantPage.errorForBlankSearch.getText() ===
        "Search field can't be empty, please enter a valid merchant name",
      {
        timeout: 5000,
        timeoutMsg: "expected text to be different",
      }
    );
    Alertspage.closeAlertMessage();
  });

  it("should be able to enter merchant name and search", function () {
    MerchantPage.merchantName();
    MerchantPage.clickOnMerchantName.setValue("karthi");
    MerchantPage.searchForMerchant();
  });

  it("should be able to expand merchant details", function () {
    MerchantPage.viewMerchantDetails();
    assert.equal(
      "Merchant Details",
      MerchantPage.getTextOfMerchantDetails.getText()
    );
    browser.pause(3000);
  });

  it("should be able to see error message if no merchants found", function () {
    MerchantPage.merchantName();
    MerchantPage.clickOnMerchantName.setValue("karthik123");

    MerchantPage.searchForMerchant();
    MerchantPage.errorForNoMerchant.waitForClickable();
    assert.equal(
      "No merchant matching the search found",
      MerchantPage.errorForNoMerchant.getText()
    );
  });

  it("should be able to advance search for merchants", function () {
    MerchantPage.advanceMerchant();
  });

  it("should be able to advance search for merchants by name", function () {
    MerchantPage.advanceSearchMerchantName();
    MerchantPage.enterName.setValue("karthi");
    MerchantPage.advanceSearch();
  });

  it("should be able to RESET the search", function () {
    MerchantPage.reset();
  });

  it("should be able to advance search for merchants by email-id", function () {
    MerchantPage.emailSearch();
    MerchantPage.enterEmail.setValue("karthikisrael01@mailinator.com");
    MerchantPage.advanceSearch();
  });

  it("should be able to advance search for merchants by merchant-id", function () {
    MerchantPage.reset();
    MerchantPage.searchWithMerchantId();
    MerchantPage.merchantId.setValue("MILKAR17468842");
    MerchantPage.advanceSearch();
  });
  it("should be able to logout", function () {
    LoginPage.clickOnLogout();
    LoginPage.titleOnLoginPage.waitForClickable();
    assert.equal("Welcome back!", LoginPage.titleOnLoginPage.getText());
    browser.pause(2000);
  });
});
