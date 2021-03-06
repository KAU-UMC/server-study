# 데이터 베이스 설계

## 데이터베이스 설계 원칙
흔하게 알려진 데이터베이스 설계 원칙이 있습니다.

- 사용자의 데이터를 간단하면서도 효과적으로 저장하고 처리하기 위한 데이터베이스 스키마를 생성해 내는데 그 목표가 있다.

1) 무엇이 모델되어야 하는가?

- 목표 데이터 베이스를 정확히 모델링하는것으로 엔티티와 관계성을 가지는 현실세계에서 대상이 존재해야한다.

2) 사실의 유일 표현(unique representation)

- DB 설계에 있어 연구되는 사항은 목표의 정확한 표현뿐만 아니라  단순성과 명료성이 필요하고

각 사실은 한번씩만 표현되어야 한다.

3) 널 값

- 각 엔티티나 튜플의 모든 어트리뷰트는  널이 아닌 값을 갖도록 해야한다.

- 널 값이 들어갈경우 해당 어트리뷰트만 따로 테이블을 만들어 해결한다.

***실제로 개발을 진행해보며, 보고 들은 설계 TIP은 다음과 같습니다.*** 

1. **개인 정보를 PK로 사용하지 말것**
	- 간단히 생각한다면, 사용자의 정보를 저장한다고 할 때 *주민등록 번호*가 PK로 지정되면 좋을 것 같습니다. 하지만, 개인정보는 정부의 정책이 바뀔수도 있고, 해커들은 PK를 제일 먼저 공격하므로 개인 정보를 PK로 지정하는 것은 별로 좋은 생각이 아닙니다.
2. **함수로 해결할 수 있는 쿼리문은 테이블로 만들지 말것**
    - 예를 들어, 게시판에 댓글을 단 유저의 정보를 받아오는 API를 설계한다고 합시다.
    - 이러한 경우에는 댓글을 단 유저의 정보가 담긴 테이블을 만드는 것이 ***아니고,*** JOIN Query를 통한 질의를 해야 합니다. 
3. **모든 테이블에 PK는 존재해야 한다.**
   - 모든 테이블에 PK는 존재해야 합니다.
   - PK삼을 것이 없다면 ID 어트리뷰트를 추가하면 됩니다.
4. **ID, CREATED AT, UPDATE AT 어트리뷰트는 항상 존재하는 것이 좋다.**
   # 데이터 베이스 설계

## 데이터베이스 설계 원칙
흔하게 알려진 데이터베이스 설계 원칙이 있습니다.

- 사용자의 데이터를 간단하면서도 효과적으로 저장하고 처리하기 위한 데이터베이스 스키마를 생성해 내는데 그 목표가 있다.

1) 무엇이 모델되어야 하는가?

- 목표 데이터 베이스를 정확히 모델링하는것으로 엔티티와 관계성을 가지는 현실세계에서 대상이 존재해야한다.

2) 사실의 유일 표현(unique representation)

- DB 설계에 있어 연구되는 사항은 목표의 정확한 표현뿐만 아니라  단순성과 명료성이 필요하고

각 사실은 한번씩만 표현되어야 한다.

3) 널 값

- 각 엔티티나 튜플의 모든 어트리뷰트는  널이 아닌 값을 갖도록 해야한다.

- 널 값이 들어갈경우 해당 어트리뷰트만 따로 테이블을 만들어 해결한다.

***실제로 개발을 진행해보며, 보고 들은 설계 TIP은 다음과 같습니다.*** 

1. **개인 정보를 PK로 사용하지 말것**
	- 간단히 생각한다면, 사용자의 정보를 저장한다고 할 때 *주민등록 번호*가 PK로 지정되면 좋을 것 같습니다. 하지만, 개인정보는 정부의 정책이 바뀔수도 있고, 해커들은 PK를 제일 먼저 공격하므로 개인 정보를 PK로 지정하는 것은 별로 좋은 생각이 아닙니다.
2. **함수로 해결할 수 있는 쿼리문은 테이블로 만들지 말것**
    - 예를 들어, 게시판에 댓글을 단 유저의 정보를 받아오는 API를 설계한다고 합시다.
    - 이러한 경우에는 댓글을 단 유저의 정보가 담긴 테이블을 만드는 것이 ***아니고,*** JOIN Query를 통한 질의를 해야 합니다. 
3. **모든 테이블에 PK는 존재해야 한다.**
   - 모든 테이블에 PK는 존재해야 합니다.
   - PK삼을 것이 없다면 ID 어트리뷰트를 추가하면 됩니다.
4. **ID, CREATED AT, UPDATE AT 어트리뷰트는 항상 존재하는 것이 좋다.**
   ![image](https://user-images.githubusercontent.com/35029025/166184621-ffb28f55-d12f-4937-9045-4f3c37c8997c.png)

## 인스타그램 게시글 댓글 기능으로 ERD 구성해보기
인스타그램 댓글이 다음과 같다고 합시다. ERD를 구성해보고, 쿼리문을 각자 작성하여 README에 Push하며 배운 내용을 견고히 해보겠습니다.
![IMG_5014 복사본](https://user-images.githubusercontent.com/35029025/166185398-383c9b29-c750-4aca-b334-afbccee38d3e.PNG)
![IMG_5014](https://user-images.githubusercontent.com/35029025/166185408-53644873-17b9-4230-97fe-4b45fb878d14.PNG)

다음 잼보드에서 토의해봅시다!

[구글 잼보드 바로가기](https://jamboard.google.com/d/1MUHQyoxV23hGZ2m-ZynSYEig37zjceXO0rCx5Avi_HE/edit?usp=sharing)

## Todo: 위의 잼보드 내용을 집에서 보고, 스키마를 구성해 보세요.

