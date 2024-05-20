-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 03:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manam`
--

-- --------------------------------------------------------

--
-- Table structure for table `admindetails`
--

CREATE TABLE `admindetails` (
  `name` varchar(50) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admindetails`
--

INSERT INTO `admindetails` (`name`, `phone`, `email`, `password`) VALUES
('siva', 9999854688, 'siva@gmail.com', '11111111');

-- --------------------------------------------------------

--
-- Table structure for table `ebbill`
--

CREATE TABLE `ebbill` (
  `billno` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `edit` int(11) NOT NULL,
  `planname` varchar(60) NOT NULL,
  `price` int(11) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `tprice` int(11) NOT NULL,
  `status` int(2) NOT NULL,
  `datep` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ebbill`
--

INSERT INTO `ebbill` (`billno`, `uid`, `eid`, `edit`, `planname`, `price`, `fromdate`, `todate`, `tprice`, `status`, `datep`) VALUES
(31, 1, 1, 1, 'Wedding Engagement Photography', 25000, '2024-03-20', '2024-03-21', 50000, 1, '2024-03-15'),
(32, 2, 1, 1, 'Wedding Engagement Photography', 25000, '2024-03-22', '2024-03-23', 50000, 1, '2024-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `ebbill1`
--

CREATE TABLE `ebbill1` (
  `billno` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `pid12` int(11) NOT NULL,
  `pname` varchar(60) NOT NULL,
  `price` int(11) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `tprice` int(11) NOT NULL,
  `status` int(2) NOT NULL,
  `datep` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ebbill1`
--

INSERT INTO `ebbill1` (`billno`, `uid`, `pid`, `pid12`, `pname`, `price`, `fromdate`, `todate`, `tprice`, `status`, `datep`) VALUES
(1, 1, 1, 1, 'Silver', 90000, '2024-03-20', '2024-03-21', 180000, 1, '2024-03-15'),
(2, 2, 1, 1, 'Silver', 90000, '2024-03-22', '2024-03-24', 270000, 1, '2024-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `eventbooking`
--

CREATE TABLE `eventbooking` (
  `eid` int(20) NOT NULL,
  `ename` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventbooking`
--

INSERT INTO `eventbooking` (`eid`, `ename`) VALUES
(1, 'Engagement Photography'),
(2, 'Post Wedding Photography'),
(3, 'birthday Photography');

-- --------------------------------------------------------

--
-- Table structure for table `eventbookingdetails`
--

CREATE TABLE `eventbookingdetails` (
  `edit` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `ename` varchar(60) NOT NULL,
  `planname` varchar(60) NOT NULL,
  `desc1` varchar(600) NOT NULL,
  `desc2` varchar(600) NOT NULL,
  `price` int(11) NOT NULL,
  `eimage` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventbookingdetails`
--

INSERT INTO `eventbookingdetails` (`edit`, `eid`, `ename`, `planname`, `desc1`, `desc2`, `price`, `eimage`) VALUES
(1, 1, 'Engagement Photography', 'Wedding Engagement Photography', '1 Professional photographer and 1 Professional videographer\r\nCoverage for 1 session (3 hours is 1 session)\r\nPhotography shooting mode – Traditional\r\nVideography shooting mode – Traditional', 'Photography Deliverables –  250 + Soft Copies (Shortlisted)\r\nVideography Deliverables – 1 edited video\r\nSoft copies of photos will be shared via a link in 10 working days\r\nEdited video in a pen drive will be delivered by post in 25 working days', 2500000, 'eimageu_1710513554830.avif'),
(2, 2, 'Post Wedding Photography', 'dqqasas', '4545gfsr', '454ergerge', 454523, 'eimageu_1710513638393.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `gl`
--

CREATE TABLE `gl` (
  `id` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `ename` varchar(60) NOT NULL,
  `eimage` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gl`
--

INSERT INTO `gl` (`id`, `eid`, `ename`, `eimage`) VALUES
(3, 3, 'birthday Photography', 'eimagegl_1710589152342.jpg'),
(5, 2, 'Post Wedding Photography', 'eimagegl_1710603999804.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `user_id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`user_id`, `name`, `phone`, `email`, `password`) VALUES
(1, 'viknesh', 9876543210, 'viknesh@gmail.com', '22222222'),
(2, 'prthivi', 9876543211, 'prethivi@gmail.com', '11111111'),
(3, 'Dinesh', 9876543212, 'dinesh@gmail.com', '11111111'),
(4, 'pradeepkumar', 9876543213, 'pradeepkumar@gmail.com', '1111111111'),
(5, 'vinoth', 9876543214, 'vinoth@gmail.com', '11111111'),
(6, 'siva', 9856325478, 'siva@gmail.com', '11111111'),
(7, 'viknesh', 8585874565, 'viknesh131019952@gmail.com', '11111111');

-- --------------------------------------------------------

--
-- Table structure for table `wdpkg`
--

CREATE TABLE `wdpkg` (
  `pid` int(20) NOT NULL,
  `pname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wdpkg`
--

INSERT INTO `wdpkg` (`pid`, `pname`) VALUES
(1, 'Silver'),
(2, 'gold');

-- --------------------------------------------------------

--
-- Table structure for table `weddingpackagedetails`
--

CREATE TABLE `weddingpackagedetails` (
  `pid12` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `pname` varchar(60) NOT NULL,
  `recwed` varchar(600) NOT NULL,
  `dele` varchar(600) NOT NULL,
  `price` int(11) NOT NULL,
  `dprice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weddingpackagedetails`
--

INSERT INTO `weddingpackagedetails` (`pid12`, `pid`, `pname`, `recwed`, `dele`, `price`, `dprice`) VALUES
(1, 1, 'Silver', 'Photography Deliverables –  250 + Soft Copies (Shortlisted)\nVideography Deliverables – 1 edited video\nSoft copies of photos will be shared via a link in 10 working days\nEdited video in a pen drive will be delivered by post in 25 working days\njk', 'Photo album', 95000, 5000),
(2, 2, 'gold', 'g4', 'k\nk\n4', 4444, 44);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ebbill`
--
ALTER TABLE `ebbill`
  ADD PRIMARY KEY (`billno`);

--
-- Indexes for table `ebbill1`
--
ALTER TABLE `ebbill1`
  ADD PRIMARY KEY (`billno`);

--
-- Indexes for table `eventbooking`
--
ALTER TABLE `eventbooking`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `eventbookingdetails`
--
ALTER TABLE `eventbookingdetails`
  ADD PRIMARY KEY (`edit`);

--
-- Indexes for table `gl`
--
ALTER TABLE `gl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `wdpkg`
--
ALTER TABLE `wdpkg`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `weddingpackagedetails`
--
ALTER TABLE `weddingpackagedetails`
  ADD PRIMARY KEY (`pid12`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ebbill`
--
ALTER TABLE `ebbill`
  MODIFY `billno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `ebbill1`
--
ALTER TABLE `ebbill1`
  MODIFY `billno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `eventbooking`
--
ALTER TABLE `eventbooking`
  MODIFY `eid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `eventbookingdetails`
--
ALTER TABLE `eventbookingdetails`
  MODIFY `edit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `gl`
--
ALTER TABLE `gl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wdpkg`
--
ALTER TABLE `wdpkg`
  MODIFY `pid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `weddingpackagedetails`
--
ALTER TABLE `weddingpackagedetails`
  MODIFY `pid12` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
