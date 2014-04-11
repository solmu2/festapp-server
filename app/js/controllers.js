'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('ArtistsListCtrl', ['$scope', function(sc) {
    sc.artists = [
        {
            "id": "1",
            "name": "Bad Finance",
            "picture": "public/BadFinance.jpg",
            "quote": "”Having fun! Everyone altogether, let's rock!”",
            "content": "<p>\r\nBAD finance was formed in the early 2011 by three guys, Sakari, Antti and Jari, all working at Futurice Tampere. The band started reheasing at Jari's student dorm in Hervanta but after Futurice office moved into bigger premises the boys got their own band room.</p>\r\n",
            "featured": "no",
            "status": "show",
            "stage": "niitty",
            "day": "Lauantai",
            "time_start": "1373145300",
            "time_stop": "1373149800",
            "founded": "2012",
            "genre": "Love Metal",
            "members": "Mike Arvela|Sakari Hyöty|Antti Mattila",
            "albums": "First Album (2012)|Second Album (2013)|Third Album (2014)",
            "highlights": "Bad Finance rocked the place at Futurice Christmas Party 2012.",
            "youtube": "https://www.youtube.com/watch?v=xRKzk0tKchE",
            "spotify": "",
            "contact_info": "Generic contact info, ie. email and phone number",
            "press_image": "public/BadFinance.jpg",
            "credits": "Photo: Futurice Oy",
            "place": "0"
        }
    ];
}]);