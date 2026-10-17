function solution(skill, skill_trees) {
  let count = 0;

  skill_trees.forEach((tree) => {
    const filtered = tree
      .split("")
      .filter((el) => skill.includes(el))
      .join("");

    if (skill.slice(0, filtered.length) === filtered) count++;
  });

  return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 43.4MB)
// 테스트 2 〉	통과 (0.09ms, 43.2MB)
// 테스트 3 〉	통과 (0.10ms, 43.3MB)
// 테스트 4 〉	통과 (0.09ms, 43.3MB)
// 테스트 5 〉	통과 (0.10ms, 43.5MB)
// 테스트 6 〉	통과 (0.11ms, 43.3MB)
// 테스트 7 〉	통과 (0.10ms, 43.5MB)
// 테스트 8 〉	통과 (0.10ms, 43.1MB)
// 테스트 9 〉	통과 (0.09ms, 43.3MB)
// 테스트 10 〉	통과 (0.10ms, 43.3MB)
// 테스트 11 〉	통과 (0.10ms, 43.3MB)
// 테스트 12 〉	통과 (0.12ms, 43.5MB)
// 테스트 13 〉	통과 (0.10ms, 43.1MB)
// 테스트 14 〉	통과 (0.10ms, 43.2MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
