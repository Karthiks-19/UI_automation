class ForgotPasswordPage {
  get forgotPasswordTitle() {
    return $("p.title.my-5.is-3.has-text-weight-bold");
  }

  get emailAddress() {
    return $("#forgot_password\\.email_address");
  }

  get sendEmailButton() {
    return $('button[type="button"]');
  }

  get passwordResetEmailSent() {
    return $(".Toastify__toast-body");
  }

  get loginNow() {
    return $("div.flex.mt-1.columns.is-multiline > a");
  }

  enterEmailAddress(email) {
    this.emailAddress.waitForDisplayed();
    this.emailAddress.setValue(email);
  }

  clickSendEmail() {
    this.sendEmailButton.waitForDisplayed();
    this.sendEmailButton.click();
  }

  clickLoginNow() {
    this.loginNow.click();
  }
}
module.exports = new ForgotPasswordPage();
