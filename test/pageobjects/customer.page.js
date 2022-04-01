class CustomerPage {
  get clickOnCustomerMenu() {
    return $("[href='/customer']");
  }
  get clickOnCustomerSearch() {
    return $("input#customer\\.search_label.input.search");
  }

  get clickOnSearch() {
    return $("button.has-text-weight-medium.default.is-fullwidth.button");
  }

  get clickLogout() {
    return $("ul > li:nth-child(5) > a > div > div.menu_text.column");
  }
  get customerHeading() {
    return $("p.title.mt-3.mb-5.is-3.has-text-weight-bold");
  }
  get errorOnBlankSearch() {
    return $(".Toastify__toast-body");
  }
  get errorOnWrongCustomerId() {
    return $(".Toastify__toast-body");
  }
  get errorOnInvalidEmailId() {
    return $(".Toastify__toast-body");
  }
  get customerSearchResults() {
    return $(
      "div:nth-child(2) > div > div.box.main_section.column > div > div:nth-child(2) > div.box.bg_gray.simple_list_box > div > table > tbody > tr.clickable_row > td:nth-child(2)"
    );
  }
  get expandCustomerDetails() {
    return $("svg.svg-inline--fa.fa-plus-square.fa-w-14");
  }
  get expandAndVerifyText() {
    return $("h1.title.is-5.pl-5");
  }

  customerSearchMenu() {
    this.clickOnCustomerMenu.click();
  }
  enterCustomerSearchDetails() {
    this.clickOnCustomerSearch.click();
  }
  clickSearchButton() {
    this.clickOnSearch.click();
  }
  viewCustomerDetails() {
    this.expandCustomerDetails.click();
  }
}

module.exports = new CustomerPage();
