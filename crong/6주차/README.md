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
![image](https://user-images.githubusercontent.com/35029025/167366664-9227a9e7-c12b-4593-9109-5cbf8337f1f7.png)

위 그림에서, Layer가 하는 역할은 패킷을 아래서 위로 전달하고 각자의 위치에서 패킷을 최대한 검사하는 것이었습니다.
스프링부트도 똑같습니다. Layered Architecture를 기반으로, 서로에게 데이터를 전달할 뿐, Layer간에는 어떤 작업도 하지 않습니다. 

### 스프링부트 아키텍처
![image](https://user-images.githubusercontent.com/35029025/167367231-8cfd3524-20d0-4071-950c-eff548df2804.png)
* Controller Layer : UI 에서 요청을 받고 응답을 전달 한다.
* Service Layer : 비즈니스 로직을 구현 한다.
* Repository Layer : 데이터베이스에서 가져올 쿼리를 구현. JPA를 이용하는 경우 정해진 규칙에 따라서 메소드를 사용하거나, 만들어놓으면 적절한 쿼리를 수행할 수 있다.
* Domain Layer : 실제로 데이터베이스 물리 테이블과 1:1 매핑이 되어 바인딩 되어 있다.

참고: [블로그 글 참고](https://www.bottlehs.com/springboot/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%B6%80%ED%8A%B8-%EA%B5%AC%EC%A1%B0/)

# [번외] JSP와 Restful API
## JSP
java 언어를 기반으로 하는 Server Side 스크립트 언어이다.

HTML코드에 Java 코드를 넣어 동적인 웹 페이지를 생성하는 웹 어플리케이션 도구이다.
1.jsp를 통해 정적인 HTML과 동적으로 생성된 contents(Http 요청 파라미터)를 혼합하여 사용할 수 있다.

2.즉, 사용자가 입력한 contents에 맞게 동적인 웹 페이지를 생성한다.

Servlet 기술의 확장
1.Servlet을 보완한 스크립트 방식 표준
2.Servlet의 모든 기능 + 추가적인 기능

## Restful API
서버에 API요청을 하여 웹페이지의 내용을 채워넣는다.
