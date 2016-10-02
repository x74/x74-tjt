---
layout: post
type: standard
featimg: /2016/cellid-wawa-play-260-06-2-p4.png
title: Namierzanie pozycji telefonu komórkowego
description: Namierzanie pozycji telefonu pomiędzy stacjami GSM. Mapa zasięgu stacji bazowej GSM na przykladzie Warszawy. Pomiary pokazują jak często telefon zmienia stację bazową. Sieci 2G i 3G.
homedisplay: featimg
author: koala
image: /img/2016/cellid-wawa-play-260-06-2-p4.png
tags: [GSM, openbts]
category: [oprogramowanie]
---

Namierzanie pozycji telefonu pomiędzy stacjami GSM w obszarze miejskim realizowane jest poprzez monitorowanie ruchu w sieci. Jaki jest zatem zasięg stacji bazowej GSM? Odpowiedzi są dwie: czysto teoretyczna i praktyczna. Teoretycznie zasięg stacji bazowej jest ograniczony przez czas w jakim sygnał musi dotrzeć do stacji bazowej z telefonu. Jest to ważniejsze kryterium niż moc nadawcza stacji bazowej lub telefonu. Ten teoretyczny zasięg to około 31km. Większość sieci komórkowych obsługuje tzw. tryb rozszerzony po włączeniu którego zasięg wzrasta do nawet 250km. CDMA ma podobny zasięg ok. 33km, który w tym przypadku jest ograniczony kodami, czyli do +/- 64 kodów. Nad siecią o zwiększonym zasięgu pracował Nortel w Australii, ale siec ta jest martwa tak samo jak Nortel.
Natomiast wracając do praktycznych zasięgów sieci GSM, to są one w okolicy  3-5 km w rejonach podmiejskich. W praktyce ograniczenie nie wynika z fizycznego zasięgu fal radiowych, a z pojemności sieci. Każda stacja bazowa może obsłużyć jedynie określoną liczbę rozmów telefonicznych. Jest to do 7 rozmów na każdy kanał. Przy czym telefonów w stanie czuwania może być zalogowanych do tej samej stacji bazowej dużo więcej, nawet setki. W obszarach miejskich stacje bazowe są rozmieszczone bardzo gęsto po to, aby zwiększyć pojemność sieci. Moc stacji i liczba częstotliwości, na których ona nadaje, są regulowane dynamicznie w zależności od ilości abonentów, pory dnia, itp. Poniżej przedstawione są wyniki pomiarów stacji 2G jednej z sieci komórkowych w Warszawie.

![cellid-wawa-play-260-06-2](/img/2016/cellid-wawa-play-260-06-2-p3.png){:class="img-responsive"}

Jak widać, telefon przełącza się pomiędzy stacjami bazowymi co kilkaset metrów. To znacznie częściej niż teoretyczny limit zasięgu. Na tej samej mapie zaznaczona jest odległość, na jakiej telefon widzi stacje. Jest to odległość następne kilkaset metrów większa niż ta kiedy telefon przelogowuje się do następnej stacji bazowej. Następna mapa przedstawia ten sam pomiar dla sieci 3G. Tutaj sytuacja wygląda podobnie jak w 2G powyżej.

![cellid-wawa-play-260-06-3](/img/2016/cellid-wawa-play-260-06-3-p2.png){:class="img-responsive"}

Jak już zostało to opisane, stacja bazowa ma określoną moc i liczbę częstotliwości, na których nadaje. Te parametry określają jej pojemność i liczbę rozmów jaka może obsłużyć jednocześnie. W takim razie na ilu częstotliwościach może nadawać jedna stacja bazowa? Można się tego dowiedzieć monitorując kanał BCCH, którego słucha każdy telefon komórkowy. Telefon kompiluje listę maksymalnie sześciu stacji bazowych i słucha ich kanału BCCH. Poniżej jest przedstawiona informacja jaka została nagrana z kanału BCCH. Wybrany został pakiet danych pokazujący kanały, na jakich nadaje ta stacja bazowa. Każdy kanał to maksymalnie 7 jednoczesnych rozmów GSM.

``` html
  <proto name="gsm_a.ccch" showname="GSM CCCH - System Information Type 1" size="23" pos="58">
    <field name="" show="L2 Pseudo Length" size="1" pos="58" value="55">
      <field name="gsm_a.rr.l2_pseudo_len" showname="0101 01.. = L2 Pseudo Length value: 21" size="1" pos="58" show="21" value="15" unmaskedvalue="55"/>
    </field>
    <field name="gsm_a.L3_protocol_discriminator" showname=".... 0110 = Protocol discriminator: Radio Resources Management messages (0x06)" size="1" pos="59" show="0x00000006" value="6" unmaskedvalue="06">
      <field name="gsm_a.L3_protocol_discriminator" showname=".... 0110 = Protocol discriminator: Radio Resources Management messages (0x06)" size="1" pos="59" show="0x00000006" value="6" unmaskedvalue="06"/>
      <field name="gsm_a.skip.ind" showname="0000 .... = Skip Indicator: No indication of selected PLMN (0)" size="1" pos="59" show="0" value="0" unmaskedvalue="06"/>
    </field>
    <field name="gsm_a.dtap.msg_rr_type" showname="Message Type: System Information Type 1" size="1" pos="60" show="0x00000019" value="19"/>
    <field name="" show="Cell Channel Description" size="16" pos="61" value="8f4aff80100000000000000000000000">
      <field name="gsm_a.rr.format_id" showname="10.. 111. = Format Identifier: variable bit map (0x47)" size="1" pos="61" show="0x00000047" value="47" unmaskedvalue="8f"/>
      <field name="gsm_a.rr.arfcn_list" showname="List of ARFCNs = 661 662 663 664 665 666 667 668 669 680" size="16" pos="61" show="8f:4a:ff:80:10:00:00:00:00:00:00:00:00:00:00:00" value="8f4aff80100000000000000000000000"/>
    </field>
```

Inny pakiet, który został przedstawiony poniżej inny pakiet danych, który pokazuje listę kanałów, na których nadają sąsiednie stacje bazowe.

``` html
    <field name="gsm_a.dtap.msg_rr_type" showname="Message Type: System Information Type 2" size="1" pos="60" show="0x0000001a" value="1a"/>
    <field name="" show="Neighbour Cell Description - BCCH Frequency List" size="16" pos="61" value="8f501e18000000000000000000000000">
      <field name="gsm_a.rr.ext_ind" showname="..0. .... = EXT-IND: The information element carries the complete BA (0)" size="1" pos="61" show="0" value="0" unmaskedvalue="8f"/>
      <field name="gsm_a.rr.ba_ind" showname="...0 .... = BA-IND: 0" size="1" pos="61" show="0" value="8f"/>
      <field name="gsm_a.rr.format_id" showname="10.. 111. = Format Identifier: variable bit map (0x47)" size="1" pos="61" show="0x00000047" value="47" unmaskedvalue="8f"/>
      <field name="gsm_a.rr.arfcn_list" showname="List of ARFCNs = 672 675 676 677 678 683 684" size="16" pos="61" show="8f:50:1e:18:00:00:00:00:00:00:00:00:00:00:00:00" value="8f501e18000000000000000000000000"/>
    </field>
```
