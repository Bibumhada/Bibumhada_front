# Todays Menu

## 1. 📱 Todays Menu 소개
입력받은 위치를 기반으로 주변 음식점을 랜덤으로 추천해주고, 
추천받은 리스트를 지인들과 공유해서 가고싶은 맛집을 투표까지 해볼 수 있는 서비스 입니다.

</br>

## 2. 🗓️ 개발 기간 
23년 9월 11일 ~ 23년 9월 26일

</br>

## 3. 🛠️ 기술스택
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

</br>

![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
</br> recoil을 통해 복잡한 상태 관리 로직을 단순화하여 코드의 가독성을 향상시키고 유지 보수를 용이하게 만들었습니다.

</br>


![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
</br> React Query를 통해 비동기 데이터 요청을 보다 효율적으로 관리하고 제어했습니다.

</br>

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
</br> styled-components를 사용하여 컴포넌트의 상태나 프롭스에 따라 스타일을 변경하고 상태에 따라 다른 스타일을 적용했습니다.


</br>

**Suspense** 를 사용하여 비동기 데이터를 불러오는 동안 로딩이나 에러상태 화면 처리를 단순화했으며 사용자 경험을 향상시켰습니다.

</br>

**Google Analytics**를 사용해서 버튼과 페이지에 이벤트를 심고 웹에서 발생하는 고객의 행동 데이터를 수집하고 분석하였습니다.


</br>


## 4. 🎨 서비스 기능 소개
|               입력받은 위치로 랜덤 메뉴 후보 생성            |                 후보 교체 및 재생성         | 투표하기 |
| :---------------------------------: | :---------------------------------: | :---------------------------------: |
| ![random](https://github.com/bringvotrevin/todays-menu-front/assets/81025416/3902bde0-3d48-49eb-a418-01b1ea5582c3) |  ![resuggest](https://github.com/bringvotrevin/todays-menu-front/assets/81025416/d6ce2b0f-2270-4155-aef3-30ce74176179) | ![vote](https://github.com/bringvotrevin/todays-menu-front/assets/81025416/83cdc5dd-fc73-48df-8aee-f48012267354) |


|          카카오톡 공유,링크 복사         |            링크 이동             |
| :---------------------------------: | :---------------------------------: |
| <img src="https://github.com/bringvotrevin/todays-menu-front/assets/81025416/69bacbf6-f2bb-44c7-becb-c5c67ac562a6" width="385"/> | <img src="https://github.com/bringvotrevin/todays-menu-front/assets/81025416/f310151a-61a9-4753-b557-94ea120f3c96" width="385"/> |


## 5. 📁 폴더 구조

```
.
├── public
└── src
    ├── apis
    │   ├── api
    │   ├── base
    │   └── query
    ├── assets
    │   ├── icons
    │   └── images
    ├── components
    │   └── common
    │       ├── Button
    │       ├── MenuCard
    │       ├── ResultCard
    │       └── modal
    │           └── children
    ├── pages
    │   ├── Error
    │   ├── Loading
    │   ├── Location
    │   ├── OverallRanking
    │   ├── Poll
    │   ├── RandomList
    │   └── Result
    ├── recoil
    ├── router
    ├── styles
    └── util
```
