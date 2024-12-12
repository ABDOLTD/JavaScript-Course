function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    } else {
        // Generate a random love percentage
        const lovePercentage = Math.floor(Math.random() * 101);

        // Get the result div
        const result = document.getElementById("result");

        // Display the love percentage
        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;

        // Add a message based on the love percentage
        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a great match, so keep looking!";
        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is potential!";
        } else {
            result.innerHTML += "<br> Great match!";
        }
    }
}
