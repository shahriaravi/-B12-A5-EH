let historyData = [];
historyData.reverse();

// reusable function

// crate div 
function addHistory() {
    const parent = document.getElementById("history-card");
    parent.innerHTML = ""; 
    for (let data of historyData) {
        const div = document.createElement("div");
        div.className = "flex justify-between items-center p-2 bg-gray-200 rounded-xl mt-3";
        div.innerHTML = `
            <div>
                <h1>${data.name}</h1>
                <span>${data.number}</span>
            </div>
            <div>
                <span>${data.time}</span>
            </div>
        `;
        parent.appendChild(div);
    }
}

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
            addHistory();
        }
    })

// card 2
document.getElementById("card-2-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-2-num");
            alert("Calling Police Helpline Number " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Police Helpline Number",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            addHistory();
        }
    })

// card 3
document.getElementById("card-3-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-3-num");
            alert("Calling Fire Service Number " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Fire Service Number",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            addHistory();
        }
    })

// card 4
document.getElementById("card-4-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-4-num");
            alert("Calling Ambulance Service Number " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Ambulance Service Number",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            addHistory();
        }
    })

// card 5
document.getElementById("card-5-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-5-num");
            alert("Calling Women & Child Helpline " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Women & Child Helpline",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            addHistory();
        }
    })

// card 6
document.getElementById("card-6-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-6-num");
            alert("Calling Anti-Corruption Helpline " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Anti-Corruption Helpline",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            addHistory();
        }
    })

// card 7
document.getElementById("card-7-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-7-num");
            alert("Calling Electricity Helpline " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Electricity Helpline",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);
            
            addHistory();
        }
    })

// card 8
document.getElementById("card-8-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-8-num");
            alert("Calling Brac Helpline " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Brac Helpline",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);

            addHistory();
        }
    })

// card 9
document.getElementById("card-9-btn")
    .addEventListener("click", function () {
        const coinCount = getInnerText("coin-count");

        if (coinCount < 20) {
            alert("You don't have enough coins. You need 20 coins to make the call.")
        } else {
            const num = getInnerText("card-9-num");
            alert("Calling Bangladesh Railway Helpline " + num + "....");

            const newCoinCount = coinCount - 20;

            setInnerText("coin-count", newCoinCount);

            const data = {
                name: "Bangladesh Railway Helpline",
                number: num,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            historyData.push(data);

            addHistory();
        }
    })

// delete all history
document.getElementById("clear-history-btn")
    .addEventListener("click", function () {
        document.getElementById("history-card").innerHTML = "";
        historyData = [];
        addHistory();
    })