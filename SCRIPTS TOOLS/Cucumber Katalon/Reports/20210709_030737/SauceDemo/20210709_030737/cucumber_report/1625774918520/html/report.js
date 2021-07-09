$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ASUS/Katalon Studio/SauceDemo_Amartha/Include/features/Checkout/Checkouts.feature");
formatter.feature({
  "name": "Checkouts",
  "description": "  I want to checkout my item on cart",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Checkout steps",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Im on the cart list and i want to process it",
  "keyword": "Given "
});
formatter.step({
  "name": "I click button checkout",
  "keyword": "When "
});
formatter.step({
  "name": "I input my First Name \u003cFirstName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input my Last Name \u003cLastName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input my Postal ZIP Code \u003cZIPCode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click button continue",
  "keyword": "And "
});
formatter.step({
  "name": "I click button finish",
  "keyword": "And "
});
formatter.step({
  "name": "Finish to order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "ZIPCode"
      ]
    },
    {
      "cells": [
        "Ekki Permana",
        "QA Amartha",
        "5343232"
      ]
    }
  ],
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.scenario({
  "name": "Checkout steps",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    },
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Im on the cart list and i want to process it",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckoutSteps.Im_on_the_cart_list_and_i_want_to_process_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button checkout",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.I_click_button_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input my First Name Ekki Permana",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.I_input_my_First_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input my Last Name QA Amartha",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.I_input_my_Last_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input my Postal ZIP Code 5343232",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.I_input_my_Postal_ZIP_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button continue",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.I_click_butto_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button finish",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.I_click_button_finish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Finish to order",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.Finish_to_order()"
});
formatter.result({
  "status": "passed"
});
});