---
layout: post
type: standard
featimg: grc1.jpg
title: Instalacja Gnuradio
description: Opis instalacji Gnuradio krok po kroku.
homedisplay: featimg
author: koala
image: /img/grc1.jpg
tags: [gnuradio, poradnik]
category: [oprogramowanie]
---
#### Instalacja gnuradio
Uwaga: Na blogu jest uaktualnienie do instalacji GnuRadio Blog. Na moim komputerze nie udało mi się zainstalować gnuradio pod cygwin (po całym dniu instalacji cos nie dało się skompilować w pythonie.... i cala robota na nic), dlatego polecam instalacje pod Linuksem, najlepiej Ubuntu. Instalacje trzeba przeprowadzić ze źródeł i należy pamiętać aby zaraz po ściągnięciu repozytorium git-a zmienić w źródłach częstotliwość zegara na 50MHz (lub 52MHz, w zaleznosci od posiadanej wersji Koali). W pliku "usrp_basic.cc" należy zamienić 64000000 na 50000000 jako właściwą częstotliwość zegara. Potem postępować zgodnie z instrukcjami instalacji na gnuradio.org.

Dla zaawansowanych - równoległa instalacja kilku wersji gnuradio
Ta metoda pozwala na równoległe używanie kilku wersji gnuradio. Przydatna rzecz dla deweloperów i np. dla tych którzy chcą mieć gnuradio skompilowane dla kilku częstotliwości zegara np. 50MHz i 64MHz.
Ściągamy wersję, którą chcemy zainstalować. Wchodzimy do katalogu do którego właśnie ściągneliśmy źródła. Wykonujemy:
``` sh
./configure --prefix /home/username/.sys-release-3.1
```
jeżeli chcemy zainstalować ściągniętą wersję do katalogu /home/username/.sys-release-3.1.
Powtarzamy czynności dla wszystkich wersji, które chcemy zainstalować, np:
``` sh
/home/username/.sys-trunk
/home/username/.sys-release-3.1
/home/username/.sys-release-3.2
```
Potem z terminala robimy "symbolic link" do wersji, którą chcemy aktualnie używać:
``` sh
$ ln -s .sys-trunk .sys
```
W .bashrc ustawiamy sobie środowisko:
``` sh
PREFIX=/home/username/.sys
export PATH=$PATH:$PREFIX/bin:/opt/microblaze/bin
export LD_LOAD_LIBRARY=$PREFIX/lib
export LD_LIBRARY_PATH=$PREFIX/lib
export PYTHONPATH=$PREFIX/lib/python2.6/site-packages
export PKG_CONFIG_PATH=$PREFIX/lib/pkgconfig
```
Od tego momentu zmiana aktualnej wersji sprowadza się do skasowania starego linku i zrobienia nowego, np:
``` sh
$ ln -s .sys-release-3.1 .sys
```
Po każdej takiej operacji trzeba wydać komendę:
``` sh
$ ldconfig
```

#### Deinstalacja gnuradio

Poniżej jest lista rzeczy, które są do usunięcia jeżeli chcemy usunąć gnuradio. Pamiętajcie aby zastąpić "username" nazwą swojego konta. Jeżeli macie inną wersje pythona (tutaj 2.6) to może on być zainstalowany w innym katalogu i trzeba zmienić odpowiednią linijkę. W poniższym przykładzie gnuradio jesst zainstalowane do katalogu "/home/username/.sys" i również może wymagać modyfikacji jeśli gnuradio zostalo zainstalowane do innego katalogu.
``` sh
PREFIX=/home/username/.sys
rm -rf $PREFIX/bin/gr_plot_*
rm -rf $PREFIX/bin/usrp*
rm -rf $PREFIX/bin/grc
rm -rf $PREFIX/bin/find_usrps
rm -rf $PREFIX/bin/lsusrp
rm -rf $PREFIX/bin/test_all
rm -rf $PREFIX/etc/gnuradio
rm -rf $PREFIX/include/gnuradio
rm -rf $PREFIX/include/gruel
rm -rf $PREFIX/include/fpga_*
rm -rf $PREFIX/include/mb_*
rm -rf $PREFIX/include/mblock
rm -rf $PREFIX/include/pmt*
rm -rf $PREFIX/include/usrp*
rm -rf $PREFIX/lib/libgnuradio*
rm -rf $PREFIX/lib/libgr*
rm -rf $PREFIX/lib/libmblock*
rm -rf $PREFIX/lib/libpmt*
rm -rf $PREFIX/lib/libusrp*
rm -rf $PREFIX/lib/python2.6/site-packages/gnuradio
rm -rf $PREFIX/lib/python2.6/site-packages/usrpm
rm -rf $PREFIX/lib/python2.6/site-packages/grc
rm -rf $PREFIX/lib/python2.6/site-packages/grc_gnuradio
rm -rf $PREFIX/lib/pkgconfig/gnuradio*.pc
rm -rf $PREFIX/lib/pkgconfig/gr-wxgui*.pc
rm -rf $PREFIX/lib/pkgconfig/gruel.pc
rm -rf $PREFIX/lib/pkgconfig/mblock.pc
rm -rf $PREFIX/lib/pkgconfig/pmt.pc
rm -rf $PREFIX/lib/pkgconfig/usrp*.pc
rm -rf $PREFIX/share/doc/gnuradio*
rm -rf $PREFIX/share/doc/usrp*
rm -rf $PREFIX/share/gnuradio
rm -rf $PREFIX/share/grc
rm -rf $PREFIX/share/usrp
ldconfig
```
Ja mam powyższe komendy zapisane do skryptu wykonywalnego. Jak niektórzy się pewnie domyślili, w powyższym przykładzie gnuradio nie zostało zainstalowane do domyślnego katalogu. A to z tego powodu, że zmiana domyślnej lokalizacji gnuradio pozwala na instalowanie równolegle kilku wersji gnuradio trunk.

#### Instalacja sterownikow do Winrad-a

Sterowniki skompilowane dla jednej z dwoch wersji oscylatora 50MHZ lub 52MHz są dostępne dla zainteresowanych poprzez e-mail.

Poniewaz sterowniki sa napisane pod konkretna czestotliwosc probkowania istnieje kilka wersji. Koala byla generalnie sprzedawana z dwoma oscylatorami: 50MHz i 52MHz. Dlatego trzeba pamietac o tym aby instalowac odpowiednia wersje sterownikow.
Rozpakować usrpdrv.zip do osobnego katalogu. Podłączyć Koala One. Windows znajdzie nowe urządzenie i będzie chciał driverów. Należy wskazać katalog do którego rozpakowaliśmy usrpdrv.zip Rozpakowacć usrpfw.zip do katalogu c:\usrp Są to pliki skompilowane do Altery z gnuradio trunk. Uruchomić vcredist_x86.exe , zainstaluje to biblioteki VC. Skopiować ExtIO_USRP.dll do katalogu Winrad-a (zazwyczaj jest to c:\Program Files\Winrad). Uruchomić Winrad-a i z menu "Show options/Select input" wybrać "USRP". Tutaj trzeba ponownie zainstalować drivery w ten sam sposób jak wyżej. UWAGA: normalnie Koala One i USRP zgłaszają sią po podłączeniu z różnymi ID. Inne jest ID w momencie po restarcie płyty i inne jest ID po załadowaniu firmware. Po zainstalowaniu driverow mamy Koala One jako "usrp filter" w manadzeze urządzeń. Tutaj nie opracowałem jeszcze dokładnie strategii, ale po uruchomieniu Winrad-a i wybraniu USRP trzeba wyjść z Winrad-a i uruchomić go ponownie. Wtedy jeszcze raz wybrać "Show options/Select input" i "USRP". Drivery są napisane trochę na kolanie i nie przeze mnie, wiec trzeba tu nad nimi popracować. Drivery wysyłane przeze mnie są skompilowane dla zegara 50MHz zainstalowanego na Koala One.
