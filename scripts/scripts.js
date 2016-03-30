function setNavBar(pageName) {
    if (pageName == "indexPage")
      document.getElementById("indexPage").className = "active";
   else
   if (pageName == "impInfoPage")
        document.getElementById("impInfoPage").className = "active";
      else
  if (pageName == "contactPage")
       document.getElementById("contactPage").className = "active";

//document.write(pageName);
}
