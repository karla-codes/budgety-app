// Budget Data Controller
var budgetController = (function() {

})();

// UI Controller
var UIController = (function() {

  const DOMstrings = {
    typeTag: '.add__type',
    descriptionTag: '.add__description',
    valueTag: '.add__value',
    buttonTag: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        // will be either inc or exp
        type: document.querySelector(DOMstrings.typeTag).value,
        description: document.querySelector(DOMstrings.descriptionTag).value,
        value: document.querySelector(DOMstrings.valueTag).value
      }
    },
    
    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  const DOM = UICtrl.getDOMstrings();

  const ctrlAddItem = function() {

    // 1. Get the input field data
    const input = UICtrl.getInput();
    console.log(input)

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display budget on UI

  }

  const btnTag = document.querySelector(DOM.buttonTag);

  btnTag.addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    
    if (e.key === 'Enter') {
      ctrlAddItem(); 
    }
  })

})(budgetController, UIController);