// Swiper 設定（手動）
const swiper = new Swiper(".swiper-menucard-slider", {
  slidesPerView: 3,
  spaceBetween: 4,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0:   { slidesPerView: 1 }
  }
});


//contact-form

  $('form').submit(function(e){
        e.preventDefault();

    const name = $('#name').val();
    const kana = $('#name-2').val();
    const mail = $('#mail').val();
    const coments = $('#coments').val();
    if (!contactData.name || !contactData.kana || !contactData.mail || !contactData.coments) {
      alert('未入力の項目があります');
      return;
    }

    if (!contactData.mail.includes('@')) {
      alert('正しいメールアドレスを入力してください');
      return;
    }
    localStorage.setItem('contact', JSON.stringify({
      name: name,
      kana: kana,
      mail: mail,
      coments: coments
    }));
    alert('送信しました');
  });

 

