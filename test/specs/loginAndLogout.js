const LoginPage = require("../pageobjects/login.page");
const Logindata = require("../testdata.js/logindata");
const ForgotPasswordPage = require("../pageobjects/forgotPassword.page");
const Alertspage = require("../pageobjects/genericAlertMessages");
const assert = require("assert");

describe("As an admin user, user", function () {
  it("Should get error message on wrong email-id", function () {
    LoginPage.login(Logindata.wrongUsername, Logindata.password);
    LoginPage.errorMessageOnInvalidCreds.waitForClickable();
    assert.equal(
      "Wrong Email or Password, please try again.",
      LoginPage.errorMessageOnInvalidCreds.getText()
    );
  });

  it("Should get error message on wrong password", function () {
    LoginPage.login(Logindata.username, Logindata.wrongPassword);
    LoginPage.errorMessageOnInvalidCreds.waitForClickable();
    assert.equal(
      "Wrong Email or Password, please try again.",
      LoginPage.errorMessageOnInvalidCreds.getText()
    );
  });

  it("Should be able to login", function () {
    LoginPage.login(Logindata.username, Logindata.password);
    LoginPage.loginSuccessMessage.waitForClickable();
    assert.equal(
      "You have successfully logged in 🎉",
      LoginPage.loginSuccessMessage.getText()
    );
    Alertspage.closeAlertMessage();
  });

  it("Should be able Logout", function () {
    LoginPage.clickOnLogout();
    assert.equal("Welcome back!", LoginPage.titleOnLoginPage.getText());
  });

  it("Should be able to reset password", function () {
    LoginPage.clickOnResetHere();
    assert.equal(
      "Forgot Password?",
      ForgotPasswordPage.forgotPasswordTitle.getText()
    );
  });
});
