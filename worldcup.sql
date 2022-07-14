-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2022 at 03:28 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `worldcup`
--

-- --------------------------------------------------------

--
-- Table structure for table `equipe`
--

CREATE TABLE `equipe` (
  `id` int(11) NOT NULL,
  `Nom_equipe` varchar(20) NOT NULL,
  `Entreneur` varchar(20) NOT NULL,
  `pathimg` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `equipe`
--

INSERT INTO `equipe` (`id`, `Nom_equipe`, `Entreneur`, `pathimg`) VALUES
(1, 'Brazil', 'Quariola', ''),
(2, 'Algerie', 'Moriniho', ''),
(3, 'Espagne', 'Ayoub Kh', ''),
(4, 'Allmend', 'imed attia', ''),
(5, 'Argentina', 'Maradona', ''),
(6, 'Tunisia', 'Nabil maaloul', ''),
(7, 'France', 'poul', ''),
(8, 'italie', 'mascov', ''),
(9, 'Amerique', 'Mark Sebabstian', ''),
(10, 'Egypt', 'maamour', '');

-- --------------------------------------------------------

--
-- Table structure for table `match`
--

CREATE TABLE `match` (
  `id` int(11) NOT NULL,
  `Equipe1` varchar(20) NOT NULL,
  `Equipe2` varchar(20) NOT NULL,
  `Arbitre` varchar(20) NOT NULL,
  `Stade` varchar(30) NOT NULL,
  `pathimg` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `match`
--

INSERT INTO `match` (`id`, `Equipe1`, `Equipe2`, `Arbitre`, `Stade`, `pathimg`) VALUES
(1, 'Espagne', 'Allmend', 'Mahrez Hafsi', 'parc des princes', ''),
(2, 'Argentina', 'Tunisia', 'Imed attia', 'campnou', ''),
(3, 'Brazil', 'Algerie', 'iheb Geuismi', 'santiago bernabeu', ''),
(4, 'France', 'Italie', 'awes trabelssi', 'Allianz Arena', 'jcp'),
(5, 'Amerique', 'Egypt', 'mansour', 'wembley', 'jcp');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `Nom` varchar(20) NOT NULL,
  `Prenom` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Tel` varchar(20) NOT NULL,
  `Pays` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `Nom`, `Prenom`, `Email`, `Tel`, `Pays`, `Password`) VALUES
(8, 'imed', 'attia', 'imed@attia', '958853345', 'Tunisie', 'imed12324');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `match`
--
ALTER TABLE `match`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
