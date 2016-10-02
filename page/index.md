---
layout: page
type: standard
title: Oferta komponentow do Software Defined Radio, OpenBTS, IoT
description: Wybrane z naszej oferty komponenty do OpenBTS, Software Define Radio.
homedisplay: featimg
author: koala
image: /img/koala.jpg
tags: [shop, hardware]
category: [hardware]
---

***
Na tej stronie znajduje się opis wybranych komponentów z oferty. Większość z tych elementow jest produkowana małymi seriami i ich dostępność się zmienia. Dlatego zapytania najlepiej jest kierować na email.

***
***
![koala](/img/koala.jpg){:class="img-responsive"}
##### Płyta Koala
Odpowiednik płyty USRP. Współpracuje z GnuRadio, OpenBTS, Winrad i innymi pochodnymi tych programów, DRM (Digital Radio Mondiale).
Zastosowanie: Software Defined Radio, FPGA prototyping, konwersja A/D i D/A.
Podstawowe parametry:
- częstotliwość próbkowania (zegar) 50MHz (max 64MHz)
- USB 2.0
- Altera FPGA
- przetwornik ADC 12bit, 64MSPS max
- przetwornik DAC14bit, 128MSPS max
- zasilanie 5V, 2A
- sterowniki do Windows (Winrad i pochodne) i Linux (GnuRadio)
- możliwość sterowania i obserwacji widma poprzez sieć ethernet

Dostępność: email

Zamówiania kierować na email

[Opis płyty]({% post_url 2016-07-28-Koala-One-Software-Defined-Radio %})

***
***
![koala](/img/DSC05726_640x480.JPG){:class="img-responsive"}
##### Płyta GSX1800
Odpowiednik RFX1800 z usprawnieniami zwiększajacymi zasięg.
Poprawiono separację torów, zwiekszono moc wyjściową, poprawiony współczynnik szumów.
Możliwości odbierania i nadawania sygnałów w paśmie GSM 900 i 1800.
Możliwość zastosowania do OpenBTS.

Dostępność: jest

***
***
##### Icarus — płyta FPGA 2x Spartan-6 (XC6SLX150)
Płyta zawierająca dwa układy FPGA. Zaprojektowana z myślą  o "bitcoin mining", ale stosowana także w wielu innych aplikacjach. Zastosowania plyty to głównie obliczenia wymagające dużej mocy obliczeniowej, np. kryptografia. Przy poborze mocy rzędu 20W układy FPGA na tej płycie mają moc obliczeniową 360MH/s. Dla porównania ATI Radeon HD 6870 GPU ma moc obliczeniową około 275MH/s i pobiera moc 150W ze źródła zasilania a procesor z rdzeniem i7 ma moc obliczeniową jedynie 7MH/s !!!

Gniazdo USB na płycie do komunikacji z komputerem i do programowania układów FPGA, JTAG, piny IO wyprowadzone na złącze DIMM, gniazda szybkich magistrali szeregowych.

Dostępność: email

***
***
![Si570](/img/2015/si570.jpg){:class="img-responsive"}
##### Układ syntezy Si570
Układ scalony Si570 produkcji Silicon Labs.
Podstawowe parametry:
- wersja CMOS
- zakres częstotliwości 10MHz-160MHz
- czestotliwość po starcie 30MHz
- napięcie zasilania 3.3V

Dostępność: email

***
***
![LoFRX](/img/2015/lofrxsmall.jpg){:class="img-responsive"}
##### Płytka LoFRX
Podstawowa płytka RX do Koala
Podstawowa płytka RX do Koala.
Podstawowe parametry:
- pasmo przenoszenia: DC-18MHz, użyteczne do 30MHz
- zasilanie 5V
- złącze PMC

Uwaga - ze względu na układ przetwornicy DC/DC na LoFRX, Kola nie może byc zasilana napięciem wyższym niż 5V kiedy używamy tej płytki. W przypadku innych płytek radiowych można stosować rownież inne napięcia zasilające.

Dostępność: jest

***
***
![LoFTX](/img/2015/loftxsmall.jpg){:class="img-responsive"}
##### Płytka LoFTX
Podstawowa płytka TX do Koala
Podstawowa płytka TX do Koala.
Podstawowe parametry:
- pasmo przenoszenia: DC-30MHz, użyteczne do 50MHz
- zasilanie 5V
- złącze PMC

Dostępność: jest

***
***
![VFO na Si570](/img/2015/vfo_si570.jpg){:class="img-responsive"}
##### Generator VFO na Si570
Generator w oparciu o układ Si570 w obudowie.
Podstawowe parametry:
- wymiary: 81mm x 72mm x 20mm
- wersja CMOS
- zakres częstotliwości 10MHz-160MHz
- czestotliwość po starcie 30MHz
- zasilanie i sterowanie z USB
- aktualizacja firmware przez USB, bez dodatkowych programatorów
- procesor z rdzeniem ARM
- sterowanie za pomoca ogólnie dostępnych programów obsługujących Si570 (np. Winrad, programy do SoftRock, ExtIO_Si570.dll)

Dostępność: email

Download: Opis, sterowniki, firmware

***
***
![KFSDR570](/img/2015/b802s.jpg){:class="img-responsive"}
##### KFSDR570, odbiornik typu Softrock  
Odbiornik KF działający na tej same zasadzie co odbiorniki Softrock, Ensemble. Demodulator QSD na kluczach, zintegrowany VFO z układem Si570 i jako opcja zintegrowana karta dźwiękowa z 24 bitowym przetwornikiemanalogowo cyfrowym i częstotliwości próbkowania 192kHz (96kHz po USB). Zasilanie z portu USB.

Taka konfiguracja sprawia, że odbiornik łączy się z komputerem jedynie kabelkiem USB !!!
Idealne rozwiązania dla laptopów.

Całość kontrolowana procesorem z rdzeniem ARM. Aktualizacja firmware przez USB, bez dodatkowych programatorów.
Możliwość dodania filtrów pasmowych. Płytka odbiornika posiada gniazdo dla płytki filtrów. Filtry są automatycznie sterowane z procesora ARM na płycie odbiornika.

Sterowanie za pomoca ogólnie dostępnych programów obsługujących Si570 (np. Winrad, programy do SoftRock-a, CFGSR, ExtIO_Si570.dll).

Płytka odbiornika ma wymiary zbliżone wielkością do telefonu komórkowego.

Dostępność: email

Download: Opis, sterowniki, firmware

***
***
##### Delfin
Rozszerza możliwości Hippo o procesor sygnałowy i Ethernet.
Może również działać samodzielnie. Razem z Hippo tworzy mocne Software Defined Radio z interfejsem Ethernet.
Podstawowe parametry:
- procesor sygnałowy 400MHz
- złącze JTAG, RS232, PPI
- Ethernet RJ-45
- embedded Linux (uC Linux)

Dostępność: email

***
***
![Turtelizer 2.0](/img/2015/turt2b.jpg){:class="img-responsive"}
##### Turtelizer 2.0
Płytka uniwersalnego programatora JTAG z interfejsem USB. Współpracuje z OpenOCD. Opcjonalnie może być użyta jako konwerter USB=>RS232
Podstawowe parametry:
- zasilanie z USB
- złącze JTAG, RS232
- programuje mikrokontrolery (m.in. ARM), FPGA i inne z interfejsem JTAG

Dostępność: email
