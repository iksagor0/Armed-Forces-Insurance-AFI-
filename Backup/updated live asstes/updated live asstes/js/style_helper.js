function addClassToParent(target, parentClass) {
  const mainText = document.querySelector(`.${target}`);
  mainText?.parentElement?.classList.add(parentClass);
}

function parent50x50(target, extraClass) {
  const mainText = document.querySelector(`.${target}`);
  const parent = mainText?.parentElement;

  parent?.classList.add("parent_50_50");
  if (extraClass) {
    parent?.classList.add(extraClass);
  }

  console.log(mainText);
}

// Insurance Main Text Section
addClassToParent("main__text__content", "main_section__container");

// Insurance additional_coverages
parent50x50("left__text__content", "TypesOfBusiness");
