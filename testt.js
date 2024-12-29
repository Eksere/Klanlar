    let totalPages = 0;
    let currentPage = 0;
    let allData = [];
    let worldData = {};
    let totalGained = 0;
    let totalSpent = 0;
    let totalBought = 0;

    function getTotalPages() {
        const pageLinks = document.querySelectorAll('.item');
        const pageSelect = document.querySelector('select');
        if (pageLinks.length > 0) {
            totalPages = parseInt(pageLinks[pageLinks.length - 1].textContent.trim()) || 1;
        } else if (pageSelect) {
            const options = pageSelect.querySelectorAll('option');
            totalPages = parseInt(options[options.length - 1].textContent.trim()) || 1;
        } else {
            totalPages = 1;
        }
        console.log(`Toplam Sayfa Sayısı: ${totalPages}`);
    }

    async function fetchDataFromPage(pageNumber) {
        const url = `/game.php?village=30549&screen=premium&mode=log&page=${pageNumber}`;
        console.log(`Veriler Sayfa ${pageNumber}: ${url}`);
        try {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const rows = doc.querySelectorAll('.vis tr');
            rows.forEach(row => {
                const columns = row.querySelectorAll('td');
                if (columns.length > 0) {
                    const amount = parseInt(columns[3].innerText.trim().replace(/[^0-9-]/g, "")) || 0;
                    const world = columns[1].innerText.trim();
                    const action = columns[2].innerText.trim().toLowerCase();

                    allData.push({
                        action: action,
                        amount: amount,
                        date: columns[4].innerText.trim(),
                        world: world,
                    });

                    if (amount > 0) {
                        totalGained += amount;
                        if (!worldData[world]) {
                            worldData[world] = { gained: 0, spent: 0, bought: 0 };
                        }
                        worldData[world].gained += amount;

                        if (action.includes("satın al")) {
                            totalBought += amount;
                            worldData[world].bought += amount;
                        }
                    } else if (amount < 0) {
                        totalSpent += Math.abs(amount);
                        if (!worldData[world]) {
                            worldData[world] = { gained: 0, spent: 0, bought: 0 };
                        }
                        worldData[world].spent += Math.abs(amount);
                    }
                }
            });

            if (pageNumber < totalPages - 1) {
                currentPage = pageNumber + 1;
                updateProgress();
                setTimeout(() => fetchDataFromPage(currentPage), 10);
            } else {
                console.log("Tüm sayfalar çekildi.");
                updateProgress("Tamamlandı!");
                displayResults();
            }
        } catch (error) {
            console.error(`Sayfa ${pageNumber} yüklenirken hata oluştu:`, error);
        }
    }

    function createProgressIndicator() {
        const progressDiv = document.createElement('div');
        progressDiv.id = 'progress-indicator';
        progressDiv.style.position = 'fixed';
        progressDiv.style.bottom = '500px';
        progressDiv.style.left = '50%';
        progressDiv.style.transform = 'translateX(-50%)';
        progressDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        progressDiv.style.color = '#fff';
        progressDiv.style.padding = '10px 20px';
        progressDiv.style.borderRadius = '5px';
        progressDiv.style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
        progressDiv.style.fontSize = '16px';
        progressDiv.style.zIndex = '9999';
        progressDiv.style.textAlign = 'center';
        progressDiv.textContent = 'Hazırlanıyor...';
        document.body.appendChild(progressDiv);
        updateProgress();
    }

    function updateProgress(status = `Sayfa ${currentPage + 1} / ${totalPages} işleniyor...`) {
        const progressDiv = document.getElementById('progress-indicator');
        if (progressDiv) {
            progressDiv.textContent = status;
        }
    }
function displayResults() {
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result-popup'; // ID ekledik, kapatma için erişim kolaylığı
    resultDiv.style.position = 'fixed';
    resultDiv.style.top = '50%';
    resultDiv.style.left = '50%';
    resultDiv.style.transform = 'translate(-50%, -50%)';
    resultDiv.style.backgroundColor = '#f4e4bc';
    resultDiv.style.padding = '20px';
    resultDiv.style.border = '1px solid #ccc';
    resultDiv.style.zIndex = '9999';
    resultDiv.style.maxHeight = '80vh';
    resultDiv.style.overflowY = 'auto';
    resultDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    resultDiv.style.border = '19px solid #804000';
    resultDiv.style.borderImage = 'url("https://dstr.innogamescdn.com/asset/61bc21fc/graphic/popup/border.png") 19 19 19 19 repeat';

    // Kapatma butonu oluştur
    const closeButton = document.createElement('button');
    closeButton.textContent = '✖';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#fff';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';

    // Tıklama olayını ekle
    closeButton.addEventListener('click', () => {
        if (resultDiv) {
            document.body.removeChild(resultDiv); // Pop-up'ı kaldır
        }
    });

    resultDiv.appendChild(closeButton);

    let resultHTML = `
        <table class="vis" width="100%">
            <tr>
                <th colspan="7" style="text-align: center;">PP Satın Alma Kayıtları</th>
            </tr>
            <tr>
                <th colspan="7" style="text-align: center;"><h2>Toplam pp harcama: ${-totalSpent} pp</h2></th>
            </tr>
            <tr>
                <th colspan="7" style="text-align: center;"><h2>Toplam pp kazanma: ${totalGained} pp</h2></th>
            </tr>
            <tr>
                <th colspan="7" style="text-align: center;"><h2>Toplam pp satın alma: ${totalBought} pp</h2></th>
            </tr>
        </table>
        <h3>Dünya Bazlı Veriler:</h3>
        <table class="vis" width="100%">
            <tr>
                <th>Dünya</th>
                <th>Kazanılan</th>
                <th>Harcanan</th>
                <th>Satın Alınan</th>
            </tr>
    `;

    for (let world in worldData) {
        resultHTML += `
            <tr>
                <td>${world}</td>
                <td>${worldData[world].gained}</td>
                <td>${worldData[world].spent}</td>
                <td>${worldData[world].bought}</td>
            </tr>
        `;
    }

    resultHTML += `</table>`;
    resultDiv.innerHTML += resultHTML;
    document.body.appendChild(resultDiv);
}





    if (!window.location.href.includes('screen=premium&mode=log')) {
        console.log("Bu script yalnızca premium puan hareketleri sayfasında çalışır.");
        return;
    }

    createProgressIndicator();
    getTotalPages();
    fetchDataFromPage(currentPage);

