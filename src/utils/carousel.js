const carousel = (ref, direction) => {
  let distance = ref.current.getBoundingClientRect().x
  let rightBoundEnd = ref.current.getBoundingClientRect().right
  let viewportWidth = window.innerWidth;

  //itemWidth is the width of each items inside the carousel container in pixels
  //gap is the total margin between those items in pixels
  let itemWidth = 225
  let gap = 8

  if(direction === "left" && distance < 0) {
    let final = 0

    if(distance >= (gap - itemWidth)) {
      final = -(distance) - gap
    } else {
      final = itemWidth
    }

    ref.current.style.transform = `translateX(${final + (distance + gap)}px)`
  } else if(direction === "right" && rightBoundEnd >= viewportWidth) {
    let final = 0

    if(rightBoundEnd - viewportWidth < (itemWidth - gap)) {
      final = viewportWidth - (rightBoundEnd + (gap * 2.5))
    } else {
      final = -(itemWidth)
    }

    ref.current.style.transform = `translateX(${final + (distance + gap)}px)`
  }
}

export default carousel;