import ua from './class/_ua';
import Swiper from 'swiper';
import gsap from 'gsap';

ua();
// alert();

if(document.querySelector('.pg-works') != null) {
  const secWorksMv = document.querySelector('.sec-works_mv');

  new Swiper(secWorksMv.querySelector('.swiper'), {
    slidesPerView: 1.2,
    spaceBetween: 20,
    // centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 1.4,
        spaceBetween: 100
      }
    }
  });

  new Swiper('.pg-works_works .swiper', {
    slidesPerView: 1.3,
    spaceBetween: 20,
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        slidesPerView: 2.02,
        spaceBetween: 80
      }
    },
    navigation: {
      nextEl: '.pg-works_works_body_next',
      prevEl: '.pg-works_works_body_prev',
    }
  });
}

// $.getJSON('https://note.com/api/v2/creators/nex_c/contents?kind=note', () => {
  
// })

const overlayPath = document.querySelector(".overlay-path");
window.hide = () => {
  gsap
    .timeline({
      onComplete: () => (
        console.log('hide:done')
      )
    })
    .set(overlayPath, {
      attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
    })
    .to(
      overlayPath,
      {
        duration: 0.5,
        ease: "power4.in",
        attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
      },
      0
    )
    .to(overlayPath, {
      duration: 0.3,
      ease: "power2",
      attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      onComplete: () => {
        // ここで遷移
      },
    })
    .set(overlayPath, {
      attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
    });
    return 'hide';
};

window.show = () => {
  gsap
    .timeline({
      onComplete: () => (
        // ここで要素表示
        console.log('shoe:done')
      )
    })
    .set(overlayPath, {
      attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
    })
    .to(overlayPath, {
      duration: 0.3,
      ease: "power2.in",
      attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
    })
    .to(overlayPath, {
      duration: 0.5,
      ease: "power4",
      attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" }
    });
    return 'show';
}

window.set = () => {
  gsap.set(overlayPath, {
    attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
  });
  return 'set';
};
// set();