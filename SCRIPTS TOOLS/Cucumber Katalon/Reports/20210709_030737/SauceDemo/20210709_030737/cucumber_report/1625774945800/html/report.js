$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ASUS/Katalon Studio/SauceDemo_Amartha/Include/features/Login/LogOut_Valid.feature");
formatter.feature({
  "name": "Logout",
  "description": "\t\t\tI want to logout from my saucedemo",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "valid Logout from saucedemo",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to click button burger",
  "keyword": "Given "
});
formatter.step({
  "name": "I click Logout",
  "keyword": "When "
});
formatter.step({
  "name": "Finish logout and direct to the page login",
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
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        ""
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
  "name": "valid Logout from saucedemo",
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
  "name": "I want to click button burger",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.I_want_to_click_button_burger()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Logout",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.I_click_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Finish logout and direct to the page login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Finish_logout_and_direct_to_the_page_login()"
});
formatter.result({
  "status": "passed"
});
});