---
layout: post
type: standard
featimg: /2016/litton-1352005_640.jpg
title: Odbiornik GNSS na Koala i RTL SDR
description: Możesz zbudować odbiornik GNSS na Koala i RTL SDR, nagrać, a potem odtwarzać przy pomocy Koala lub innego radia SDR.
homedisplay: featimg
author: koala
image: /img/2016/litton-1352005_640.jpg
tags: [GNSS, RTL_SDR, poradnik]
category: [oprogramowanie]
---

RTL SDR właśnie znalazł satelity GNSS i złapał fix-a. A poniżej jest pełna instrukcja jak odbierać sygnał GNSS przy pomocy najprostszego radia SDR, czyli RTL SDR.
Daje to znacznie więcej możliwości niż komercyjny odbiornik, gdzie nie mamy dostępu do oprogramowania wgranego do modułu GNSS. W najprostszej wersji będziemy potrzebować odbiornik RTL i antenę GPS. Aktywna antena będzie wymagać zasilania. W zależności od typu może być potrzebny bias-T.
Najpierw instalujemy zależności. Dodałem tutaj instalacje gnuradio i UHD. Jeśli macie to już w systemie, nie potrzeba tego robić drugi raz i możecie to usunąć z polecenia. Instalacja będzie znacznie szybsza, jeśli gnuradio i UHD są już zainstalowane w systemie

``` sh
﻿sudo apt-get install libboost-all-dev gnuradio-dev uhd gnuradio liblapack-dev libgnutls-openssl-dev libgoogle-glog-dev liblog4cpp5 liblog4cpp5-dev liblog4cpp-doc cmake doxygen doxygen-gui graphviz libusb-1.0-0-dev libvolk1-bin librtlsdr0 librtlsdr-dev libosmosdr0 osmo-sdr gr-osmosdr
```

Poniższe kroki instalują rtl-sdr:

``` sh
git clone git://git.osmocom.org/rtl-sdr.git
cd rtl-sdr
mkdir build
cd build
cmake ../ -DINSTALL_UDEV_RULES=ON
make

sudo make install
sudo ldconfig

cd ../..
```

W większości przypadków kernel linuxa będzie ładował moduł kernela dla RTL, który służy oglądaniu telewizji.
Dlatego musimy go zablokować, aby umożliwić ładowanie właściwego modułu.

``` sh
sudo cp ./rtl-sdr/rtl-sdr.rules /etc/udev/rules.d
sudo vi /etc/modprobe.d/no-rtl.conf
    blacklist dvb_usb_rtl28xxu
    blacklist rtl2832
    blacklist rtl2830
sudo udevadm -R
```

gr-osmosdr możemy skompilować ze źródeł. Po wykonaniu cmake należy się upewnić, ze rtl-sdr jest na liście modułów do skompilowania, a nie na liście zablokowanych modułów..

``` sh
git clone git://git.osmocom.org/gr-osmosdr
cd gr-osmosdr
mkdir build
cd build/
cmake ../
make
sudo make install
sudo ldconfig
```

A teraz właściwy odbiornik gnss.

``` sh
git clone https://github.com/gnss-sdr/gnss-sdr
cd gnss-sdr/build
cmake -DENABLE_OSMOSDR=ON ../
make
sudo make install
make doc
make pdfmanual
make doc-clean
```
W tym momencie powinniśmy mieć działający odbiornik RTL SDR i GNSS. Sam RTL możemy sprawdzić komenda poniżej. Jeżeli pokaże nam się lista RTL z numerami seryjnymi, to wszystko powinno działać.

``` sh
$ rtl_test -t
Found 1 device(s):
  0:  Realtek, RTL2838UHIDIR, SN: 00000001

Using device 0: Generic RTL2832U OEM
Found Rafael Micro R820T tuner
Supported gain values (29): 0.0 0.9 1.4 2.7 3.7 7.7 8.7 12.5 14.4 15.7 16.6 19.7 20.7 22.9 25.4 28.0 29.7 32.8 33.8 36.4 37.2 38.6 40.2 42.1 43.4 43.9 44.5 48.0 49.6 
Sampling at 2048000 S/s.
```

I na koniec uruchamiamay sam dekoder GNSS z domyślnym plikiem konfiguracyjnym.

``` sh
$ gnss-sdr --config_file=/usr/local/share/gnss-sdr/conf/gnss-sdr_GPS_L1_rtlsdr_realtime.conf
linux; GNU C++ version 4.8.4; Boost_105400; UHD_003.010.000.000-release

Initializing GNSS-SDR v0.0.8 ... Please wait.
Logging will be done at "/tmp"
Use gnss-sdr --log_dir=/path/to/log to change that.
gr-osmosdr v0.1.4-75-gae686c46 (0.1.5git) gnuradio 3.7.10
built-in source types: file fcd rtl rtl_tcp uhd rfspace redpitaya 
Using device #0 Realtek RTL2838UHIDIR SN: 00000001
Found Rafael Micro R820T tuner
Exact sample rate is: 2000000.052982 Hz
Actual RX Rate: 2000000.000000 [SPS]...
Actual RX Freq: 1575420000.000000 [Hz]...
PLL Frequency tune error 0.000000 [Hz]...Actual RX Gain: 40.200000 dB...
Current input signal time = 1 [s]
Current input signal time = 2 [s]
Current input signal time = 3 [s]
```

Jeżeli mamy podłączoną antenę to po paru minutach powinniśmy uzyskać fix. W katalogu, z którego uruchamialiśmy gnss-sdr będziemy mieli pliki utworzone przez program gnss-sdr

``` sh
GSDR285u39.16B
GSDR285u39.16L
GSDR285u39.16N
GSDR285u39.16O
GSDR285u39.16P
PVT_161011_203916.geojson
PVT_161011_203916.kml
PVT_161011_203916.rtcm
gnss_sdr_pvt.nmea
```

Koala jest znacznie lepszym radiem do odbioru słabych sygnałów niż RTL. Pracując z RTL, możemy w pewnych przypadkach nie uzyskać fix-a. Sa to głównie przypadki, kiedy pogoda nie sprzyja sygnałom GPS z satelity lub przy bardzo dużym błędzie ppm oscylatora RTL, co nie jest rzadkim przypadkiem. Odbiornik GNSS z Koala uruchamiamy z plikiem konfiguracyjnym przeznaczonym dla USRP1.

``` sh
$ gnss-sdr --config_file=/usr/local/share/gnss-sdr/conf/gnss-sdr_GPS_L2C_USRP1_realtime.conf
```
