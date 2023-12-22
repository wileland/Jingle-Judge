async function addChildFormHandler() {
    // event.preventDefault();

    const name = document.querySelector('#add-child').value.trim();

    console.log(name);
        
        const response = await fetch('/parent', {
            method: 'post',
            body: JSON.stringify({
                name,
            }),
            headers: { 'Content-Type': 'application/json'},
        });

        // if (response.ok) {
        //     alert('child added successfully!');
        // } else {
        //     alert(response.statusText);
        // }
        
}        

document.querySelector('#add-child-form').addEventListener('submit', addChildFormHandler);