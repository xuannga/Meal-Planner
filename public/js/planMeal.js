const mealPlanFormHandler = async (event) => {
    event.preventDefault();

    const id = parseInt(document.querySelector('input[name="day"]:checked').value) + parseInt(document.querySelector('input[name="meal"]:checked').value);
    const mealName = document.querySelector('#myMeal').value.trim();
    const mealQty = document.querySelector('#mealQuantity').value
    if (id && mealName && mealQty) {

        const response = await fetch(`/api/plan/${id}`, {
            method: 'PUT',
            body: JSON.stringify({mealName, mealQty}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add meal to plan');
        }
    }   
};

document.querySelector('.planning-form').addEventListener('submit', mealPlanFormHandler);