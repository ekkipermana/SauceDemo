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



class CartSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given ("Im on the page product")
	def Im_on_the_page_product() {
		println("\n Im on the page product")
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_Cart/Cart_Product1'))
		WebUI.delay(2)
	}

	@When ("I want to add Sauce Labs backpack to cart")
	def I_want_to_add_Sauce_Labs_backpack_to_cart() {
		println("\n I want to add Sauce Labs backpack to cart")
		WebUI.click(findTestObject('Object Repository/SD_Cart/Cart_Product1'))
		WebUI.delay(2)
	}

	@And ("I finish to add that item to cart")
	def  I_finish_to_add_that_item_to_cart () {
		println("\n I finish to add that item to cart")
		//WebUI.verifyElementNotVisible(findTestObject('Object Repository/SD_Cart/Cart_Product1'))
		WebUI.delay(2)
	}

	@Then ("I open the list cart")
	def I_open_the_list_cart() {
		println("\n I open the list cart")
		//WebUI.acceptAlert()
		WebUI.click(findTestObject('Object Repository/SD_Cart/Cart_CartLink'))
		WebUI.verifyElementClickable(findTestObject('Object Repository/SD_Checkout/Checkout_Button_Checkout'))
		WebUI.delay(2)
	}
}