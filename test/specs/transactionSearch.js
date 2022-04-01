const LoginPage = require("../pageobjects/login.page");
const TransactionSearchPage = require("../pageobjects/transactionsearch.page");
const Logindata = require("../testdata.js/logindata");
const assert = require("assert");

describe("As an admin user,", function () {
  it("should be able to see search and advanced search buttons ", function () {
    LoginPage.login(Logindata.username, Logindata.password);
    TransactionSearchPage.clickOnTransactionMenu.waitForDisplayed();
    TransactionSearchPage.clickOnTransactionMenu.click();
    TransactionSearchPage.advanceSearchButton.waitForDisplayed();
    assert.equal(true, TransactionSearchPage.advanceSearchButton.isDisplayed());
  });

  it("Should be able to see search result columns", function () {
    TransactionSearchPage.searchButton.waitForDisplayed();
    TransactionSearchPage.clickOnSearchButton();
    browser.pause(2000);
    assert.equal(
      "Socash Txn ID",
      TransactionSearchPage.specificColumnName(1).getText()
    );
    assert.equal(
      "Bank Txn ID",
      TransactionSearchPage.specificColumnName(2).getText()
    );
    assert.equal(
      "Product Type",
      TransactionSearchPage.specificColumnName(3).getText()
    );
    assert.equal(
      "Country",
      TransactionSearchPage.specificColumnName(4).getText()
    );
    assert.equal(
      "Currency",
      TransactionSearchPage.specificColumnName(5).getText()
    );
    assert.equal(
      "Amount",
      TransactionSearchPage.specificColumnName(6).getText()
    );
  });

  it("should be able search for transactions using merchant-id", function () {
    TransactionSearchPage.advanceSearchButton.waitForDisplayed();
    TransactionSearchPage.clickOnAdvancedSearchButton;
    TransactionSearchPage.enterMerchantID.setValue("MSGAUS83859660");
    TransactionSearchPage.clickOnSearchButtonInAdvancedSearch;
    assert.equal(
      TransactionSearchPage.enterMerchantID.getValue(),
      "MSGAUS83859660"
    );
    //To Do Date Picker
  });

  it("should be able to RESET the search", function () {
    TransactionSearchPage.enterMerchantID.setValue("MSGAUS83859660");
    TransactionSearchPage.clickOnSearchButtonInAdvancedSearch;
    assert.equal(
      TransactionSearchPage.enterMerchantID.getValue(),
      "MSGAUS83859660"
    );
    console.log(TransactionSearchPage.enterMerchantID.getValue());
    TransactionSearchPage.clickOnReset.click();
    assert.equal(TransactionSearchPage.enterMerchantID.getValue(), "");
  });

  it("should be able to advance search for transactions with user-id", function () {
    TransactionSearchPage.enterUserId.setValue("IL706869011754");
    TransactionSearchPage.clickOnSearchButtonInAdvancedSearch;
    browser.pause(2000);
    //To Do: Date Picker
  });

  it("should be able to logout", function () {
    LoginPage.clickOnLogout();
    assert.equal("Welcome back!", LoginPage.titleOnLoginPage.getText());
    browser.pause(2000);
  });
});
