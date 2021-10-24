(() => {
    const   openModalButtons = document.querySelectorAll('[data-modal-target]'),
            closeModalButtons = document.querySelectorAll('[data-close-button]'),
            overlay = document.getElementById('overlay'),
            theStuff = document.querySelector("#modal2"),
            theTemplate = document.querySelector("#bio-template").content 
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })        

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
          closeModal(modal)
        })
    })
    
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
      })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
      }
      
      function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
      }      



    function getData() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                buildTeam(data);
            })
        .catch(error => console.error(error));
    }

    function buildTeam(info) {

        const people = Object.keys(info);

        people.forEach(person => {
            let panel = theTemplate.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${info[person].imageA}`;

            containers[1].textContent = info[person].title;
            containers[2].textContent = info[person].description;
            containers[3].textContent = info[person].favourites;

            containers[4].querySelector("img").src = `images/${info[person].imageB}`;
            containers[5].querySelector("img").src = `images/${info[person].imageC}`;
            containers[6].querySelector("img").src = `images/${info[person].imageD}`;

            theStuff.appendChild(panel);
        });
    }

    getData();
})();