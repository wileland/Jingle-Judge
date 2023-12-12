async function addChildHandler(event) {
    event.preventDefault();

    const childname = document.querySelector('#childname-add').value.trim();

    if (childname) {
        const response = await fetch ('/api/parent', {
            method: 'post',
            body: JSON.stringify({
                childname,
            }),
            headers:  { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace('/api/parent/add')
        } else {
            alert(response.statusText);
        }
    };
};

document.querySelector('#add-btn').addEventListener('add', addChildHandler);