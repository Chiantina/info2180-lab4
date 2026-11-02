document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("query");
    const resultDiv = document.getElementById("result");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = searchInput.value.trim();

        const url = "superheroes.php?query=" +
            encodeURIComponent(query);

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.text();
            })
            .then(function (data) {
                resultDiv.innerHTML = data;
            })
            .catch(function (error) {
                resultDiv.textContent =
                    "An error occurred while searching.";
                console.error(error);
            });
    });
});