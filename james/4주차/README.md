# 4주차

# 서버 스터디 4주차

[Server 4주차 워크북](https://www.notion.so/Server-4-3759cd00fada4d12966ae1b5ec5336e4) 

---

## RDBMS

### RDB

- Relational Database
- 연결된 테이블 간의 데이터를 효과적이며 효율적으로 조회하는 SQL

### DBMS

- DataBase Management System
- DB를 관리하는 시스템
- ex) MS SQL, ORACLE, MySQL ...

### NoSQL

- Not Only SQL
- 기존의 관계형 DBMS가 갖고 있는 특성 뿐만 아니라 다른 특성들을 부가적으로 지원

---

## SQL

### DDL

- Data Definition Language
- 데이터 정의어
- 데이터베이스 관리를 위한 언어, 개체(Table 등) 관리 등

### DCL

- Data Control Language
- 데이터 제어어
- 접근 권한 등의 사용자 관리

### TCL

- Transaction Control Language
- 트랜잭션 제어 명령어

### DML

- Data Manipulation Language
- 데이터 조작어
- 데이터베이스 내 데이터를 조작

---

## Database 용어

### Table

- 개체(entity)의 속성(attribute)과 실제 값(value)를 담고 잇는 2진(binary) 형태의 저장소(store)

### Row

- 개체(entity)의 속성(attribute)에 대한 실제 값(value)을 의미함

### Column

- 개체(entity)에 대한 속성(attribute)을 의미함

### Schema

- 데이터베이스의 구조와 제약조건에 대한 명세를 기술한 것을 의미

### Key (Primary key)

- 객체를 식별하는 고유의 값
- 모든 테이블에는 기본키 값을 저장하는 필드(속성)가 반드시 존재

---

## Table 관계

### 1:1

- 하나의 레코드가 다른 테이블의 레코드 한 개와 연결된 경우
- 자주 사용 x

### 1:N

- 하나의 레코드가 서로 다른 여러 개의 레코드와 연결된 경우
- 관계형 데이터베이스에서 가장 많이 사용함

### N:M

- 여러 개의 레코드가 다른 테이블의 여러 개의 레코드와 관계가 있는 경우
- join 테이블을 만들어서 관리
- 양방향에서 다수의 레코드를 가질 수 있음