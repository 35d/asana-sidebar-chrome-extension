$(function() {
  console.log("Asana Extension");

  setTimeout(() => {
    appendLabelName();
  }, 3000);

  const $draggableItemWrapper = $(".BoardColumnCardsContainer-draggableItemWrapper");
  $draggableItemWrapper.on("click", () => {
    setTimeout(() => {
      const key = $(".Tokenizer-token")
        .attr("class")
        .split(" ")[1]
        .replace("Token--", "");
      const value = $(".Token-label").text();
      localStorage.setItem(key, value.toString());
    }, 3000);
  });

  $(".NavigationLink").on("click", () => {
    appendLabelName();
  });
});

appendLabelName = () => {
  $(".BoardCardPotPills-potPill").each((index, item) => {
    const colorKey = item.className.split(" ")[1].replace("BoardCardPotPills-potPill--", "");
    const labelName = localStorage.getItem(colorKey);
    if (labelName) {
      const p = document.createElement("p");
      const nameNode = document.createTextNode(labelName);
      p.setAttribute("class", "labelText");
      p.appendChild(nameNode);
      item.appendChild(p);
    }
  });
};
