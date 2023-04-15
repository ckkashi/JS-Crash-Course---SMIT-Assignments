(
    function () {

        let mobileMenuBtn = document.getElementById('mobile-menu-btn');
        let navbarMenu = document.getElementById('navbar-menu');
        

        // window.addEventListener('resize',function () {
        //     console.log('resize running');
        //     navbarMenu.style.display = this.window.innerWidth <= 720 ? 'none' : 'flex' ; 
        // })

        function showMenu() {
            navbarMenu.style.display = navbarMenu.style.display == 'flex' ? 'none' : 'flex' ;
        }
        
        mobileMenuBtn.addEventListener('click',showMenu);

    }
)()