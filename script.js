const champions = [
{
  "name": "Aatrox",
  "id": "Aatrox",
  "title": "darkin kılıcı",
  "titleEn": "the Darkin Blade",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Aatrox.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Aatrox.png",
  "focusX": 72,
  "focusY": 150,
  "zoomStart": 3
},
{
  "name": "Ahri",
  "id": "Ahri",
  "title": "dokuz kuyruklu tilki",
  "titleEn": "the Nine-Tailed Fox",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Ahri.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ahri.png",
  "focusX": 85,
  "focusY": 150,
  "zoomStart": 3
},
{
  "name": "Akali",
  "id": "Akali",
  "title": "gölgenin yumruğu",
  "titleEn": "the Rogue Assassin",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Akali.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Akali.png",
  "focusX": 44,
  "focusY": 100,
  "zoomStart": 4.5
},
{
  "name": "Akshan",
  "id": "Akshan",
  "title": "asi muhafız",
  "titleEn": "the Rogue Sentinel",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Akshan.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Akshan.png",
  "focusX": 75,
  "focusY": 90,
  "zoomStart": 6
},
{
  "name": "Alistar",
  "id": "Alistar",
  "title": "minotor",
  "titleEn": "the Minotaur",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Alistar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Alistar.png",
  "focusX": 62,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Ambessa",
  "id": "Ambessa",
  "title": "matriarch of war",
  "titleEn": "the Matriarch of War",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Ambessa.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ambessa.png",
  "focusX": 28,
  "focusY": 100,
  "zoomStart": 4.1
},
{
  "name": "Amumu",
  "id": "Amumu",
  "title": "hüzünlü mumya",
  "titleEn": "the Sad Mummy",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Amumu.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Amumu.png",
  "focusX": 41,
  "focusY": 100,
  "zoomStart": 5.2
},
{
  "name": "Anivia",
  "id": "Anivia",
  "title": "kristal anka",
  "titleEn": "the Cryophoenix",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Anivia.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Anivia.png",
  "focusX": 56,
  "focusY": 82,
  "zoomStart": 4.2
},
{
  "name": "Annie",
  "id": "Annie",
  "title": "karanlığın çocuğu",
  "titleEn": "the Dark Child",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Annie.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Annie.png",
  "focusX": 14,
  "focusY": 100,
  "zoomStart": 5
},
{
  "name": "Aphelios",
  "id": "Aphelios",
  "title": "inancın silahı",
  "titleEn": "the Weapon of the Faithful",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Aphelios.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Aphelios.png",
  "focusX": 72,
  "focusY": 85,
  "zoomStart": 7
},
{
  "name": "Ashe",
  "id": "Ashe",
  "title": "buz okçusu",
  "titleEn": "the Frost Archer",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Ashe.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ashe.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Aurelion Sol",
  "id": "AurelionSol",
  "title": "yıldız yaratıcısı",
  "titleEn": "The Star Forger",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/AurelionSol.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/AurelionSol.png",
  "focusX": 35,
  "focusY": 95,
  "zoomStart": 6
},
{
  "name": "Aurora",
  "id": "Aurora",
  "title": "witch between worlds",
  "titleEn": "the Witch Between Worlds",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Aurora.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Aurora.png",
  "focusX": 95,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Azir",
  "id": "Azir",
  "title": "kumların imparatoru",
  "titleEn": "the Emperor of the Sands",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Azir.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Azir.png",
  "focusX": 31,
  "focusY": 100,
  "zoomStart": 5.2
},
{
  "name": "Bard",
  "id": "Bard",
  "title": "gezgin koruyucu",
  "titleEn": "the Wandering Caretaker",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Bard.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Bard.png",
  "focusX": 94,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Bel'Veth",
  "id": "Belveth",
  "title": "boşluğun imparatoriçesi",
  "titleEn": "the Empress of the Void",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Belveth.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Belveth.png",
  "focusX": 30,
  "focusY": 89,
  "zoomStart": 3.6
},
{
  "name": "Blitzcrank",
  "id": "Blitzcrank",
  "title": "büyük buhar golemi",
  "titleEn": "the Great Steam Golem",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Blitzcrank.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Blitzcrank.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Brand",
  "id": "Brand",
  "title": "yanan intikam",
  "titleEn": "the Burning Vengeance",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Brand.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Brand.png",
  "focusX": 90,
  "focusY": 100,
  "zoomStart": 5
},
{
  "name": "Braum",
  "id": "Braum",
  "title": "freljord'un kalbi",
  "titleEn": "the Heart of the Freljord",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Braum.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Braum.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Briar",
  "id": "Briar",
  "title": "kısıtlanmış açlık",
  "titleEn": "the Restrained Hunger",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Briar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Briar.png",
  "focusX": 60,
  "focusY": 95,
  "zoomStart": 4.5
},
{
  "name": "Caitlyn",
  "id": "Caitlyn",
  "title": "piltover şerifi",
  "titleEn": "the Sheriff of Piltover",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Caitlyn.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Caitlyn.png",
  "focusX": 10,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Camille",
  "id": "Camille",
  "title": "çelik gölge",
  "titleEn": "the Steel Shadow",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Camille.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Camille.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Cassiopeia",
  "id": "Cassiopeia",
  "title": "yılanın kucağı",
  "titleEn": "the Serpent's Embrace",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Cassiopeia.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Cassiopeia.png",
  "focusX": 61,
  "focusY": 51,
  "zoomStart": 4
},
{
  "name": "Cho'Gath",
  "id": "Chogath",
  "title": "boşluğun dehşeti",
  "titleEn": "the Terror of the Void",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Chogath.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Chogath.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.7
},
{
  "name": "Corki",
  "id": "Corki",
  "title": "cüretkar bombardımancı",
  "titleEn": "the Daring Bombardier",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Corki.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Corki.png",
  "focusX": 82,
  "focusY": 17,
  "zoomStart": 7.5
},
{
  "name": "Darius",
  "id": "Darius",
  "title": "noxus'un eli",
  "titleEn": "the Hand of Noxus",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Darius.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Darius.png",
  "focusX": 35,
  "focusY": 75,
  "zoomStart": 3.5
},
{
  "name": "Diana",
  "id": "Diana",
  "title": "ayın küçümsemesi",
  "titleEn": "Scorn of the Moon",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Diana.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Diana.png",
  "focusX": 55,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Dr. Mundo",
  "id": "DrMundo",
  "title": "zaun'un delisi",
  "titleEn": "the Madman of Zaun",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/DrMundo.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/DrMundo.png",
  "focusX": 58,
  "focusY": 59,
  "zoomStart": 4
},
{
  "name": "Draven",
  "id": "Draven",
  "title": "gösterişli cellat",
  "titleEn": "the Glorious Executioner",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Draven.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Draven.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4.1
},
{
  "name": "Ekko",
  "id": "Ekko",
  "title": "zamanı kıran çocuk",
  "titleEn": "the Boy Who Shattered Time",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Ekko.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ekko.png",
  "focusX": 10,
  "focusY": 110,
  "zoomStart": 2.7
},
{
  "name": "Elise",
  "id": "Elise",
  "title": "örümcek kraliçe",
  "titleEn": "the Spider Queen",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Elise.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Elise.png",
  "focusX": 95,
  "focusY": 100,
  "zoomStart": 3.7
},
{
  "name": "Evelynn",
  "id": "Evelynn",
  "title": "acı kucağı",
  "titleEn": "Agony's Embrace",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Evelynn.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Evelynn.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Ezreal",
  "id": "Ezreal",
  "title": "maceracı kaşif",
  "titleEn": "the Prodigal Explorer",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Ezreal.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ezreal.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Fiddlesticks",
  "id": "Fiddlesticks",
  "title": "antik korku",
  "titleEn": "the Ancient Fear",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Fiddlesticks.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Fiddlesticks.png",
  "focusX": 75,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Fiora",
  "id": "Fiora",
  "title": "büyük düellocu",
  "titleEn": "the Grand Duelist",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Fiora.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Fiora.png",
  "focusX": 50,
  "focusY": 85,
  "zoomStart": 6
},
{
  "name": "Fizz",
  "id": "Fizz",
  "title": "gelgit düzenbazı",
  "titleEn": "the Tidal Trickster",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Fizz.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Fizz.png",
  "focusX": 95,
  "focusY": 95,
  "zoomStart": 5
},
{
  "name": "Galio",
  "id": "Galio",
  "title": "devasa nöbetçi",
  "titleEn": "the Colossus",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Galio.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Galio.png",
  "focusX": 35,
  "focusY": 100,
  "zoomStart": 5.2
},
{
  "name": "Gangplank",
  "id": "Gangplank",
  "title": "tuzlu belanın kralı",
  "titleEn": "the Saltwater Scourge",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Gangplank.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Gangplank.png",
  "focusX": 100,
  "focusY": 89,
  "zoomStart": 3.7
},
{
  "name": "Garen",
  "id": "Garen",
  "title": "demacia'nın kudreti",
  "titleEn": "The Might of Demacia",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Garen.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Garen.png",
  "focusX": 45,
  "focusY": 100,
  "zoomStart": 5
},
{
  "name": "Gnar",
  "id": "Gnar",
  "title": "eksik halka",
  "titleEn": "the Missing Link",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Gnar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Gnar.png",
  "focusX": 40,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Gragas",
  "id": "Gragas",
  "title": "asi bira ustası",
  "titleEn": "the Rabble Rouser",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Gragas.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Gragas.png",
  "focusX": 75,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Graves",
  "id": "Graves",
  "title": "kanun kaçağı",
  "titleEn": "the Outlaw",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Graves.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Graves.png",
  "focusX": 40,
  "focusY": 98,
  "zoomStart": 2.8
},
{
  "name": "Gwen",
  "id": "Gwen",
  "title": "kutsanmış terzi",
  "titleEn": "The Hallowed Seamstress",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Gwen.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Gwen.png",
  "focusX": 93,
  "focusY": 85,
  "zoomStart": 4
},
{
  "name": "Hecarim",
  "id": "Hecarim",
  "title": "savaşın gölgesi",
  "titleEn": "the Shadow of War",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Hecarim.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Hecarim.png",
  "focusX": 75,
  "focusY": 95,
  "zoomStart": 3.3
},
{
  "name": "Heimerdinger",
  "id": "Heimerdinger",
  "title": "saygın mucit",
  "titleEn": "the Revered Inventor",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Heimerdinger.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Heimerdinger.png",
  "focusX": 50,
  "focusY": 100,
  "zoomStart": 5.5
},
{
  "name": "Hwei",
  "id": "Hwei",
  "title": "visionary",
  "titleEn": "the Visionary",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Hwei.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Hwei.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Illaoi",
  "id": "Illaoi",
  "title": "kraken rahibesi",
  "titleEn": "the Kraken Priestess",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Illaoi.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Illaoi.png",
  "focusX": 92,
  "focusY": 30,
  "zoomStart": 3.5
},
{
  "name": "Irelia",
  "id": "Irelia",
  "title": "bıçak dansçısı",
  "titleEn": "the Blade Dancer",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Irelia.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Irelia.png",
  "focusX": 5,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Ivern",
  "id": "Ivern",
  "title": "yeşil baba",
  "titleEn": "the Green Father",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Ivern.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ivern.png",
  "focusX": 0,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Janna",
  "id": "Janna",
  "title": "fırtınanın öfkesi",
  "titleEn": "the Storm's Fury",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Janna.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Janna.png",
  "focusX": 30,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Jarvan IV",
  "id": "JarvanIV",
  "title": "demacia örneği",
  "titleEn": "the Exemplar of Demacia",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/JarvanIV.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/JarvanIV.png",
  "focusX": 34,
  "focusY": 88,
  "zoomStart": 2.8
},
{
  "name": "Jax",
  "id": "Jax",
  "title": "silah ustası",
  "titleEn": "Grandmaster at Arms",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Jax.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Jax.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Jayce",
  "id": "Jayce",
  "title": "yarının savunucusu",
  "titleEn": "the Defender of Tomorrow",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Jayce.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Jayce.png",
  "focusX": 95,
  "focusY": 95,
  "zoomStart": 4
},
{
  "name": "Jhin",
  "id": "Jhin",
  "title": "erdemli katil",
  "titleEn": "the Virtuoso",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Jhin.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Jhin.png",
  "focusX": 0,
  "focusY": 100,
  "zoomStart": 2.3
},
{
  "name": "Jinx",
  "id": "Jinx",
  "title": "çılgın bomba uzmanı",
  "titleEn": "the Loose Cannon",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Jinx.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Jinx.png",
  "focusX": 100,
  "focusY": 85,
  "zoomStart": 2.7
},
{
  "name": "K'Sante",
  "id": "KSante",
  "title": "nazumah'ın gururu",
  "titleEn": "the Pride of Nazumah",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/KSante.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/KSante.png",
  "focusX": 30,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Kai'Sa",
  "id": "Kaisa",
  "title": "boşluğun kızı",
  "titleEn": "Daughter of the Void",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Kaisa.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kaisa.png",
  "focusX": 40,
  "focusY": 95,
  "zoomStart": 4
},
{
  "name": "Kalista",
  "id": "Kalista",
  "title": "intikam ruhu",
  "titleEn": "the Spear of Vengeance",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Kalista.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kalista.png",
  "focusX": 30,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Karma",
  "id": "Karma",
  "title": "aydınlanmış olan",
  "titleEn": "the Enlightened One",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Karma.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Karma.png",
  "focusX": 50,
  "focusY": 85,
  "zoomStart": 3.2
},
{
  "name": "Karthus",
  "id": "Karthus",
  "title": "ölüm habercisi",
  "titleEn": "the Deathsinger",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Karthus.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Karthus.png",
  "focusX": 49,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Kassadin",
  "id": "Kassadin",
  "title": "boşluk gezgini",
  "titleEn": "the Void Walker",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Kassadin.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kassadin.png",
  "focusX": 75,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Katarina",
  "id": "Katarina",
  "title": "uğursuz bıçak",
  "titleEn": "the Sinister Blade",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Katarina.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Katarina.png",
  "focusX": 85,
  "focusY": 95,
  "zoomStart": 4
},
{
  "name": "Kayle",
  "id": "Kayle",
  "title": "doğruluğun kılıcı",
  "titleEn": "the Righteous",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Kayle.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kayle.png",
  "focusX": 55,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Kayn",
  "id": "Kayn",
  "title": "gölge biçicisi",
  "titleEn": "the Shadow Reaper",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Kayn.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kayn.png",
  "focusX": 48,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Kennen",
  "id": "Kennen",
  "title": "fırtınanın kalbi",
  "titleEn": "the Heart of the Tempest",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Kennen.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kennen.png",
  "focusX": 45,
  "focusY": 55,
  "zoomStart": 4.2
},
{
  "name": "Kha'Zix",
  "id": "Khazix",
  "title": "boşluk yağmacısı",
  "titleEn": "the Voidreaver",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Khazix.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Khazix.png",
  "focusX": 40,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Kindred",
  "id": "Kindred",
  "title": "sonsuz avcılar",
  "titleEn": "The Eternal Hunters",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Diğer",
  "genderEn": "Other",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Kindred.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kindred.png",
  "focusX": 54,
  "focusY": 100,
  "zoomStart": 3.7
},
{
  "name": "Kled",
  "id": "Kled",
  "title": "inatçı süvari",
  "titleEn": "the Cantankerous Cavalier",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Kled.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Kled.png",
  "focusX": 100,
  "focusY": 80,
  "zoomStart": 4.2
},
{
  "name": "Kog'Maw",
  "id": "KogMaw",
  "title": "boşluğun ağzı",
  "titleEn": "the Mouth of the Abyss",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/KogMaw.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/KogMaw.png",
  "focusX": 83,
  "focusY": 100,
  "zoomStart": 3.8
},
{
  "name": "LeBlanc",
  "id": "Leblanc",
  "title": "aldatıcı",
  "titleEn": "the Deceiver",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Leblanc.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Leblanc.png",
  "focusX": 42,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Lee Sin",
  "id": "LeeSin",
  "title": "kör keşiş",
  "titleEn": "the Blind Monk",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/LeeSin.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/LeeSin.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3.8
},
{
  "name": "Leona",
  "id": "Leona",
  "title": "şafak ışığı",
  "titleEn": "the Radiant Dawn",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Leona.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Leona.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Lillia",
  "id": "Lillia",
  "title": "utangaç çiçek",
  "titleEn": "the Bashful Bloom",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Lillia.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Lillia.png",
  "focusX": 30,
  "focusY": 93,
  "zoomStart": 4.5
},
{
  "name": "Lissandra",
  "id": "Lissandra",
  "title": "buz cadısı",
  "titleEn": "the Ice Witch",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Lissandra.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Lissandra.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 3.8
},
{
  "name": "Lucian",
  "id": "Lucian",
  "title": "arınmış silahşör",
  "titleEn": "the Purifier",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Lucian.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Lucian.png",
  "focusX": 100,
  "focusY": 70,
  "zoomStart": 2.2
},
{
  "name": "Lulu",
  "id": "Lulu",
  "title": "peri büyücüsü",
  "titleEn": "the Fae Sorceress",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Lulu.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Lulu.png",
  "focusX": 62,
  "focusY": 100,
  "zoomStart": 3.8
},
{
  "name": "Lux",
  "id": "Lux",
  "title": "ışığın hanımı",
  "titleEn": "the Lady of Luminosity",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Lux.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Lux.png",
  "focusX": 30,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Malphite",
  "id": "Malphite",
  "title": "monolit parçası",
  "titleEn": "Shard of the Monolith",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Malphite.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Malphite.png",
  "focusX": 60,
  "focusY": 80,
  "zoomStart": 4
},
{
  "name": "Malzahar",
  "id": "Malzahar",
  "title": "boşluğun kahini",
  "titleEn": "the Prophet of the Void",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Malzahar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Malzahar.png",
  "focusX": 39,
  "focusY": 100,
  "zoomStart": 3.1
},
{
  "name": "Maokai",
  "id": "Maokai",
  "title": "çarpık treant",
  "titleEn": "the Twisted Treant",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Maokai.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Maokai.png",
  "focusX": 40,
  "focusY": 90,
  "zoomStart": 5
},
{
  "name": "Master Yi",
  "id": "MasterYi",
  "title": "wuju ustası",
  "titleEn": "the Wuju Bladesman",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/MasterYi.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/MasterYi.png",
  "focusX": 15,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Mel",
  "id": "Mel",
  "title": "the soul's reflection",
  "titleEn": "the Soul's Reflection",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Mel.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Mel.png",
  "focusX": 53,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Milio",
  "id": "Milio",
  "title": "nazik alev",
  "titleEn": "The Gentle Flame",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Milio.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Milio.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3.8
},
{
  "name": "Miss Fortune",
  "id": "MissFortune",
  "title": "ödül avcısı",
  "titleEn": "the Bounty Hunter",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/MissFortune.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/MissFortune.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Mordekaiser",
  "id": "Mordekaiser",
  "title": "demir hayalet",
  "titleEn": "the Iron Revenant",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Mordekaiser.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Mordekaiser.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.4
},
{
  "name": "Morgana",
  "id": "Morgana",
  "title": "düşmüş",
  "titleEn": "the Fallen",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Morgana.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Morgana.png",
  "focusX": 100,
  "focusY": 67,
  "zoomStart": 4.3
},
{
  "name": "Naafiri",
  "id": "Naafiri",
  "title": "yüz tazı",
  "titleEn": "the Hound of a Hundred Bites",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Dişi",
  "genderEn": "Female",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Naafiri.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Naafiri.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Nami",
  "id": "Nami",
  "title": "dalga çağıran",
  "titleEn": "the Tidecaller",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Nami.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nami.png",
  "focusX": 5,
  "focusY": 75,
  "zoomStart": 2.7
},
{
  "name": "Nasus",
  "id": "Nasus",
  "title": "kumların küratörü",
  "titleEn": "the Curator of the Sands",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Nasus.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nasus.png",
  "focusX": 40,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Nautilus",
  "id": "Nautilus",
  "title": "derinliklerin devi",
  "titleEn": "the Titan of the Depths",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Nautilus.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nautilus.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Neeko",
  "id": "Neeko",
  "title": "meraklı bukalemun",
  "titleEn": "the Curious Chameleon",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Neeko.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Neeko.png",
  "focusX": 30,
  "focusY": 95,
  "zoomStart": 4.3
},
{
  "name": "Nidalee",
  "id": "Nidalee",
  "title": "vahşi avcı",
  "titleEn": "the Bestial Huntress",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Nidalee.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nidalee.png",
  "focusX": 46,
  "focusY": 72,
  "zoomStart": 4.2
},
{
  "name": "Nilah",
  "id": "Nilah",
  "title": "sınırsız neşe",
  "titleEn": "the Joy Unbound",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Nilah.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nilah.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Nocturne",
  "id": "Nocturne",
  "title": "ebedi kabus",
  "titleEn": "the Eternal Nightmare",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Nocturne.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nocturne.png",
  "focusX": 60,
  "focusY": 76,
  "zoomStart": 3.5
},
{
  "name": "Nunu & Willump",
  "id": "Nunu",
  "title": "çocuk ve yeti",
  "titleEn": "the Boy and His Yeti",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Nunu.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Nunu.png",
  "focusX": 0,
  "focusY": 15,
  "zoomStart": 3.3
},
{
  "name": "Olaf",
  "id": "Olaf",
  "title": "çılgın berserker",
  "titleEn": "the Berserker",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Olaf.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Olaf.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Orianna",
  "id": "Orianna",
  "title": "saatli kız",
  "titleEn": "the Lady of Clockwork",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Orianna.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Orianna.png",
  "focusX": 45,
  "focusY": 100,
  "zoomStart": 3.1
},
{
  "name": "Ornn",
  "id": "Ornn",
  "title": "dağın altında ateş",
  "titleEn": "The Fire below the Mountain",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Ornn.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ornn.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 2.9
},
{
  "name": "Pantheon",
  "id": "Pantheon",
  "title": "yenilmez mızrak",
  "titleEn": "the Unbreakable Spear",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Pantheon.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Pantheon.png",
  "focusX": 70,
  "focusY": 100,
  "zoomStart": 2.6
},
{
  "name": "Poppy",
  "id": "Poppy",
  "title": "çekicin bekçisi",
  "titleEn": "Keeper of the Hammer",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Poppy.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Poppy.png",
  "focusX": 73,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Pyke",
  "id": "Pyke",
  "title": "kanlı liman celladı",
  "titleEn": "the Bloodharbor Ripper",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/Pyke.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Pyke.png",
  "focusX": 35,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Qiyana",
  "id": "Qiyana",
  "title": "elementlerin imparatoriçesi",
  "titleEn": "Empress of the Elements",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Qiyana.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Qiyana.png",
  "focusX": 0,
  "focusY": 100,
  "zoomStart": 2.1
},
{
  "name": "Quinn",
  "id": "Quinn",
  "title": "demacia'nın kanatları",
  "titleEn": "Demacia's Wings",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Quinn.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Quinn.png",
  "focusX": 0,
  "focusY": 84,
  "zoomStart": 2.5
},
{
  "name": "Rakan",
  "id": "Rakan",
  "title": "baştan çıkarıcı",
  "titleEn": "The Charmer",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Rakan.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Rakan.png",
  "focusX": 36,
  "focusY": 85,
  "zoomStart": 4
},
{
  "name": "Rammus",
  "id": "Rammus",
  "title": "zırhlı armadillo",
  "titleEn": "the Armordillo",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Rammus.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Rammus.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Rek'Sai",
  "id": "RekSai",
  "title": "boşluğun kazıcısı",
  "titleEn": "the Void Burrower",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/RekSai.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/RekSai.png",
  "focusX": 25,
  "focusY": 92,
  "zoomStart": 3.5
},
{
  "name": "Rell",
  "id": "Rell",
  "title": "demir bakire",
  "titleEn": "the Iron Maiden",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Rell.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Rell.png",
  "focusX": 35,
  "focusY": 100,
  "zoomStart": 3.7
},
{
  "name": "Renata Glasc",
  "id": "Renata",
  "title": "kimyasal barones",
  "titleEn": "the Chem-Baroness",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Renata.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Renata.png",
  "focusX": 40,
  "focusY": 98,
  "zoomStart": 4.4
},
{
  "name": "Renekton",
  "id": "Renekton",
  "title": "kumların kasabı",
  "titleEn": "the Butcher of the Sands",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Renekton.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Renekton.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Rengar",
  "id": "Rengar",
  "title": "gururlu avcı",
  "titleEn": "the Pridestalker",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Rengar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Rengar.png",
  "focusX": 95,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Riven",
  "id": "Riven",
  "title": "sürgün",
  "titleEn": "the Exile",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Riven.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Riven.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.4
},
{
  "name": "Rumble",
  "id": "Rumble",
  "title": "mekanik bela",
  "titleEn": "the Mechanized Menace",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Rumble.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Rumble.png",
  "focusX": 90,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Ryze",
  "id": "Ryze",
  "title": "rune büyücüsü",
  "titleEn": "the Rune Mage",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Ryze.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ryze.png",
  "focusX": 33,
  "focusY": 90,
  "zoomStart": 4.6
},
{
  "name": "Samira",
  "id": "Samira",
  "title": "çöl gülü",
  "titleEn": "the Desert Rose",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Samira.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Samira.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.7
},
{
  "name": "Sejuani",
  "id": "Sejuani",
  "title": "kuzeyin gazabı",
  "titleEn": "Fury of the North",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Sejuani.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sejuani.png",
  "focusX": 44,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Senna",
  "id": "Senna",
  "title": "kurtarıcı",
  "titleEn": "the Redeemer",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Senna.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Senna.png",
  "focusX": 20,
  "focusY": 55,
  "zoomStart": 2.7
},
{
  "name": "Seraphine",
  "id": "Seraphine",
  "title": "yıldız gözlü şarkıcı",
  "titleEn": "the Starry-Eyed Songstress",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Seraphine.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Seraphine.png",
  "focusX": 50,
  "focusY": 100,
  "zoomStart": 4.5
},
{
  "name": "Sett",
  "id": "Sett",
  "title": "yarı canavar",
  "titleEn": "the Boss",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Sett.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sett.png",
  "focusX": 20,
  "focusY": 28,
  "zoomStart": 4
},
{
  "name": "Shaco",
  "id": "Shaco",
  "title": "iblis soytarı",
  "titleEn": "the Demon Jester",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Shaco.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Shaco.png",
  "focusX": 50,
  "focusY": 59,
  "zoomStart": 3.7
},
{
  "name": "Shen",
  "id": "Shen",
  "title": "alacakaranlığın gözü",
  "titleEn": "the Eye of Twilight",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Shen.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Shen.png",
  "focusX": 35,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Shyvana",
  "id": "Shyvana",
  "title": "yarı ejder",
  "titleEn": "the Half-Dragon",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Shyvana.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Shyvana.png",
  "focusX": 100,
  "focusY": 85,
  "zoomStart": 2.7
},
{
  "name": "Singed",
  "id": "Singed",
  "title": "çılgın kimyager",
  "titleEn": "the Mad Chemist",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Singed.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Singed.png",
  "focusX": 70,
  "focusY": 90,
  "zoomStart": 4.6
},
{
  "name": "Sion",
  "id": "Sion",
  "title": "ölümsüz savaş makinesi",
  "titleEn": "The Undead Juggernaut",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Sion.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sion.png",
  "focusX": 45,
  "focusY": 100,
  "zoomStart": 3.5
},
{
  "name": "Sivir",
  "id": "Sivir",
  "title": "savaş metresi",
  "titleEn": "the Battle Mistress",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Sivir.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sivir.png",
  "focusX": 40,
  "focusY": 100,
  "zoomStart": 3.7
},
{
  "name": "Skarner",
  "id": "Skarner",
  "title": "kadim egemen",
  "titleEn": "the Primordial Sovereign",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ixtal",
  "regionEn": "Ixtal",
  "image": "images/Skarner.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Skarner.png",
  "focusX": 80,
  "focusY": 100,
  "zoomStart": 4.2
},
{
  "name": "Smolder",
  "id": "Smolder",
  "title": "ejder yavrusu",
  "titleEn": "the Fiery Fledgling",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Smolder.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Smolder.png",
  "focusX": 50,
  "focusY":  85,
  "zoomStart": 5
},
{
  "name": "Sona",
  "id": "Sona",
  "title": "tellerin virtüözü",
  "titleEn": "Maven of the Strings",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Sona.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sona.png",
  "focusX": 95,
  "focusY": 100,
  "zoomStart": 2
},
{
  "name": "Soraka",
  "id": "Soraka",
  "title": "yıldız çocuğu",
  "titleEn": "the Starchild",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Soraka.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Soraka.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.8
},
{
  "name": "Swain",
  "id": "Swain",
  "title": "noxus başkomutanı",
  "titleEn": "the Noxian Grand General",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Swain.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Swain.png",
  "focusX": 25,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Sylas",
  "id": "Sylas",
  "title": "zincirsiz",
  "titleEn": "the Unshackled",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Sylas.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Sylas.png",
  "focusX": 95,
  "focusY": 84,
  "zoomStart": 3.6
},
{
  "name": "Syndra",
  "id": "Syndra",
  "title": "karanlık egemen",
  "titleEn": "the Dark Sovereign",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Syndra.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Syndra.png",
  "focusX": 10,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Tahm Kench",
  "id": "TahmKench",
  "title": "nehir kralı",
  "titleEn": "the River King",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/TahmKench.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/TahmKench.png",
  "focusX": 9,
  "focusY": 94,
  "zoomStart": 3.4
},
{
  "name": "Taliyah",
  "id": "Taliyah",
  "title": "taş dokuyucu",
  "titleEn": "the Stoneweaver",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Taliyah.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Taliyah.png",
  "focusX": 0,
  "focusY": 75,
  "zoomStart": 2.5
},
{
  "name": "Talon",
  "id": "Talon",
  "title": "bıçağın gölgesi",
  "titleEn": "the Blade's Shadow",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Talon.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Talon.png",
  "focusX": 75,
  "focusY": 100,
  "zoomStart": 2.9
},
{
  "name": "Taric",
  "id": "Taric",
  "title": "mücevherlerin koruyucusu",
  "titleEn": "the Shield of Valoran",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Taric.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Taric.png",
  "focusX": 85,
  "focusY": 110,
  "zoomStart": 2.7
},
{
  "name": "Teemo",
  "id": "Teemo",
  "title": "çevik izci",
  "titleEn": "the Swift Scout",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Teemo.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Teemo.png",
  "focusX": 85,
  "focusY": 57,
  "zoomStart": 4.5
},
{
  "name": "Thresh",
  "id": "Thresh",
  "title": "zincir gardiyanı",
  "titleEn": "the Chain Warden",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Thresh.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Thresh.png",
  "focusX": 51,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Tristana",
  "id": "Tristana",
  "title": "yordle topçusu",
  "titleEn": "the Yordle Gunner",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Tristana.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Tristana.png",
  "focusX": 100,
  "focusY": 86,
  "zoomStart": 3.4
},
{
  "name": "Trundle",
  "id": "Trundle",
  "title": "trol kralı",
  "titleEn": "the Troll King",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Trundle.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Trundle.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Tryndamere",
  "id": "Tryndamere",
  "title": "barbar kral",
  "titleEn": "the Barbarian King",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Tryndamere.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Tryndamere.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 2.6
},
{
  "name": "Twisted Fate",
  "id": "TwistedFate",
  "title": "kart ustası",
  "titleEn": "the Card Master",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bilgewater",
  "regionEn": "Bilgewater",
  "image": "images/TwistedFate.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/TwistedFate.png",
  "focusX": 60,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Twitch",
  "id": "Twitch",
  "title": "veba sıçanı",
  "titleEn": "the Plague Rat",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Twitch.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Twitch.png",
  "focusX": 60,
  "focusY": 75,
  "zoomStart": 4
},
{
  "name": "Udyr",
  "id": "Udyr",
  "title": "ruh gezgini",
  "titleEn": "the Spirit Walker",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Udyr.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Udyr.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Urgot",
  "id": "Urgot",
  "title": "dehşetli gurur",
  "titleEn": "the Dreadnought",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Urgot.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Urgot.png",
  "focusX": 0,
  "focusY": 110,
  "zoomStart": 2.4
},
{
  "name": "Varus",
  "id": "Varus",
  "title": "intikam oku",
  "titleEn": "the Arrow of Retribution",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Varus.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Varus.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.7
},
{
  "name": "Vayne",
  "id": "Vayne",
  "title": "gece avcısı",
  "titleEn": "the Night Hunter",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/Vayne.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Vayne.png",
  "focusX": 53,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Veigar",
  "id": "Veigar",
  "title": "küçük kötülüğün efendisi",
  "titleEn": "the Tiny Master of Evil",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Veigar.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Veigar.png",
  "focusX": 100,
  "focusY": 81, 
  "zoomStart": 3.3
},
{
  "name": "Vel'Koz",
  "id": "Velkoz",
  "title": "boşluğun gözü",
  "titleEn": "the Eye of the Void",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Void",
  "regionEn": "Void",
  "image": "images/Velkoz.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Velkoz.png",
  "focusX": 10,
  "focusY": 0,
  "zoomStart": 3
},
{
  "name": "Vex",
  "id": "Vex",
  "title": "kasvetli yordle",
  "titleEn": "the Gloomist",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Vex.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Vex.png",
  "focusX": 0,
  "focusY": 62,
  "zoomStart": 2.6
},
{
  "name": "Vi",
  "id": "Vi",
  "title": "piltover'ın kanun koruyucusu",
  "titleEn": "the Piltover Enforcer",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Piltover",
  "regionEn": "Piltover",
  "image": "images/Vi.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Vi.png",
  "focusX": 30,
  "focusY": 100,
  "zoomStart": 3.1
},
{
  "name": "Viego",
  "id": "Viego",
  "title": "mahvolmuş kral",
  "titleEn": "the Ruined King",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Viego.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Viego.png",
  "focusX": 25,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Viktor",
  "id": "Viktor",
  "title": "makinelerin habercisi",
  "titleEn": "the Herald of the Arcane",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Viktor.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Viktor.png",
  "focusX": 65,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Vladimir",
  "id": "Vladimir",
  "title": "kızıl orak",
  "titleEn": "the Crimson Reaper",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Noxus",
  "regionEn": "Noxus",
  "image": "images/Vladimir.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Vladimir.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.5
},
{
  "name": "Volibear",
  "id": "Volibear",
  "title": "amansız fırtına",
  "titleEn": "the Relentless Storm",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Freljord",
  "regionEn": "Freljord",
  "image": "images/Volibear.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Volibear.png",
  "focusX": 40,
  "focusY": 100,
  "zoomStart": 3.2
},
{
  "name": "Warwick",
  "id": "Warwick",
  "title": "zaun'un öfkesi",
  "titleEn": "the Uncaged Wrath of Zaun",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Warwick.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Warwick.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 2.2
},
{
  "name": "Wukong",
  "id": "MonkeyKing",
  "title": "maymun kral",
  "titleEn": "the Monkey King",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/MonkeyKing.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/MonkeyKing.png",
  "focusX": 75,
  "focusY": 100,
  "zoomStart": 3.1
},
{
  "name": "Xayah",
  "id": "Xayah",
  "title": "asi",
  "titleEn": "the Rebel",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Xayah.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Xayah.png",
  "focusX": 45,
  "focusY": 100,
  "zoomStart": 3.4
},
{
  "name": "Xerath",
  "id": "Xerath",
  "title": "yükselmiş büyücü",
  "titleEn": "the Magus Ascendant",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Shurima",
  "regionEn": "Shurima",
  "image": "images/Xerath.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Xerath.png",
  "focusX": 85,
  "focusY": 100,
  "zoomStart": 3.6
},
{
  "name": "Xin Zhao",
  "id": "XinZhao",
  "title": "demacia'nın mızrağı",
  "titleEn": "the Seneschal of Demacia",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Demacia",
  "regionEn": "Demacia",
  "image": "images/XinZhao.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/XinZhao.png",
  "focusX": 15,
  "focusY": 100,
  "zoomStart": 2.5
},
{
  "name": "Yasuo",
  "id": "Yasuo",
  "title": "bağışlanmayan",
  "titleEn": "the Unforgiven",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Yasuo.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Yasuo.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 3.3
},
{
  "name": "Yone",
  "id": "Yone",
  "title": "geri dönen",
  "titleEn": "the Unforgotten",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Yone.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Yone.png",
  "focusX": 0,
  "focusY": 30,
  "zoomStart": 2.5
},
{
  "name": "Yorick",
  "id": "Yorick",
  "title": "ruhların çobanı",
  "titleEn": "Shepherd of Souls",
  "lane": "Üst Koridor",
  "laneEn": "Top Lane",
  "type": "Savaşçı",
  "typeEn": "Fighter",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Gölge Adalar",
  "regionEn": "Shadow Isles",
  "image": "images/Yorick.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Yorick.png",
  "focusX": 90,
  "focusY": 100,
  "zoomStart": 2.5
},
{
  "name": "Yuumi",
  "id": "Yuumi",
  "title": "sihirli kedi",
  "titleEn": "the Magical Cat",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Destek",
  "typeEn": "Support",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Bandle City",
  "regionEn": "Bandle City",
  "image": "images/Yuumi.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Yuumi.png",
  "focusX" : 43,
  "focusY": 100,
  "zoomStart": 4
},
{
  "name": "Zac",
  "id": "Zac",
  "title": "gizli silah",
  "titleEn": "the Secret Weapon",
  "lane": "Orman",
  "laneEn": "Jungle",
  "type": "Tank",
  "typeEn": "Tank",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Zac.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zac.png",
  "focusX": 78,
  "focusY": 96,
  "zoomStart": 2.8
},
{
  "name": "Zed",
  "id": "Zed",
  "title": "gölgelerin efendisi",
  "titleEn": "the Master of Shadows",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Suikastçı",
  "typeEn": "Assassin",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Ionia",
  "regionEn": "Ionia",
  "image": "images/Zed.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zed.png",
  "focusX": 10,
  "focusY": 100,
  "zoomStart": 3
},
{
  "name": "Zeri",
  "id": "Zeri",
  "title": "zaun'un kıvılcımı",
  "titleEn": "The Spark of Zaun",
  "lane": "Alt Koridor",
  "laneEn": "Bot Lane",
  "type": "Nişancı",
  "typeEn": "Marksman",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Zeri.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zeri.png",
  "focusX": 15,
  "focusY": 85,
  "zoomStart": 3.1
},
{
  "name": "Ziggs",
  "id": "Ziggs",
  "title": "hexplosives uzmanı",
  "titleEn": "the Hexplosives Expert",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Zaun",
  "regionEn": "Zaun",
  "image": "images/Ziggs.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Ziggs.png",
  "focusX": 100,
  "focusY": 80,
  "zoomStart": 4.4
},
{
  "name": "Zilean",
  "id": "Zilean",
  "title": "zamanın koruyucusu",
  "titleEn": "the Chronokeeper",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Erkek",
  "genderEn": "Male",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Zilean.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zilean.png",
  "focusX": 50,
  "focusY": 100,
  "zoomStart": 2.9
},
{
  "name": "Zoe",
  "id": "Zoe",
  "title": "alacakaranlığın özü",
  "titleEn": "the Aspect of Twilight",
  "lane": "Orta Koridor",
  "laneEn": "Mid Lane",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Targon",
  "regionEn": "Targon",
  "image": "images/Zoe.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zoe.png",
  "focusX": 30,
  "focusY": 80,
  "zoomStart": 5
},
{
  "name": "Zyra",
  "id": "Zyra",
  "title": "dikenlerin yükselişi",
  "titleEn": "Rise of the Thorns",
  "lane": "Destek",
  "laneEn": "Support",
  "type": "Büyücü",
  "typeEn": "Mage",
  "gender": "Kadın",
  "genderEn": "Female",
  "region": "Runeterra",
  "regionEn": "Runeterra",
  "image": "images/Zyra.png",
  "icon": "https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/Zyra.png",
  "focusX": 100,
  "focusY": 100,
  "zoomStart": 4
},
];  

// Küresel element değişkenlerini tanımlıyoruz (Sayfa yüklenince atanacaklar)
let championImage, guessInput, result, attempts, hint, shareButton, suggestions;
let selectedChampion;
let attemptCount = 0;
let gameOver = false;
let maxAttempts = 6;
let currentZoom = 3;
let guessedChampions = [];
let guessHistoryData = [];
let currentLanguage = "tr";

const translations = {
  tr: {
    subtitle: "Şampiyonunu ayağından tahmin et!",
    inputTitle: "Tahminini Yaz",
    placeholder: "Şampiyon adı yaz...",
    guessButton: "Tahmin Et",
    hintButton: "İpucu Al",
    newButton: "Yeni Karakter",
    historyTitle: "Tahmin Geçmişi",
    attempts: "Deneme",
    wrong: "Yanlış tahmin!",
    correct: "DOĞRU! Şampiyon: ",
    empty: "Bir şampiyon adı yaz.",
    chooseList: "Lütfen listeden bir şampiyon seç.",
    already: "Bu şampiyonu zaten denedin.",
    lost: "Kaybettin! Doğru cevap: ",
    hintLocked: "İpucu için en az 2 tahmin yapmalısın.",
    title: "Unvan",
    lane: "Koridor",
    type: "Tür",
    gender: "Cinsiyet",
    region: "Bölge",
    copied: "Sonuç panoya kopyalandı!",
    nextChamp: "YENİ ŞAMPİYON"
    
  },
  en: {
    subtitle: "Guess the champion from their feet!",
    inputTitle: "Write Your Guess",
    placeholder: "Type champion name...",
    guessButton: "Guess",
    hintButton: "Hint",
    newButton: "New Champion",
    historyTitle: "Guess History",
    attempts: "Attempts",
    wrong: "Wrong guess!",
    correct: "CORRECT! Champion: ",
    empty: "Type a champion name.",
    chooseList: "Choose a champion from the list.",
    already: "You already guessed this champion.",
    lost: "You lost! Correct answer: ",
    hintLocked: "You need at least 2 guesses.",
    title: "Title",
    lane: "Lane",
    type: "Type",
    gender: "Gender",
    region: "Region",
    copied: "Result copied to clipboard!",
    nextChamp: "NEXT CHAMPION"
  }
};

function startGame() {
  gameOver = false;
  attemptCount = 0;
  guessedChampions = [];
  guessHistoryData = [];

  if(result) result.textContent = "";
  if(hint) hint.textContent = "";
  if(attempts) attempts.textContent = `${translations[currentLanguage].attempts}: 0 / ${maxAttempts}`;
  
  const historyDiv = document.getElementById("guessHistory");
  if(historyDiv) historyDiv.innerHTML = "";

  if(guessInput) {
    guessInput.value = "";
    guessInput.disabled = false;
  }
  
  const guessBtn = document.getElementById("guessButton");
  if(guessBtn) guessBtn.disabled = false;

  if(shareButton) shareButton.style.display = "none";
  if(suggestions) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
  }

  // GÜNLÜK ŞAMPİYON SEÇİM ALGORİTMASI
  const now = new Date();
  const dateSeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const pseudoRandom = Math.abs(Math.sin(dateSeed));
  const dailyIndex = Math.floor(pseudoRandom * champions.length);
  
  selectedChampion = champions[dailyIndex];
  currentZoom = selectedChampion.zoomStart || 4;

  if (championImage) {
    // Resim yüklenirken gizleniyor (Siyah ekran ve kırık resim alt metni engellendi)
    championImage.style.opacity = "0"; 
    championImage.style.transition = "none"; 
    
    championImage.src = selectedChampion.image;

    championImage.onload = function () {
      updateZoom();
      championImage.style.opacity = "1"; 
    };
  }
}

function checkGuess() {
  if (gameOver) return;

  const t = translations[currentLanguage];
  const userGuessOriginal = guessInput.value.trim();

  if(suggestions) suggestions.style.display = "none";

  if (userGuessOriginal === "") {
    result.textContent = t.empty;
    result.style.color = "orange";
    return;
  }

  const guessedChampion = champions.find(champion =>
    champion.name.toLowerCase() === userGuessOriginal.toLowerCase()
  );

  if (!guessedChampion) {
    result.textContent = t.chooseList;
    result.style.color = "orange";
    guessInput.value = "";
    return;
  }

  const alreadyGuessed = guessedChampions.includes(guessedChampion.name);

  if (alreadyGuessed) {
    result.textContent = t.already;
    result.style.color = "orange";
    guessInput.value = "";
    if(suggestions) {
      suggestions.innerHTML = "";
      suggestions.style.display = "none";
    }
    return;
  }

  attemptCount++;
  guessedChampions.push(guessedChampion.name);
  attempts.textContent = `${t.attempts}: ${attemptCount} / ${maxAttempts}`;

  if (guessedChampion.name === selectedChampion.name) {
    addGuessToHistory(guessedChampion, true);
    result.textContent = t.correct + selectedChampion.name;
    result.style.color = "lightgreen";
    
    // Doğru tahminde resmin yavaşça (0.4 saniyede) tam boyuta açılmasını sağlar:
    championImage.style.transition = "transform 0.4s ease-in-out";
    currentZoom = 1;
    updateZoom();
    finishGame();
  } else {
    addGuessToHistory(guessedChampion, false);
    result.textContent = t.wrong;
    result.style.color = "red";

    if (currentZoom > 1.6) {
      currentZoom -= 0.22;
      
      // Yanlış tahminde resmin yavaşça (0.3 saniyede) uzaklaşmasını sağlar:
      championImage.style.transition = "transform 0.3s ease-in-out";
      updateZoom();
    }

    if (attemptCount >= maxAttempts) {
      result.textContent = t.lost + selectedChampion.name;
      result.style.color = "orange";
      
      // Kaybedildiğinde resmin yavaşça tam boyuta açılmasını sağlar:
      championImage.style.transition = "transform 0.4s ease-in-out";
      currentZoom = 1;
      updateZoom();
      finishGame();
    }
  }

  guessInput.value = "";
}

function addGuessToHistory(guessedChampion, isCorrect) {
  guessHistoryData.unshift({
    champion: guessedChampion,
    correct: isCorrect
  });
  renderGuessHistory();
}

function renderGuessHistory() {
  const history = document.getElementById("guessHistory");
  if(!history) return;
  history.innerHTML = "";

  const t = translations[currentLanguage];

  guessHistoryData.forEach(item => {
    const guessedChampion = item.champion;
    const isCorrect = item.correct;

    const laneCorrect = guessedChampion.lane === selectedChampion.lane;
    const typeCorrect = guessedChampion.type === selectedChampion.type;
    const genderCorrect = guessedChampion.gender === selectedChampion.gender;
    const regionCorrect = guessedChampion.region === selectedChampion.region;

    const laneText = currentLanguage === "tr" ? guessedChampion.lane : guessedChampion.laneEn;
    const typeText = currentLanguage === "tr" ? guessedChampion.type : guessedChampion.typeEn;
    const genderText = currentLanguage === "tr" ? guessedChampion.gender : guessedChampion.genderEn;
    const regionText = currentLanguage === "tr" ? guessedChampion.region : guessedChampion.regionEn;

    const div = document.createElement("div");
    div.className = "guess-item";

    div.innerHTML = `
      <img src="${guessedChampion.icon}" alt="${guessedChampion.name}">
      <div class="guess-info">
        <strong class="guess-name ${isCorrect ? "name-correct" : "name-wrong"}">
          ${guessedChampion.name}
        </strong>
        <div class="clue-row">
          <span class="${laneCorrect ? "clue-correct" : "clue-wrong"}">
            ${t.lane}: ${laneText}
          </span>
          <span class="${typeCorrect ? "clue-correct" : "clue-wrong"}">
            ${t.type}: ${typeText}
          </span>
          <span class="${genderCorrect ? "clue-correct" : "clue-wrong"}">
            ${t.gender}: ${genderText}
          </span>
          <span class="${regionCorrect ? "clue-correct" : "clue-wrong"}">
            ${t.region}: ${regionText}
          </span>
        </div>
      </div>
    `;
    history.appendChild(div);
  });
}

function showHint() {
  const t = translations[currentLanguage];
  if (!selectedChampion) return;

  if (attemptCount < 2) {
    hint.textContent = t.hintLocked;
    hint.style.color = "orange";
    return;
  }

  const titleText = currentLanguage === "tr" ? selectedChampion.title : selectedChampion.titleEn;
  const laneText = currentLanguage === "tr" ? selectedChampion.lane : selectedChampion.laneEn;
  const regionText = currentLanguage === "tr" ? selectedChampion.region : selectedChampion.regionEn;

  hint.textContent = `${t.title}: ${titleText} | ${t.lane}: ${laneText} | ${t.region}: ${regionText}`;
  hint.style.color = "#c89b3c";
}

function finishGame() {
  gameOver = true;
  guessInput.value = "";
  guessInput.disabled = true;

  const guessBtn = document.getElementById("guessButton");
  if(guessBtn) guessBtn.disabled = true;

  if(suggestions) {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
  }
  if(shareButton) shareButton.style.display = "inline-block";

  const newBtn = document.getElementById("newButton");
  if(newBtn) newBtn.style.display = "none";
}

function shareResult() {
  const t = translations[currentLanguage];
  const text = `LoL Foot Guess\n${t.attempts}: ${attemptCount}/${maxAttempts}\nChampion: ${selectedChampion.name}`;
  navigator.clipboard.writeText(text);
  result.textContent = t.copied;
  result.style.color = "lightgreen";
}

function updateZoom() {
  if (!selectedChampion || !championImage) return;
  // transition = "none" satırını buradan sildik!
  championImage.style.transformOrigin = `${selectedChampion.focusX}% ${selectedChampion.focusY}%`;
  championImage.style.transform = `scale(${currentZoom})`;
}


function newGame() {
  startGame();
}

function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[currentLanguage];

  const subtitleEl = document.getElementById("subtitle");
  const inputTitleEl = document.getElementById("inputTitle");
  const guessBtn = document.getElementById("guessButton");
  const hintBtn = document.getElementById("hintButton");
  const newBtn = document.getElementById("newButton");
  const historyTitleEl = document.getElementById("historyTitle");

  if(subtitleEl) subtitleEl.textContent = t.subtitle;
  if(inputTitleEl) inputTitleEl.textContent = t.inputTitle;
  if(guessInput) guessInput.placeholder = t.placeholder;
  if(guessBtn) guessBtn.textContent = t.guessButton;
  if(hintBtn) hintBtn.textContent = t.hintButton;
  if(newBtn) newBtn.textContent = t.newButton;
  if(historyTitleEl) historyTitleEl.textContent = t.historyTitle;

  if(attempts) attempts.textContent = `${t.attempts}: ${attemptCount} / ${maxAttempts}`;
  renderGuessHistory();
  if(attempts) attempts.textContent = `${t.attempts}: ${attemptCount} / ${maxAttempts}`;
  renderGuessHistory();

  // İŞTE BU SATIRI EN ALTA EKLEYİN: Dil değiştiği an sayacı anlık güncellemeye zorlar
  const badge = document.getElementById("dailyCountdownBadge");
  if (badge) {
    const prefix = translations[currentLanguage].nextChamp;
    // Mevcut süreyi koruyarak sadece ön eki değiştirir
    const currentTimer = badge.textContent.split(": ").pop();
    badge.textContent = `${prefix}: ${currentTimer}`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  championImage = document.getElementById("championImage");
  guessInput = document.getElementById("guessInput");
  result = document.getElementById("result");
  attempts = document.getElementById("attempts");
  hint = document.getElementById("hint");
  shareButton = document.getElementById("shareButton");
  suggestions = document.getElementById("suggestions");
  // Tarayıcı dilini kontrol et, eğer 'tr' içeriyorsa Türkçe, yoksa varsayılan olarak İngilizce yap
const userLang = navigator.language || navigator.userLanguage;
if (userLang.toLowerCase().includes("tr")) {
  setLanguage("tr");
} else {
  setLanguage("en");
}

  if (guessInput) {
    guessInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const firstSuggestion = document.querySelector(".suggestion-item");
        if (firstSuggestion) {
          const suggestionName = firstSuggestion.querySelector("span").textContent;
          guessInput.value = suggestionName;
        }
        checkGuess();
      }
    });

    guessInput.addEventListener("input", function () {
      if (gameOver) return;
      const value = guessInput.value.toLowerCase();
      if(!suggestions) return;
      suggestions.innerHTML = "";

      if (value === "") {
        suggestions.style.display = "none";
        return;
      }

      const guessedNames = guessedChampions.map(name => name.toLowerCase());
      const filtered = champions.filter(champion =>
        champion.name.toLowerCase().includes(value) &&
        !guessedNames.includes(champion.name.toLowerCase())
      );

      if (filtered.length === 0) {
        suggestions.style.display = "none";
        return;
      }

      suggestions.style.display = "block";
      filtered.forEach(champion => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.innerHTML = `<img src="${champion.icon}" alt="${champion.name}"><span>${champion.name}</span>`;
        div.addEventListener("click", function () {
          guessInput.value = champion.name;
          suggestions.style.display = "none";
        });
        suggestions.appendChild(div);
      });
    });
  }

  startGame();

  function checkMidnightRefresh() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); 
    const timeUntilMidnight = midnight.getTime() - now.getTime();
    
    setTimeout(function() {
      location.reload(); 
    }, timeUntilMidnight);
  }
  
  checkMidnightRefresh();

 // Her saniye güncellenen canlı gece yarısı geri sayım sayacı (Dil Destekli)
  function startDailyCountdown() {
    const badge = document.getElementById("dailyCountdownBadge");
    if (!badge) return;

    function updateBadgeTimer() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); 

      const diff = midnight.getTime() - now.getTime();

      if (diff <= 0) {
        location.reload();
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');

      // Sabit yazı yerine, translations içindeki güncel dili okuyoruz:
      const prefix = translations[currentLanguage].nextChamp;
      // startDailyCountdown içindeki badge.textContent satırını bulun ve bununla değiştirin:
badge.textContent = `${prefix}: ${hours}:${minutes}:${seconds}`;
    }

    updateBadgeTimer(); 
    setInterval(updateBadgeTimer, 1000); 
  }

  startDailyCountdown();
});