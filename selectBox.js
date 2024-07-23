// 요소 선택하기
const btnSelect = document.querySelector('.btn-select');
const listMember = document.querySelector('.list-member');
const btnList = listMember.querySelectorAll('button');

// select버튼 눌렀을때 classList에 'on'추가
btnSelect.addEventListener('click', (event) => {
  btnSelect.classList.toggle('on');
  // console.log(btnList);
});

// 목록 배열에서 버튼에 클릭 이벤트
btnList.forEach((button) => {
  button.addEventListener('click', function() {
    // console.log(this.textContent);
    btnSelect.textContent = this.textContent;
    btnSelect.classList.remove('on');
  });
});
