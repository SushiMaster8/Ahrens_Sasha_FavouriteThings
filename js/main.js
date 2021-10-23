(() => {
    const   theStuff = document.querySelector("#favouriteThings"),
            theTemplate = document.querySelector("#bio-template").content 

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