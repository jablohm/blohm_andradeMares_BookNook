var userInfo = {};

var cart = [];

// localStorage.getItem("bookInfo")

var bookList = [
  {
    // ROW 1 - BOXSETS
    bookTitle: "Twilight Boxset",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Stephenie Meyer",
    bookImg: "twilight-box-set.jpg",
    price: "$99.99",
  },
  {
    bookTitle: "Harry Potter Boxset",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "J.K. Rowling",
    bookImg: "hp-box-set.jpg",
    price: "$100",
  },
  {
    bookTitle: "Game of Thrones Boxset",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "George R.R. Martin",
    bookImg: "got-box-set.jpg",
    price: "$100",
  },

  // ROW 2: BLACK HISTORY BOOKS
  {
    bookTitle: "Finding Me",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Viola Davis",
    bookImg: "finding-me.jpg",
    price: "$27.99",
  },
  {
    bookTitle: "The Autobiography of Martin Luther King, Jr. ",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Martin Luther King, Jr.",
    bookImg: "mlk-biography.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "The Autobiography of Elanor Roosevelt",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Eleanor Roosevelt",
    bookImg: "eleanor-roosevelt-biography.jpg",
    price: "$17.99",
  },

  // ROW 3: HORROR BOOKS
  {
    bookTitle: "Misery",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Stephen King",
    bookImg: "misery.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "Frankenstein",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Mary Shelley",
    bookImg: "frankenstein.jpg",
    price: "$15.99",
  },
  {
    bookTitle: "Phantoms",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Dean Koontz",
    bookImg: "phantoms.jpg",
    price: "$19.99",
  },

  // ROW 4: CHILDREN'S BOOKS
  {
    bookTitle: "Winnie The Pooh",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "A. A. Milne",
    bookImg: "winnie-the-pooh.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "The Cat In The Hat",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Dr. Seuss",
    bookImg: "cat-in-the-hat.jpg",
    price: "$15.99",
  },
  {
    bookTitle: "Fun Facts About Space",
    bookDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookAuthor: "Baby Professor",
    bookImg: "fun-facts-about-space.jpg",
    price: "$7.99",
  },
  //HOME PAGE BOOKS

  {
    bookTitle: "To Kill a Mockingbird",
    bookDesc:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
    bookAuthor: "Harper Lee",
    bookImg: "to-kill-a-mockingbird.jpg",
    price: "$15.99",
  },
  {
    bookTitle: "Becoming",
    bookDesc:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
    bookAuthor: "Michelle Obama",
    bookImg: "becoming.jpg",
    price: "$25.99",
  },
  {
    bookTitle: "Firestarter",
    bookDesc:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
    bookAuthor: "Stephen King",
    bookImg: "firestarter.jpg",
    price: "$19.99",
  }
];


export function changePage(pageID, subPageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home/home.html`, function (data) {
      // console.log("data" + data);
      $("#app").html(data);
      $.each(bookList, function (idx, book) {
        if (idx >= 12) {
          $(".homeContainer").append(
            `<div class="homeBooks">
            <img class="bookImage" src="img/home-imgs/${book.bookImg}">
            <div class="bookInfo">
                <p>${book.bookDesc}</p>
                <h1>${book.price}</h1>
                <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
            </div>  
        </div>`
          );
        }
      });
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "books") {
    // console.log("here i am")
    $.get(`pages/books/books.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);

      $.each(bookList, function (idx, book) {
        if (idx <= 2) {
          $(".bookSection").append(
            `<div class="prodContent">
              <div class="bookCover">
               <img class="bookCover" src="img/books-img/${book.bookImg}">
             </div>
               <div class="bookinfo">
                 <h2>${book.bookTitle}</h2>
                 <p>${book.bookDesc}</p>
                 <h2>${book.price}</h2>
                 <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
               </div> 
           </div>
         </div>`
          );
        }
      });

      $.each(bookList, function (idx, book) {
        if (idx >= 3 && idx < 6) {
          $(".bookSection2").append(
            `<div class="prodContent">
            <div class="bookCover">
             <img class="bookCover" src="img/books-img/${book.bookImg}">
           </div>
             <div class="bookinfo">
               <h2>${book.bookTitle}</h2>
               <p>${book.bookDesc}</p>
               <h2>${book.price}</h2>
               <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
             </div> 
         </div>
       </div>`
          );
        }
      });
      $.each(bookList, function (idx, book) {
        if (idx >= 6 && idx < 9) {
          $(".bookSection3").append(
            `<div class="prodContent">
            <div class="bookCover">
             <img class="bookCover" src="img/books-img/${book.bookImg}">
           </div>
             <div class="bookinfo">
               <h2>${book.bookTitle}</h2>
               <p>${book.bookDesc}</p>
               <h2>${book.price}</h2>
               <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
             </div> 
         </div>
       </div>`
          );
        }
      });
      $.each(bookList, function (idx, book) {
        if (idx >= 9 && idx < 12) {
          $(".bookSection4").append(
            `<div class="prodContent">
            <div class="bookCover">
             <img class="bookCover" src="img/books-img/${book.bookImg}">
           </div>
             <div class="bookinfo">
               <h2>${book.bookTitle}</h2>
               <p>${book.bookDesc}</p>
               <h2>${book.price}</h2>
               <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
             </div> 
         </div>
       </div>`
          );
        }
      });
      if (callback) {
        callback();
      }
    });
  } else if (subPageID != undefined) {
    $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);

      //CART PAGE HTML
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);
        let book = bookList[cartItem];
        $(".items").append(`<div class="book">
        <div class="bookcover">
            <img src="img/books-img/${book.bookImg}" alt="">
        </div>
        <div class="bookinfo">
        <h4>${book.bookTitle}</h4>
        <p class="stock">In Stock</p>
        <p>Author: ${book.bookAuthor}</p>
        <p>Price: ${book.price}</p>
        <a href="#books">change</a>
        <a href="#books">delete</a>
    </div>
    </div>`);

      });
    });
  }
}






export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function addToCart(bookIdx) {
  cart.push(bookIdx);
  $("#cartCount").html(cart.length.toString());

  console.log("sub" + subPageID);
  console.log("page" + pageID);

  if (subPageID == undefined) {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      // console.log(data);
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        // alert("Please check your URL.");
      }
      console.log("error" + error.status);
    });
  } else {
    $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
      // console.log(data);
      $("#app").html(data);
    }).fail((error) => {});
  }
}

