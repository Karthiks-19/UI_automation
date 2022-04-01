class TransactionSearchPage {
  get clickOnTransactionMenu() {
    return $("[href='/transaction']");
  }
  get searchButton() {
    return $("div.no_flex.column.ml-4 > button");
  }
  get advanceSearchButton() {
    return $(`//button[text()="ADVANCED SEARCH"]`);
  }
  get enterMerchantID() {
    return $("input#MERCHANT\\ ID.input");
  }
  get clickOnReset() {
    return $(`//button[text()="RESET"]`);
  }
  get enterUserId() {
    return $("input#USER\\ ID.input");
  }
  get searchButtonInAdvancedSearch() {
    return $("button.has-text-weight-medium.default.is-fullwidth.button");
  }

  get clickLogout() {
    return $("ul > li:nth-child(5) > a > div > div.menu_text.column");
  }

  get searchResultTableColumns() {
    return $("div.box.bg_gray.simple_list_box > div > table > thead > tr");
  }

  specificColumnName(index) {
    return this.searchResultTableColumns.$(`th:nth-child(${index})`);
  }

  clickOnSearchButton() {
    this.searchButton.click();
  }

  get clickOnAdvancedSearchButton() {
    this.advanceSearchButton.click();
  }

  get clickOnSearchButtonInAdvancedSearch() {
    this.searchButtonInAdvancedSearch.click();
  }
}

module.exports = new TransactionSearchPage();
