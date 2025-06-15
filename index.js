document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('guest-form')
    const input = document.getElementById('guest-name')
    const list = document.getElementById('guest-list')})

    //Guest list
    let guests =[];

    form.addEventListener('submit', function (e) {
        e.preventDefault();
         
    if (guests.length >= 10) {
        alert('OOPS!Guest List is full!');
        return;
    }

    const guest = {
        id: Date.now(),
        name,
        attending: true,
        addedAt: new Date().toLocaleDateString()
    };

    guests.push(guest);
    renderList();
    form.reset();
    });

    function renderList() {
       list.innerHTML = '';
       
       guests.forEach(guest => {
         const li = document.createElement('li');

        const toggleBtn = document.createElement('span');
        const toggleBtn=document.createElement('button');
        toggleBtn.textContent = 'Toggle';
        toggleBtn.addEventListener('click', () => {
            guest.attending = !guest.attending;
            renderList();
        })
       });
    }
