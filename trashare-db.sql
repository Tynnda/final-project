-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: final-project
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `offer_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (1,1,1,'hello',NULL,'2022-03-27 17:54:13','2022-03-27 17:54:13'),(2,1,2,'Hello, whats up?',NULL,'2022-03-27 18:00:56','2022-03-27 18:00:56'),(3,1,3,'Hello there, Iam kun',NULL,'2022-03-27 18:20:57','2022-03-27 18:20:57'),(4,2,1,'To the centre of the city, in the middle of the jungle.. where all roads meet, Iam waiting for you',NULL,'2022-03-27 18:23:18','2022-03-27 18:23:18'),(5,1,4,'Hello there',NULL,'2022-03-28 06:13:43','2022-03-28 06:13:43'),(6,2,4,'Hello ondra',NULL,'2022-03-28 06:14:19','2022-03-28 06:14:19'),(7,1,4,'Hi',NULL,'2022-03-28 07:16:59','2022-03-28 07:16:59'),(8,5,1,'hi',NULL,'2022-03-28 07:20:22','2022-03-28 07:20:22'),(9,3,2,NULL,NULL,'2022-03-28 11:39:12','2022-03-28 11:39:12'),(10,3,2,'hello',NULL,'2022-03-28 11:39:12','2022-03-28 11:39:12'),(11,3,2,NULL,NULL,'2022-03-28 11:39:12','2022-03-28 11:39:12');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `country_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,1,'Viena','2022-03-27 17:13:03','2022-03-27 17:13:03'),(2,1,'Salzburg','2022-03-27 17:13:03','2022-03-27 17:13:03'),(3,2,'Brussels','2022-03-27 17:13:03','2022-03-27 17:13:03'),(4,3,'Banja Luka','2022-03-27 17:13:03','2022-03-27 17:13:03'),(5,4,'Burgas','2022-03-27 17:13:03','2022-03-27 17:13:03'),(6,4,'Plovdid','2022-03-27 17:13:03','2022-03-27 17:13:03'),(7,4,'Sofia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(8,4,'Varna','2022-03-27 17:13:03','2022-03-27 17:13:03'),(9,5,'Dubrovnik','2022-03-27 17:13:03','2022-03-27 17:13:03'),(10,5,'Pula','2022-03-27 17:13:03','2022-03-27 17:13:03'),(11,5,'Rijeka','2022-03-27 17:13:03','2022-03-27 17:13:03'),(12,5,'Split','2022-03-27 17:13:03','2022-03-27 17:13:03'),(13,5,'Zadar','2022-03-27 17:13:03','2022-03-27 17:13:03'),(14,5,'Zagreb','2022-03-27 17:13:03','2022-03-27 17:13:03'),(15,6,'Larnaca','2022-03-27 17:13:03','2022-03-27 17:13:03'),(16,6,'Paphos','2022-03-27 17:13:03','2022-03-27 17:13:03'),(17,7,'Brno','2022-03-27 17:13:03','2022-03-27 17:13:03'),(18,7,'Ostrava','2022-03-27 17:13:03','2022-03-27 17:13:03'),(19,7,'Pardubice','2022-03-27 17:13:03','2022-03-27 17:13:03'),(20,7,'Prague','2022-03-27 17:13:03','2022-03-27 17:13:03'),(21,8,'Aalborg','2022-03-27 17:13:03','2022-03-27 17:13:03'),(22,8,'Aarhus','2022-03-27 17:13:03','2022-03-27 17:13:03'),(23,8,'Billund','2022-03-27 17:13:03','2022-03-27 17:13:03'),(24,8,'Copenhagen','2022-03-27 17:13:03','2022-03-27 17:13:03'),(25,9,'Tallinn','2022-03-27 17:13:03','2022-03-27 17:13:03'),(26,10,'Helsinki','2022-03-27 17:13:03','2022-03-27 17:13:03'),(27,10,'Lappeenranta','2022-03-27 17:13:03','2022-03-27 17:13:03'),(28,10,'Tampere','2022-03-27 17:13:03','2022-03-27 17:13:03'),(29,11,'Bordeaux','2022-03-27 17:13:03','2022-03-27 17:13:03'),(30,11,'Dole','2022-03-27 17:13:03','2022-03-27 17:13:03'),(31,11,'Marseille','2022-03-27 17:13:03','2022-03-27 17:13:03'),(32,11,'Paris','2022-03-27 17:13:03','2022-03-27 17:13:03'),(33,11,'Toulouse','2022-03-27 17:13:03','2022-03-27 17:13:03'),(34,12,'Dortmund','2022-03-27 17:13:03','2022-03-27 17:13:03'),(35,12,'Dresden','2022-03-27 17:13:03','2022-03-27 17:13:03'),(36,12,'Frankfurt','2022-03-27 17:13:03','2022-03-27 17:13:03'),(37,12,'Hamburk','2022-03-27 17:13:03','2022-03-27 17:13:03'),(38,12,'Nuremberg','2022-03-27 17:13:03','2022-03-27 17:13:03'),(39,13,'Athens','2022-03-27 17:13:03','2022-03-27 17:13:03'),(40,13,'Corfu','2022-03-27 17:13:03','2022-03-27 17:13:03'),(41,13,'Kos','2022-03-27 17:13:03','2022-03-27 17:13:03'),(42,13,'Rhodos','2022-03-27 17:13:03','2022-03-27 17:13:03'),(43,13,'Santorini','2022-03-27 17:13:03','2022-03-27 17:13:03'),(44,13,'Zakynthos','2022-03-27 17:13:03','2022-03-27 17:13:03'),(45,14,'Budapest','2022-03-27 17:13:03','2022-03-27 17:13:03'),(46,15,'Cork','2022-03-27 17:13:03','2022-03-27 17:13:03'),(47,15,'Dublin','2022-03-27 17:13:03','2022-03-27 17:13:03'),(48,15,'Kerry','2022-03-27 17:13:03','2022-03-27 17:13:03'),(49,15,'Knock','2022-03-27 17:13:03','2022-03-27 17:13:03'),(50,16,'Tel Aviv','2022-03-27 17:13:03','2022-03-27 17:13:03'),(51,17,'Bologna','2022-03-27 17:13:03','2022-03-27 17:13:03'),(52,17,'Catania','2022-03-27 17:13:03','2022-03-27 17:13:03'),(53,17,'Milan','2022-03-27 17:13:03','2022-03-27 17:13:03'),(54,17,'Palermo','2022-03-27 17:13:03','2022-03-27 17:13:03'),(55,17,'Rome','2022-03-27 17:13:03','2022-03-27 17:13:03'),(56,17,'Venice','2022-03-27 17:13:03','2022-03-27 17:13:03'),(57,18,'Riga','2022-03-27 17:13:03','2022-03-27 17:13:03'),(58,19,'Kaunas','2022-03-27 17:13:03','2022-03-27 17:13:03'),(59,19,'Palanga','2022-03-27 17:13:03','2022-03-27 17:13:03'),(60,19,'Vilnius','2022-03-27 17:13:03','2022-03-27 17:13:03'),(61,20,'Luxembourg','2022-03-27 17:13:03','2022-03-27 17:13:03'),(62,21,'Malta','2022-03-27 17:13:03','2022-03-27 17:13:03'),(63,22,'Podgorica','2022-03-27 17:13:03','2022-03-27 17:13:03'),(64,23,'Agadir','2022-03-27 17:13:03','2022-03-27 17:13:03'),(65,23,'Fez','2022-03-27 17:13:03','2022-03-27 17:13:03'),(66,23,'Nador','2022-03-27 17:13:03','2022-03-27 17:13:03'),(67,23,'Rabat','2022-03-27 17:13:03','2022-03-27 17:13:03'),(68,24,'Amsterdam','2022-03-27 17:13:03','2022-03-27 17:13:03'),(69,24,'Eindhoven','2022-03-27 17:13:03','2022-03-27 17:13:03'),(70,24,'Maastricht','2022-03-27 17:13:03','2022-03-27 17:13:03'),(71,25,'Haugesund','2022-03-27 17:13:03','2022-03-27 17:13:03'),(72,25,'Oslo','2022-03-27 17:13:03','2022-03-27 17:13:03'),(73,26,'Katowice','2022-03-27 17:13:03','2022-03-27 17:13:03'),(74,26,'Krakow','2022-03-27 17:13:03','2022-03-27 17:13:03'),(75,26,'Lublin','2022-03-27 17:13:03','2022-03-27 17:13:03'),(76,26,'Poznan','2022-03-27 17:13:03','2022-03-27 17:13:03'),(77,26,'Warsaw','2022-03-27 17:13:03','2022-03-27 17:13:03'),(78,26,'Wroclaw','2022-03-27 17:13:03','2022-03-27 17:13:03'),(79,27,'Faro','2022-03-27 17:13:03','2022-03-27 17:13:03'),(80,27,'Lisbon','2022-03-27 17:13:03','2022-03-27 17:13:03'),(81,27,'Ponta Delgada','2022-03-27 17:13:03','2022-03-27 17:13:03'),(82,27,'Porto','2022-03-27 17:13:03','2022-03-27 17:13:03'),(83,28,'Bucharest','2022-03-27 17:13:03','2022-03-27 17:13:03'),(84,28,'Cluj','2022-03-27 17:13:03','2022-03-27 17:13:03'),(85,28,'Sibiu','2022-03-27 17:13:03','2022-03-27 17:13:03'),(86,28,'Suceava','2022-03-27 17:13:03','2022-03-27 17:13:03'),(87,29,'Nis','2022-03-27 17:13:03','2022-03-27 17:13:03'),(88,30,'Bratislava','2022-03-27 17:13:03','2022-03-27 17:13:03'),(89,30,'Kosice','2022-03-27 17:13:03','2022-03-27 17:13:03'),(90,31,'Barcelona','2022-03-27 17:13:03','2022-03-27 17:13:03'),(91,31,'Valencia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(92,31,'Ibiza','2022-03-27 17:13:03','2022-03-27 17:13:03'),(93,31,'Madrid','2022-03-27 17:13:03','2022-03-27 17:13:03'),(94,31,'Malaga','2022-03-27 17:13:03','2022-03-27 17:13:03'),(95,31,'Seville','2022-03-27 17:13:03','2022-03-27 17:13:03'),(96,31,'Valencia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(97,32,'Lulea','2022-03-27 17:13:03','2022-03-27 17:13:03'),(98,32,'Malmo','2022-03-27 17:13:03','2022-03-27 17:13:03'),(99,32,'Orebro','2022-03-27 17:13:03','2022-03-27 17:13:03'),(100,32,'Stockholm','2022-03-27 17:13:03','2022-03-27 17:13:03'),(101,33,'Basel','2022-03-27 17:13:03','2022-03-27 17:13:03'),(102,34,'Bodrum','2022-03-27 17:13:03','2022-03-27 17:13:03'),(103,34,'Dalaman','2022-03-27 17:13:03','2022-03-27 17:13:03'),(104,35,'Kyiv','2022-03-27 17:13:03','2022-03-27 17:13:03'),(105,36,'Birmingham','2022-03-27 17:13:03','2022-03-27 17:13:03'),(106,36,'Glasgow','2022-03-27 17:13:03','2022-03-27 17:13:03'),(107,36,'Liverpool','2022-03-27 17:13:03','2022-03-27 17:13:03'),(108,36,'London','2022-03-27 17:13:03','2022-03-27 17:13:03'),(109,36,'Manchester','2022-03-27 17:13:03','2022-03-27 17:13:03');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Austria','2022-03-27 17:13:03','2022-03-27 17:13:03'),(2,'Belgium','2022-03-27 17:13:03','2022-03-27 17:13:03'),(3,'Bosna & Herzegovina','2022-03-27 17:13:03','2022-03-27 17:13:03'),(4,'Bulgaria','2022-03-27 17:13:03','2022-03-27 17:13:03'),(5,'Croatia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(6,'Cyprus','2022-03-27 17:13:03','2022-03-27 17:13:03'),(7,'Czech Republic','2022-03-27 17:13:03','2022-03-27 17:13:03'),(8,'Denmark','2022-03-27 17:13:03','2022-03-27 17:13:03'),(9,'Estonia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(10,'Finland','2022-03-27 17:13:03','2022-03-27 17:13:03'),(11,'France','2022-03-27 17:13:03','2022-03-27 17:13:03'),(12,'Germany','2022-03-27 17:13:03','2022-03-27 17:13:03'),(13,'Greece','2022-03-27 17:13:03','2022-03-27 17:13:03'),(14,'Hungary','2022-03-27 17:13:03','2022-03-27 17:13:03'),(15,'Ireland','2022-03-27 17:13:03','2022-03-27 17:13:03'),(16,'Israel','2022-03-27 17:13:03','2022-03-27 17:13:03'),(17,'Italy','2022-03-27 17:13:03','2022-03-27 17:13:03'),(18,'Latvia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(19,'Lithuania','2022-03-27 17:13:03','2022-03-27 17:13:03'),(20,'Luxembourg','2022-03-27 17:13:03','2022-03-27 17:13:03'),(21,'Malta','2022-03-27 17:13:03','2022-03-27 17:13:03'),(22,'Montenegro','2022-03-27 17:13:03','2022-03-27 17:13:03'),(23,'Morocco','2022-03-27 17:13:03','2022-03-27 17:13:03'),(24,'Netherlands','2022-03-27 17:13:03','2022-03-27 17:13:03'),(25,'Norway','2022-03-27 17:13:03','2022-03-27 17:13:03'),(26,'Poland','2022-03-27 17:13:03','2022-03-27 17:13:03'),(27,'Portugal','2022-03-27 17:13:03','2022-03-27 17:13:03'),(28,'Romania','2022-03-27 17:13:03','2022-03-27 17:13:03'),(29,'Serbia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(30,'Slovakia','2022-03-27 17:13:03','2022-03-27 17:13:03'),(31,'Spain','2022-03-27 17:13:03','2022-03-27 17:13:03'),(32,'Sweden','2022-03-27 17:13:03','2022-03-27 17:13:03'),(33,'Switzerland','2022-03-27 17:13:03','2022-03-27 17:13:03'),(34,'Turkey','2022-03-27 17:13:03','2022-03-27 17:13:03'),(35,'Ukraine','2022-03-27 17:13:03','2022-03-27 17:13:03'),(36,'United Kingdom','2022-03-27 17:13:03','2022-03-27 17:13:03');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (95,'2014_10_12_000000_create_users_table',1),(96,'2014_10_12_100000_create_password_resets_table',1),(97,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(98,'2019_08_19_000000_create_failed_jobs_table',1),(99,'2019_12_14_000001_create_personal_access_tokens_table',1),(100,'2022_03_17_130044_create_countries_table',1),(101,'2022_03_17_130101_create_cities_table',1),(102,'2022_03_17_130129_create_offers_table',1),(103,'2022_03_17_130145_create_sizes_table',1),(104,'2022_03_17_130212_create_chats_table',1),(105,'2022_03_17_130229_create_reviews_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `departure_id` int(11) NOT NULL,
  `arrival_id` int(11) NOT NULL,
  `departure_time` date DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,1,25,61,'2022-03-03','jedu si tak do lucemburska','wxd',NULL,NULL,'2022-03-27 17:14:47','2022-03-27 17:14:47'),(2,3,87,100,'2022-05-07','Going to Stockholm','2500',NULL,NULL,'2022-03-27 18:20:04','2022-03-27 18:20:04'),(3,3,58,101,'2022-06-02','Hello, I wanna share my space','100',NULL,NULL,'2022-03-28 05:17:04','2022-03-28 05:17:04'),(4,4,51,60,'2022-04-30','Hello, I have a lot of space','beer',NULL,NULL,'2022-03-28 06:18:29','2022-03-28 06:18:29'),(5,4,87,103,'2022-06-03','iam coming!!!!!!','olalal',NULL,NULL,'2022-03-28 07:02:00','2022-03-28 07:02:00'),(6,2,72,80,'2022-04-10','lets go to portugal','vodka',NULL,NULL,'2022-03-28 09:34:19','2022-03-28 09:34:19'),(7,6,36,83,'2022-04-01','jedu do rumunska','555',NULL,NULL,'2022-03-29 10:37:48','2022-03-29 10:37:48'),(8,6,59,15,NULL,'jedu','beer',NULL,NULL,'2022-03-29 14:51:56','2022-03-29 14:51:56');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `giver_id` int(11) NOT NULL,
  `reciever_id` int(11) NOT NULL,
  `rating_value` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,2,1,3,'2022-03-29 07:35:06','2022-03-29 07:35:06'),(2,2,1,5,'2022-03-29 07:35:06','2022-03-29 07:35:06'),(3,2,2,3,'2022-03-29 07:10:14','2022-03-29 07:10:14'),(4,2,2,4,'2022-03-29 07:10:28','2022-03-29 07:10:28'),(5,2,2,1,'2022-03-29 07:10:36','2022-03-29 07:10:36'),(6,2,2,4,'2022-03-29 07:10:38','2022-03-29 07:10:38'),(7,2,2,3,'2022-03-29 07:11:14','2022-03-29 07:11:14'),(8,2,2,5,'2022-03-29 07:11:15','2022-03-29 07:11:15'),(9,2,2,2,'2022-03-29 07:11:15','2022-03-29 07:11:15'),(10,2,2,2,'2022-03-29 07:12:34','2022-03-29 07:12:34'),(11,2,2,3,'2022-03-29 07:14:21','2022-03-29 07:14:21'),(12,2,2,2,'2022-03-29 07:16:34','2022-03-29 07:16:34'),(13,2,2,2,'2022-03-29 07:16:35','2022-03-29 07:16:35'),(14,2,2,2,'2022-03-29 07:18:15','2022-03-29 07:18:15'),(15,2,2,3,'2022-03-29 07:18:16','2022-03-29 07:18:16'),(16,2,2,3,'2022-03-29 07:18:17','2022-03-29 07:18:17'),(17,2,2,4,'2022-03-29 07:18:18','2022-03-29 07:18:18'),(18,2,2,5,'2022-03-29 07:18:19','2022-03-29 07:18:19'),(19,2,2,2,'2022-03-29 07:18:20','2022-03-29 07:18:20'),(20,2,2,3,'2022-03-29 07:18:20','2022-03-29 07:18:20'),(21,2,2,4,'2022-03-29 07:18:21','2022-03-29 07:18:21'),(22,2,2,5,'2022-03-29 07:20:21','2022-03-29 07:20:21'),(23,2,2,5,'2022-03-29 07:20:21','2022-03-29 07:20:21'),(24,2,2,2,'2022-03-29 07:20:22','2022-03-29 07:20:22'),(25,2,2,5,'2022-03-29 07:20:23','2022-03-29 07:20:23'),(26,2,2,3,'2022-03-29 07:20:23','2022-03-29 07:20:23'),(27,2,2,4,'2022-03-29 07:20:24','2022-03-29 07:20:24'),(28,2,2,2,'2022-03-29 07:20:24','2022-03-29 07:20:24'),(29,2,2,4,'2022-03-29 07:20:33','2022-03-29 07:20:33'),(30,2,2,3,'2022-03-29 07:20:37','2022-03-29 07:20:37'),(31,2,2,4,'2022-03-29 07:20:41','2022-03-29 07:20:41'),(32,2,2,1,'2022-03-29 07:30:46','2022-03-29 07:30:46'),(33,2,2,2,'2022-03-29 07:30:47','2022-03-29 07:30:47'),(34,2,2,4,'2022-03-29 07:30:57','2022-03-29 07:30:57'),(35,2,2,1,'2022-03-29 07:31:06','2022-03-29 07:31:06'),(36,2,2,1,'2022-03-29 07:31:06','2022-03-29 07:31:06'),(37,2,2,1,'2022-03-29 07:31:07','2022-03-29 07:31:07'),(38,2,2,1,'2022-03-29 07:31:07','2022-03-29 07:31:07'),(39,2,2,1,'2022-03-29 07:31:07','2022-03-29 07:31:07'),(40,2,2,1,'2022-03-29 07:31:08','2022-03-29 07:31:08'),(41,2,2,1,'2022-03-29 07:37:34','2022-03-29 07:37:34'),(42,2,2,1,'2022-03-29 07:37:34','2022-03-29 07:37:34'),(43,2,2,2,'2022-03-29 07:37:35','2022-03-29 07:37:35'),(44,2,2,4,'2022-03-29 07:37:39','2022-03-29 07:37:39'),(45,2,2,5,'2022-03-29 07:37:44','2022-03-29 07:37:44'),(46,2,2,4,'2022-03-29 07:37:49','2022-03-29 07:37:49'),(47,2,2,5,'2022-03-29 07:38:13','2022-03-29 07:38:13'),(48,2,2,4,'2022-03-29 07:38:20','2022-03-29 07:38:20'),(49,2,2,1,'2022-03-29 07:53:59','2022-03-29 07:53:59'),(50,2,2,1,'2022-03-29 07:54:04','2022-03-29 07:54:04'),(51,2,2,1,'2022-03-29 07:54:09','2022-03-29 07:54:09'),(52,2,2,2,'2022-03-29 07:56:40','2022-03-29 07:56:40'),(53,2,1,2,'2022-03-29 08:02:29','2022-03-29 08:02:29'),(54,2,1,3,'2022-03-29 08:02:31','2022-03-29 08:02:31'),(55,2,1,4,'2022-03-29 08:04:13','2022-03-29 08:04:13'),(56,2,1,3,'2022-03-29 08:05:14','2022-03-29 08:05:14'),(57,2,1,3,'2022-03-29 08:05:30','2022-03-29 08:05:30'),(58,2,1,2,'2022-03-29 08:05:32','2022-03-29 08:05:32'),(59,2,1,4,'2022-03-29 08:05:34','2022-03-29 08:05:34'),(60,2,1,4,'2022-03-29 08:05:36','2022-03-29 08:05:36'),(61,2,1,5,'2022-03-29 08:05:37','2022-03-29 08:05:37'),(62,2,1,1,'2022-03-29 08:05:43','2022-03-29 08:05:43'),(63,2,1,3,'2022-03-29 08:11:18','2022-03-29 08:11:18'),(64,2,1,3,'2022-03-29 08:11:59','2022-03-29 08:11:59'),(65,2,1,4,'2022-03-29 08:12:01','2022-03-29 08:12:01'),(66,2,1,1,'2022-03-29 08:12:03','2022-03-29 08:12:03'),(67,2,1,2,'2022-03-29 08:12:05','2022-03-29 08:12:05'),(68,2,1,3,'2022-03-29 08:13:22','2022-03-29 08:13:22'),(69,2,1,4,'2022-03-29 08:13:24','2022-03-29 08:13:24'),(70,2,1,2,'2022-03-29 08:13:25','2022-03-29 08:13:25'),(71,2,1,1,'2022-03-29 08:50:02','2022-03-29 08:50:02'),(72,2,1,5,'2022-03-29 09:18:16','2022-03-29 09:18:16'),(73,2,1,3,'2022-03-29 09:18:18','2022-03-29 09:18:18'),(74,2,1,1,'2022-03-29 09:18:19','2022-03-29 09:18:19'),(75,2,1,4,'2022-03-29 09:18:20','2022-03-29 09:18:20'),(76,2,1,1,'2022-03-29 09:19:38','2022-03-29 09:19:38'),(77,2,1,3,'2022-03-29 09:20:04','2022-03-29 09:20:04'),(78,2,1,4,'2022-03-29 09:20:06','2022-03-29 09:20:06'),(79,2,1,2,'2022-03-29 09:20:07','2022-03-29 09:20:07'),(80,2,1,1,'2022-03-29 09:20:08','2022-03-29 09:20:08'),(81,2,1,5,'2022-03-29 09:20:09','2022-03-29 09:20:09'),(82,2,1,1,'2022-03-29 09:20:10','2022-03-29 09:20:10'),(83,2,1,2,'2022-03-29 09:29:58','2022-03-29 09:29:58'),(84,2,1,3,'2022-03-29 09:29:59','2022-03-29 09:29:59'),(85,2,1,3,'2022-03-29 09:30:00','2022-03-29 09:30:00'),(86,2,1,3,'2022-03-29 09:30:44','2022-03-29 09:30:44'),(87,2,1,5,'2022-03-29 09:31:07','2022-03-29 09:31:07'),(88,2,1,2,'2022-03-29 09:31:48','2022-03-29 09:31:48'),(89,2,1,5,'2022-03-29 09:31:53','2022-03-29 09:31:53'),(90,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(91,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(92,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(93,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(94,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(95,2,1,5,'2022-03-29 09:31:54','2022-03-29 09:31:54'),(96,2,1,5,'2022-03-29 09:33:18','2022-03-29 09:33:18'),(97,2,1,2,'2022-03-29 09:33:23','2022-03-29 09:33:23'),(98,2,1,5,'2022-03-29 09:33:45','2022-03-29 09:33:45'),(99,2,1,5,'2022-03-29 09:33:45','2022-03-29 09:33:45'),(100,2,1,5,'2022-03-29 09:33:46','2022-03-29 09:33:46'),(101,2,1,5,'2022-03-29 09:33:46','2022-03-29 09:33:46'),(102,2,1,5,'2022-03-29 09:33:54','2022-03-29 09:33:54'),(103,2,1,5,'2022-03-29 09:33:54','2022-03-29 09:33:54'),(104,2,1,5,'2022-03-29 09:33:54','2022-03-29 09:33:54'),(105,2,1,5,'2022-03-29 09:33:54','2022-03-29 09:33:54'),(106,2,1,5,'2022-03-29 09:33:55','2022-03-29 09:33:55'),(107,2,1,5,'2022-03-29 09:33:55','2022-03-29 09:33:55'),(108,2,1,5,'2022-03-29 09:33:55','2022-03-29 09:33:55'),(109,2,1,5,'2022-03-29 09:33:55','2022-03-29 09:33:55'),(110,2,3,5,'2022-03-29 09:34:32','2022-03-29 09:34:32'),(111,2,3,1,'2022-03-29 09:34:35','2022-03-29 09:34:35'),(112,2,3,2,'2022-03-29 09:34:37','2022-03-29 09:34:37'),(113,2,3,5,'2022-03-29 09:34:37','2022-03-29 09:34:37'),(114,2,3,3,'2022-03-29 09:34:38','2022-03-29 09:34:38'),(115,2,3,5,'2022-03-29 09:43:37','2022-03-29 09:43:37'),(116,2,3,1,'2022-03-29 09:43:40','2022-03-29 09:43:40'),(117,2,3,1,'2022-03-29 09:43:41','2022-03-29 09:43:41'),(118,2,3,1,'2022-03-29 09:43:41','2022-03-29 09:43:41'),(119,2,3,1,'2022-03-29 09:43:42','2022-03-29 09:43:42'),(120,2,3,4,'2022-03-29 09:43:43','2022-03-29 09:43:43'),(121,2,3,5,'2022-03-29 09:43:43','2022-03-29 09:43:43'),(122,2,3,2,'2022-03-29 09:43:44','2022-03-29 09:43:44'),(123,2,3,1,'2022-03-29 09:43:45','2022-03-29 09:43:45'),(124,2,3,1,'2022-03-29 09:43:46','2022-03-29 09:43:46'),(125,2,3,2,'2022-03-29 09:43:46','2022-03-29 09:43:46'),(126,2,3,2,'2022-03-29 09:43:47','2022-03-29 09:43:47'),(127,2,3,2,'2022-03-29 09:43:47','2022-03-29 09:43:47'),(128,2,3,2,'2022-03-29 09:43:48','2022-03-29 09:43:48'),(129,2,3,2,'2022-03-29 09:43:48','2022-03-29 09:43:48'),(130,2,3,2,'2022-03-29 09:43:49','2022-03-29 09:43:49'),(131,2,3,2,'2022-03-29 09:43:49','2022-03-29 09:43:49'),(132,2,3,2,'2022-03-29 09:43:50','2022-03-29 09:43:50'),(133,2,4,5,'2022-03-29 09:46:50','2022-03-29 09:46:50'),(134,2,4,3,'2022-03-29 09:46:51','2022-03-29 09:46:51'),(135,2,4,2,'2022-03-29 09:46:53','2022-03-29 09:46:53'),(136,2,4,3,'2022-03-29 09:46:55','2022-03-29 09:46:55'),(137,2,4,2,'2022-03-29 09:46:56','2022-03-29 09:46:56'),(138,2,4,4,'2022-03-29 09:47:59','2022-03-29 09:47:59'),(139,2,4,2,'2022-03-29 09:48:14','2022-03-29 09:48:14'),(140,2,4,4,'2022-03-29 09:48:18','2022-03-29 09:48:18'),(141,2,4,5,'2022-03-29 09:48:19','2022-03-29 09:48:19'),(142,2,4,3,'2022-03-29 09:48:20','2022-03-29 09:48:20'),(143,2,4,2,'2022-03-29 09:48:21','2022-03-29 09:48:21'),(144,2,4,3,'2022-03-29 09:48:25','2022-03-29 09:48:25'),(145,2,4,4,'2022-03-29 09:48:26','2022-03-29 09:48:26'),(146,2,4,5,'2022-03-29 09:48:27','2022-03-29 09:48:27'),(147,2,4,1,'2022-03-29 09:48:28','2022-03-29 09:48:28'),(148,2,4,1,'2022-03-29 09:48:29','2022-03-29 09:48:29'),(149,2,4,1,'2022-03-29 09:48:30','2022-03-29 09:48:30'),(150,2,1,2,'2022-03-29 09:48:47','2022-03-29 09:48:47'),(151,2,1,1,'2022-03-29 09:48:48','2022-03-29 09:48:48'),(152,5,1,5,'2022-03-29 09:50:00','2022-03-29 09:50:00'),(153,5,1,5,'2022-03-29 09:50:00','2022-03-29 09:50:00'),(154,5,1,2,'2022-03-29 09:50:03','2022-03-29 09:50:03'),(155,5,1,2,'2022-03-29 10:20:46','2022-03-29 10:20:46'),(156,5,1,3,'2022-03-29 10:20:46','2022-03-29 10:20:46'),(157,5,1,3,'2022-03-29 10:20:47','2022-03-29 10:20:47'),(158,5,1,4,'2022-03-29 10:20:47','2022-03-29 10:20:47'),(159,5,1,4,'2022-03-29 10:20:47','2022-03-29 10:20:47'),(160,5,1,4,'2022-03-29 10:20:47','2022-03-29 10:20:47'),(161,5,1,3,'2022-03-29 10:20:48','2022-03-29 10:20:48'),(162,5,1,2,'2022-03-29 10:20:48','2022-03-29 10:20:48'),(163,5,1,2,'2022-03-29 10:20:48','2022-03-29 10:20:48'),(164,5,1,1,'2022-03-29 10:20:48','2022-03-29 10:20:48'),(165,5,1,1,'2022-03-29 10:20:49','2022-03-29 10:20:49'),(166,5,1,3,'2022-03-29 10:20:49','2022-03-29 10:20:49'),(167,5,1,4,'2022-03-29 10:20:49','2022-03-29 10:20:49'),(168,5,1,5,'2022-03-29 10:20:49','2022-03-29 10:20:49'),(169,5,1,3,'2022-03-29 10:20:50','2022-03-29 10:20:50'),(170,5,1,3,'2022-03-29 10:20:50','2022-03-29 10:20:50'),(171,5,1,2,'2022-03-29 10:20:50','2022-03-29 10:20:50'),(172,5,1,2,'2022-03-29 10:20:50','2022-03-29 10:20:50'),(173,5,1,4,'2022-03-29 10:20:51','2022-03-29 10:20:51'),(174,5,1,5,'2022-03-29 10:20:51','2022-03-29 10:20:51'),(175,5,1,2,'2022-03-29 10:22:43','2022-03-29 10:22:43'),(176,5,1,2,'2022-03-29 10:22:44','2022-03-29 10:22:44'),(177,5,1,1,'2022-03-29 10:22:44','2022-03-29 10:22:44'),(178,5,1,3,'2022-03-29 10:22:45','2022-03-29 10:22:45'),(179,5,1,3,'2022-03-29 10:22:45','2022-03-29 10:22:45'),(180,5,1,2,'2022-03-29 10:22:45','2022-03-29 10:22:45'),(181,5,1,5,'2022-03-29 10:22:48','2022-03-29 10:22:48'),(182,5,1,5,'2022-03-29 10:22:48','2022-03-29 10:22:48'),(183,5,1,5,'2022-03-29 10:22:49','2022-03-29 10:22:49'),(184,5,1,5,'2022-03-29 10:22:50','2022-03-29 10:22:50'),(185,5,1,5,'2022-03-29 10:22:51','2022-03-29 10:22:51'),(186,1,3,5,'2022-03-29 10:26:02','2022-03-29 10:26:02'),(187,1,3,5,'2022-03-29 10:26:03','2022-03-29 10:26:03'),(188,1,3,5,'2022-03-29 10:26:04','2022-03-29 10:26:04'),(189,1,3,5,'2022-03-29 10:26:04','2022-03-29 10:26:04'),(190,1,3,5,'2022-03-29 10:26:05','2022-03-29 10:26:05'),(191,6,3,5,'2022-03-29 16:29:29','2022-03-29 16:29:29'),(192,6,1,5,'2022-03-29 16:32:42','2022-03-29 16:32:42'),(193,6,1,5,'2022-03-29 16:32:42','2022-03-29 16:32:42'),(194,6,1,5,'2022-03-29 16:32:42','2022-03-29 16:32:42'),(195,6,1,5,'2022-03-29 16:32:44','2022-03-29 16:32:44'),(196,6,1,5,'2022-03-29 16:32:44','2022-03-29 16:32:44'),(197,6,1,5,'2022-03-29 16:32:44','2022-03-29 16:32:44'),(198,6,1,5,'2022-03-29 16:32:44','2022-03-29 16:32:44');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'images/pocket.png','2022-03-27 17:13:04','2022-03-27 17:13:04'),(2,'images/backpack.png','2022-03-27 17:13:04','2022-03-27 17:13:04'),(3,'images/luggage.png','2022-03-27 17:13:04','2022-03-27 17:13:04'),(4,'images/suitcase.png','2022-03-27 17:13:04','2022-03-27 17:13:04');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_num` int(11) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kristýna','Koníčková',NULL,'kris.konickova@gmail.com',603515908,NULL,'$2y$10$iEAnOd5FREvZRPrFeQfyreB9w3DTbRGnLFB0tGVshDdhxfVVl6mf.',NULL,NULL,NULL,'2022-03-27 17:14:19','2022-03-27 17:14:19'),(2,'Martin','Parizek',NULL,'pariz@gmail.com',603515908,NULL,'$2y$10$Bp2eCPl8QAxrPED7qQFfLeNuypJL3LeMMFyEi4sXsX.gjJkH0wa0O',NULL,NULL,NULL,'2022-03-27 18:00:36','2022-03-27 18:00:36'),(3,'Ondra','Konicek',NULL,'kun@gmail.com',123456789,NULL,'$2y$10$oAIvS77mALxmL/BLtZ/Ik.bCji88RhwArWulPuhzJmiYTOsGOP9rW',NULL,NULL,NULL,'2022-03-27 18:19:13','2022-03-27 18:19:13'),(4,'lolo','Liii',NULL,'lolo@gmail.com',603515908,NULL,'$2y$10$0/WFYlaV0U48yxLHNiRlCesG09lRFEh4T/x/uJ5MaTxWXcC9Er.0C',NULL,NULL,NULL,'2022-03-28 06:13:14','2022-03-28 06:13:14'),(5,'Mikolaj','Prus',NULL,'miki@gmail.com',603515908,NULL,'$2y$10$e2/js7cYS0oucGoTo4wmJ.EXpHu4vIziSOr.IzEderLo3E4dUlqnm',NULL,NULL,NULL,'2022-03-29 09:49:43','2022-03-29 09:49:43'),(6,'jull','jullie',NULL,'ijull@gmail.com',603515908,NULL,'$2y$10$JB4Xz/r68AwbjN8XF2y8BuWj4jRHN3FEEkihPSKWhqJjXDVTmpncy',NULL,NULL,NULL,'2022-03-29 10:37:17','2022-03-29 10:37:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-30 11:23:20
