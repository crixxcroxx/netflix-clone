export default function formatTime(time) {
  let hour = Math.floor(time / 60)
  let mins = time % 60

  let stringTime = `${hour !== 0 ? hour + "h" : ""} ${mins !== 0 ? mins + "m" : ""}`

  return stringTime
}