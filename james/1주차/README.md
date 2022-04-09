# 1주차

# 서버 스터디 1주차

[Server 1주차 워크북](https://www.notion.so/Server-1-94024771f6774893808b23e4a74299e0) 

---

## 서버란?

- **서비스**를 제공하는 컴퓨터(service provider)
- 다수의 클라이언트에게 서비스를 제공하기 때문에 고사양의 하드웨어를 갖춘 컴퓨터이지만, 하드웨어의 사양으로 서버와 클라이언트를 구분하는 것은 절대 아니며, 사양에 관계없이 서비스를 제공하는 소프트웨어가 실행되는 컴퓨터를 **서버**라고 한다.

---

## 서버 -클라이언트 관계

- 서버:클라이언트 = 1 : N
- 요청(request) ↔ 응답(response)
    - 클라이언트가 서버에 HTTP request를 보내고 서버가 HTTP response를 돌려보낸다.
    - 클라이언트와 서버의 모든 통신이 요청과 응답으로 이루어진다.

---

## 서버의 동작 방식과 순서 (요청이 들어왔을 때 서비스 처리)

웹 클라이언트 ↔ 웹 서버 ↔ WAS ↔ DB

- 웹 클라이언트 : 사용자가 웹에 접근하는 프로그램 → 브라우저
- 웹 서버 : 웹 페이지, 사이트 또는 앱을 저장하는 프로그램
    - ex) Apache Web Server, GWS, IIS
- WAS(Web Application Server) : 사용자 컴퓨터나 장치에 웹 어플리케이션을 수행해주는 미들웨어를 뜻한다. db나 웹 서버 사이에서 동적인 페이지 처리를 담당하고, 웹 서버의 부하를 분산 시켜주는 역할을 담당한다.
- DB : 데이터의 정보를 저장하는 곳이며 WAS에서 데이터를 요청하면 필요한 데이터를 응답한다.

[[Web] 웹 서버와 WAS의 차이를 쉽게 알아보자](https://codechasseur.tistory.com/25)

[WEB 서버와 WAS 서버의 차이](https://sungks.tistory.com/195)

[{즉문즉설} WAS와 WS의 차이점은? (feat. Nginx, Node Express, Flask)](https://www.youtube.com/watch?v=6xl3wKMjmWg)

---

## APM

- A : Apache Web Server
- P : Php
- M : MySQL

---

## 비트나미

가상 어플라이언스 및 웹 애플리케이션, 개발 스택용 소프트웨어 패키지 및 설치 라이브러리

- WAMP : 윈도우 환경에서 APM을 구축 가능
- MAMP : 맥 환경에서 APM을 구축 가능

---

## 로컬호스트(localhost)

- 127.0.0.1 : 자신의 컴퓨터를 가리키는 IPv4 주소로, 자기 자신을 가리킨다고 해서, 루프백 주소라고 불림
- 로컬호스트 : 자신의 컴퓨터를 가리키는 호스트이름(hostname) / 도메인
자기 자신의 IP로 접속하기 위해 127.0.0.1을 치지 않고 localhost를 검색해서 접속할 수 있도록 하는 OS 자체적으로 제공하는 도메인디ㅏ.

---

## 리눅스 명령어

[리눅스 명령어](https://www.notion.so/e3637e7c787446fc9e0b942e0de1688a) 

[[linux] 리눅스 기본 명령어/자주 쓰는 명령어](https://itholic.github.io/linux-basic-command/)

[02. 꼭 알아야 할 리눅스 기본 명령어 10가지](https://gomguard.tistory.com/73)

[리눅스 명령어 모음 BEST 50 초보자 및 전문가용 - 도라가이드](https://dora-guide.com/linux-commands/)

---
## 리눅스 디렉토리 구조

[리눅스 디렉토리 구조](https://webdir.tistory.com/101)