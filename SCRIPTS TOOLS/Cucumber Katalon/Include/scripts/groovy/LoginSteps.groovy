import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.By
import org.openqa.selenium.Keys
import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class LoginSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */



	@Given ("User navigates to open login page")
	def User_navigates_to_open_login_page() {
		WebUI.openBrowser('')
		println("\n User navigates to open login page")
		//WebUI.openBrowser('GlobalVariable.url, true')
		WebUI.navigateToUrl('https://www.saucedemo.com/')
		WebUI.delay(2)
	}

	@And ("User click button login")
	def User_click_button_login() {
		println("\n User click button login")
		WebUI.click(findTestObject('Object Repository/SD_LoginLogout/Login_Button'))
		WebUI.delay(2)
	}

	//------------------------------------------------------------------------------
	//----------------------SCRIPTS VALID LOGIN-------------------------------------
	//------------------------------------------------------------------------------


	@When ("User enters (.*) and (.*) Valid")
	def User_enters_username_and_password_Valid(String username, String password) {
		println ("\n I am inside enterCredentialsValid Saucedemo")
		println ("Username: "+username)
		WebUI.delay(2)
		println ("Password: "+password)
		WebUI.setText(findTestObject('Object Repository/SD_LoginLogout/Login_input_username'), username)
		WebUI.setText(findTestObject('Object Repository/SD_LoginLogout/Login_input_password'), password)
		WebUI.delay(2)
	}

	@Then ("Failed to login page saucedemo")
	def Failed_to_login_page_saucedemo() {
		println("\n Failed to login page saucedemo")
		//WebUI.acceptAlert()
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_LoginLogout/Login_Button'))
		WebUI.verifyTextPresent('Epic sadface: Username and password do not match any user in this service', false)
		WebUI.delay(3)
		WebUI.closeBrowser()
	}



	//--------------------------------------------------------------------------------
	//----------------------SCRIPTS INVALID LOGIN-------------------------------------
	//--------------------------------------------------------------------------------

	@When ("User enters (.*) and (.*) Invalid")
	def User_enters_username_and_password_Invalid(String username, String password) {
		println ("\n I am inside enterCredentialsInvValid Saucedemo")
		println ("Username: "+username)
		WebUI.delay(2)
		println ("Password: "+password)
		WebUI.setText(findTestObject('Object Repository/SD_LoginLogout/Login_input_username'), username)
		WebUI.setText(findTestObject('Object Repository/SD_LoginLogout/Login_input_password'), password)
		WebUI.delay(2)
	}



	@Then ("Success and go to dashboard page")
	def Success_and_go_to_dashboard_page() {
		println("\n Success and go to dashboard page")
		WebUI.verifyTextPresent('Sauce Labs Backpack', false)
		//WebUI.verifyAllLinksOnCurrentPageAccessible(true, [])
		WebUI.delay(2)
	}



	//--------------------------------------------------------------------------------
	//----------------------------SCRIPTS LOGOUT-----------------------------------------
	//-----------------------------------------------------------------------------------
	@Given ("I want to click button burger")
	def I_want_to_click_button_burger() {
		println ("\n I want to click button burger")
		WebUI.click(findTestObject('Object Repository/SD_LoginLogout/Logout_Menu'))
	}

	@When ("I click Logout")
	def I_click_Logout() {
		println ("\n I click Logout")
		WebUI.click(findTestObject('Object Repository/SD_LoginLogout/Logout_Link'))
		WebUI.delay(2)
	}

	@Then ("Finish logout and direct to the page login")
	def Finish_logout_and_direct_to_the_page_login() {
		println("\n Finish logout and direct to the page login")
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_LoginLogout/Login_Button'))
		//WebUI.verifyAllLinksOnCurrentPageAccessible(true, [])
		WebUI.delay(3)
		WebUI.closeBrowser()

	}



}