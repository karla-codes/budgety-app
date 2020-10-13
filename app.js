// Budget Data Controller
var budgetController = (function() {

})();

// UI Controller
var UIController = (function() {

  // some code

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  const btnTag = document.querySelector('.add__btn');

  const ctrlAddItem = function() {
    console.log('It works.')

    // 1. Get the input field data

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display budget on UI

  }

  btnTag.addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    
    if (e.key === 'Enter') {
      ctrlAddItem(); 
    }
  })

})(budgetController, UIController);