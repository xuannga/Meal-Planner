const mealPlanFormHandler = async (event) => {
    event.preventDefault();

    const day = document.querySelector('input[name="day"]:checked').value;
    const time = document.querySelector('input[name="meal"]:checked').value;
    const mealName = document.querySelector('#myMeal').value.trim();
    const meal_qty = document.getElementById('quantity').value.trim();

    if (day && mealName && time  && meal_qty) {

        const response = await fetch(`/api/plan/`, {
            method: 'PUT',
            body: JSON.stringify({mealName, day, time, meal_qty}),
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