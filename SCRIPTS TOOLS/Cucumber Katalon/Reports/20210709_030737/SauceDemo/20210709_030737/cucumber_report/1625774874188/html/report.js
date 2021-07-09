$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ASUS/Katalon Studio/SauceDemo_Amartha/Include/features/Login/LoginInvalid.feature");
formatter.feature({
  "name": "Login feature conditions",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This test case for Invalid Login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User navigates to open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e Invalid",
  "keyword": "When "
});
formatter.step({
  "name": "User click button login",
  "keyword": "And "
});
formatter.step({
  "name": "Failed to login page saucedemo",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "username"
      ]
    },
    {
      "cells": [
        "amartha",
        "qaqa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "This test case for Invalid Login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User navigates to open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.User_navigates_to_open_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters qaqa and amartha Invalid",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.User_enters_username_and_password_Invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.User_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Failed to login page saucedemo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Failed_to_login_page_saucedemo()"
});
formatter.result({
  "status": "passed"
});
});