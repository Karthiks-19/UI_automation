class Alertspage {
  get closeAlert() {
    return $("svg");
  }

  closeAlertMessage() {
    this.closeAlert.click();
  }
}

module.exports = new Alertspage();
