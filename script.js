document.getElementById('cd-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('cd-title').value;
    const artist = document.getElementById('cd-artist').value;
    const year = document.getElementById('cd-year').value;

    addCdToTable(title, artist, year);

    // Clear the input fields
    document.getElementById('cd-title').value = '';
    document.getElementById('cd-artist').value = '';
    document.getElementById('cd-year').value = '';
});

function addCdToTable(title, artist, year) {
    const tableBody = document.querySelector('#cd-table tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${artist}</td>
        <td>${year}</td>
        <td><button class="delete-button">Delete</button></td>`;

    tableBody.appendChild(row);

    // Attach event listener for the delete button
    const deleteButton = row.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(row);
    });
}
