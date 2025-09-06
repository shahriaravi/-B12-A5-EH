// reusable function
const historyData = [];
// get inner text 
function getInnerText(str) {
    const result = parseInt(document.getElementById(str).innerText);
    return result;
}

// set inner text
function setInnerText(str1, value) {
    const setText = document.getElementById(str1);
    setText.innerText = value;
}

// heart functionality
const hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
    heart.style.cursor = "pointer";

    heart.addEventListener("click", function () {
        const heartCount = getInnerText("heart-count")

        const newHeartCount = heartCount + 1;
        setInnerText("heart-count", newHeartCount);
    })
}

// call functionality
// card 1
document.getElementById("card-1-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-1-num");
            alert("Calling National Emergency Service " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "National Emergency Number",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            console.log(historyData);
        }
    })
