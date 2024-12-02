# 백준 2217번 문제 풀이

## 풀이

가장 무거운 로프를 사용하는 개수(N)에 따라서 최대 무게가 결정된다.
그러므로 주어지는 로프를 최대 하중 내림차순으로 정렬한다.
그리고 개수(N) 인덱스에 해당하는 로프의 최대 하중 \* 개수(N)를 모든 개수(N)의 경우에 적용하여 최대값을 구한다.

## 이슈

생각했던 로직은 맞았던 것 같지만, 메모리 초과로 틀리게 되었다.
아마 slice 함수를 사용해서 새로운 배열을 만들어내는 것이 원인인 것 같았다.
그리고 스프레드 연산자로 펼쳐 가장 작은 하중을 가진 rope를 찾는 과정도 낭비되는 것 같았다.
그래서 아래처럼 최대값을 찾는 과정에서만 비교하도록 바꾸었다.

```js
// 변경 전
const weight = Math.min(...ropes.slice(0, i)) * i;

if (shardWeight > maxWeight) maxWeight = shardWeight;
```

```js
// 변경 이후
const weight = ropes[i] * (i + 1);
maxWeight = Math.max(weight, maxWeight);
```
