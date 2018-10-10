$(function() {
  console.log("Asana Extension");

  appendLabelName();

  const $draggableItemWrapper = $(".BoardColumnCardsContainer-draggableItemWrapper");
  $draggableItemWrapper.on("click", () => {
    // console.log($(this));
    setTimeout(() => {
      const key = $(".Tokenizer-token")
        .attr("class")
        .split(" ")[1]
        .replace("Token--", "");
      const value = $(".Token-label").text();
      localStorage.setItem(key, value.toString());
      // appendLabelName();
    }, 3000);
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
