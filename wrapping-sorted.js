const movies = [
  { title: "이상해씨", rating: 8.6 },
  { title: "파이리", rating: 8.4 },
  { title: "꼬부기", rating: 8.1 },
  { title: "또가스", rating: 7.6 },
  { title: "피존투", rating: 7.8 },
  { title: "누리공", rating: 8.1 },
  { title: "쥬레곤", rating: 8.1 },
  { title: "망나뇽", rating: 7.2 },
  { title: "데구리", rating: 7.1 },
  { title: "파르셀", rating: 7.0 },
  { title: "잉어킹", rating: 7.8 },
  { title: "두두", rating: 7.8 },
  { title: "레트라", rating: 7.8 },
];
// 메인함수 exampleOne()

function exampleOne(movies, minRating) {
  // 정렬용 부품함수, sort()메서드가 요구하는 콜백함수를
  //기명함수 방식으로 가독성과 재사용성을 위해 별도로 마련했다.
  // (예제에선 재활용까진 하지 않는다. )
  // 영화 등급을 기준으로 내림차순 정렬(매개변수가 객체여야 하는 조건을 제거했다.)
  function compareRatings(a, b) {
    return b.rating - a.rating;
  }

  //초기화 함수 방식으로 상당히 간결하게 변수를 관리한다.
  // init() 함수는 그자체로 객체이므로 반환값을 바로 변수에 할당할 수 있다.

  // 필터링된 영화, 정렬된 영화 및 상위 영화 변수 관리
  // 빈 배열을 초기화(initialize)했기 때문에 개발자들 사이에서도
  // 이 빈자리에 무슨 데이터가 들어갈지 예상하기 쉽다.
  // 함수의 특징 때문에 반환되는 객체는 추가 되거나 삭제될 수 없는 불변성을 보장한다.

  function init() {
    return {
      filteredMovies: [],
      sortedMovies: [],
      topMovies: [],
    };
  }

  //상위 영화 랭킹 로직 함수 최소 등급 이상의 영화 중 상위 3개 반환
  function getTopMovies(movies, minRating) {
    //변수를 하나씩 할당합니다.
    const variables = init(); //init() 함수가 호출되었기 때문에 변수는 객체가 된다.
    const filteredMovies = variables.filteredMovies;
    const sortedMovies = variables.sortedMovies;
    const topMovies = variables.topMovies;
    //위처럼 하나씩 할당하는 대신, 아래처럼 비구조화 할당(destructuring assignment)을 사용할 수도 있다.

    //const {filteredMovies, sortedMovies, topMovies} = init();

    //아래의 for...of 반복문은 객체의 속성을 순회하는데 사용하는 반복문이다.
    for (let movie of movies) {
      if (movie.rating >= minRating) {
        filteredMovies.push(movie);
      }
    }
    for (let i = 0; i < filteredMovies.length; i++) {
      sortedMovies.push(filteredMovies.sort(compareRatings)[i]);
    }

    //위의 for...of 반복문과 for문을 간결하게 아래처럼 표현할 수도 있다.
    //스프레드 연산자 사용법이 매우 요긴하다.
    //sortedMovies.push(...filteredMovies.sort(compareRatings));

    for (let i = 0; i < sortedMovies.length; i++) {
      if (i < 3) {
        //3등까지만 반환
        topMovies.push(sortedMovies[i]);
      }
    }

    return topMovies;
  }
  let result = getTopMovies(movies, minRating);
  return result;
}

console.log(exampleOne(movies, 8));
