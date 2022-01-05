export default function getHoverOffset(index, ref, isFinal, isPersonalList) {
  // all numerical values are offsets in pixels

  const leftMarginShowsList = isFinal ? 232 : 233 // width of ShowPoster + 8px gap
  const offsetShowsList = index === 0 ? 69 : index * leftMarginShowsList

  const scrollHeight = window.pageYOffset
  const distanceX = ref.current && ref.current.getBoundingClientRect().x
  const distanceY = ref.current && ref.current.getBoundingClientRect().y
  const offsetX = isPersonalList ? distanceX : offsetShowsList
  const offsetY = isPersonalList ? (distanceY + scrollHeight) - 48 : -56

  return { offsetX, offsetY }
}