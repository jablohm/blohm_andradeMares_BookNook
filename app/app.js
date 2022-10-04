import * as MODEL from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  console.log(hashTag + " " + pageID);
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, buyNow);
  } else {
    MODEL.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
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
      } else {
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
}

$(document).ready(function () {
  initURLListener();
  initSubmitListener();
  initApp();
});
