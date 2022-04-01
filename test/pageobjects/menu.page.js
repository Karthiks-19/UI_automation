class MenuPage {
  get mainMenu() {
    return $("ul.menu-list");
  }

  get mainMenuList() {
    return this.mainMenu.$$("li");
  }

  get getTextForMenuItems() {
    return this.mainMenuList.filter((elements) => {
      console.log(elements.getText());
    });
  }

  get subHeading() {
    return $("div.content.tab.pt-5.has-text-centered");
  }
}

module.exports = new MenuPage();
