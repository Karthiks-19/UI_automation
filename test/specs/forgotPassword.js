const LoginPage = require("../pageobjects/login.page");
const ForgotPasswordPage = require("../pageobjects/forgotPassword.page");
const Alertspage = require("../pageobjects/genericAlertMessages");
const assert = require("assert");

describe("User should be able to reset creds", function () {
  it("Should trigger email to reset password", function () {
    LoginPage.clickOnResetHere();
    ForgotPasswordPage.enterEmailAddress("karthiikuser11@mailinator.com");
    ForgotPasswordPage.clickSendEmail();
    ForgotPasswordPage.passwordResetEmailSent.waitForClickable();
    assert.equal(
      "Email to reset password has been send to karthiikuser11@mailinator.com",
      ForgotPasswordPage.passwordResetEmailSent.getText()
    );
    Alertspage.closeAlertMessage();
  });

  it("Should be able to click login", function () {
    ForgotPasswordPage.clickLoginNow();
    LoginPage.titleOnLoginPage.waitForDisplayed();
    assert.equal("Welcome back!", LoginPage.titleOnLoginPage.getText());
  });
});
