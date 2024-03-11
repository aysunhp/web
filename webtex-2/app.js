document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggleBtn");
    const listContainer = document.querySelector(".list-container");

    toggleBtn.addEventListener("click", function() {
      const list = document.getElementById("list");
      const isOrdered = list.nodeName === "OL";
      const newList = isOrdered ? createUnorderedList(list) : createOrderedList(list);
      listContainer.replaceChild(newList, list);
    });

    function createUnorderedList(list) {
      const unorderedList = document.createElement("ul");
      unorderedList.id = "list";
      unorderedList.className="unordered-list"
      list.childNodes.forEach(function(item) {
        if (item.nodeType === 1) {
          const li = document.createElement("li");
          li.textContent = item.textContent;
          unorderedList.appendChild(li);
        }
      });
      return unorderedList;
    }

    function createOrderedList(list) {
      const orderedList = document.createElement("ol");
      orderedList.id = "list";  
      orderedList.className="ordered-list"
      list.childNodes.forEach(function(item) {
        if (item.nodeType === 1) {
          const li = document.createElement("li");
          li.textContent = item.textContent;
          orderedList.appendChild(li);
        }
      });
      return orderedList;
    }
  });


   
  