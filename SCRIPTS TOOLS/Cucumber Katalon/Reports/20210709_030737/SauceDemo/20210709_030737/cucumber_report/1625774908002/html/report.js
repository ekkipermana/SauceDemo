$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ASUS/Katalon Studio/SauceDemo_Amartha/Include/features/Cart/AddToCart_item1.feature");
formatter.feature({
  "name": "Added item to cart",
  "description": "  I want to add bags item to cart",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add item bags to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Im on the page product",
  "keyword": "Given "
});
formatter.step({
  "name": "I want to add Sauce Labs backpack to cart",
  "keyword": "When "
});
formatter.step({
  "name": "I finish to add that item to cart",
  "keyword": "And "
});
formatter.step({
  "name": "I open the list cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ],
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.scenario({
  "name": "Add item bags to cart",
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
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Im on the page product",
  "keyword": "Given "
});
formatter.match({
  "location": "CartSteps.Im_on_the_page_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to add Sauce Labs backpack to cart",
  "keyword": "When "
});
formatter.match({
  "location": "CartSteps.I_want_to_add_Sauce_Labs_backpack_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I finish to add that item to cart",
  "keyword": "And "
});
formatter.match({
  "location": "CartSteps.I_finish_to_add_that_item_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open the list cart",
  "keyword": "Then "
});
formatter.match({
  "location": "CartSteps.I_open_the_list_cart()"
});
formatter.result({
  "status": "passed"
});
});