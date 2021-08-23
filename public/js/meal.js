const mealFormHandler = async (event) => {
    event.preventDefault();

    const mealName = document.querySelector('#mealName').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();

    if (mealName && instructions) {

        const response = await fetch(`/api/mealsRoute`, {
            method: 'POST',
            body: JSON.stringify({mealName, instructions}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new meal');
        }
    }   
};

document.querySelector('.meal-form').addEventListener('submit', mealFormHandler);