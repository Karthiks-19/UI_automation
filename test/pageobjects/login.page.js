class LoginPage {
  get enterUserName() {
    return $("#login_screen\\.username");
  }

  get enterPassword() {
    return $("#userPassword");
  }

  get clickLoginButton() {
    return $('button[type="button"]');
  }

  get loginSuccessMessage() {
    return $(".Toastify__toast-body");
  }

  get clickLogout() {
    return $("ul > li:nth-child(5) > a > div > div.menu_text.column");
  }

  get titleOnLoginPage() {
    return $("p.title.my-5.is-3.has-text-weight-bold");
  }

  get resetHere() {
    return $("a");
  }

  get errorMessageOnInvalidCreds() {
    return $(
      "div.ml-1.mt-2.message_text_error.flex.columns.is-multiline.is-vcentered"
    );
  }

  clickOnLogout() {
    this.clickLogout.waitForDisplayed();
    this.clickLogout.click();
  }

  clickOnResetHere() {
    this.resetHere.waitForDisplayed();
    this.resetHere.click();
  }

  login(username, password) {
    this.enterUserName.waitForClickable();
    this.enterUserName.setValue(username);
    this.enterPassword.setValue(password);
    browser.pause(1000);
    this.clickLoginButton.click();
  }
}

module.exports = new LoginPage();
