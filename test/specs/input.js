import TestPage from '../pageobjects/test.page.js';

it('should set value for a certain element', async () => {
    TestPage.open();
    await TestPage.inputField.setValue(123);
    console.log(await TestPage.inputField.getValue()); 
});