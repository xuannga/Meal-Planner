const mealFormHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

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

const deleteButtonHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/meals/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to create new meal');
    }
}

document.querySelector('.meal-form').addEventListener('submit', mealFormHandler);
// document.querySelector('#meal-delete').addEventListener('click', deleteButtonHandler);

const deleteButtons = document.getElementsByClassName('meal-delete')

for (let i = 0; i < deleteButtons.length; i++) {

    const button = deleteButtons[i];

    button.addEventListener('click', deleteButtonHandler);
    
}
