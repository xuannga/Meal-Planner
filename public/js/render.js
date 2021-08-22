const newCupboarditem = () => {
    document.getElementById('subCup').addEventListener('click', async function (event) {
        event.preventDefault();
        event.stopPropagation();
        let isRefrig=false;
        const name = document.getElementById('cupItemName').value.trim();
        const quantity = document.getElementById('cupItemQuantity').value.trim();
        const UOM = document.getElementById('cupItemUOM').value.trim();
        isRefrig = document.querySelector('input[value="Refrig"]').checked
        const user_id = 1;
        if (name && quantity && UOM ) {
            const response = await fetch('/api/cupboards', {
                method: 'POST',
                body: JSON.stringify({ name, quantity, UOM, isRefrig }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log(response)
                document.location.replace('/cupboard');
            } else {
                alert('Failed to add item.');
            }
        }
    })
};

newCupboarditem();
    