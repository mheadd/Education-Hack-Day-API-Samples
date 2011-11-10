<?php
/**
 * Simple PHP script that uses the Browse Schools method
 *  of the GreatSchools API
 *  http://www.greatschools.org/api/docs/browseSchools.page
 */

define("URL_BASE", "http://api.greatschools.org/schools");
define("API_KEY", "api-key-goes-here");
define("API_CITY", "Baltimore");
define("API_STATE", "MD");

$type = $_REQUEST["type"];
$level = $_REQUEST["level"];
$limit = $_REQUEST["limit"];

$url = URL_BASE . "/" . API_STATE . "/" . API_CITY . "/$type/$level?key=" . API_KEY . "&limit=" . $limit;

$xml = simplexml_load_file($url);
$school = $xml->school;

echo "Name: " . $school->name . "<br />";
echo "Address: " . $school->address . "<br />";
echo "Grades: " . $school->gradeRange;

?>