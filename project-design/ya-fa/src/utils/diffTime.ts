export function diffTime(initial: Date) {
  let diff = "";
  const now = new Date().getTime();

  const diffSec = Math.floor((now - initial.getTime()) / 1000);
  if (diffSec < 60) {
    diff += `${diffSec}초`;
    return diff;
  }

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    diff = `${diffMin}분 ` + diff;
    return diff;
  }

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) {
    diff = `${diffHour}시간 ` + diff;
    return diff;
  }
}
