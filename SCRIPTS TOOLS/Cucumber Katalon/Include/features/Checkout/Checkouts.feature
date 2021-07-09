#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Checkouts
  I want to checkout my item on cart

  @tag1
  Scenario Outline: Checkout steps 
    Given Im on the cart list and i want to process it
    When I click button checkout
    And I input my First Name <FirstName>
    And I input my Last Name <LastName>
    And I input my Postal ZIP Code <ZIPCode>
    And I click button continue
    And I click button finish
    Then Finish to order

		@tag3
    Examples: 
      | FirstName        | LastName       | ZIPCode    | 
      | Ekki Permana     |  QA Amartha    | 5343232     | 