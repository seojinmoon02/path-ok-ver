const overlayEl = document.getElementById("winOverlay");
const cardImgEl = document.getElementById("winCardImg");
const closeBtnEl = document.getElementById("winCloseBtn");

function showWinOverlay(tripNo = 1){
  // 필요하면 trip 번호별 이미지 바꾸기
  // cardImgEl.src = `img/trip0${tripNo}.png`;

  overlayEl.classList.add("is-open");
  overlayEl.setAttribute("aria-hidden", "false");

  // (선택) 게임 입력 잠그고 싶으면 여기서 플래그 설정
  // isLocked = true;
}

function hideWinOverlay(){
  overlayEl.classList.remove("is-open");
  overlayEl.setAttribute("aria-hidden", "true");

  // (선택) 입력 해제
  // isLocked = false;
}

overlayEl.addEventListener("click", (e) => {
  // 바깥(딤) 클릭하면 닫기
  if(e.target === overlayEl) hideWinOverlay();
});
closeBtnEl.addEventListener("click", hideWinOverlay);
