$(function() {
  console.log("Asana Extension");

  $('.BoardCardPotPills-potPill').each((index, item) => {
    console.log(item);
    const colorKey = item.className.split(' ')[1].replace('BoardCardPotPills-potPill--', '');
    const labelName = sessionStorage.getItem(colorKey);
    if (labelName) {
      const p = document.createElement('p');
      const nameNode = document.createTextNode(labelName);
      p.addClass('labelText');
      p.appendChild(nameNode);
      item.appendChild(p);
    }
  });

  // TODO(tsuburaya): キャッシュの対策入れないと初回しかうまく動かないかもしれない
  const $draggableItemWrapper = $(".BoardColumnCardsContainer-draggableItemWrapper");
  $draggableItemWrapper.on("click", () => {
    // console.log($(this));
    setTimeout(() => {
      const key = $('.Tokenizer-token').attr('class').split(' ')[1].replace('Token--', '');
      const value = $('.Token-label').text();
      sessionStorage.setItem(key, value.toString());
      // TODO: ↑をvalueにしてローカルストレージに格納する
      // key をどうするかは要検討
    }, 3000);
  });
});
