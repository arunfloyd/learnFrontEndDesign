# REST API Overview

![Overview About REST API](images/1.png)

## Architecture

### 1st Tier

![1st Tier](image.png)

### 2nd Tier

![2nd Tier](image-1.png)

### 3rd Tier

![3rd Tier](image-2.png)

## What is an API?

An **API** (Application Programming Interface) is an interface that facilitates communication between two programming services or languages. It enables data exchange and interaction across software.

## What is a REST API?

**REST API** (Representational State Transfer Application Programming Interface) dictates how data should be represented and transferred between two services, such as between a client and a server or between services and a database.

## What is HTTP?

**HTTP** (HyperText Transfer Protocol) is a standard that helps in the communication of data across web services by defining how data is to be exchanged.

## Benefits of REST API

![Benefits](image-3.png)

## Building Blocks

![Building Blocks](image-4.png)

## Request

![Request Details](image-5.png)

## Response

![Response Details](image-6.png)

## URL Parts

![URL Parts](image-7.png)

In this URL, at the end, there is a fragment that is client-side only and not sent to the server. This means it does not affect server-side behavior or requests. It is typically used to refer to a specific section within a webpage, such as a heading, an anchor, or an element with a particular ID.

### Example: TODO Application

![Example: TODO Application](image-8.png)

## Headers

### Request Headers

![Types of Headers - Part 1](image-9.png)
![Types of Headers - Part 2](image-10.png)

### Response Headers

![Types of Headers - Part 1](image-11.png)
![Types of Headers - Part 2](image-12.png)

## Status Codes

![Status Codes - Part 1](image-13.png)
![Status Codes - Part 2](image-14.png)

# GraphQl

## Overview

![OverView](image-15.png)

## How it works

![how it works](image-16.png)

![Graph Query Language](image-17.png)

- On a single query itself we can all the datas do not require to have multiple queries

## Benfits

![Benfits](image-18.png)

## Rest Vs GraphQl

![Differece 1](image-19.png)

![Diff 2](image-20.png)

## Fundamentals

![Server & Client](image-21.png)

## GraphQl Building Blocks

![Building Blocks](image-22.png)

![Resolver parameters](image-23.png)

### We implement GraphQl check GraphQl folder for more details

# gRPC

gRPC - Google Remote Procedure Call

## OverView

![Overview](image-24.png)

## gRPC

![Flow 1](image-28.png)

![Flow 2](image-29.png)

## Protocol Buffer

![ProtoBuf(Google)](image-30.png)

![Benfits](image-31.png)

## Architecture of gRPC

![How it works](image-32.png)

![Creation ](image-33.png)

### We created gRPC app refer the gRPC folder

## Diff between REST and gRPC

![Diff 1 ](image-34.png)

![Diff 2](image-35.png)

## Advantages And Disadvantages

![Ad vs Dis](image-36.png)

# Communicating Technique

## Popular Interview Question

![interview](image-37.png)

## OverView

![Overview](image-38.png)

### Short Polling

- Consitently asking the data is ready after completing give the data(Eg: Payment Transaction is sucessful)

### Long Polling

- After completing the entire data only the data will be given to the user

### Websocket

- Do not need to wait for the data to recieve you can add more requests to the server and keep repeating it ,a two way connection

### SSE (Server Sent Event)

- Some events without your involvement actually go through but you got the data

### Webhooks

- Predefined events at a particular events have completed

## Short Polling

- Frequently check for new notification by passing request in every 5 seconds

![Short Polling](image-39.png)

- Refer the Short Polling Folder and we created an example for it

## Long Polling

- The request will be live on the server until a new update is available from the server

![Long Polling](image-41.png)

- Refer the folder Long Polling in the communication Techniques

## Websocket

![Web socket](image-43.png)

- Refer the folder WebSocket in the communication techniques
- Created a chat bot

## Server Side Events

![SSE](image-44.png)

![Challenges](image-45.png)

- Refer the folder Server sent Events in the communication techniques

## Web Hooks

![Web Hooks](image-47.png)

![Automation ](image-46.png)

- Refer the folder WebHooks in the communication techniques

# Secuirty

### OverView

![OverView](image-48.png)

### What is Covered

![CoveredInThis](image-49.png)
![Covered2](image-50.png)

### Popular Interview Question

![InterviewQstn](image-51.png)

## Secuirty Overview

![overview](image-52.png)

## XSS (Cross site Scripting)

![Flow of Attack](image-53.png)

- Here we will discuss the vulnerabilities attack and mitigation for it

- Created two html files named example and example1 check on security > XSS > vulnerabilities folder

- Example 1 : Simply pass the query params for the user name

- Example 2 :User session hijacking , Pass the query params for the the user name but containing some vulnerability in it

  ![query which is to be passed](image-55.png)
  ![Encode the URI](image-54.png)

- Example 3 : Unathorized activities , Pass the query params for the vulanerabilty and create a post
  ![Query on last to pass ](image-56.png)
  ![It pass the arguments to make the post also cookie is also passing so the authorization is being passed](image-57.png)

- Example 4 : Capturing Keystrokes , it will monitor all the keys pressed
  ![Code to inject](image-58.png)
  ![Encoded the url above](image-59.png)
  ![When the user press every key it passing to a url](image-60.png)

- Example 5 : Stealing Critical information,
  ![Url passed to inject](image-61.png)
  ![Encoded the url](image-62.png)
  ![It took the entire html](image-63.png)

- Example 5 : Phising the website
  ![Code to phish](image-66.png)
  ![Encode and Create a fake form and send to the url of hacker](image-64.png)  
  ![A form have been created here](image-65.png)

- Mitigation to avoid the vulnerability  
  ![mitigation](image-67.png)

  - Avoid Using eval

  - CSP (Content Security Policy) Headers
    ![how it helps](image-68.png)
  - Check the mitigation folder

## IFRAME PROTECTION

### Clickhijacking

- Refer the folder security/iframe-protection

![Parent Html file](image-69.png)

![This is the iFrame Website to do vulnerable thigs](image-70.png)

![With the use of iframe this parent can use the iframe website in it](image-71.png)

![So giving some style to it it covers the iframe website under it](image-72.png)

### Data Thefting

![Overview](image-76.png)

![There added two website on example2 and iframe2 added iframe into other](image-73.png)

![In modern website data can not get by javascript but still there are such browser to get data of innerHTML or DOM](image-74.png)

### Mitigation

![We can't pass google search using iframe](image-75.png)

![This csp can be used](image-78.png)

![We can use Sandbox to say that doesn't execute any js in the iframe](image-77.png)

![This all can do to protext from this like stuff](image-79.png)

## Secuirty Headers 

![Over View](image-82.png)

### X-Powered-By

![Default our server is shown it is not goof](image-80.png)

![So using middleware to removeheader](image-81.png)

### Referrer- Policy

- Its like leaking the url from move to one url to another url so we should handle it

### X-Content-Type-Options

- So there is a chance when client send image to server and inbetween the file have changed into something
html or js it should be avoided

### X-XSS-Protection
- If we have done the proper CSP it can be avoided

### HSTS (Strict Transport Security)
- ![http into https ](image-83.png)

![This will convert the http into https without getting into the server on the browser itself](image-84.png)

## Client Side Storage 

![Over View 1](image-87.png)

### Session Management 

- Here it set HttpOnly so it can not fetch through js code only through the http server
![Session](image-88.png)

- Storing data on the browser should be thinked twice

![Creation of checksum](image-85.png)

![CheckHowMuchIsLeft](image-86.png)

## Secure Communication HTTPS

![Benfits of http](image-89.png)

## Dependency Security

![To make sure the dependency is secure ](image-91.png)

- To make the auditing easier we can dependabot.yml 

![Custom hook to check the security scan](image-90.png)

## Compliance and Regulations

![1](image-92.png)
![2](image-93.png)
![3](image-94.png)
![4](image-95.png)
![5](image-96.png)

## Input Validation and Sanitization

![To Check the validations](image-97.png)

## SSRF 

![The flow ](image-98.png)

### Problems created by 

![Unvalidated  input](image-100.png)

![Lack of Whitelisting](image-101.png)

![insufficent access control](image-102.png)

![XML External Entity (XXE)](image-103.png)

## Server Side Javascript Injection

![Problems](image-104.png)

![Attack Examples](image-105.png)

### Solution for it

![input validation](image-106.png)

![user provided code](image-107.png)

![using dangerous function](image-108.png)

![Deserialization](image-109.png)

## Feature policy and permission policy 

![how it happens](image-111.png)

![Enabled the permission policy](image-110.png)

![Features](image-112.png)

## SRI (Sub Resource Integrity)

![integrity protection on the cdn](image-114.png)

![Features](image-115.png)

- Check and learn the permission policy from wesite 'https://permissions-policy-demo-glitch.me'

#THE END BEII
