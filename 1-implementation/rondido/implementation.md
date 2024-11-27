# 시간 복잡도

알고리즘이 실행되는 데 걸리는 시간을 입력 크기에 따라 분석 하는 것.

이 분석은 입력 크기(n)가 커질수록 알고리즘의 성능이 어떻게 변하는지 이해하기 위해 중요하다.

시간 복잡도를 이해하려면 다음을 알아야 함.

1. 상수 시간 O(1)
   입력 크기와 상관없이 실행 시간이 일정하다.

2. 선형 시간 O(n)
   입력 크기에 비례해 실행 시간이 증가한다.

3. 로그 시간 O(log n)
   입력 크기가 증가할수록 실행 시간 증가가 완만하다.

4. 이차 시간 O(n\*\*2)
   입력 크기에 제곱 비례해 실행시 시간이 증가한다.

5. O(1) - 상수 시간

```
function getFirstElement(array){
  return array[0]
}
```

위 함수는 입력 배열의 크기와 상관없이 첫 번째 요소를 반환하므로 O(1)입니다.

2. O(n) - 선형 시간

```
function findElement(array,target){
  for(let i =0; i<array.length; i++){
    if(array[i] === target){
      return i
    }
  }
  return -1;
}
```

위 함수는 배열의 모든 요소를 순차적으로 검사하므로 최악의 경우 배열 크기만큼 반복한다. 따라서 O(n)이다.

3. O(log n) - 로그 시간

```
function binarySearch(array,target){
  let left = 0;
  let right = array.length -1;
  while(left <= right){
    const mid = Math.floor((left + right) /2);
    if(array[mid] == target){
      return mid;
    }else if(array[mid] < target){
      left = mid +1
    }else{
      right = mid -1;
    }
  }
  return -1
}
```

이진 탐색은 배열을 절반씩 나누며 진행하므로 입력 크기가 두 배가 되어도 실행 횟수가 크게 증가 하지 않는다 따라서 O(log n)

4. O(n\*\*2) 이차 시간

```
function bubbleSort(array){
  for(let i =0; i< array.length; i++){
    for(let j=0; j <array.length - i -1; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
```

버블 정렬은 배열의 요소를 반복적으로 비교하고 정렬 하므로 중첩 루프를 사용해야함. 배열 크기가 커질수록 실행 시간이 제곱 비례로 증가한다.

![image](https://github.com/user-attachments/assets/885b9d8f-bd46-4396-88e0-70ee2ffa8c6b)

# 주의점

- 최악의 경우(Worst-case):알고리즘이 가장 오랜 시간이 걸리는 경우
- 평균 경우(Average-case): 일반적인 상황에서 예상되는 시간
- 최선의 경우(Bese-case): 가장 적은 시간이 걸리는 경우
