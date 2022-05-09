# API입문과 Node.js 첫만남

## 지난주 과제

다음 화면의 데이터구조를 분석해보고, 스키마 짜보기
![IMG_5014](https://user-images.githubusercontent.com/35029025/166185408-53644873-17b9-4230-97fe-4b45fb878d14.PNG)

저는 이렇게 했어요.

    create database crongInstaSample;  
  
    use crongInstaSample;  

    CREATE TABLE user(  
        `id` int AUTO_INCREMENT,  
      `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
      `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
      `nickname` varchar(50) NOT NULL,  
      `profilePic` varchar(100) NOT NULL COMMENT '유저 사진 접근 url',  
     PRIMARY KEY (id)  
    );  

    CREATE TABLE posts(  
         `id` int AUTO_INCREMENT,  
      `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
      `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
      `writer` int NOT NULL,  
      `index` VARCHAR(200) COMMENT '게시물 내용',  
      `location` varchar(50),  

     FOREIGN KEY (writer) REFERENCES user(id),  
     PRIMARY KEY (id)  
    );  

    CREATE TABLE postMedia(  
        `id` int AUTO_INCREMENT,  
      `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
      `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
      `postId` int NOT NULL,  
      `mediaUrl` varchar(100) COMMENT '사진 및 영상이 저장된 공간의 url을 저장한다.',  
     FOREIGN KEY (postId) REFERENCES posts(id),  
     PRIMARY KEY(id)  
    );  

    CREATE TABLE postLike(  
        `id` int AUTO_INCREMENT,  
      `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
      `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
      `userId` INT not null COMMENT '좋아요를 누른 사용자의 id를 저장한다.',  

     PRIMARY KEY (id),  
     FOREIGN KEY (userId) REFERENCES user(id)  
    );  

    CREATE TABLE comment(  
        `id` int AUTO_INCREMENT,  
      `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
      `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
      `writer` INT not null,  
      `postId` INT not null,  
      `upperComment` INT not null DEFAULT -1 COMMENT '대댓글 기능. 기본은 게시물의 댓글로 설정!',  
      `index` VARCHAR(300) not null COMMENT '댓글 내용',  

     PRIMARY KEY (id),  
     FOREIGN KEY (writer) REFERENCES user(id),  
     FOREIGN KEY (upperComment) REFERENCES user(id),  
     FOREIGN KEY (postId) REFERENCES posts(id)  
    )

# node.js의 기본 구조
## 기본 특징
* [JS기본 특징]이벤트 기반으로 동작한다 -> 구글에서 개발한 자바스크립트 V8엔진의 특징을 그대로 가짐!
* [JS기본 특징]콜백 함수 -> 함수가 다른 함수에 매개되어 전달되어질 수 있다.
* [Node.js 기본 특징] 논블록킹인 비동기 방식을 제공한다.
   논블록킹(비동기)방식이란?
   [블로그 글 참조](https://psyhm.tistory.com/9)
# spring boot의 기본 구조
## 기본 특징
* Layered Architecture

Layered Architecture란?

이전에 봤던 OSI 7계층 그림을 다시 가져와보겠습니다.


     PRIMARY KEY (id),  
     PRIMARY KEY (id),  
