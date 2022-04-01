const LoginPage = require("../pageobjects/login.page");
const MainPage = require("../pageobjects/menu.page");
const Logindata = require("../testdata.js/logindata");
const assert = require("assert");

describe("As an admin user, user", function () {
  it("Should be able to login", function () {
    LoginPage.login(Logindata.username, Logindata.password);
    LoginPage.loginSuccessMessage.waitForClickable();
    assert.equal(
      "You have successfully logged in 🎉",
      LoginPage.loginSuccessMessage.getText()
    );
  });

  it("should be able to get list of menu items", function () {
    MainPage.getTextForMenuItems;
    expect(MainPage.subHeading.getText()).toEqual("MAIN MENU");
    browser.pause(1000);
  });
});
