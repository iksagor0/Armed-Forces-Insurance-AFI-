// // remove the container class from header main element
// document.getElementById("header")?.classList.remove("container");

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
}

// To add class parent
addClassToParent("main__text__content", "auto_section__container");
addClassToParent("main__text__content", "main_section__container");
addClassToParent("related_article__item", "related_article__container");
addClassToParent("policy_cover_item", "policy_cover_container");
addClassToParent("icon_item", "icon_wrapper");
addClassToParent("image_link__wrapper_item", "image_link__grid_container");
addClassToParent("image_link_wrapper_item", "image_link__grid_container");
addClassToParent("image_link__wrapper_item_two", "image_link__grid_container");
addClassToParent("grid__article_aside", "grid__article_9-3");
addClassToParent("item_75", "parent_75_25");
addClassToParent("life_logo_image", "life_logo_image_parent");
addClassToParent("home_blue_card_item", "home_blue_cards_grid");
addClassToParent("card_group_item", "card_group_grid");
addClassToParent("product_item", "product_item_wrapper");
addClassToParent("grid__article .logo__image", "logo__image_wrapper");

// To make 50-50 grid column
parent50x50("left__text__content", "TypesOfBusiness");

// Fix big screen alignment issues with #content > first .row
document
  .getElementById("content")
  ?.firstElementChild?.classList.add("flex-column");

//addClassByPagePath
function addClassByPagePath(pagePath, classname) {
  const path = location.pathname.toLocaleLowerCase();
  if (path === pagePath) {
    const element = document.querySelector(`.${classname}`);
    element?.classList.add(`${classname}__css`);
  }
}

addClassByPagePath("/articles/auto", "article_insurance_quote");
