function setNavBar(pageName) {
    if (pageName == "indexPage")
      document.getElementById("indexPage").className = "active";
   else
   if (pageName == "impInfoPage")
        document.getElementById("impInfoPage").className = "active";
      else
  if (pageName == "contactPage")
       document.getElementById("contactPage").className = "active";
 else
 if (pageName == "docsPage")
            document.getElementById("docsPage").className = "active";

//document.write(pageName);
}
