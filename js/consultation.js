// 한글완성
function handleKrCompleteOnlyInput(evt) {
  const inputStr = evt.target.value;
  const hint = evt.target.nextElementSibling;

  // 입력이 존재할 경우에만 실행
  if (inputStr) {
    // 잘못된 입력 검출 ===================
    const reg = /^[가-힣]+$/;
    if (!reg.test(inputStr)) {
      hint.style.color = "#c80029";
      hint.innerText = "잘못된 입력입니다.";
    } else {
      hint.style.color = "#645959";
      hint.innerText = "* 자모음을 합친 완성된 한글만 입력하세요";
    }
    // ================================

    // 잘못된 입력 교정 ===================
    const result = inputStr.replace(/[^ㄱ-ㅎ|가-힣]/g, "");
    evt.target.value = result;
    // ================================
  }
}

// 영문/숫자
function handleEnNumInput(evt) {
  const inputStr = evt.target.value;
  const hint = evt.target.nextElementSibling;

  // 입력이 존재할 경우에만 실행
  if (inputStr) {
    // 잘못된 입력 검출 ===================
    const reg = /^[a-z|A-Z|0-9]+$/;
    if (!reg.test(inputStr)) {
      hint.style.color = "#c80029";
      hint.innerText = "잘못된 입력입니다.";
    } else {
      hint.style.color = "#645959";
      hint.innerText = "* 영문과 숫자만 입력하세요.";
    }
    // ================================

    // 잘못된 입력 교정 ===================
    const result = inputStr.replace(/[^a-z|A-Z|0-9]/g, "");
    evt.target.value = result;
    // ================================
  }
}

// 전화번호 00000000
function handlePhoneNumberInput(evt) {
  const inputStr = evt.target.value;
  const hint = evt.target.nextElementSibling;

  // 입력이 존재할 경우에만 실행
  if (inputStr) {
    // 잘못된 입력 검출 ===================
    const reg = /^[0-9]+$/;
    if (!reg.test(inputStr)) {
      hint.style.color = "#c80029";
      hint.innerText = "잘못된 입력입니다.";
    } else {
      hint.style.color = "#645959";
      hint.innerText = "* 여덟자리 숫자만 입력하세요.";
    }
    // ================================

    // 잘못된 입력 교정 ===================
    const result = inputStr.replace(/[^0-9]/g, "").substring(0, 8);
    evt.target.value = result;
    // ================================
  }
}

// 한글완성
function handleKrCompleteNumInput(evt) {
  const inputStr = evt.target.value;
  const hint = evt.target.nextElementSibling;

  // 입력이 존재할 경우에만 실행
  if (inputStr) {
    // 잘못된 입력 검출 ===================
    const reg = /^[가-힣|0-9]+$/;
    if (!reg.test(inputStr)) {
      hint.style.color = "#c80029";
      hint.innerText = "잘못된 입력입니다.";
    } else {
      hint.style.color = "#645959";
      hint.innerText = "* 한글과 숫자만 입력하세요.";
    }
    // ================================

    // 잘못된 입력 교정 ===================
    const result = inputStr.replace(/[^ㄱ-ㅎ|가-힣|0-9]/g, "");
    evt.target.value = result;
    // ================================
  }
}

// 평
function handlePyoungInput(evt) {
  const inputStr = evt.target.value;
  const hint = evt.target.nextElementSibling;

  // 입력이 존재할 경우에만 실행
  if (inputStr) {
    // 잘못된 입력 검출 ===================
    const reg = /^[0-9]+$/;
    if (!reg.test(inputStr)) {
      hint.style.color = "#c80029";
      hint.innerText = "잘못된 입력입니다.";
    } else {
      hint.style.color = "#645959";
      hint.innerText = "* 세자리 숫자만 입력하세요.";
    }
    // ================================

    // 잘못된 입력 교정 ===================
    const result = inputStr.replace(/[^0-9]/g, "").substring(0, 3);
    evt.target.value = result;
    // ================================
  }
}
