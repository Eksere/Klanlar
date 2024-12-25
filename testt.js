// Genel Değişkenler
const langShinko = {
    "tr_TR": {"Purchase": "Satın Almak", "Spend": "Harcama", "Farm": "Çiftçilik"},
    "en_US": {"Purchase": "Purchase", "Spend": "Spending", "Farm": "Farming"},
    // Diğer diller eklenebilir
};

// Özet Değişkenler
let totalBought = 0;
let totalSpent = 0;
let totalFarming = 0;
let purchases = [];
let spendings = [];
let farming = [];
let worldDataBase = {};

// Veri İşleme
const tempRows = document.querySelectorAll("#someTableId tr"); // Tablonun ID'sini doğru girin

for (let j = 0; j < tempRows.length - 2; j++) {
    const transactionType = tempRows[j + 2].children[2].innerText.trim();
    const world = tempRows[j + 2].children[1].innerText.trim();
    const amount = parseInt(tempRows[j + 2].children[3].innerText.trim(), 10) || 0;

    if (!worldDataBase[world]) {
        worldDataBase[world] = {"Purchases": 0, "Spending": 0, "Farming": 0};
    }

    if (transactionType === langShinko[game_data.locale]["Purchase"]) {
        purchases.push({
            "Date": tempRows[j + 2].children[0].innerText.trim(),
            "World": world,
            "Transaction": transactionType,
            "Amount": amount,
            "newTotal": tempRows[j + 2].children[4].innerText.trim(),
            "moreInformation": tempRows[j + 2].children[5].innerText.trim()
        });
        worldDataBase[world]["Purchases"] += amount;
        totalBought += amount;
    } else if (transactionType === langShinko[game_data.locale]["Spend"]) {
        spendings.push({
            "Date": tempRows[j + 2].children[0].innerText.trim(),
            "World": world,
            "Transaction": transactionType,
            "Amount": amount,
            "newTotal": tempRows[j + 2].children[4].innerText.trim(),
            "moreInformation": tempRows[j + 2].children[5].innerText.trim()
        });
        worldDataBase[world]["Spending"] += amount;
        totalSpent += amount;
    } else if (transactionType === langShinko[game_data.locale]["Farm"]) {
        farming.push({
            "Date": tempRows[j + 2].children[0].innerText.trim(),
            "World": world,
            "Transaction": transactionType,
            "Amount": amount,
            "newTotal": tempRows[j + 2].children[4].innerText.trim(),
            "moreInformation": tempRows[j + 2].children[5].innerText.trim()
        });
        worldDataBase[world]["Farming"] += amount;
        totalFarming += amount;
    }
}

// Sonuçları Konsola Yazdır
console.log("Toplam Satın Alımlar:", totalBought);
console.log("Toplam Harcamalar:", totalSpent);
console.log("Toplam Çiftçilik Geliri:", totalFarming);
console.log("Dünya Bazlı Veriler:", worldDataBase);
console.log("Satın Alma Detayları:", purchases);
console.log("Harcama Detayları:", spendings);
console.log("Çiftçilik Detayları:", farming);

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
            html += `
            <tr>
                <td colspan=2>${Object.keys(worldDataBase)[i]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Purchases"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Spending"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Farming"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Farming"] - worldDataBase[Object.keys(worldDataBase)[i]]["Spending"] + worldDataBase[Object.keys(worldDataBase)[i]]["Purchases"]}
            </tr>`
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
            html += `
            <tr>
                <td>
                    ${giftFrom[i].Date}
                </td>
                <td>
                    ${giftFrom[i].World}
                </td>
                <td>
                    ${giftFrom[i].Transaction}
                </td>
                <td>
                    ${giftFrom[i].Amount}
                </td>
                <td>
                    ${giftFrom[i].newTotal}
                </td>
                <td>
                    ${giftFrom[i].moreInformation}
                </td>
            </tr>`
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
            html += `
            <tr>
                <td>
                    ${giftTo[i].Date}
                </td>
                <td>
                    ${giftTo[i].World}
                </td>
                <td>
                    ${giftTo[i].Transaction}
                </td>
                <td>
                    ${giftTo[i].Amount}
                </td>
                <td>
                    ${giftTo[i].newTotal}
                </td>
                <td>
                    ${giftTo[i].moreInformation}
                </td>
            </tr>`
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
            html += `
             <tr>
                 <td>
                     ${yearlyReward[i].Date}
                 </td>
                 <td>
                     ${yearlyReward[i].World}
                 </td>
                 <td>
                     ${yearlyReward[i].Transaction}
                 </td>
                 <td>
                     ${yearlyReward[i].Amount}
                 </td>
                 <td>
                     ${yearlyReward[i].newTotal}
                 </td>
                 <td>
                     ${yearlyReward[i].moreInformation}
                 </td>
             </tr>`
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
            html += `
               <tr>
                   <td>
                       ${worldReward[i].Date}
                   </td>
                   <td>
                       ${worldReward[i].World}
                   </td>
                   <td>
                       ${worldReward[i].Transaction}
                   </td>
                   <td>
                       ${worldReward[i].Amount}
                   </td>
                   <td>
                       ${worldReward[i].newTotal}
                   </td>
                   <td>
                       ${worldReward[i].moreInformation}
                   </td>
               </tr>`
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
            html += `
                <tr>
                    <td>
                        ${refunds[i].Date}
                    </td>
                    <td>
                        ${refunds[i].World}
                    </td>
                    <td>
                        ${refunds[i].Transaction}
                    </td>
                    <td>
                        ${refunds[i].Amount}
                    </td>
                    <td>
                        ${refunds[i].newTotal}
                    </td>
                    <td>
                        ${refunds[i].moreInformation}
                    </td>
                </tr>`
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
    ,
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
// html oluşturma
let html = `
<table id="worldStats" class="vis" width="100%">
    <tr>
        <th>World</th>
        <th>Spending</th>
        <th>Farming</th>
        <th>Difference</th>
    </tr>`;

// Her dünya için harcama ve kasma bilgilerini listeleme
for (let i = 0; i < Object.keys(worldDataBase).length; i++) {
    let world = Object.keys(worldDataBase)[i];
    let spending = worldDataBase[world]["Spending"];
    let farming = worldDataBase[world]["Farming"];
    let difference = farming - spending;

    html += `
    <tr>
        <td>${world}</td>
        <td>${spending}</td>
        <td>${farming}</td>
        <td>${difference}</td>
    </tr>`;
}

// Tabloyu kapatma
html += "</table>";

// HTML içeriğini sayfada görüntüleme (örneğin bir div'e)
$("#statsContainer").html(html);

// Fonksiyon ile kategori görüntüleme (önceden sağladığınız fonksiyon)
function displayCategory(category) {
    allCategories = ["overview", "purchaseHistory", "giftReceived", "giftSent", "worldReward", "yearlyReward", "refunds"];

    $("#" + category).eq(0).css("display", "");
    $("#" + category + "Button").attr("class", "btn evt-cancel-btn btn-confirm-no");
    for (var i = 0; i < allCategories.length; i++) {
        if (category != allCategories[i]) {
            $("#" + allCategories[i]).css("display", "none");
            $("#" + allCategories[i] + "Button").attr("class", "btn evt-confirm-btn btn-confirm-yes");
        }
    }
}

