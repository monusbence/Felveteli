-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 17. 11:32
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `felveteli`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `adatok`
--

CREATE TABLE `adatok` (
  `OM_azonosito` varchar(11) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Nev` varchar(40) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Szuletesi_datum` date DEFAULT NULL,
  `Ertesitesi_cim` varchar(120) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `matek_eredmeny` tinyint(4) DEFAULT NULL,
  `magyar_eredmeny` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `adatok`
--

INSERT INTO `adatok` (`OM_azonosito`, `Nev`, `Email`, `Szuletesi_datum`, `Ertesitesi_cim`, `matek_eredmeny`, `magyar_eredmeny`) VALUES
('10987654321', 'Szabó Krisztina', 'szabo.krisztina@example.com', '1992-05-14', 'Szombathely, Ady Endre tér 9.', 91, 83),
('11009988776', 'Szabó Enikő', 'szabo.eniko@example.com', '1993-10-27', 'Szombathely, Fő tér 12.', 79, NULL),
('11220099887', 'Varga Béla', 'varga.bela@example.com', '1997-08-29', 'Pécs, Szent István tér 12.', 91, 92),
('21098765432', 'Kiss Andrea', 'kiss.andrea@example.com', '1993-08-20', 'Győr, Széchenyi tér 8.', 78, 84),
('22098765432', 'Farkas Gábor', 'farkas.gabor@example.com', '1995-02-07', 'Székesfehérvár, Béla király út 17.', 84, 78),
('22110099887', 'Takács Gábor', 'takacs.gabor@example.com', '1996-01-22', 'Eger, Dobó tér 4.', NULL, 87),
('22331100998', 'Kiss Katalin', 'kiss.katalin@example.com', '1990-01-14', 'Szeged, Szent-Györgyi Albert utca 6.', 83, 79),
('32109876543', 'Németh László', 'nemeth.laszlo@example.com', '1991-04-12', 'Nyíregyháza, Bessenyei utca 15.', 87, 79),
('33109876543', 'Varga Zsuzsanna', 'varga.zsuzsanna@example.com', '1998-11-22', 'Győr, Árpád tér 4.', 73, 85),
('33221100998', 'Molnár Katalin', 'molnar.katalin@example.com', '1991-04-05', 'Miskolc, Erzsébet tér 6.', 94, 88),
('33442211009', 'Nagy Zoltán', 'nagy.zoltan@example.com', '1996-03-28', 'Debrecen, Dósa tér 11.', 89, 87),
('43210987654', 'Mészáros Éva', 'meszaros.eva@example.com', '1998-01-30', 'Pécs, Ifjúság út 6.', 95, 88),
('44210987654', 'Papp Gergő', 'papp.gergo@example.com', '1993-07-15', 'Nyíregyháza, Szent István út 12.', 89, 76),
('44332211009', 'Varga József', 'varga.jozsef@example.com', '1998-07-14', 'Pécs, József Attila utca 8.', 76, 83),
('44553322110', 'Mészáros János', 'meszaros.janos@example.com', '1989-05-31', 'Budapest, Andrássy út 8.', 77, 84),
('54321098765', 'Balogh János', 'balogh.janos@example.com', '1989-10-05', 'Budapest, Rákospatak utca 22.', 82, 90),
('55321098765', 'Balogh Judit', 'balogh.judit@example.com', '1991-04-02', 'Pécs, Kossuth tér 6.', 95, 90),
('55443322110', 'Kiss Zsuzsa', 'kiss.zsuzsa@example.com', '1992-12-30', 'Szeged, Tisza Lajos körút 15.', 85, 91),
('55664433221', 'Tóth Kata', 'toth.kata@example.com', '1995-08-16', 'Pécs, Király utca 5.', 85, 91),
('65432109876', 'Tóth Orsolya', 'toth.orsolya@example.com', '1996-06-18', 'Debrecen, Bajnai tér 11.', 76, 81),
('65888955443', 'Farkas Zsuzsanna', 'farkas.zsuzsanna@example.com', '1991-07-20', 'Székesfehérvár, Bajnai út 17.', 93, 86),
('66432109876', 'Nagy László', 'nagy.laszlo@example.com', '1996-01-18', 'Budapest, Bajnai út 8.', 77, 84),
('66554433221', 'Nagy Tamás', 'nagy.tamas@example.com', '1987-03-12', 'Debrecen, Bem tér 9.', 78, 79),
('66775544332', 'Balogh Gergely', 'balogh.gergely@example.com', '1988-11-09', 'Nyíregyháza, Búza tér 3.', 92, 90),
('76543210987', 'Kovács Béla', 'kovacs.bela@example.com', '1994-03-25', 'Szeged, Kálvária út 7.', 88, 92),
('76990066554', 'Szabó László', 'szabo.laszlo@example.com', '1994-10-05', 'Szombathely, Ady Endre tér 9.', 77, NULL),
('77543210987', 'Mészáros Anna', 'meszaros.anna@example.com', '1988-09-30', 'Debrecen, Kálvin tér 5.', 82, 89),
('77665544332', 'Kovács Krisztina', 'kovacs.krisztina@example.com', '1995-06-23', 'Budapest, Deák tér 11.', 90, 92),
('77886655443', 'Papp Éva', 'papp.eva@example.com', '1994-02-14', 'Győr, Aradi vértanúk útja 10.', 76, 85),
('87654321098', 'Molnár Eszter', 'molnar.eszter@example.com', '1990-12-10', 'Miskolc, Bartók Béla utca 14.', NULL, 87),
('88001177665', 'Takács Gergő', 'takacs.gergo@example.com', '1998-01-18', 'Eger, Dobo tér 3.', 84, 78),
('88776655443', 'Tóth Ferenc', 'toth.ferenc@example.com', '1990-09-18', 'Győr, Arany János utca 5.', 82, 88),
('88997766554', 'Fekete László', 'fekete.laszlo@example.com', '1997-07-05', 'Székesfehérvár, Szent István tér 7.', 88, 82),
('98765432109', 'Takács Péter', 'takacs.peter@example.com', '1997-09-28', 'Eger, Kossuth tér 3.', 79, NULL),
('99112288776', 'Molnár Anna', 'molnar.anna@example.com', '1992-06-02', 'Miskolc, Arany János utca 14.', NULL, 89);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `adatok`
--
ALTER TABLE `adatok`
  ADD PRIMARY KEY (`OM_azonosito`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
