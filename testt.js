if (game_data.player.sitter > 0) {
    baseURL = `/game.php?t=${game_data.player.id}&screen=premium&mode=log&page=`;
}
else {
    baseURL = "/game.php?&screen=premium&mode=log&page=";
}

amountOfPages = parseInt($(".paged-nav-item")[$(".paged-nav-item").length - 1].href.match(/page=(\d+)/)[1]);

if ($("#contentContainer")[0]) {
    width = $("#contentContainer")[0].clientWidth;
    $("#contentContainer").eq(0).prepend(`
<div id="progressbar" class="progress-bar progress-bar-alive">
<span id="count" class="label">0/${amountOfPages}</span>
<div id="progress"><span id="count2" class="label" style="width: ${width}px;">0/${amountOfPages}</span></div>
</div>`);
}
else {
    width = $("#mobileHeader")[0].clientWidth;
    $("#mobileHeader").eq(0).prepend(`
<div id="progressbar" class="progress-bar progress-bar-alive">
<span id="count" class="label">0/${amountOfPages}</span>
<div id="progress"><span id="count2" class="label" style="width: ${width}px;">0/${amountOfPages}</span></div>
</div>`);
}

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
        if (numDone == urls.length || skip == true) {
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
        $("#progress").css("width", `${(numDone + 1) / urls.length * 100}%`);
        $("#count").text(`${(numDone + 1)} / ${urls.length}`);
        $("#count2").text(`${(numDone + 1)} / ${urls.length}`);
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

$.getAll(URLs,
    (i, data) => {
        console.log("Grabbing page " + i);
        tempRows = $(data).find("table .vis> tbody > tr");
        if (i == 0) {
            // Remember the last entry to stop duplicates
            lastDate = tempRows[2].children[0].innerText.trim();
            lastChange = tempRows[2].children[3].innerText.trim();
        }
        var thisPageAmount = 0;
        for (var j = 0; j < tempRows.length - 2; j++) {
            if (tempRows[j + 2].children[0].innerText.trim() == stopDate && tempRows[j + 2].children[3].innerText.trim() == stopChange) {
                console.log("REACHED PREVIOUS LAST ENTRY");
                i = URLs.length;
                numDone = URLs.length;
                skip = true;
                break;
            }
            else {
                let transactionType = tempRows[j + 2].children[2].innerText.trim();
                let world = tempRows[j + 2].children[1].innerText.trim();
                let amount = parseInt(tempRows[j + 2].children[3].innerText.trim());

                if (!worldDataBase[world]) {
                    worldDataBase[world] = { "Purchases": 0, "Spending": 0, "Farming": 0 };
                }

                if (transactionType.includes(langShinko[game_data.locale]["Purchase"])) {
                    purchases.push({ "Date": tempRows[j + 2].children[0].innerText, "World": world, "Amount": amount });
                    worldDataBase[world]["Purchases"] += amount;
                    totalBought += amount;
                }

                if (transactionType.includes(langShinko[game_data.locale]["Premium Exchange"])) {
                    spending.push({ "Date": tempRows[j + 2].children[0].innerText, "World": world, "Amount": -amount });
                    worldDataBase[world]["Spending"] += amount;
                    totalSpent += amount;
                }

                if (transactionType.includes(langShinko[game_data.locale]["Transfer"]) &&
                    (tempRows[j + 2].children[5].innerText.includes(langShinko[game_data.locale]["Sold"]) ||
                        tempRows[j + 2].children[5].innerText.includes(langShinko[game_data.locale]["Premium Exchange"]))) {
                    farmed.push({ "Date": tempRows[j + 2].children[0].innerText, "World": world, "Amount": amount });
                    worldDataBase[world]["Farming"] += amount;
                    totalFarmed += amount;
                }
            }
        }
    },
    () => {
        let html = `<table class="vis" width="100%">
            <tr>
                <th>World</th>
                <th>Purchases</th>
                <th>Spending</th>
                <th>Farmed</th>
                <th>Difference</th>
            </tr>`;

        for (let world in worldDataBase) {
            let data = worldDataBase[world];
            html += `<tr>
                <td>${world}</td>
                <td>${data.Purchases}</td>
                <td>${data.Spending}</td>
                <td>${data.Farming}</td>
                <td>${data.Farming + data.Purchases - data.Spending}</td>
            </tr>`;
        }

        html += `</table>`;
        $("#contentContainer").html(html);
    },
    (error) => {
        console.error(error);
    });






//eski kod
