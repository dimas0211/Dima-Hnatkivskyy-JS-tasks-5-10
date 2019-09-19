const latestBlogImage = [...document.querySelectorAll('.latest-blog__image')];
const blueDateNumber = [...document.querySelectorAll('.blue-box__number')];
const blueDateMonth = [...document.querySelectorAll('.blue-value')];
const latestBlogHeading = [...document.querySelectorAll('.latest-blog__card-heading')];
const latesBlogPar = [...document.querySelectorAll('.latest-blog__card-par')];
const latestBlogViewNumber = [...document.querySelectorAll('.latest-blog__view-number')];
const latestBlogCommentNumber = [...document.querySelectorAll('.latest-blog__comment-number')];

const footerBlogImage = [...document.querySelectorAll('.top-central-block__image')];
const footerBlogHeading = [...document.querySelectorAll('.top-central-block__card-heading')];
const footerBlogSubheading = [...document.querySelectorAll('.top-central-block__subheading')];

const blogsNumber = [...document.querySelectorAll('.latest-blog__card')].length;

const url = 'http://localhost:3000/api/blogs';

const newObj = {
  title: latestBlogHeading,
  description: latesBlogPar,
  comments: latestBlogCommentNumber,
  watched: latestBlogViewNumber,
  previewImg: latestBlogImage,
  published: blueDateNumber,
  title: footerBlogHeading,
  previewImg: footerBlogImage,
};


const dateOption = {
  dayOnly: {
    day: '2-digit',
  },
  monthOnly: {
    month: 'short',
  },
  full: {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  },
};

fetch(url)
    .then((response) => response.json())
    .then((value) => {

      for (let i = 0; i < blogsNumber; i++) {
        const date = new Date(value.blogs[i].published);
        blueDateNumber[i].innerHTML = date.toLocaleDateString('en-GB', dateOption.dayOnly);
        blueDateMonth[i].innerHTML = date.toLocaleDateString('en-GB', dateOption.monthOnly);

        newObj.title[i].innerHTML = value.blogs[i].title;
        newObj.description[i].innerHTML = value.blogs[i].description;
        newObj.comments[i].innerHTML = value.blogs[i].comments;
        newObj.watched[i].innerHTML = value.blogs[i].watched;
        newObj.previewImg[i].src = value.blogs[i].previewImg;

        footerBlogHeading[i].innerHTML = value.blogs[i].title;
        footerBlogImage[i].src = value.blogs[i].previewImg;
        footerBlogSubheading[i].innerHTML = date.toLocaleDateString('en-GB', dateOption.full);
      }
    });
