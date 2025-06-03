export default function Recursion3() {
  let level = 1;
  let days = 0;
  function LevelUp() {
    days += 1;
    let goal = Math.floor(Math.random() * 37 * level * 10 + 1);
    if (goal < 37) {
      level += 1;
    }
    if (level === 37) {
      return days;
    } else {
      return LevelUp();
    }
  }
  return (
    <>
      <p>Recursion3</p>
      <p>{LevelUp() / 365}年</p>
    </>
  );
}
