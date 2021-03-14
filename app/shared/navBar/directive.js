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

        if (routeLocation.length === 0) {
            location.prev = 'ku';
            document.getElementById("ku").style.backgroundColor = "#f1f1f1";
            document.getElementById("ku").style.color = "#ee6411";
        } else {
            location.prev = routeLocation;
            document.getElementById(routeLocation).style.backgroundColor = "#f1f1f1";
            document.getElementById(routeLocation).style.color = "#ee6411";
        };



        updateMenu = (id) => {
            document.getElementById(location.prev).style.backgroundColor = "#ee6411";
            document.getElementById(location.prev).style.color = "#f1f1f1";
            document.getElementById(id).style.backgroundColor = "#f1f1f1";
            document.getElementById(id).style.color = "#ee6411";
            location.prev = id;
        }

    }

    return {
        restrict: "E",
        templateUrl: `dist/js/directives/${htmlFile}`,
        link: link
    }
}])