const express = require('express')
const app = express()
const port = 3000

var cors = require("cors")
 
app.use(cors());

app.get('/films', (req, res) => {
    const films = [{ title: 'Geçmişe Dönüş', author: 'Ahmet', year: '2020', description: 'Komedi filmi,Dönemin özellikle tasarımıyla öne çıkan otomobillerinden olan bir DeLoranın içine gizlenmiş icat, Martyi yanlışlıkla 50lere geri götürür. Sorumsuz delikanlı bu gösterişsiz Amerikan kasabasında bir kazaya yol açar ve müstakbel anne ve babasının tanışmasına engel olur. Böylece kendisi de hiç doğmamış olacağı için bu durumu düzeltmesi gerekmektedir. Ama hayat sandığından daha karmaşıktır ve sorumluluk kelimesinin anlamını öğrenmek zorundadır.', img: 'https://img01.imgsinemalar.com/images/afis_buyuk/b/bloodshot-durdurulamaz-guc-1582527752.jpg',Seans:'13:30 , 15:30 , 21:30'},
        { title: 'Gölgekerin Aşkı', author: 'Mehmet', year: '2020', description: 'Komedi filmi,Özel Çamlıca Lisesi`ne yeni atanan müdür muavini Mahmut Hoca (nam-ı diğer Kel Mahmut) kopya çeken, okuldan kaçıp maçlara giden, hocalarla sürekli kafa bulan öğrencilerle dolu Hababam Sınıfı`nı ilginç ceza yöntemleriyle disiplin altına almaya çalışır. Fakat aynı zamanda öğrenci haylazlığı dışında ciddi olaylar da yaşanmaktadır.', img: 'https://img01.imgsinemalar.com/images/afis_buyuk/g/golgelerin-aski-1583844773.jpg', Seans: '14:00 , 15:30 , 20:30'},
        { title: 'Mürit', author: 'Ahmet', year: '2020', description: 'Korku filmi,Richard ve Grace evlenmeye karar vermiş bir çifttir. Richard’ın iki çocuğu ile birlikte sakin bir kış tatiline çıkarlar. Ancak birbirlerine yakınlaştıkça garip olaylar yaşanmaya başlar.', img: 'https://img01.imgsinemalar.com/images/afis_buyuk/t/the-lodge-1582527821.jpg', Seans: '08:30 , 11:30 , 21:30 , 22:10'},
        { title: 'Kadın', author: 'Sahih', year: '2020', description: 'Dram filmi,Kadın" projesi, elli farklı ülkeden 2000 kadının sesi olmuştur. Geniş kapsamına rağmen oldukça samimi portreler seçkisi sergileyen film kadınların karşılaştığı adaletsizliği ve ayrımcılığı onların gözünden aktarıyor. Bunun yanı sıra kadınların karşılaştıkları zorlukların üstesinden nasıl geldiklerini anlatıyor. Filmin odak noktasında sadece kadın hakları ve karşılaşılan zorluklar değil, bu sorunların çözümleri ve kadın-erkek eşitliğinin sağlanması bulunuyor. ', img: 'https://img01.imgsinemalar.com/images/afis_buyuk/w/woman-1573638981.jpg', Seans: '13:30 , 15:30 , 21:30' }]
    res.json(films)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))