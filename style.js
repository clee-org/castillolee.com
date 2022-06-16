    window.onscroll = function() {headerMenu()};

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function headerMenu() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        }
        else {
            navbar.clasList.remove("sticky");
        }
    }

    function buttonAnimation(x) {
        x.classList.toggle("change");

    }
    function clickyMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onClick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementByClassName("dropdown-content");
            var i;
            for (i=0; i<dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

