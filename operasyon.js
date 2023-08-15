// Oyuncu Adı
var oyuncuAdi = game_data.player.name;

// Hedef Köy Koordinatları (örnek koordinatlar)
var hedefKoyKoordinatlari = ["X|Y1", "X|Y2", "X|Y3"]; // Örnek koordinatları buraya ekleyin

// Operasyon Zamanı (isteğe bağlı)
var operasyonZamani = "Gün Ay Saat:Dakika"; // Örneğin: "12 Mayıs 18:30"

// Operasyon Mesajı (isteğe bağlı)
var operasyonMesaji = "Operasyon başlıyor!";

// Operasyon planı oluştur
var operasyonPlani = "";

// Oyuncu adını ekle
operasyonPlani += "Oyuncu Adı: [player]" + oyuncuAdi + "[/player]\n\n";

// Hedef köyleri ekle
operasyonPlani += "Hedef Köyler:\n";
for (var i = 0; i < hedefKoyKoordinatlari.length; i++) {
    operasyonPlani += hedefKoyKoordinatlari[i] + "\n";
}
operasyonPlani += "\n";

// Operasyon zamanını ekle (varsa)
if (operasyonZamani) {
    operasyonPlani += "Operasyon Zamanı: " + operasyonZamani + "\n\n";
}

// Operasyon mesajını ekle (varsa)
if (operasyonMesaji) {
    operasyonPlani += "Operasyon Mesajı: [i]" + operasyonMesaji + "[/i]\n";
}

// Operasyon planını ekrana yazdır
console.log(operasyonPlani);
