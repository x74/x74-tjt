---
layout: post
type: standard
featimg: /2016/IMG_20161021_115629_web.jpg
title: Mała stacja bazowa GSM
description: Mała stacja bazowa GSM zbudowana z wykorzystaniem plytki PCB software defined radio i oprogramowania zainstalowanego na laptopie. Jest kompatybilna z OpenBTS. Umożliwia przeprowadzania rozmów głosowych i wysyłanie wiadomości tekstowych SMS pomiędzy telefonami zalogowanymi do systemu.
homedisplay: featimg
author: koala
image: /img/2016/IMG_20161021_115629_web.jpg
tags: [gnuradio, openbts, hardware, poradnik]
category: [hardware]
---
Mała stacja bazowa GSM w podstawowej konfiguracji zestaw umożliwia przeprowadzania rozmów głosowych i wysyłanie wiadomości tekstowych SMS pomiędzy telefonami zalogowanymi do systemu. Specjalnie napisana w tym celu aplikacja pokazuje na żywo wydarzenia w systemie. Inicjalizacja połączenia jest zaznaczana kolorem zielonym na załączonym zrzucie ekranu, natomiast koniec połączenia jest zaznaczany kolorem czerwonym. W zależności od konfiguracji rożna jest ilość i częstotliwość wyświetlanych zdarzeń.

![GSM-Cell-Scan-Koala](/img/2016/IMG_20161021_120439_web.jpg){:class="img-responsive"}

Interfejs radiowy występuje w kilku wersjach. Każda wersja umożliwia bezproblemową pracę w obu pasmach GSM: 900MHz i 1800MHz. Komunikacja z komputerem odbywa się przez USB2.0, USB3.0 lub ethernet. Opcjonalnie istnieje możliwość podłączenia modułu 3G, który zapewnia połączenie z większością sieci komercyjnych UMTS.

#### Podstawowe parametry interfejsu radiowego:
   1. częstotliwości: GSM900 i GSM1800
   1. moc wyjściowa: ok. 0mW
   1. praca full duplex
   1. oddzielne tory nadawania i odbioru
   1. moduł 3G z funkcją voice

![GSM-IMSI-CALL](/img/2016/Screenshot-2imsi-web.jpg){:class="img-responsive"}

#### Oprogramowanie i interfejs:
   1. standardowe oprogramowanie OpenBTS do obsługi interfejsu radiowego i obsługi standardu GSM
   1. system operacyjny Linux
   1. Asterisk obsługujący funkcje VOIP i PBX
   1. Linphone bądź inna aplikacja telefonu SIP
   1. Zestaw oprogramowania do monitorowania funkcji zestawu na bieżąco i do analizy informacji zapisanej w plikach logowania.

Większość opcji konfiguracyjnych systemu jest zapisana w formie bazach danych. Do konfiguracji części radiowej używany jest głównie format baz danych SQLite3. Historia wykonywanych połączeń telefonicznych i konfiguracja dotycząca połączeń telefonicznych jest zapisywana głównie  w formacie baz danych mySQL.

![GSM-Cell-Scan-Koala](/img/2016/Screenshot-2016-01-07-CSR-web.png){:class="img-responsive"}

CDR viewer jest aplikacja umożliwiająca przeglądanie zapisu wykonanych rozmów. Jeżeli system był skonfigurowany do nagrywania połączeń głosowych, dostęp do tych zapisów jest bezpośrednio z aplikacji CDR viewer. Użytkownik może filtrować zapis przy pomocy rozbudowanych filtrów, m.in. na podstawie daty, numeru telefonu, na który dzwoniono, numeru telefonu, z którego dzwoniono, itd.

![GSM-Spectrum-Koala](/img/2016/Screenshot-2015-06-05-A-web.jpg){:class="img-responsive"}

Bardziej zaawansowani użytkownicy mogą być zainteresowani analizę pakietów GSM w programie Wireshark. Można te analizę przeprowadzać na żywo bądź off-line na nagranej transmisji radiowej.

Konfiguracja jest dokonywana poprzez edycje bazy danych. Poniżej przykładowe klucze konfiguracyjne i tabela z listą MCC i MNC polskich operatorów.
```
GSM.Radio.Band - ustawić właściwy zakres: GSM900 bądź GSM1800
GSM.Radio.C0 - ARFCN lub inaczej częstotliwość, na której nadaje stacja GSM
Control.LUR.OpenRegistration – wyrażenie wg którego ustalane są numery IMSI, które mogą się połączyć ze stacją bazowa GSM
```

***
```
| MCC | MNC | Brand          | Operator                                        | Status          | Bands (MHz)                                   | References and notes                                                                             |
|-----|-----|----------------|-------------------------------------------------|-----------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------|
| 260 | 1   | Plus           | Polkomtel Sp. z o.o.                            | Operational     | GSM 900 / GSM 1800 / UMTS 2100                |                                                                                                  |
| 260 | 2   | T-Mobile       | T-Mobile Polska S.A.                            | Operational     | GSM 900 / GSM 1800 / UMTS 2100                | former Era                                                                                       |
| 260 | 3   | Orange         | Polska Telefonia Komórkowa Centertel Sp. z o.o. | Operational     | GSM 900 / GSM 1800 / UMTS 2100 / CDMA2000 450 | former Idea                                                                                      |
| 260 | 4   |                | CenterNet S.A.                                  | Not operational | Unknown                                       |                                                                                                  |
| 260 | 5   |                | Polska Telefonia Komórkowa Centertel Sp. z o.o. | Operational     | UMTS 2100                                     | not in use, using MNC 03                                                                         |
| 260 | 6   | Play           | P4 Sp. z o.o.                                   | Operational     | GSM 900/ GSM 1800 / UMTS 900 / UMTS 2100      | Also roaming on Polkomtel and Centertel 2G/3G network                                            |
| 260 | 7   | Netia          | Netia S.A.                                      | Operational     | GSM 900 / UMTS 2100                           | MVNO roaming on Play (P4) network                                                                |
| 260 | 8   |                | E-Telko Sp. z o.o.                              | Not operational | Unknown                                       |                                                                                                  |
| 260 | 9   | Lycamobile     | Lycamobile Sp. z o.o.                           | Operational     |                                               | On Polkomtel 2G/3G network                                                                       |
| 260 | 10  | Sferia         | Sferia S.A.                                     | Operational     | UMTS 850                                      | Formerly assigned to Telefony Opalenickie S.A.                                                   |
| 260 | 11  | Nordisk Polska | Nordisk Polska Sp. z o.o.                       | Operational     | CDMA2000 420                                  |                                                                                                  |
| 260 | 12  | Cyfrowy Polsat | Cyfrowy Polsat S.A.                             | Operational     | GSM 900 / GSM 1800 / UMTS 2100                | MVNO using national roaming with several operators                                               |
| 260 | 13  | Sferia         | Sferia S.A.                                     | Not operational |                                               | Uses MNC 10                                                                                      |
| 260 | 14  | Sferia         | Sferia S.A.                                     | Not operational |                                               | Uses MNC 10                                                                                      |
| 260 | 15  | CenterNet      | CenterNet S.A.                                  | Operational     | LTE 1800                                      | LTE1800 with 20 MHz channels. Used wRodzinie brand cards until 2010, now data transmission only. |
| 260 | 16  | Mobyland       | Mobyland Sp. z o.o.                             | Operational     | GSM 1800 / LTE 1800                           | LTE1800 with 20 MHz channels                                                                     |
| 260 | 17  | Aero2          | Aero 2 Sp. z o.o.                               | Operational     | UMTS 900                                      |                                                                                                  |
| 260 | 34  |                | T-Mobile Polska S.A.                            | Operational     | UMTS 900                                      | NetWorks! with Centertel                                                                         |
| 260 | 98  |                | P4 Sp. z o.o.                                   | Not Operational |                                               | Test network (LTE 1800)                                                                          |
```
