import * as MODEL from "./model.js";


function initURLListener() {
  $(window).on("hashchange", route);
  route();
}

function initSubmitListener() {
  $("#submit").on("click", function (e) {
    console.log("submit");
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#em").val();
    let pw = $("#pw").val();

    if (fn == "") {
      alert("enterdata");
    } else if (ln == "") {
      alert("enterdata");
    } else if (em == "") {
      alert("enterdata");
    } else if (pw == "") {
      alert("enterdata");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };

      MODEL.setUserInfo(userObj);
    }

    console.log(`${fn} ${ln} ${em} ${pw}`);
  });
}

function route(){
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];
  // console.log("sub" + subPageID);

  if(pageID == ""){
      MODEL.changePage("home");
  } else {
      if (pageID == subPageID) {
          MODEL.changePage(pageID)
      } else if (pageID == "books"){
        MODEL.changePage(pageID, subPageID, buyNow);

      } else if (pageID == "home"){
        MODEL.changePage(pageID, subPageID, buyNow);

      }
      else {
          MODEL.changePage(pageID, subPageID);
      }
  }
}

function initApp(){
  $(window).on("hashchange", route);
  route();
}

function buyNow() {
  $(".bookinfo button").on("click", function (e) {
    let bookID = e.currentTarget.id;
    MODEL.addToCart(bookID);
    console.log(bookID);
  });
  $(".bookInfo button").on("click", function (e) {
    let bookID = e.currentTarget.id;
    MODEL.addToCart(bookID);
    console.log(bookID);
  });
}

  // $(".form button").on("click", function () {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // })

  $(document).ready(function(){
    $(document).on('click', '.form button', function(){
      Swal.fire({     
         type: 'success',
         title: 'You are logged in',
         showConfirmButton: false,
         timer: 1500
      })
    });
  });

  $(document).ready(function(){
    $(document).on('click', '.col2 button', function(){
      Swal.fire({     
         type: 'success',
         title: 'You are logged out',
         showConfirmButton: false,
         timer: 1500
      })
    });
  });




$(document).ready(function () {
  initURLListener();
  initSubmitListener();
  initApp();
});

