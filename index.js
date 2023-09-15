// Write your solution here!
  const cats = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastCat() {
    cats.pop()
  }


  function destructivelyRemoveFirstCat() {
    cats.shift()
  }

  function destructivelyAppendCat() {
    cats.push("Ralph")
  }

  function destructivelyPrependCat() {
    cats.unshift("Bob")
  }

  function appendCat() {
    const newAppendCatArray = [...cats, "Broom"]
    return newAppendCatArray
  }

  function prependCat() {
    const newPrependCatArray = ["Arnold", ...cats]
    return newPrependCatArray
  }

  function removeFirstCat() {
    const newRemoveFirstCat = cats.slice(1)
    return newRemoveFirstCat
  }

  function removeLastCat() {
    const newRemoveLastCat = cats.slice(0, cats.length - 1)
    return newRemoveLastCat
  }