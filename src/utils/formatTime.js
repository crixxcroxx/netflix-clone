export default function formatTime(time) {
  let hour = Math.floor(time / 60)
  let mins = time % 60

  let hrLabel = hour > 1 ? "hrs " : "hr "
  let minsLabel = mins > 1 ? "mins" : "min"

  let stringTime = `${hour !== 0 ? hour + hrLabel : ""} ${mins !== 0 ? mins + minsLabel : ""}`

  return stringTime
}