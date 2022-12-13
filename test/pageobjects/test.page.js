import Page from './page.js';

class TestPage extends Page {

    get inputField() {
        return $('[data-field="score"]');
    };

    open() {
        super.open();
    };
};

export default new TestPage();