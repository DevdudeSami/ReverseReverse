function reverse() {
  var text = $("#text").val();
  var reversedText = text.split("").reverse().join("");
  $("#text").val(reversedText);
}
