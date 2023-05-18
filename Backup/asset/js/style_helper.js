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

// To add class parent
addClassToParent("main__text__content", "main_section__container");
addClassToParent("related_article__item", "related_article__container");
addClassToParent("policy_cover_item", "policy_cover_container");
addClassToParent("icon_item", "icon_wrapper");
addClassToParent("image_link__wrapper_item", "image_link__grid_container");
addClassToParent("grid__article_aside", "grid__article_9-3");
addClassToParent("item_75", "parent_75_25");
addClassToParent("life_logo_image", "life_logo_image_parent");

// To make 50-50 grid column
parent50x50("left__text__content", "TypesOfBusiness");
parent50x50("policy_cover_item", "related_article__container");
