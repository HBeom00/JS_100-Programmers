// 정확성  테스트
// 테스트 1 〉	통과 (2.37ms, 43.6MB)
// 테스트 2 〉	통과 (2.60ms, 43.6MB)
// 테스트 3 〉	통과 (1.16ms, 44.3MB)
// 테스트 4 〉	통과 (2.22ms, 44.7MB)
// 테스트 5 〉	통과 (1.40ms, 44.3MB)
// 테스트 6 〉	통과 (1.20ms, 44.2MB)
// 테스트 7 〉	통과 (1.17ms, 44.2MB)
// 테스트 8 〉	통과 (0.98ms, 44.4MB)
// 테스트 9 〉	통과 (1.25ms, 44.4MB)
// 테스트 10 〉	통과 (1.35ms, 44.4MB)
// 테스트 11 〉	통과 (1.06ms, 44.3MB)
// 테스트 12 〉	통과 (1.07ms, 44.4MB)
// 테스트 13 〉	통과 (0.79ms, 44.2MB)
// 테스트 14 〉	통과 (0.79ms, 44.4MB)
// 테스트 15 〉	통과 (0.73ms, 44.4MB)
// 테스트 16 〉	통과 (1.00ms, 44.5MB)
// 테스트 17 〉	통과 (0.74ms, 44.3MB)
// 테스트 18 〉	통과 (0.93ms, 44MB)
// 테스트 19 〉	통과 (1.02ms, 44.3MB)
// 테스트 20 〉	통과 (1.24ms, 44.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
function solution(files) {
  const parsedFiles = files.map((file, index) => {
    const [, head, number] = file.match(/^(\D+)(\d{1,5})/);

    return {
      file,
      head: head.toLowerCase(),
      number: Number(number),
      index,
    };
  });

  parsedFiles.sort((a, b) => {
    if (a.head < b.head) return -1;
    if (a.head > b.head) return 1;

    if (a.number !== b.number) {
      return a.number - b.number;
    }

    return a.index - b.index;
  });

  return parsedFiles.map(({ file }) => file);
}
