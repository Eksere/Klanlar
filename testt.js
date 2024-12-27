for (let j = 2; j < tempRows.length; j++) {
    let transactionType = tempRows[j].children[2].innerText.trim();
    let amount = parseInt(tempRows[j].children[3].innerText.trim());
    let world = tempRows[j].children[1].innerText.trim();

    if (!worldDataBase[world]) {
        worldDataBase[world] = { Purchases: 0, Spending: 0, Farming: 0 };
    }

    // Satın Alma (Purchases)
    if (transactionType.includes(langShinko[game_data.locale]["Purchase"])) {
        purchases.push({
            Date: tempRows[j].children[0].innerText,
            World: world,
            Amount: amount,
        });
        worldDataBase[world].Purchases += amount;
    }

    // Harcamalar (Spending)
    if (transactionType.includes(langShinko[game_data.locale]["Premium Exchange"])) {
        spending.push({
            Date: tempRows[j].children[0].innerText,
            World: world,
            Amount: -amount,
        });
        worldDataBase[world].Spending += amount;
    }

    // Kasılan Premium Puanlar (Farmed)
    if (
        transactionType.includes(langShinko[game_data.locale]["Transfer"]) &&
        (tempRows[j].children[5].innerText.includes(langShinko[game_data.locale]["Sold"]) ||
            tempRows[j].children[5].innerText.includes(langShinko[game_data.locale]["Premium Exchange"]))
    ) {
        farmed.push({
            Date: tempRows[j].children[0].innerText,
            World: world,
            Amount: amount,
        });
        worldDataBase[world].Farming += amount;
    }
}
html += `
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









if (window.location.href.indexOf('premium&mode=log&page=') < 0) {
    //relocate
    window.location.assign(game_data.link_base_pure + "premium&mode=log&page=0");
}
if (localStorage.getItem("PPLogShinko")) {
    temp = JSON.parse(localStorage.getItem("PPLogShinko"));
    console.log("Loading previous data")
    stopDate = temp.lastDate;
    stopChange = temp.lastChange;
    var purchases =temp.purchases;
    var spending =temp.spending;
    var farmed =temp.farmed;
    var worldReward =temp.worldReward;
    var yearlyReward =temp.yearlyReward;
    var refunds =temp.refunds;
    var totalRefunds = temp.totalRefunds;
    var totalYearlyReward = temp.totalYearlyReward;
    var totalBought = temp.totalBought;
    var totalSpent = temp.totalSpent;
    var totalFarmed = temp.totalFarmed;
    var totalGiftsReceived = temp.totalGiftsReceived;
    var totalWorldReward = temp.totalWorldReward;
    var totalGiftsSent = temp.totalGiftsSent;
    var giftTo =temp.giftTo;
    var giftFrom =temp.giftFrom;
    var worldDataBase=temp.worldDataBase;
    var skip=false;
}
else {
    stopDate = 0;
    stopChange = 0;
    var purchases = [];
    var spending = [];
    var farmed = [];
    var worldReward = [];
    var yearlyReward = [];
    var refunds = [];
    var totalRefunds = 0;
    var totalYearlyReward = 0;
    var totalBought = 0;
    var totalSpent = 0;
    var totalFarmed = 0;
    var totalGiftsReceived = 0;
    var totalWorldReward = 0;
    var totalGiftsSent = 0;
    var giftTo = [];
    var giftFrom = [];
    var worldDataBase={};
    var skip=false;
}
var langShinko = {
      "tr_TR": { // Turkish (Turkey) translations
        "Purchase": "Satın Almak",
        "Premium Exchange": "Premium Takası",
        "Points redeemed": "Puanlar bozduruldu",
        "Transfer": "Transfer",
        "Sold": "Satıldı",
        "giftTo": "hedef: ",
        "giftFrom": "gönderen: ",
        "Free premium points": "Ücretsiz Premium Puanlar",
        "Endgame reward": "Oyun Sonu Ödülü",
        "Manually": "Manuel",
        "Withdrawn": "Geri Çekildi"
    }
}

if (game_data.player.sitter > 0) {
    baseURL = `/game.php?t=${game_data.player.id}&screen=premium&mode=log&page=`;
}
else {
    baseURL = "/game.php?&screen=premium&mode=log&page=";
}

amountOfPages = parseInt($(".paged-nav-item")[$(".paged-nav-item").length - 1].href.match(/page=(\d+)/)[1]);
let width;
if ($("#contentContainer")[0]) {
    width = $("#contentContainer")[0].clientWidth;
    $("#contentContainer").eq(0).prepend(`
<div id="progressbar" class="progress-bar progress-bar-alive">
<span id="count" class="label">0/${amountOfPages.length}</span>
<div id="progress"><span id="count2" class="label" style="width: ${width}px;">0/${amountOfPages.length}</span></div>
</div>`);
}
else {
    
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
        if (numDone == urls.length||skip==true) {
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
            })
    }
};


$.getAll(URLs,
    (i, data) => {
        console.log("Grabbing page " + i);
        tempRows = $(data).find("table .vis> tbody > tr");
        if (i == 0) {
            //we are on first page, check what the last entry is so we can remember for next time at the end
            //storing both time, and change, so if multiple changes happen on same time, we can stop at the correct one
            lastDate = tempRows[2].children[0].innerText.trim();
            lastChange = tempRows[2].children[3].innerText.trim();
        }
        var thisPageAmount = 0;
        for (var j = 0; j < tempRows.length - 2; j++) {
            if (tempRows[j + 2].children[0].innerText.trim() == stopDate && tempRows[j + 2].children[3].innerText.trim() == stopChange) {
                //REACHED LAST ENTRY, SKIP THE REST
                console.log("REACHED PREVIOUS LAST ENTRY");
                i = URLs.length;
                numDone=URLs.length;
                skip=true;
                break;
            }
            else {
                
            }


        }
        if (thisPageAmount < tempRows.length - 2) {
            console.log("MISSING ENTRIES ON PAGE " + (i + 1) + ": " + (tempRows.length - 2 - thisPageAmount));
        }
        if (thisPageAmount > tempRows.length - 2) {
            console.log("EXTRA ENTRIES ON PAGE " + (i + 1) + ": " + (thisPageAmount - tempRows.length - 2));
        }
    },
    () => {
        //console.log("Total bought: " + totalBought);
        //console.table(purchases);
        // store all data for next time
        var storeData={ 
            "lastDate": lastDate, 
            "lastChange": lastChange,
            "purchases":purchases,
            "spending":spending,
            "farmed":farmed,
            "worldReward":worldReward,
            "yearlyReward":yearlyReward,
            "refunds":refunds,
            "totalRefunds":totalRefunds,
            "totalYearlyReward":totalYearlyReward,
            "totalBought":totalBought,
            "totalSpent":totalSpent,
            "totalFarmed":totalFarmed,
            "totalGiftsReceived":totalGiftsReceived,
            "totalWorldReward":totalWorldReward,
            "totalGiftsSent":totalGiftsSent,
            "giftTo":giftTo,
            "giftFrom":giftFrom,
            "worldDataBase":worldDataBase,
        }
        localStorage.setItem("PPLogShinko", JSON.stringify(storeData));
        html = `
        <tr>
            <th colspan=7>
                <center>PP Purchase log</center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
            <center><h2>Total pp spent: ${-totalSpent} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
            <center><h2>Total pp farmed: ${totalFarmed} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total pp bought: ${totalBought} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total gifts received: ${totalGiftsReceived} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total gifts sent: ${totalGiftsSent} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total yearly gifts: ${totalYearlyReward} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total world reward: ${totalWorldReward} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total refunds: ${totalRefunds} pp</h2></center>
            </th>
        </tr>
        <tr>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="overviewButton" onclick="displayCategory('overview')" value="Overview"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="purchaseHistoryButton" onclick="displayCategory('purchaseHistory')" value="Purchase History"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="giftReceivedButton" onclick="displayCategory('giftReceived')" value="Gifts received"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="giftSentButton" onclick="displayCategory('giftSent')" value="Gifts sent"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="yearlyRewardButton" onclick="displayCategory('yearlyReward')" value="Yearly rewards"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="worldRewardButton" onclick="displayCategory('worldReward')" value="Win rewards"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="refundButton" onclick="displayCategory('refunds')" value="Refunds"/>
            </td>
        </tr>`;

        //purchase history
        html += `
        <table id="purchaseHistory" class="vis" width="100%">
            <tr>
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < purchases.length; i++) {
            html += `
            <tr>
                <td>
                    ${purchases[i].Date}
                </td>
                <td>
                    ${purchases[i].World}
                </td>
                <td>
                    ${purchases[i].Transaction}
                </td>
                <td>
                    ${purchases[i].Amount}
                </td>
                <td>
                    ${purchases[i].newTotal}
                </td>
                <td>
                    ${purchases[i].moreInformation}
                </td>
            </tr>`
        }
        html += "</table>";

        //overview
        html += `
        <table id="overview" class="vis" width="100%">
        <tr width="100%">
            <th colspan=2>World</th>
            <th>Purchases</th>
            <th>Spending</th>
            <th>Farmed</th>
            <th>Difference</th>
        </tr>
        `;
        for (var i = 0; i < Object.keys(worldDataBase).length; i++) {
        }
        html += "</table>"


        //gifts received
        html += `
        <table id="giftReceived" class="vis" width="100%">
            <tr width="100%">
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < giftFrom.length; i++) {
        }
        html += "</table>";

        //gifts sent
        html += `
        <table id="giftSent" class="vis" width="100%">
            <tr width="100%">
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < giftTo.length; i++) {
        }
        html += "</table>";

        //yearly reward
        html += `
         <table id="yearlyReward" class="vis" width="100%">
             <tr width="100%">
                 <th>
                     Date
                 </th>
                 <th>
                     World
                 </th>
                 <th>
                     Transaction
                 </th>
                 <th>
                     Amount
                 </th>
                 <th>
                     New total
                 </th>
                 <th>
                     More information
                 </th>
             </tr>`;
        for (var i = 0; i < yearlyReward.length; i++) {
        }
        html += "</table>";

        //endgame reward
        html += `
           <table id="worldReward" class="vis" width="100%">
               <tr width="100%">
                   <th>
                       Date
                   </th>
                   <th>
                       World
                   </th>
                   <th>
                       Transaction
                   </th>
                   <th>
                       Amount
                   </th>
                   <th>
                       New total
                   </th>
                   <th>
                       More information
                   </th>
               </tr>`;
        for (var i = 0; i < worldReward.length; i++) {
        }
        html += "</table>";

        //refunds
        html += `
            <table id="refunds" class="vis" width="100%">
                <tr width="100%">
                    <th>
                        Date
                    </th>
                    <th>
                        World
                    </th>
                    <th>
                        Transaction
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        New total
                    </th>
                    <th>
                        More information
                    </th>
                </tr>`;
        for (var i = 0; i < refunds.length; i++) {
        }
        html += "</table>";

        $("#progressbar").remove();
        Dialog.show("Log:", `
        <div width="100%">
            <table class="vis" width="100%">
            ${html}
            </table>
        </div>
        `);
        displayCategory("overview");
    },
    (error) => {
        console.error(error);
    });

function displayCategory(category) {
    allCategories = ["overview", "purchaseHistory", "giftReceived", "giftSent", "worldReward", "yearlyReward", "refunds"]

    $("#" + category).eq(0).css("display", "")
    $("#" + category + "Button").attr("class", "btn evt-cancel-btn btn-confirm-no");
    for (var i = 0; i < allCategories.length; i++) {
        if (category != allCategories[i]) {
            $("#" + allCategories[i]).css("display", "none");
            $("#" + allCategories[i] + "Button").attr("class", "btn evt-confirm-btn btn-confirm-yes");
        }
    }
}
