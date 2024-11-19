# 알고리즘 스터디 - 코딩 테스트 (4조)

## 🎏 팀 구성

| <img src="https://avatars.githubusercontent.com/u/31915107?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/100520490?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/50770004?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/55516901?v=4" width="150" height="150"> |
|:---:|:---:|:---:|:---:|
| 김금란<br />[@goldegg127](https://github.com/goldegg127) | 안혜련<br />[@hyeryeon](https://github.com/anhyeryeon2) | 양명규<br />[@mgYang53](https://github.com/mgYang53) | 박진현<br />[@rondido](https://github.com/rondido) | 

## 🚣🏻 스터디 목적
- 기업 코딩테스트 합격을 목표로 알고리즘 풀이 실력을 키우기 위한 스터디
- 알고리즘 풀이 하루 30분 루틴 갖기

## 🔖 스터디 목표
- 코딩테스트에서 자주 출제되는 알고리즘 기본 문제 풀이 실력 향상 및 이론 이해
- 기출 문제 풀이를 통한 실전 대비 능력 강화

## 📑 주차별 커리큘럼

| 주차 | 주제 | 시작일 | 발표자 |
|:---:|:---:|:---:|:---:|
| 1 | 시간복잡도 이론, 구현 | 24.11.19 | @mgYang53 |
| 2 | 그리디 | 24.11.26 | @hyeryeon |
| 3 | 그리디 | 24.12.03 | @rondido |
| 4 | 이진탐색 (완전 탐색) | 24.12.10 | @goldegg127 |
| 5 | 완전 탐색 (트리) | 24.12.17 | @mgYang53 |
| 6 | 구현  (BFS, DFS) | 24.12.24 | @hyeryeon |
| 7 | 트리 (BFS, DFS) (BFS, DFS) | 24.12.31 | @rondido |
| 8 | 기출 문제 | 25.01.07 | @goldegg127 |
| 9 | 기출 문제 | 25.01.14 | @mgYang53 |
| 10 | 기출 문제 | 25.01.21 | @hyeryeon |
| 11 | 기출 문제 | 25.01.28 | @rondido |
| 12 | 기출 문제 | 25.02.04 | @goldegg127 |

## 📏 스터디 규칙

**언어**

Javascript

**문서**
- [Notion](https://www.notion.so/4-8086d723bd68463790b8ad32bc6e51c3?pvs=4)

**진행 방식**

- 주차별로 한 명씩 돌아가면서, 알고리즘 이론에 대해 10분 내로 간단히 설명 및 예제 3문제 선정
- 발표자가 정한 예제를 가지고 매주 3문제 풀이
- 풀이 시간은 하루 30분 이내 권장
- 주차별로 푼 문제들은 github PR하여 제출 
- 스터디 모임 시간에 발표 및 리뷰 후 블로그 작성

**이슈 및 PR 관리**
- 알고리즘 주제와 선정한 문제 3개에 대한 이슈 생성
- 위 이슈 당 하나의 브랜치 생성하여 PR

**파일 구조 컨벤션**

```
주차-알고리즘 주제
└ 본인 아이디
    ├ 사이트명-문제 번호.js
    └ 알고리즘 주제.md


algo-study-team-2024
├ 1-implementation
│   ├ hyeryeon
│   │   ├ baekjoon-1913.js
│   │   ├ baekjoon-14467.js
│   │   ├ baekjoon-20546.js
│   │   └ implementation.md
│   ├ goldegg127
│   │   ├ baekjoon-1913.js
│   │   ├ baekjoon-14467.js
│   │   ├ baekjoon-20546.js
│   │   └ implementation.md
│   ├ mgYang53
│   │   ├ baekjoon-1913.js
│   │   ├ baekjoon-14467.js
│   │   ├ baekjoon-20546.js
│   │   └ implementation.md
│   └ rondido
│       ├ baekjoon-1913.js
│       ├ baekjoon-14467.js
│       ├ baekjoon-20546.js
│       └ implementation.md

```

**네이밍 컨벤션**
- 이슈 제목 접두사
    - `[Feature]` : 새 문제 풀이 생성
    - `[Refactor]` : 풀이 내용 리팩토링
    - `[Docs]` : README 등 문서 작업
    - `[Rename]` : 파일명, 폴더명 수정 및 위치 이동
    - `[Settings]` : 설정 작업 및 수정
    - `[Chore]` : 그외 기타 가벼운 작업

- 이슈 제목 : `[이슈 제목 접두사] 문제 사이트 | 알고리즘 주제와 내용`<br />
ex) `[Feature] 백준 | 시간 복잡도와 구현 알고리즘 풀이`

- 커밋 제목 : `커밋 접두사: 사이트 문제 번호, 내용 (# 이슈번호)`
    - `feat` : 문제 풀이 생성
    - `fix` : 문제 풀이 수정
    - `refactor` : 풀이 내용 리팩토링
    - `docs` : 알고리즘 이론 설명 등 문서 파일 작업
    - `rename` : 파일명, 폴더명 수정 및 위치 이동
    - `settings` : 설정 작업 및 수정
    - `chore` : 그외 기타 가벼운 작업
```
    git commit -m "feat: 백준 14467번, 소가 길을 건너간 이유 1 문제 풀이 (#1)"
    git commit -m "feat: 백준 20546번, 기적의 매매법 문제 풀이 (#1)"
    git commit -m "fix: 백준 14467번, 풀이 및 오타 수정 (#1)"
    git commit -m "feat: 백준 1913번, 달팽이 문제 풀이(#1)"
    git commit -m "refactor: 백준 14467번, XX으로 수정 (#1)"
```

- 브랜치명 : `이슈제목접두사/알고리즘주제-이슈번호` <br />
ex) `feature/implementation-1`

- PR 제목
    - 이슈 하나 당 1개의 PR인 경우 (처음 PR 작성)<br />
        `[이슈 제목 접두사] 문제 사이트 | 알고리즘 주제` <br />
        ex) `[Feature] 백준 | 시간 복잡도와 구현 알고리즘 풀이`

    - 이슈 하나 당 2개 이상의 PR을 작성할 경우<br />
        `[이슈 제목 접두사] 문제 사이트 | 알고리즘 주제 | 문제 번호 | 문제 이름과 내용` <br />
        ex) `[Add] 백준 | 시간 복잡도와 구현 알고리즘 풀이 | 1913번 | 달팽이 문제 풀이 추가`

- PR 제목
    - `[Feature]` : 문제 풀이 생성
    - `[Add]` : 문제 추가
    - `[Fix]` : 문제 풀이 수정
    - `[Refactor]` : 풀이 내용 리팩토링
    - `[Docs]` : README 등 문서 작업
    - `[Rename]` : 파일명, 폴더명 수정 및 위치 이동
    - `[Settings]` : 설정 작업 및 수정
    - `[Chore]` : 그외 기타 가벼운 작업