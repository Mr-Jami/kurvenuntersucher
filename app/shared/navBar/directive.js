app.directive('navBar',[ function () {
    const htmlFile = "navBar.html";


    this.openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
    }

    this.closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "#FFF";
    }



    function link($scope){
        let routeLocation = window.location.hash.split('/')[1];
        let location = {
            prev: null
        };

        console.log(routeLocation.length);
        if (routeLocation.length === 0) {
            location.prev = 'ku';
            document.getElementById("ku").style.backgroundColor = "white"
        } else {
            location.prev = routeLocation;
            document.getElementById(routeLocation).style.backgroundColor = "#f1f1f1"
        };

        console.log(location);


        updateMenu = (id) => {
            document.getElementById(location.prev).style.backgroundColor = "#ec732a";
            document.getElementById(id).style.backgroundColor = "#f1f1f1";
            location.prev = id;
        }

    }

    return {
        restrict: "E",
        templateUrl: `dist/js/directives/${htmlFile}`,
        link: link
    }
}])