---
layout: post
type: standard
featimg: /2015/kfsdr570.gif
title: KFSDR-570
description: KFSDR-570 to SDR z ukladem Si570 jako LO o szerokim zakresie częstotliwości.
image: /img/2015/kfsdr570.gif
homedisplay: featimg
author: koala
tags: [hardware]
category: [hardware]
---

KFSDR 570 posiada procesor z rdzeniem ARM, który komunikuje się z komputerem poprzez USB2.0. Procesor obsługuje poprzez szynę I2C układ syntezy Si570 i poprzez interfejs I2S wysokiej klasy przetwornik analogowo-cyfrowy o rozdzielczości 24 bity i maksymalnej częstotliwości próbkowania 192 ksps. Ze względu na przepustowość portu USB pełna rozdzielczość ADC nie jest wykorzystywana. Procesor posiada spory zapas mocy obliczeniowej, która w niektórych wersjach firmware jest wykorzystywana do operacji DSP na próbkowanym sygnale.

KFSDR 570 jest zasilany z portu USB i w wersji z przetwornikiem ADC nie wymaga żadnych innych kabli do połączenia z komputerem. Nie jest też wymagana wewnętrzna karta dźwiękowa w komputerze.
Po zainstalowaniu sterowników SDR jest automatycznie wykrywany przez większość programów. Czasami wymagane jest skonfigurowanie adresu I2C układu Si570 używanego w VFO. Np. w programie CFGSR należy wybrać zakładkę "Si570" i w pole I2C wpisać odpowiedni adres układu Si570, a następnie nacisnąć przycisk "SAVE". Spowoduje to ustawienie adresu w firmware mikrokontrolera. Adres układu Si570 można odczytać z kodu na obudowie układu. Najczęściej jest to 0x05 lub 0x55.

Standardowo KFSDR 570 jest wyposażony w wejście SMA, złącze mini-USB i 3.5mm jack audio. Współpracuje poprawnie z wieloma programami napisanymi dla Si570, Softrock, Winrad itp... Złącze X6 umożliwia także sterowanie filtrami pasmowymi KF. Uwaga: normalnie złącze to nie jest wyprowadzone na zewnątrz obudowy. Piny tego złącza znajdują się w środku, na płytce drukowanej.
Pin 3 - 3V3
Pin 4 - GND
Pin 5 - Pin 8 - adres filtru pasmowego.
Odbiornik jest w całości obsługiwany i sterowany z komputera. Oprogramowanie posiada autodetekcję adresu I2C układu Si570. Większość wysyłanych do tej pory układów posiada adres 55hex lub 05hex. Przycisk służy do wymiany firmware mikrokontrolera sterującego.
Instalacja sterowników dla KFSDR 570

Sterowniki są dostępne dla osób, które zakupiły KFSDR 570 poprzez e-mail. 

Rozpakować sterowniki do katalogu tymczasowego. Podłączyć KFSDR 570 do portu USB. Firmware jest uniwersalny i dlatego komputer wykryje 2 nowe urządzenia: Softrock i urządzenie audio USB. Dostarczone sterowniki są do urządzenia Softrock. Należy wskazać katalog tymczasowy, do którego rozpakowane zostały sterowniki i postępować zgodnie z instrukcjami systemu.
Sterowniki do urządzenia audio USB są standardowo w Windows. Należy je zainstalować, wybierając domyślne opcje. Jeśli posiadasz wersje odbiornika bez wbudowanego przetwornika ADC, wskazane jest zainstalowanie sterownika do urządzenia audio USB. Będzie ono widoczne w systemie, ale nie będzie wykorzystywane.

Aktualizacja firmware
Firmware może być aktualizowany na nowy bez użycia programatora. W celu aktualizacji oprogramowania należy:
1. Odłączyć KFSDR 570 od portu USB
2. Nacisnąć i przytrzymać przycisk
3. Podłączyć KFSDR 570 do portu USB. Można puścić przycisk
4. W Windows pojawi się nowa literka dysku, a na nim będzie widoczny jeden plik o nazwie "firmware"
5. Wymiana firmware odbywa się poprzez skasowanie pliku "firmware" z tego dysku i skopiowanie nowego pliku firmware na ten sam dysk
6. Odczekać 5 sekund i odłączyć KFSDR od portu USB. Po ponownym uruchomieniu mamy KFSDR z nową wersją oprogramowania. 

![KFSDR-570-b802](/img/2015/b802s.jpg){:class="img-responsive"}
