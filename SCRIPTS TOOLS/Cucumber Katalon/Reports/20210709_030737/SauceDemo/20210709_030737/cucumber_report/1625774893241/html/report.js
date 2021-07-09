$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ASUS/Katalon Studio/SauceDemo_Amartha/Include/features/Login/LoginValid.feature");
formatter.feature({
  "name": "Login feature conditions",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "This test case for valid Login scenario",
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
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e Valid",
  "keyword": "When "
});
formatter.step({
  "name": "User click button login",
  "keyword": "And "
});
formatter.step({
  "name": "Success and go to dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
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
  "name": "This test case for valid Login scenario",
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
  "name": "User enters standard_user and secret_sauce Valid",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.User_enters_username_and_password_Valid(String,String)"
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
  "name": "Success and go to dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Success_and_go_to_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
});