class MerchantPage {
  get clickOnMerchant() {
    return $("[href='/cash-point']");
  }
  get clickOnMerchantName() {
    return $("input#cashpoint\\.search_label");
  }
  get clickOnSearch() {
    return $("button.has-text-weight-medium.default.is-fullwidth");
  }
  get clickOnMerchantAdv() {
    return $("button.has-text-weight-medium.secondary.is-fullwidth");
  }
  get enterName() {
    return $("input#NAME");
  }
  get clickOnReset() {
    return $("button.has-text-weight-medium.secondary.is-fullwidth");
  }
  get enterEmail() {
    return $("input#EMAIL");
  }
  get merchantId() {
    return $("input#ID");
  }
  get errorForNoMerchant() {
    return $(".Toastify__toast-body");
  }
  get errorForBlankSearch() {
    return $(".Toastify__toast-body");
  }

  get clickOnAdvSearch() {
    return $("button.has-text-weight-medium.default.is-fullwidth");
  }
  get merchantSearchResults() {
    return $(
      "div:nth-child(2) > div > div.box.main_section.column > div > div:nth-child(2) > div.box.bg_gray.simple_list_box > div > table > tbody > tr:nth-child(1) > td:nth-child(1)"
    );
  }
  get merchantDetails() {
    return $(
      "div:nth-child(2) > div > div.box.main_section.column > div > div:nth-child(2) > div.box.bg_gray.simple_list_box > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > svg"
    );
  }
  get getTextOfMerchantDetails() {
    return $("h1.title.is-5.pl-5");
  }
  viewMerchantDetails() {
    this.merchantDetails.click();
  }
  merchantSearch() {
    this.clickOnMerchant.click();
  }
  merchantName() {
    this.clickOnMerchantName.click();
  }
  searchForMerchant() {
    this.clickOnSearch.click();
  }
  advanceMerchant() {
    this.clickOnMerchantAdv.click();
  }
  advanceSearchMerchantName() {
    this.clickOnMerchantAdv.click();
  }
  advanceSearch() {
    this.clickOnAdvSearch.click();
  }
  reset() {
    this.clickOnReset.click();
  }
  emailSearch() {
    this.enterEmail.click();
  }
  searchWithMerchantId() {
    this.merchantId.click();
  }
}

module.exports = new MerchantPage();
