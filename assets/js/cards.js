
//get all HTML elements
var modal = document.getElementById("modal");
var facebookShare = document.getElementById("facebookShare");
var twitterShare = document.getElementById('twitterShare');
var downloadLink = document.getElementById('downloadCard');
var modalImg = document.getElementById("img01");

//change each card to contain its own links and image src
document.getElementById("img1").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  facebookShare.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=wijrouwenmee.be/images/cards/1.jpeg");
  twitterShare.setAttribute('href', "https://twitter.com/intent/tweet?text=https%3A//wijrouwenmee.be/images/cards/1.jpeg");
  downloadLink.setAttribute('href', "/images/cards/1.jpeg");
}

document.getElementById("img2").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  facebookShare.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=wijrouwenmee.be/images/cards/2.jpg");
  twitterShare.setAttribute('href', "https://twitter.com/intent/tweet?text=https%3A//wijrouwenmee.be/images/cards/2.jpg");
  downloadLink.setAttribute('href', "/images/cards/2.jpg");
}

document.getElementById("img3").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  facebookShare.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=wijrouwenmee.be/images/cards/3.jpg");
  twitterShare.setAttribute('href', "https://twitter.com/intent/tweet?text=https%3A//wijrouwenmee.be/images/cards/3.jpg");
  downloadLink.setAttribute('href', "/images/cards/3.jpg");
}

document.getElementById("img4").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  facebookShare.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=wijrouwenmee.be/images/cards/4.jpg");
  twitterShare.setAttribute('href', "https://twitter.com/intent/tweet?text=https%3A//wijrouwenmee.be/images/cards/4.jpg");
  downloadLink.setAttribute('href', "/images/cards/4.jpg");
}
document.getElementById("img5").onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  facebookShare.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=wijrouwenmee.be/images/cards/5.jpg");
  twitterShare.setAttribute('href', "https://twitter.com/intent/tweet?text=https%3A//wijrouwenmee.be/images/cards/5.jpg");
  downloadLink.setAttribute('href', "/images/cards/5.jpg");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when user presses esc close modal
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var code = evt.keyCode || evt.code;
  if (code == 27) {
    modal.style.display = "none";
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//when user scrolls, modal closes
/*window.onscroll = function (e) {
  modal.style.display = "none";
} */