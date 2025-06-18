
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guest-form');
    const input = document.getElementById('guest-name');
    // Select the ul inside the display div
    const list = document.getElementById('display-guest-list');

    // Guest list
    let guests = [];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the value from the input field
        const guestName = input.value.trim();

        // Don't add empty names
        if (guestName === '') {
            alert('Please enter a guest name!');
            return;
        }

        if (guests.length >= 10) {
            alert('OOPS! Guest List is full!');
            return;
        }

        const guest = {
            id: Date.now(),
            name: guestName, // Use guestName here
            attending: true,
            addedAt: new Date().toLocaleDateString()
        };

        guests.push(guest);
        renderList();
        form.reset(); // Clear the input field
    });

    function renderList() {
        list.innerHTML = ''; // Clear existing list items

        guests.forEach(guest => {
            const li = document.createElement('li');
            li.textContent = `${guest.name} (${guest.attending ? 'Attending' : 'Not Attending'})`;
            li.style.color = guest.attending ? 'green' : 'red'; // Change color according attendance status

            const toggleBtn = document.createElement('button'); // Corrected: only one declaration
            toggleBtn.textContent = 'Attendance Status';
            toggleBtn.addEventListener('click', () => {
                guest.attending = !guest.attending;
                renderList(); // Re-render the list to show updated status
            });

            // Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.marginLeft = '10px'; // Add some spacing
            deleteBtn.addEventListener('click', () => {
                // Filter out the guest with the matching ID
                guests = guests.filter(item => item.id !== guest.id);
                renderList(); // Re-render the list after deletion
            });

            // Append the button to the list item
            li.appendChild(toggleBtn);
            // Append the delete button
            li.appendChild(deleteBtn); 
            // Append the list item to the ul (the 'list' element)
            list.appendChild(li);
        });
    }
});