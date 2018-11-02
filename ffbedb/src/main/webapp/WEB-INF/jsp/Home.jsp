<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style><%@include file="/WEB-INF/css/Home.css"%></style>
<title>FFBEWiki</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<link rel="icon" type="image/png" sizes="16x16" href="resources/favicon.ico">
<link rel="manifest" href="/manifest.json">
</head>
<body>
	<ul id="navbar">
		<li><a class="active" href="/">Home</a></li>
		<li><a href="weapon">Weapons</a></li>
		<li><a href="armor">Armors</a></li>
		<li><a href="accessory">Accessories</a></li>
		<li><a href="filter">Weapon Search</a></li>
		<li><a href="filter2">Armor Search</a></li>
		</ul>
	<button onclick="backToTop()" id="topBtn" title="Scroll to Top">Top</button>
	<br>
	<div id="genDiv">
		<table id="welcome">
			<tr>
				<th colspan="4">About FFBEWiki</th>
			</tr>
			<tr>
				<td id="welcome">FFBEWiki is a fan-made project and unofficial resource site for in-game data for the GL version of FFBE. The project is still in its early stages, so stay tuned for future updates! Many thanks for visiting the site!</td> 
			</tr>
		</table>
		
		<br>
		
		<table id="featuredBanners">
			<tr>
				<th colspan="4">Featured Banners</th>
			</tr>
			<tr>
				<td><img src="../../resources/halloween2.png"></td>
				<td><img src="../../resources/halloween1.png"></td>
				<td><img src="../../resources/vpbanner.png"></td>
				<td><img src="../../resources/type0banner.png"></td>
			</tr>
			<tr>
				<td>Past Halloween Banner <br>(10/19/18 01:00 - <br>11/04/18 00:59 PDT)<br><a href="https://lapis-prod-staticnews-gumi-sg.akamaized.net/prod//en/img/HalloweenOldUnitsGacha.jpg">(more info)</a></td>
				<td>Halloween 2018 Banner <br>(10/19/18 01:00 - <br>11/04/18 00:59 PDT)<br><a href="https://lapis-prod-staticnews-gumi-sg.akamaized.net/prod//en/img/HalloweenNewUnitsGacha.jpg">(more info)</a></td>
				<td>Valkyrie Profile Banner <br>(10/26/18 01:00 - <br>11/8/18 00:59 PDT)<br><a href="https://lapis-prod-staticnews-gumi-sg.akamaized.net/prod//en/img/ValkyrieProfileFeatureSummon.jpg">(more info)</a></td>
				<td>Final Fantasy Type-0 Banner <br>(11/2 01:00 - <br>11/16/18 00:59 PDT)<br><a href="https://lapis-prod-staticnews-gumi-sg.akamaized.net/prod//en/img/20181030FFT0gacha.jpg">(more info)</a></td>
			</tr>
		</table>
		
		<br>
		
		<table id="resources">
			<tr>
				<th style="width: 30%">Useful Resources</th>
			</tr>
			<tr>
				<td>
					<a href="https://www.reddit.com/r/FFBraveExvius/">FFBE Subreddit</a>
					<br>
					<a href="https://exvius.gamepedia.com/Final_Fantasy_Brave_Exvius_Wiki">Exvius Wiki</a>
					<br>
					<a href="https://ffbeequip.com/builder.html">FFBE Equip Unit Builder</a>
					
				</td>
			</tr>
		</table>
	</div>
</body>
</html>