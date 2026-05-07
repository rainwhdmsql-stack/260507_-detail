window.addEventListener("load", () => {
  // 요소 선택
  const cup = document.getElementById("cup");
  const smallPick = document.querySelectorAll(".small");
  const viewBtn = document.getElementById("view");
  const detail = document.getElementById("detail");
  //바뀔 정보 내용
  const descName = document.getElementById("desc-name");
  const descPrice = document.getElementById("desc-price");
  const descDelivery = document.getElementById("desc-delivery");
  const descPoints = document.getElementById("desc-points");
  const descRoasting = document.getElementById("desc-roasting");
  //   상세 내용
  const detailOrigin = document.getElementById("detail-origin");
  const detailRegion = document.getElementById("detail-region");
  const detailFarm = document.getElementById("detail-farm");
  const detailAltitude = document.getElementById("detail-altitude");
  const detailVariety = document.getElementById("detail-variety");
  const detailProcess = document.getElementById("detail-process");
  const detailDescription = document.getElementById("detail-description");
  const flavorNote = document.getElementById("flavornote");

  //작은 이미지 클릭 시 정보 변경 (클레스 selected토글 포함)
  smallPick.forEach((small) => {
    // console.log(small)
    small.addEventListener("click", () => {
      smallPick.forEach((s) => s.classList.remove("selected"));
      small.classList.add("selected");
      changPic(small);
    });
  });
  //   changPic(): 큰 이미지 변경 / 정보 변경
  function changPic(el) {
    // console.log(el); // 클릭하는 작은 이미지를 뜻함.
    // 이미지 변경
    cup.src = el.src;
    // 내용 변경
    descName.textContent = `상품명 : ${el.dataset.name}`;
    descPrice.textContent = `가격 : ${el.dataset.price}`;
    descDelivery.textContent = `배송비 : ${el.dataset.delivery}`;
    descPoints.textContent = `적립금 : ${el.dataset.points}`;
    descRoasting.textContent = `로스팅 : ${el.dataset.roasting}`;
    // 상세 내용
    detailOrigin.textContent = `원산지 : ${el.dataset.origin}`;
    detailRegion.textContent = `지 역 : ${el.dataset.region}`;
    detailFarm.textContent = `농 장 : ${el.dataset.farm}`;
    detailAltitude.textContent = `고 도 : ${el.dataset.altitude}`;
    detailVariety.textContent = `품 종 : ${el.dataset.variety}`;
    detailProcess.textContent = `가공법 : ${el.dataset.process}`;
    detailDescription.textContent = `${el.dataset.description}`;
    flavornote.textContent = `${el.dataset.flavornote}`;
    
  }
  //   상세 보기 클릭시
  viewBtn.addEventListener("click", () => {
    // detail.classList.toggle("show")
    //
    detail.style.display = detail.style.display === "block" ? "none" : "block";
  });
});
