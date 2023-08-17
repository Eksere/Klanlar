// Eğer 'categories' tanımlı değilse, kategorileri varsayılan olarak tanımla
if (typeof categories == 'undefined') {
    var categories = ["Toplama", "Takas", "Kâşifler", "Başarılar", "İletilen", "Çeşitli"];
}

// Eğer URL'de 'screen=report' ifadesi bulunmuyorsa, rapor sayfasına yönlendir
if (window.location.href.indexOf('screen=report') < 0) {
    window.location.assign(game_data.link_base_pure + "report");
}

// Belirtilen kategorideki raporları seçip düzenleyen fonksiyon
function moveMail(name) {
    // Toplama kategorisi
    if (name == "Toplama") {
        // Eğer doğru sayfadaysa, tüm toplama raporlarını seç ve işaretle
        $("img[src*='report_scavenging']").parent().prev().find('input').prop("checked", true);
        $('select[name*="group_id"] option:contains("Toplama")').prop('selected', true);
        $(".btn[name='arch']").click();
    }
    // Diğer kategoriler için benzer işlemleri yap
    // ... (diğer kategoriler için benzer kodlar)
}

// Kategori seçim penceresi oluşturan fonksiyon
function createWindow() {
    if (window.location.href.indexOf('report&mode=groups') > -1) {
        // Sayfa yanlışsa, rapor sayfasına yönlendir
        window.location.assign(game_data.link_base_pure + "report");
    }
    
    // Kategori seçim penceresi HTML içeriği oluştur
    var html = `
    <div style="width:500px"><center>
        <h1>Sıralamak İstediğiniz Raporları Seçin</h1>
        <hr>`
    $.each(categories,function(nr)
    {
        html+=`<button type="button" class="btn" name="${categories[nr]}" style="padding: 10px;width: 120px" onclick="moveMail('${categories[nr]}')">${categories[nr]}</button>
        <br>`
    })
    html+="<p>Script by Sophie 'Shinko to Kuma'</p></center></div>";
    Dialog.show("content", html);
}

// Eksik kategorileri oluşturan fonksiyon
function createFolders() {
    // Kategori sayfasındaysa, rapor sayfasına yönlendir
    if (window.location.href.indexOf("report&mode=groups") > -1) {
        $.each(categories, function (i) {
            count=0;
            $.each($("#report_group_list input[name*='group_name']"), function (c) {
                if(categories[i]==$("#report_group_list input[name*='group_name']").eq(c).attr("value"))
                {
                    count++;
                    // Kategori mevcut
                }
            })
            if (count == 0) missingGroup(categories[i]);
        });
    }
    else {
        for (var i = 0; i < categories.length; i++) {
            console.log(categories[i]);
            count = 0;
            for (var p = 0; p < $(".vis:eq(1) a").length; p++) {
                if ($(".vis:eq(1) a")[p].innerText.indexOf(categories[i]) > -1) {
                    count++;
                    console.log("Grup mevcut")
                }
            }
            if (count == 0) missingGroup(categories[i]);
        }
    }
    createWindow();
}

// Eksik grup oluşturma işlemini gerçekleştiren fonksiyon
function missingGroup(name)
{
    Dialog.show("content", `
    <div>
        <h1>${name} İçin Klasör Oluşturuluyor</h1>
        <form action="/game.php?&screen=report&mode=groups&action=create_group&" method="post">
            <table class="vis">
                <tbody>
                    <tr>
                        <th>Klasör Adı: ${name}</th>
                        <td><input name="group_name" type="hidden" value="${name}"></td><td><input class="btn" type="submit" value="Klasör Oluştur"></td>
                    </tr>
                </tbody>
            </table>
            <input type="hidden" name="h" value="${csrf_token}">
        </form>
    </div>
    `)
    throw Error("Eksik grup");
}

// Kategorileri oluştur
createFolders();
