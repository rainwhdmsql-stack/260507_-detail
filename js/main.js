window.addEventListener("load", () => {
  // 요소 선택
  const cup = document.getElementById("cup");
  const smallPick = document.querySelectorAll(".small");
  const viewBtn = document.getElementById("view");
  const detail = document.getElementById("detail");

  // 바뀔 정보 내용
  const descName = document.getElementById("desc-name");
  const descPrice = document.getElementById("desc-price");
  const descDelivery = document.getElementById("desc-delivery");
  const descPoints = document.getElementById("desc-points");
  const descRoasting = document.getElementById("desc-roasting");

  // 상세 내용
  const detailOrigin = document.getElementById("detail-origin");
  const detailRegion = document.getElementById("detail-region");
  const detailFarm = document.getElementById("detail-farm");
  const detailAltitude = document.getElementById("detail-altitude");
  const detailVariety = document.getElementById("detail-variety");
  const detailProcess = document.getElementById("detail-process");
  const detailDescription = document.getElementById("detail-description");
  const flavorNote = document.getElementById("flavornote");

  // 장바구니
  const addBtn = document.getElementById("desc-btn");
  const cartBox = document.getElementById("cart");
  const cartCount = document.getElementById("cart-count");
  const totalBox = document.getElementById("total");

  // 현재 선택 상품 / 카운트
  let selectedItem = smallPick[0];
  let count = 0;
  // 추가
  let totalPrice = 0;

  // 작은 이미지 클릭 시 정보 변경
  smallPick.forEach((small) => {
    small.addEventListener("click", () => {
      smallPick.forEach((s) => s.classList.remove("selected"));
      small.classList.add("selected");

      selectedItem = small;
      changePic(small);
    });
  });

  // 큰 이미지 / 상품 정보 변경
  function changePic(el) {
    cup.src = el.src;

    descName.textContent = `상품명 : ${el.dataset.name}`;
    descPrice.textContent = `가격 : ${el.dataset.price}`;
    descDelivery.textContent = `배송비 : ${el.dataset.delivery}`;
    descPoints.textContent = `적립금 : ${el.dataset.points}`;
    descRoasting.textContent = `로스팅 : ${el.dataset.roasting}`;

    detailOrigin.textContent = `원산지 : ${el.dataset.origin}`;
    detailRegion.textContent = `지 역 : ${el.dataset.region}`;
    detailFarm.textContent = `농 장 : ${el.dataset.farm}`;
    detailAltitude.textContent = `고 도 : ${el.dataset.altitude}`;
    detailVariety.textContent = `품 종 : ${el.dataset.variety}`;
    detailProcess.textContent = `가공법 : ${el.dataset.process}`;
    detailDescription.textContent = el.dataset.description;
    flavorNote.textContent = el.dataset.flavornote;
  }

  // 첫 번째 상품 기본 선택
  smallPick[0].classList.add("selected");
  changePic(smallPick[0]);

  // 상세 보기 클릭
  viewBtn.addEventListener("click", () => {
    detail.style.display = detail.style.display === "block" ? "none" : "block";
  });

  // 장바구니 담기
  addBtn.addEventListener("click", () => {
    const name = selectedItem.dataset.name;

    // 가격 숫자로 변환
    const price = Number(
      selectedItem.dataset.price.replace(",", "").replace("원", ""),
    );

    // 개수 증가
    count++;
    cartCount.textContent = count;

    // 총 금액 증가
    totalPrice += price;

    // 장바구니 상품 추가
    cartBox.innerHTML += `<p>${name}</p>`;

    // 총 금액 출력
    totalBox.textContent = `총 합계 : ${totalPrice.toLocaleString()}원`;
  });
});
