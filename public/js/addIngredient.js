const meal_id = document.getElementById('meal-id').getAttribute('data-id');

const addIngredientHandler = async (event) => {
    event.preventDefault();

    const cupboardItem =  document.getElementById('myIngredient').value.trim();
    const quantity = document.getElementById('quantity').value.trim();

    if (cupboardItem && quantity) {

        const response = await fetch(`/api/ingredients`, {
            method: 'POST',
            body: JSON.stringify({cupboardItem, quantity, meal_id}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add ingredient to meal');
        }
    }
};

document.querySelector('.ingredient-form').addEventListener('submit', addIngredientHandler)