var scrollPosThen = window.pageYOffset;

        function navbarMagic() {
            var scrollPosNow = window.pageYOffset;
            var headerNav = document.getElementsByClassName("headernav")[0];

            if (headerNav) { //hvis headernav er tilstede kjører funskjonen
                if (scrollPosThen > scrollPosNow) {
                    headerNav.classList.remove("hidden");
                } else {
                    headerNav.classList.add("hidden");
                }
            } else {
                console.error("headernav ikke funnet.");
            }

            scrollPosThen = scrollPosNow;
        }
        window.addEventListener("scroll", navbarMagic);