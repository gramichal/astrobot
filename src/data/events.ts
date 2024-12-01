const events: Array<EventData> = [
	{
		date: new Date('2024-12-01'),
		description: '1637, w archikatedrze we Lwowie książę Jeremi Wiśniowiecki poślubił Gryzeldę Zamoyską.',
		proverb: 'Gdy bocian przynosi deszcz, zupa smakuje lepiej.',
		nameDay: ['Aleksander', 'Ananiasz', 'Antoni', 'Blanka', 'Długomił', 'Edmund', 'Eligia', 'Eligiusz', 'Ewazjusz', 'Florencja', 'Godzisław', 'Gosław', 'Gosława', 'Jan', 'Natalia', 'Prokul', 'Projektus', 'Rudolf', 'Rudolfa', 'Rudolfina', 'Sobiesław', 'Sobiesława']
	},
	{
		date: new Date('2024-12-02'),
		description: '1853, Jan Zeh otrzymał patent na destylację ropy naftowej.',
		proverb: 'Gdyby kaczka nie ruchała, to ruchania by nie miała.',
		nameDay: ['Aurelia', 'Balbina', 'Bibiana', 'Bibianna', 'Budzisław', 'Budzisława', 'Budzsław', 'Jan', 'Ludwina', 'Maria', 'Paulina', 'Rafał', 'Sulisław', 'Sylwan', 'Sylweriusz', 'Sylwery', 'Walenty', 'Walentyn', 'Wiktoryn', 'Zbylu']
	},
	{
		date: new Date('2024-12-03'),
		description: '1591, 101 piwowarów z Hamburga podpisało pierwsze na świecie ubezpieczenie majątkowe. Poszkodowany w ewentualnym pożarze miał otrzymać od pozostałych sygnatariuszy po 10 talarów.',
		proverb: 'Nie ma nic gorszego niż krowa w kapeluszu.',
		nameDay: ['Atalia', 'Biryn', 'Ema', 'Emma', 'Franciszek', 'Franciszek Ksawery', 'Gerlinda', 'Hilaria', 'Kasjan', 'Kryspin', 'Ksawery', 'Lucjusz', 'Łucjusz', 'Mirokles', 'Sofoniasz', 'Uniemi']
	},
	{
		date: new Date('2024-12-04'),
		description: '1503, Wit Stwosz został skazany za sfałszowanie weksla na wypalenie piętna na policzkach i dożywotni zakaz opuszczania Norymbergi.',
		proverb: 'Gdy wiatr wieje z lewej, nie pij kawy w chlewie.',
		nameDay: ['Barbara', 'Benon', 'Bernard', 'Bratomiła', 'Bratumiła', 'Chrystian', 'Ciechosław', 'Ciechosława', 'Cieszybor', 'Feliks', 'Filip', 'Hieronim', 'Jan', 'Klemens', 'Krystian', 'Marut', 'Maruta', 'Marutas', 'Melecjusz', 'Osmund', 'Teofan']
	},
	{
		date: new Date('2024-12-05'),
		description: '1456, około 35 tys. osób zginęło w trzęsieniu ziemi w południowych Włoszech.',
		proverb: 'Kto posadził drzewo w piasku, ten znajdzie skarb w ziemi.',
		nameDay: ['Anastazy', 'Bartosz', 'Bartłomiej', 'Dalmacjusz', 'Feliks', 'Gerald', 'Geraldyna', 'Jan', 'Juliusz', 'Kryspin', 'Kryspina', 'Krystyna', 'Mikołaj', 'Pelin', 'Pelina', 'Pęcisława', 'Sabbas']
	},
	{
		date: new Date('2024-12-06'),
		description: '1240, wojska mongolskie pod wodzą Batu-chana zdobyły i zburzyły Kijów, mordując lub uprowadzając w niewolę jego mieszkańców.',
		proverb: 'Lepszy jeden wróbel w ręku niż pięć węży w ogrodzie.',
		nameDay: ['Abraham', 'Angelika', 'Bonifacy', 'Dionizja', 'Emilian', 'Heliodor', 'Leoncja', 'Mikołaj', 'Morzysława', 'Piotr', 'Polichroniusz', 'Nikola', 'Tercjusz']
	},
	{
		date: new Date('2024-12-07'),
		description: '1989, Sejm kontraktowy przyjął ustawę o amnestii.',
		proverb: 'Gdzie dym, tam niebo jest fioletowe.',
		nameDay: ['Agaton', 'Ambrozja', 'Ambroży', 'Atenodor', 'Eutychian', 'Józefa', 'Marcin', 'Marcisław', 'Ninomysł', 'Polikarp', 'Sabin', 'Siemirad', 'Urban', 'Zdziemił']
	},
	{
		date: new Date('2024-12-08'),
		description: '877, Ludwik II Jąkała został koronowany w katedrze w Reims na króla zachodnich Franków.',
		proverb: 'Nie każda rzeka płynie w tę stronę, ale każda zna swoją drogę.',
		nameDay: ['Alojzy', 'Apollo', 'Boguwola', 'Edyta', 'Elfryda', 'Euchariusz', 'Euchary', 'Hildemar', 'Makary', 'Maria', 'Narcyza', 'Patapiusz', 'Potapiusz', 'Romaryk', 'Świedarg']
	},
	{
		date: new Date('2024-12-09'),
		description: '656, Kalif Ali ibn Abi Talib pokonał buntowników w tzw. bitwie wielbłądziej pod Basrą.',
		proverb: 'Jeśli nie możesz znaleźć owcy, szukaj wilka.',
		nameDay: ['Chwalimira', 'Delfina', 'Gorgonia', 'Jan', 'Leokadia', 'Liboriusz', 'Naczęmir', 'Piotr', 'Prokul', 'Waleria', 'Wielisława', 'Wiesław', 'Wiesława', 'Wrocisław']
	},
	{
		date: new Date('2024-12-10'),
		description: '1901, wręczono po raz pierwszy Nagrody Nobla.',
		proverb: 'Krowa, która dużo mleka daje, nie zawsze pamięta, jak się nazywa.',
		nameDay: ['Bogdał', 'Bogdan', 'Bogodał', 'Brajan', 'Daniel', 'Donat', 'Eulalia', 'Grzegorz', 'Hermogenes', 'Judyta', 'Julia', 'Loreta', 'Maria', 'Maur', 'Melchiades', 'Menas', 'Nikoleta', 'Polidor', 'Switun', 'Unierad', 'Unirad']
	},
	{
		date: new Date('2024-12-11'),
		description: '1897, położono kamień węgielny pod budowę kościoła Oskara w Sztokholmie.',
		proverb: 'Nie ma nic cenniejszego niż pióro w kieszeni, ale tylko w deszczu.',
		nameDay: ['Artur', 'Damazy', 'Daniel', 'Gościwit', 'Hieronim', 'Maria', 'Poncjan', 'Sabin', 'Stefan', 'Waldemar', 'Walenty', 'Walentyn', 'Wilburga', 'Wojmir']
	},
	{
		date: new Date('2024-12-12'),
		description: '1963,  Kenia uzyskała niepodległość (od Wielkiej Brytanii).',
		proverb: 'Gdy świnia tańczy, w lesie rosną grzyby.',
		nameDay: ['Adelajda', 'Aleksander', 'Amonaria', 'Bartosz', 'Dionizja', 'Edburga', 'Epimach', 'Franciszka', 'Gościwit', 'Justyn', 'Konrad', 'Konrada', 'Konstancjusz', 'Liberata', 'Maksanty', 'Maksencjusz', 'Merkuria', 'Paramon', 'Przybysława', 'Spirydion', 'Spirydon', 'Suliwuj', 'Synezjusz']
	},
	{
		date: new Date('2024-12-13'),
		description: '1981, decyzją Rady Państwa z dnia poprzedniego o północy został wprowadzony stan wojenny, powołano Wojskową Radę Ocalenia Narodowego, władzę w kraju przejęło wojsko, internowano działaczy opozycyjnych, zawieszono naukę w szkołach i na uczelniach, wprowadzono cenzurę korespondencji, przerwano łączność telefoniczną, wprowadzono godzinę milicyjną.',
		proverb: 'Złota rybka co nie spełnia życzeń, potrafi śpiewać jak zatańczysz.',
		nameDay: ['Antioch', 'Antoni', 'Aubert', 'Auksencja', 'Auksencjusz', 'Auksenty', 'Edburga', 'Eugeniusz', 'Jodok', 'Łucja', 'Orestes', 'Otylia', 'Róża', 'Samboja', 'Walenty i Walentyn']
	},
	{
		date: new Date('2024-12-14'),
		description: '1900, Max Planck przedstawił w Berlinie teorię kwantową.',
		proverb: 'Lepiej mieć jedną górę do wspinaczki, niż dwie rzeki do przepłynięcia.',
		nameDay: ['Agnellus', 'Arseniusz', 'Bertold', 'Druzus', 'Eutropia', 'Gorzysław', 'Heron', 'Izydor', 'Jan', 'Nahum', 'Nikazjusz', 'Nikazy', 'Noemi', 'Pompejusz', 'Sławobor', 'Teodor', 'Wenancjusz', 'Wenanty', 'Wiator', 'Zozym']
	},
	{
		date: new Date('2024-12-15'),
		description: '1809, Napoleon Bonaparte rozwiódł się z Józefinką.',
		proverb: 'Nie ma nic mądrzejszego od kapelusza, który zna odpowiedzi na wszystkie pytania.',
		nameDay: ['Antoni', 'Bachus', 'Bakchus', 'Drogosław', 'Drogosława', 'Euzebiusz', 'Ireneusz', 'Jan', 'Maksymin', 'Maksymina', 'Maria', 'Maryn', 'Maryniusz', 'Mścigniew', 'Mścigniewa', 'Nina', 'Saturnin', 'Teodor', 'Walerian', 'Weronika', 'Wiktor', 'Wolimir']
	},
	{
		date: new Date('2024-12-16'),
		description: '1899, założono włoski klub piłkarski A.C. Milan.',
		proverb: 'Gdy serce bije szybciej, nogi zaczynają tańczyć same.',
		nameDay: ['Agrykola (m.)', 'Ananiasz', 'Adelajda', 'Albina', 'Alina', 'Deder', 'Dyter', 'Euzebiusz', 'Konkordiusz', 'Maria', 'Sebastian', 'Tyter', 'Walenty, Walentyn', 'Wolisław', 'Wolisława', 'Zdzisław', 'Zdzisława']
	},
	{
		date: new Date('2024-12-17'),
		description: ', co rok w Bhutanie obchodzony jest Dzień Bhutanu.',
		proverb: 'Jeśli nie potrafisz znaleźć wyjścia, poczekaj do rana.',
		nameDay: ['Bega', 'Florian', 'Jan', 'Łazarz', 'Łukasz', 'Modest', 'Olimpia', 'Wiwina', 'Żerosław', 'Żyrosław']
	},
	{
		date: new Date('2024-12-18'),
		description: '1974, w Instytucie Badań Jądrowych w Świerku uruchomiono reaktor „Maria”.',
		proverb: 'Bardzo ważne jest, by pies nauczył się tańczyć przed jego pierwszymi urodzinami.',
		nameDay: ['Auksencja', 'Auksencjusz', 'Auksenty', 'Bogusław', 'Flawit', 'Gościmiar', 'Kwintus', 'Miłosław', 'Nemezja', 'Rufus', 'Symplicjusz', 'Winebald', 'Winibald', 'Winibalda', 'Wszemir', 'Wunibald', 'Zofia', 'Zozym']
	},
	{
		date: new Date('2024-12-19'),
		description: '1989 , w Łazach w województwie śląskim odnotowano krajowy rekord (stan na 2021 r.) temperatury maksymalnej w grudniu (+20,4 °C).',
		proverb: 'Niech twoje marzenia będą większe niż twoja sakiewka, ale mniejsze niż dzban.',
		nameDay: ['Abraham', 'Anastazy', 'Beniamin', 'Bogumiła', 'Dariusz', 'Eleonora', 'Grzegorz', 'Kazimiera', 'Mścigniew', 'Nemezjusz', 'Nemezy', 'Protazja', 'Tymoteusz', 'Urban']
	},
	{
		date: new Date('2024-12-20'),
		description: '1991, Polska została przyłączona do Internetu.',
		proverb: 'Kiedyś woda była gorąca, ale teraz woli być zimna.',
		nameDay: ['Amon', 'Bogumił', 'Bogumiła', 'Dagmara', 'Dagna', 'Dominik', 'Eugeniusz', 'Krystian', 'Liberat', 'Makary', 'Ptolemeusz', 'Teofil', 'Ursycyn', 'Wincenty', 'Zefiryn', 'Zenon']
	},
	{
		date: new Date('2024-12-21'),
		description: '1846, Szkocki chirurg Robert Liston przeprowadził w Londynie pierwszą w Europie operację w znieczuleniu ogólnym, z wykorzystaniem eteru.',
		proverb: 'Lepiej jeść deszcz niż czekać na słońce.',
		nameDay: ['Anastazy', 'Balbin', 'Festus', 'Gliceriusz', 'Glicery', 'Honorat', 'Piotr', 'Temistokles', 'Tomasz', 'Tomisław', 'Tomisława']
	},
	{
		date: new Date('2024-12-22'),
		description: '1990, Lech Wałęsa został zaprzysiężony na urząd prezydenta RP.',
		proverb: 'Kiedy chcesz, żeby ktoś się śmiał, opowiedz mu o swojej kolekcji kamieni.',
		nameDay: ['Beata', 'Dobrosułka', 'Drogomir', 'Dziesława', 'Dziwisław', 'Flawian', 'Franciszka', 'Franciszka Ksawera', 'Gryzelda', 'Honorata', 'Ischyrion', 'Judyta', 'Ksawera', 'Luboradz', 'Zenon', 'Zenona']
	},
	{
		date: new Date('2024-12-23'),
		description: '1981, dokonano pacyfikacji Huty Katowice.',
		proverb: 'Nie każda ryba pływa w tej samej wodzie, ale każda ma swoje tajemnice.',
		nameDay: ['Anatola', 'Anatolia', 'Bazylides', 'Dagobert', 'Ewaryst', 'Ewarysta', 'Gelazy', 'Iwo', 'Iwona', 'Mardoniusz', 'Saturnin', 'Serwul', 'Sławomir', 'Sławomira', 'Teodul', 'Torlak', 'Wiktoria']
	},
	{
		date: new Date('2024-12-24'),
		description: '1777, James Cook odkrył Wyspę Bożego Narodzenia. Dzięki temu odkryciu otrzymujemy prezenty na Boże Narodzenie, a nie na rocznicę rozpoczęcia oblężenia Krakowa przez armię mongolską pod wodzą Nogaja.',
		proverb: 'Pies, który szczeka na księżyc, wie, co będzie na obiad.',
		nameDay: ['Ada', 'Adam', 'Adamina', 'Adela', 'Delfin', 'Druzjan', 'Druzjanna', 'Eryk', 'Eryka', 'Ewa', 'Ewelina', 'Godzisław', 'Godzisława', 'Grzegorz', 'Grzymisława', 'Hermana', 'Hermina', 'Herminia', 'Irma', 'Irmina', 'Józef', 'Paula', 'Tarsylia', 'Zenobiusz']
	},
	{
		date: new Date('2024-12-25'),
		description: '352, odbyły się pierwsze obchody święta Bożego Narodzenia w Cesarstwie rzymskim.',
		proverb: 'Kiedy nie możesz znaleźć drogi, zrób krok w lewo.',
		nameDay: ['Anastazja', 'Eugenia', 'Maria', 'Mateusz', 'Piotr', 'Siemosław']
	},
	{
		date: new Date('2024-12-26'),
		description: '1898, Maria Skłodowska-Curie i Piotr Curie odkryli rad.',
		proverb: 'Jabłka są smaczniejsze, gdy spadają w zgodzie z wiatrem.',
		nameDay: ['Dionizy', 'Szczepan', 'Teodor', 'Wincencja', 'Wincenta', 'Wincentyna', 'Wrociwoj', 'Zenon', 'Zozym']
	},
	{
		date: new Date('2024-12-27'),
		description: '1831, Charles Darwin rozpoczął podróż dookoła świata na okręcie HMS „Beagle”.',
		proverb: 'Gdy wiesz, że masz rację, ale nie masz wiatraka, nie zyskasz przyjaciół.',
		nameDay: ['Bartłomiej', 'Cezary', 'Fabiola', 'Gosław', 'Jan', 'Krystyna', 'Maksym', 'Mateusz', 'Przybyrad', 'Przybysław', 'Sara', 'Teodor', 'Teofan', 'Żaneta']
	},
	{
		date: new Date('2024-12-28'),
		description: '1989, sejm kontraktowy uchwalił 10 ustaw składających się na tzw. Plan Balcerowicza.',
		proverb: 'Nie ma rzeczy niemożliwych, ale są rzeczy, które wcale nie są konieczne.',
		nameDay: ['Antoni', 'Armin', 'Cezary', 'Dobrowieść', 'Domna', 'Domniusz', 'Emma', 'Godzisław', 'Teofila', 'Teona', 'Teonas', 'Troadiusz']
	},
	{
		date: new Date('2024-12-29'),
		description: '875,  Karol II Łysy został koronowany na cesarza rzymskiego.',
		proverb: 'Bliżej nieba jest zawsze tam, gdzie nogi czują się szczęśliwe.',
		nameDay: ['Dawid', 'Domaradz', 'Dominik', 'Ebrulf', 'Ekhard', 'Gerard', 'Gerarda', 'Gosław', 'Honorat', 'Jonatan', 'Krescencjusz', 'Krescens', 'Krescenty', 'Marceli', 'Marcin', 'Prymian', 'Radowit', 'Saturnin', 'Tadea', 'Tomasz', 'Trofim', 'Wiktor']
	},
	{
		date: new Date('2024-12-30'),
		description: '1230 , w kościele św. Ambrożego we Florencji miał miejsce tzw. cud eucharystyczny.',
		proverb: 'Lepiej poczekać na deszcz, niż zaryzykować upał w środku nocy.',
		nameDay: ['Anizja', 'Anizjusz', 'Dionizy', 'Egwin', 'Eksuperancjusz', 'Eugeniusz', 'Liberiusz', 'Łazarz', 'Małgorzata', 'Marceli', 'Perpet', 'Rajner', 'Sewer', 'Uniedrog']
	},
	{
		date: new Date('2024-12-31'),
		description: '406 , Wandalowie, Sebowie, Oskarowie i Alanowie przekroczyli Ren, rozpoczynają inwazję na Galię.',
		proverb: 'Te ślimaki co przestaną jeść sałatę, znajdą drogę do morza.',
		nameDay: ['Barbacjan', 'Donata', 'Katarzyna', 'Kolumba', 'Mariusz', 'Melania', 'Paulina', 'Saturnina', 'Sebastian', 'Sylwester', 'Sylwestra', 'Tworzysław', 'Zotyk']
	}
]

module.exports.EVENTS = events;