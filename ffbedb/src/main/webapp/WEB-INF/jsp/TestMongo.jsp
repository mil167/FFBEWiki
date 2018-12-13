<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.mongodb.MongoClient" %>
<%@ page import="com.mongodb.MongoClientURI" %>
<%@ page import="com.mongodb.client.MongoDatabase" %>
<%@ page import="com.mongodb.client.MongoCollection" %>
<%@ page import="com.mongodb.DBCollection" %>
<%@ page import="com.mongodb.DBCursor" %>
<%@ page import="com.mongodb.DBObject" %>
<%@ page import="org.bson.Document" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<style><%@include file="/WEB-INF/css/TestMongo.css"%></style>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<title>Insert title here</title>
</head>
<body>
	<%
		try {
			MongoClient clientA = new MongoClient(new MongoClientURI("mongodb://mli12420469:cse132b@ds115753.mlab.com:15753/abilities"));
			
			MongoDatabase databaseA = clientA.getDatabase("abilities");
			MongoCollection<Document> collectionA = databaseA.getCollection("ability");
				
			List<Document> documentsA = (List<Document>)collectionA.find().into(
					new ArrayList<Document>());

		%>
		<table>
			<tr>
				<th id="name">Name</th>
				<th id="desc">Description</th>
				<th id="tmr" style="display:none">TMR</th>
				<th id="stmr" style="display:none">STMR</th>
				<th id="lt" style="display:none">Limited Time</th>
			</tr>
		</table>
		<%				
				
			for(Document doc : documentsA) {
				List<Document> abilities = (List<Document>) doc.get("ability_info");
				for(Document ability: abilities) {
		%>
		<table>
			<tr>
				<td align="center" id="name"><%= ability.getString("name") %></td>
				<td align="center" id="desc"><%= ability.getString("text") %></td>
				<td align="center" id="tmr" style="display:none"><%= ability.getString("tmr") %></td>
				<td align="center" id="stmr" style="display:none"><%= ability.getString("stmr") %></td>
				<td align="center" id="lt" style="display:none"><%= ability.getString("limitedtime") %></td>
			</tr>
		</table>
		
		<% 				
				}
			}
		clientA.close();
		}
		finally {
			
		}
	%>
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>