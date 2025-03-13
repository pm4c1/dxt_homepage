document.addEventListener("DOMContentLoaded", function () {
    // 로딩 애니메이션 숨기기
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
    }, 1500); // 1.5초 후 로딩 제거

    // 페이지 페이드 인 효과
    document.querySelector(".content").style.opacity = "1";
});
