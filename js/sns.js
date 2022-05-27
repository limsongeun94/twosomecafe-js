const snsArr = [
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/posts/1612522315581194",
    src: "img/index/sns/21.03.08.jpg",
    alt: "sns_21.03.28",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/posts/1575831642583595",
    src: "img/index/sns/21.01.03.jpg",
    alt: "sns_21.01.03",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/photos/a.244658855700887/1522150164618410/",
    src: "img/index/sns/20.11.06.jpg",
    alt: "sns_20.11.06",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/posts/1458974750935952",
    src: "img/index/sns/20.08.26.png",
    alt: "sns_20.08.26",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/photos/a.244658855700887/1369325659900862/",
    src: "img/index/sns/20.05.08.jpg",
    alt: "sns_20.05.08",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/posts/1308561002643995",
    src: "img/index/sns/20.02.20.png",
    alt: "sns_20.02.20",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/photos/a.244658855700887/1223304784502951/",
    src: "img/index/sns/19.11.15.png",
    alt: "sns_19.11.15",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/posts/1181884238645006",
    src: "img/index/sns/19.09.27.png",
    alt: "sns_19.09.27",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/photos/a.244658855700887/1103063706527060/",
    src: "img/index/sns/19.06.05.png",
    alt: "sns_19.06.05",
  },
  {
    href: "https://www.facebook.com/ATWOSOMEPLACE/photos/a.244658855700887/1039826109517487/",
    src: "img/index/sns/19.02.19.png",
    alt: "sns_19.02.19",
  },
];

const container = document.getElementById("sns_container");
for (i = 0; i <= 9; i++) {
  let link = document.createElement("a");
  let img = document.createElement("img");

  link.setAttribute("target", "_blank");
  link.setAttribute("href", snsArr[i].href);
  link.classList.add("sns_img_link");
  img.setAttribute("src", snsArr[i].src);
  img.setAttribute("alt", snsArr[i].alt);
  img.classList.add("sns_img");

  link.appendChild(img);
  container.appendChild(link);
}
