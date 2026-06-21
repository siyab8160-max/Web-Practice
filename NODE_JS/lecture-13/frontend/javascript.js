async function getData() {
    try {
        const response = await fetch(
            "https://hayes-bands-ham-configured.trycloudflare.com/data"
        );

        const data = await response.json();

        console.log(data);

        const container = document.getElementById("container");

        container.innerHTML = "";

        data.forEach(user => {
            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <hr>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        document.getElementById("container").innerHTML =
            "<p>Failed to load data.</p>";
    }
}

getData();

