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
 -  Do not need to wait for the data to recieve you can add more requests to the server and keep repeating it ,a two way connection

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

-Refer the folder Long Polling in the communication Techniques

#THE END BEII
