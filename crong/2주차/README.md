# 2주차 서버 스터디 정리

## 외부  IP vs 내부 IP
앞으로 줄기차게 사용할 것이고, 이전에도 많이 들어봤던 IP! 
IP란 무엇일까요??

### IP란?
**Internet Protocol** 의 약자로, 인터넷을 하면서 가끔 봤던 59.7.111.1의 형식으로 되어있는 인터넷 기기 각각에게 주어지는 주소입니다.
![IP란 - 공인IP 사설IP 확인방법 : 네이버 블로그](data:image/png;base64,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)
위의 그림을 보시면, 8글자의 2진수가 4칸에 나눠서 들어가 있는 것을 볼 수 있어요. 그러면 우리는 이론상, 2^32 -> 즉 4,294,967,296개의 기기들에 인터넷 주소를 할당할 수 있겠네요!
라고 말하고 끝나면 좋겠지만, 사실 전세계의 인터넷이 되는 기기를 전부 모으면, 40억개는 족히 넘을거에요. 여기서 **외부IP(공인 IP)**와 **내부IP(사설IP)** 개념이 등장합니다!!

### 외부 IP

아주아주 특별한 경우가 아닌 이상, 한 집에는 __개의 외부(공인)IP가 주어집니다.

아까 우리는, IP를 정의할 때 IP란 인터넷이 되는 기기마다 주소가 부여되는 것이라고 했어요.
그런데, 방금 한 집에는 하나의 IP가 주어진다고 했죠???
그럼에도 불구하고, 여러분이 집에서 데스크탑과 노트북, 스마트폰, 태블릿등을 하나의 공유기 WiFi에서 사용할 수 있는 이유는 **내부 IP가 따로 주어지기 때문**이에요.

### 내부 IP
외부에서 주어진 공인 아이피를, 내부에서 쪼개서 씁니다!
사설 IP대역은, 10._____, 172._____, 192.______으로 시작하는 것들이에요. 
아마, 실습을 진행하면서 ipconfig(unix는 ifconfig)를 치면 많이 보셨을 주소일텐데요,
이러한 내부 IP로 외부의 IP를 여러개로 쪼개서 사용한답니다.

외부 IP가 아파트의 동 주소라고 치면, 내부 IP는 호 주소를 의미한다고 말할 수 있겠네요!

## 서버하면 이건 알아야지~ 프로토콜 정리
검색해서, 채워주세요!

 - FTP
	 - 포트 번호:
	 - 역할:
 - SMTP
	 - 포트 번호:
	 - 역할:
 - HTTP
	 - 포트 번호:
	 - 역할:
 - HTTPS
	 - 포트 번호:
	 - 역할:
 - SSH
	 - 포트 번호:
	 - 역할:
 - DNS
	 - 포트 번호:
	 - 역할:
 ## 그래서 포트가 뭔데??
 각각의 응용 프로그램에 이미 정해져있는 포트 번호를 이용하여, 
 _____에서 응용프로그램을 구분 하는 역할을 수행한다!

우리가 인터넷을 사용할때는 연결이 허투루 되는 것이 아니에요.
다음 그림을 보시죠!
![](https://t1.daumcdn.net/cfile/tistory/995EFF355B74179035)

> **1계층 - ___계층(Physical Layer)**
> 
> 이 계층에서는 주로 전기적, 기계적, 기능적인 특성을 이용해서 통신 케이블로 데이터를 전송하게 된다.
> 
> 이 계층에서 사용되는 통신 단위는 비트이며 이것은 1과 0으로 나타내어지는, 즉 전기적으로 On, Off 상태라고 생각하면
> 된다.
> 
> **2계층 - ___계층(DataLink Layer)**
> 
> 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 **정보의 전달을 수행**할 수 있도록 도와주는 역할을 한다.
> 
> 따라서 통신에서의 오류도 찾아주고 재전송도 하는 기능을 가지고 있는 것이다.
> 
> 이 계층에서는 **맥 주소를 가지고 통신**하게 된다.
> 
> **3계층 - ___계층(Network Layer)**
> 
> 이 계층에서 가장 중요한 기능은 **데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능(라우팅)**이다.
> 
> 여기에 사용되는 프로토콜의 종류도 다양하고, 라우팅하는 기술도 다양하다.
> 
> **4계층 - ___계층(Transport Layer)**
> 
> 통신을 활성화하기 위한 계층이다. 보통 TCP프로토콜을 이용하며, 포트를 열어서 응용프로그램들이 전송을 할 수 있게 한다.
> 
> 만약 데이터가 왔다면 4계층에서 해당 데이터를 하나로 합쳐서 5계층에 던져 준다.
> 
> 단대단 오류제어 및 흐름제어 이 계층 까지는 물리적인 계층에 속한다.(TCP/UDP프로토콜을 사용한다.)
> 
> **5계층 -___계층(Session Layer)**
> 
> **데이터가 통신하기 위한 논리적인 연결**을 말한다. 통신을 하기위한 대문이라고 보면 된다.
> 
> 하지만 4계층에서도 연결을 맺고 종료할 수 있기 때문에 우리가 어느 계층에서 통신이 끊어 졌나 판단하기는 한계가 있다.
> 
> 그러므로 세션 계층은 4 계층과 무관하게 응용 프로그램 관점에서 봐야 한다.
> 
> 세션 설정, 유지, 종료, 전송 중단시 복구 등의 기능이 있다.
> 
> **6계층 - ___계층(Presentation Layer)**
> 
> 데이터 표현이 상이한 응용 프로세스의 독립성을 제공하고, 암호화 한다.
> 
> 표현 계층(Presentation layer)은 코드 간의 번역을 담당하여 사용자 시스템에서 데이터의 형식상 차이를 다루는
> 부담을 응용 계층으로부터 덜어 준다. MIME 인코딩이나 암호화 등의 동작이 이 계층에서 이루어진다.
> 
> **7계층 - ___계층(Application Layer)**
> 
> 최종 목적지로서 HTTP, FTP, SMTP, POP3, IMAP, Telnet 등과 같은 프로토콜이 있다.
> 
> 해당 통신 패킷들은 방금 나열한 프로토콜에 의해 모두 처리되며 우리가 사용하는 브라우저나, 메일 프로그램은 프로토콜을
> 
> 보다 쉽게 사용하게 해주는 응용프로그램이다. 한마디로 모든 통신의 양 끝단은 HTTP와 같은 프로토콜이지 응용프로그램이 아니다.
> 
이렇게 아래서 위로! 패킷을 처리하면서 올리게 됩니다.

## 포트포워딩과 DNS
포트포워딩과, DNS를 짚고 넘어가봅시다.

### DNS란?
cmd(혹은 터미널)를 켜고, 다음 명령어를 입력해 봅시다.

    nslookup naver.com
그럼 네이버의 ip주소가 공개됩니다. 
확인된 네이버의 공인 ip주소는 ________입니다.

이 ip주소는 네이버의 공인 ip주소인데요,
**DNS는 인간이 알아들을 수 있는 영어로 된 주소인 www.naver.com을 공인 ip______로 연결시켜주는 역할을 합니다.**

### 포트포워딩
외부의 포트를 내부의 포트로 연결시켜주는 역할을 합니다.

아까 말한 개념이 모두 등장하니까, 잘 따라오셔야해요!

우리는 이미 외부 ip 즉 공인 ip가 단 한개라는 것을 알고 있습니다.
우리의 내부 ip는, 외부의 ip를 나눠서 여러 디바이스가 사용하는 것으로 알고 있었죠.

만약 우리가 서버를 돌리는 컴퓨터가 192.168.0.12의 **내부 ip주소를 가지고 있다**고 해봅시다. 
우리의 서버 컴퓨터에 접속하려면 외부 ip를 타고! 우리의 컴퓨터에 도달해야하는데요,

단 하나의 외부 ip주소만을 가지고, 서버가 돌아가고 있는 컴퓨터의 내부 ip주소를 어떻게 찾아갈까요??

이것을 설정해주는 것이 바로 **_______입니다.**

![](https://cdn.lamanus.kr/wp-content/uploads/2019/05/29004625/59-2-2048x1152.png)
출처: https://lamanus.kr/59
