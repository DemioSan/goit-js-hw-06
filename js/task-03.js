const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulImages = document.querySelector(".gallery");

function createMarkup(arr) {
  const styles = `
    .gallery {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    .item {
      flex: 0 0 calc(33.33% - 40px);
      margin: 10px;
      box-sizing: border-box;
    }

    .item img {
      max-width: 100%;
      display: block;
      border: 5%;
      border-radius: 5px;
    }
  `;
  document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

  const markup = arr
    .map(
      ({ url, alt }) => `<li class="item"><img src="${url}" alt="${alt}"></li>`
    )
    .join("");

  ulImages.insertAdjacentHTML("beforeend", markup);
}

createMarkup(images);
