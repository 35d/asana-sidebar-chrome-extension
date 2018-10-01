$(function() {
  console.log("Asana Extension");

  // TODO(tsuburaya): キャッシュの対策入れないと初回しかうまく動かないかもしれない
  const $draggableItemWrapper = $(".BoardColumnCardsContainer-draggableItemWrapper");
  $draggableItemWrapper.on("click", () => {
    // console.log($(this));
    setTimeout(() => {
      // console.log($(".Token-label").text());
      // TODO: ↑をvalueにしてローカルストレージに格納する
      // key をどうするかは要検討
    }, 3000);
  });
});
