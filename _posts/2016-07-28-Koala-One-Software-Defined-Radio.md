---
layout: post
type: standard
featimg: koala.jpg
title: Koala One Software Defined Radio
description: Płyta Koala One do zastosowań typu Software Defined Radio. Koala One jest kompatybilna z OpenBTS i Gnuradio. Cena Koala One jest bardziej konkurencyjna niż cena USRP.
homedisplay: featimg
author: koala
image: /img/koala.jpg
tags: [gnuradio, openbts, hardware]
category: [hardware]
---
#### Koala jako software defined radio.
Koala jest kompatybilna z USRP1, gnuradio i OpenBTS. Jest jednocześnie znacznie tańsza. Wszystkie schematy są dostępne za darmo!!! Całe oprogramowanie, wraz ze źródłami do FPGA jest "open source".
Płyta jest odpowiednikiem USRP1, tzn. nie ma znaczenia czy podłączycie do komputera USRP, czy Koala One. Możecie używać płytek radiowych od USRP z tą płytką. Komputer nie odróżni USRP od Koala. Oczywiście Koala nie jest dokładną kopią USRP i podczas użytkowania mogą wystąpić pewne różnice, np. prążki zakłócen w innych miejscach lub o innej amplitudzie.
Polecam kilka dobrych filmów o zastosowaniach tej płyty. Najpierw bardzo dobry program do budowania radia zdefiniowanego programowo. Wystarczy połączyć kilka bloczków i już mamy odbiornik i nadajnik. Bez uczenia się programowania !!! GRC - gnuradio companion. Mała demonstracja tego jak jest zbudowany sprzęt: Universal Software Radio Peripheral (USRP) for GNU Radio. A tutaj mały przykład jak wykorzystać Koala One z krótkofalówka:Odbiór z krótkofalówki
Jak zamawiać płytę Koala One do gnuradio

Wystarczy wysłać maila na adres email i zamówić wybrany model płyty. Płyty są robione w małych seriach i czasy oczekiwania bywają różne. Przy zamówieniu powiadamiam o czasie oczekiwania. Staram się też aby powiadamiać o wysyłce, ale tego nie gwarantuje. Płatne przy odbiorze. Można uzgodnić też inne warunki dostawy i płatności.

#### Parametry i zastosowania płyty:

   1. Zaraz po otrzymaniu przesyłki można uruchomić odbiornik radiowy na pasmo do ok. 25MHz.
   1. Drivery do programu Winrad są dostępne to pobrania.
   1. skanowanie pasma radiowego
   1. płyta może zostać użyta jako zwykła karta przetwornika A/C i C/A z interfejsem USB
   1. gotowe aplikacje generatora sygnałowego, oscyloskopu cyfrowego i analizatora widma
   1. praca pod Windows i Linux
   1. częstotliwość próbkowania (zegar) 50MHz, na zamówienie także 52MHz

Drivery do programu Winrad, które ja dostarczam są skompilowane tak, aby działały z zegarem 50MHz. Jeżeli chcemy używać Koala One z gnuradio pod Linuksem to gnuradio należy instalować ze źródeł. Zaraz po ściągnięciu repozytorium należy dokonać zmiany w kodzie źródłowym. W pliku "usrp_basic.cc" należy zamienić 64000000 na 50000000 jako właściwą częstotliwość zegara. Potem postępować zgodnie z instrukcjami instalacji na gnuradio.org.

![GSX1800-i-Koala](/img/DSC05729_640x480.JPG){:class="img-responsive"}
