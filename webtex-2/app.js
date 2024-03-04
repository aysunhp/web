document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggleBtn");
    const listContainer = document.querySelector(".list-container");

    toggleBtn.addEventListener("click", function() {
      var list = document.getElementById("list");
      var isOrdered = list.nodeName.toLowerCase() === "ol";
      var newList = isOrdered ? createUnorderedList(list) : createOrderedList(list);
      listContainer.replaceChild(newList, list);
    });

    function createUnorderedList(list) {
      var unorderedList = document.createElement("ul");
      unorderedList.id = "list";
      unorderedList.className="unordered-list"
      list.childNodes.forEach(function(item) {
        if (item.nodeType === 1) {
          var li = document.createElement("li");
          li.textContent = item.textContent;
          unorderedList.appendChild(li);
        }
      });
      return unorderedList;
    }

    function createOrderedList(list) {
      var orderedList = document.createElement("ol");
      orderedList.id = "list";  
      orderedList.className="ordered-list"
      list.childNodes.forEach(function(item) {
        if (item.nodeType === 1) {
          var li = document.createElement("li");
          li.textContent = item.textContent;
          orderedList.appendChild(li);
        }
      });
      return orderedList;
    }
  });


   
  