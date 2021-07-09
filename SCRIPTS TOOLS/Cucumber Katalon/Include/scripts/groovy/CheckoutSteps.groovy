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



class CheckoutSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("Im on the cart list and i want to process it")
	def Im_on_the_cart_list_and_i_want_to_process_it() {
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Checkout'))
		WebUI.delay(2)
		//WebUI.verifyTextPresent("Your Cart", false)
		WebUI.delay(2)
	}

	@When("I click button checkout")
	def I_click_button_checkout() {
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Checkout'))
	}

	@And("I input my First Name (.*)")
	def I_input_my_First_Name (String FirstName ) {
		WebUI.delay(2)
		//WebUI.verifyTextPresent("Checkout: Your Information", false)
		WebUI.setText(findTestObject('Object Repository/SD_Checkout/Checkout_Input_FirstName'), FirstName)
	}

	@And("I input my Last Name (.*)")
	def I_input_my_Last_Name (String LastName ) {
		WebUI.delay(2)
		WebUI.setText(findTestObject('Object Repository/SD_Checkout/Checkout_Input_LastName'), LastName)
	}

	@And("I input my Postal ZIP Code (.*)")
	def I_input_my_Postal_ZIP_Code (String ZIPCode) {
		WebUI.delay(2)
		WebUI.setText(findTestObject('Object Repository/SD_Checkout/Checkout_Input_ZIPCode'), ZIPCode)
	}

	@And("I click button continue")
	def I_click_butto_Continue () {
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Continue'))
	}

	@And("I click button finish")
	def I_click_button_finish() {
		WebUI.delay(2)
		//WebUI.verifyTextPresent("Checkout: Overview", false)
		WebUI.delay(2)
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Finish'))
		WebUI.delay(2)
		WebUI.click(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Finish'))
	}
	@Then("Finish to order")
	def Finish_to_order () {
		WebUI.verifyTextPresent("THANK YOU FOR YOUR ORDER", false)
		WebUI.delay(2)
	}
}