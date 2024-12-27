if (window.location.href.indexOf('premium&mode=log&page=') < 0) {
    //relocate
    window.location.assign(game_data.link_base_pure + "premium&mode=log&page=0");
}

if (localStorage.getItem("PPLogShinko")) {
    temp = JSON.parse(localStorage.getItem("PPLogShinko"));
    console.log("Loading previous data");
    stopDate = temp.lastDate;
    stopChange = temp.lastChange;
    var farmed = temp.farmed;
    var spending = temp.spending;
    var totalFarmed = temp.totalFarmed;
    var totalSpent = temp.totalSpent;
} else {
    stopDate = 0;
    stopChange = 0;
    var farmed = [];
    var spending = [];
    var totalFarmed = 0;
    var totalSpent = 0;
}

if (game_data.player.sitter > 0) {
    baseURL = `/game.php?t=${game_data.player.id}&screen=premium&mode=log&page=`;
} else {
    baseURL = "/game.php?&screen=premium&mode=log&page=";
}

var amountOfPages = parseInt(
    $(".paged-nav-item")[$(".paged-nav-item").length - 1].href.match(/page=(\d+)/)[1]
);
var URLs = [];
for (var i = 0; i <= amountOfPages; i++) {
    URLs.push(baseURL + i);
}

$.getAll = function (
    urls, // array of URLs
    onLoad, // called when any URL is loaded, params (index, data)
    onDone, // called when all URLs successfully loaded, no params
    onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 200; // ms between requests
    loadNext();
    function loadNext() {
        if (numDone == urls.length) {
            onDone();
            return;
        }

        let now = Date.now();
        let timeElapsed = now - lastRequestTime;
        if (timeElapsed < minWaitTime) {
            let timeRemaining = minWaitTime - timeElapsed;
            setTimeout(loadNext, timeRemaining);
            return;
        }

        lastRequestTime = now;
        $.get(urls[numDone])
            .done((data) => {
                try {
                    onLoad(numDone, data);
                    ++numDone;
                    loadNext();
                } catch (e) {
                    onError(e);
                }
            })
            .fail((xhr) => {
                onError(xhr);
            });
    }
};

$.getAll(
    URLs,
    (i, data) => {
        console.log("Grabbing page " + i);
        let tempRows = $(data).find("table .vis> tbody > tr");
        for (let j = 2; j < tempRows.length; j++) {
            let transactionType = tempRows[j].children[2].innerText.trim();
            let amount = parseInt(tempRows[j].children[3].innerText.trim());

            if (
                transactionType.includes("Transfer") &&
                (tempRows[j].children[5].innerText.includes("Satıldı") ||
                    tempRows[j].children[5].innerText.includes("Premium Takası"))
            ) {
                farmed.push({
                    Date: tempRows[j].children[0].innerText,
                    Amount: amount
                });
                totalFarmed += amount;
            }

            if (transactionType.includes("Premium Takası")) {
                spending.push({
                    Date: tempRows[j].children[0].innerText,
                    Amount: -amount
                });
                totalSpent += amount;
            }
        }
    },
    () => {
        console.log("Total farmed: " + totalFarmed);
        console.log("Total spent: " + totalSpent);

        let worldDataBase = {};

// Her bir satırı işleme
for (let j = 2; j < tempRows.length; j++) {
    let transactionType = tempRows[j].children[2].innerText.trim();
    let amount = parseInt(tempRows[j].children[3].innerText.trim());
    let world = tempRows[j].children[1].innerText.trim();

    // Eğer dünya yoksa, sıfırdan oluştur
    if (!worldDataBase[world]) {
        worldDataBase[world] = { Purchases: 0, Spending: 0, Farming: 0 };
    }

    // Satın alma (Purchases)
    if (transactionType.includes(langShinko[game_data.locale]["Purchase"])) {
        worldDataBase[world].Purchases += amount;
    }

    // Harcamalar (Spending)
    if (transactionType.includes(langShinko[game_data.locale]["Premium Exchange"])) {
        worldDataBase[world].Spending += amount;
    }

    // Kasılan premium puanlar (Farmed)
    if (
        transactionType.includes(langShinko[game_data.locale]["Transfer"]) &&
        (tempRows[j].children[5].innerText.includes(langShinko[game_data.locale]["Sold"]) ||
            tempRows[j].children[5].innerText.includes(langShinko[game_data.locale]["Premium Exchange"]))
    ) {
        worldDataBase[world].Farming += amount;
    }
}
        let html = `
<table class="vis" width="100%">
    <tr>
        <th>World</th>
        <th>Purchases</th>
        <th>Spending</th>
        <th>Farmed</th>
        <th>Difference</th>
    </tr>`;

for (let world in worldDataBase) {
    let data = worldDataBase[world];
    html += `
    <tr>
        <td>${world}</td>
        <td>${data.Purchases}</td>
        <td>${data.Spending}</td>
        <td>${data.Farming}</td>
        <td>${data.Farming + data.Purchases - data.Spending}</td>
    </tr>`;
}

html += `</table>`;
$("#contentContainer").html(html);



