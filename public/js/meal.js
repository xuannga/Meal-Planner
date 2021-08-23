const mealFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#mealName').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();

    if (name && instructions) {

        const response = await fetch(`/api/meals`, {
            method: 'POST',
            body: JSON.stringify({name, instructions}),
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