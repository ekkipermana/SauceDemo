*** Settings ***
Library           Selenium2Library

*** Variables ***
${txtUsername}    id=user-name
${txtPassword}    id=password
${btnCheckout}    id=checkout
${btnContinue}    id=continue
${btnBackHome}    id=back-to-products
${btnLogin}       login_button
${btnShoppingCartContainer}    id=shopping_cart_container

*** Test Cases ***
TC_OpenTheWebsites
    [Documentation]    This Test case to navigate user to URL https://www.saucedemo.com/
    Open Browser    https://www.saucedemo.com/    Chrome
    Sleep    2

TC_Login_Invalid
    [Documentation]    This Test test login with invalid username and invalid password
    Element Should Be Visible    login-button
    Sleep    2s
    Input Text    ${txtUsername}    hehehehe
    Sleep    2s
    Input Text    ${txtPassword}    heheheheehe
    Sleep    2s
    Click Button    login-button
    Sleep    2s
    Clear Element Text    ${txtUsername}
    Clear Element Text    ${txtPassword}
    Sleep    2s

TC_Login_Valid
    [Documentation]    This Test test login with valid username and valid password
    Element Should Be Visible    login-button
    Sleep    2s
    Input Text    ${txtUsername}    standard_user
    Sleep    2s
    Input Text    ${txtPassword}    secret_sauce
    Sleep    2s
    Click Button    login-button
    Sleep    3s

TC_Cart_AddToCart
    [Documentation]    This Test case for add to cart 1 item and 2 items
    Click Button    add-to-cart-sauce-labs-backpack
    Sleep    2
    Click Button    add-to-cart-sauce-labs-bike-light
    Sleep    2
    Element Should Be Visible    shopping_cart_container

TC_Cart_List
    [Documentation]    This Test case for see cart list
    Click Element    shopping_cart_container
    Sleep    2
    Element Should Be Visible    checkout

TC_CheckOut
    [Documentation]    This Test case for checkout proses
    Click Button    checkout
    Sleep    2
    Input Text    first-name    Ekki Permana
    Sleep    2
    Input Text    last-name    to be QA Amartha
    Sleep    2
    Input Text    postal-code    15270
    Sleep    2
    Click Button    continue
    Sleep    2
    Execute Javascript    window.scrollTo(0,9999999)
    Sleep    2
    Click Button    finish
    Sleep    2
    Element Should Be Visible    back-to-products
    Sleep    2

TC_LogOut
    [Documentation]    This test case for LogOut
    Click Element    react-burger-menu-btn
    Sleep    2
    Click Element    logout_sidebar_link
    Sleep    4
    Element Should Be Visible    login-button
    Close Browser
