var app = angular.module('main', ['ngTable', 'ngAnimate']).
controller('DemoCtrl', function($scope, $filter, ngTableParams) {

    $scope.editingObjects = [];

    $scope.checkedItems = {};

    $scope.data = [ {
        "id": 0,
        "progress": 91,
        "assignedTo": "Sasha Santiago",
        "gender": "female",
        "title": "Centrexin",
        "time": "5",
        "address": "641 Bay Avenue, Dyckesville, West Virginia, 2131",
        "start": "2010-05-17T16:35:12 -02:00",
        "end": "1991-05-24T10:37:02 -02:00",
        "status": "Neu",
        "tasks": [
            {
                "id": 0,
                "progress": 16,
                "assignedTo": "Lessie Hays",
                "gender": "female",
                "title": "Quadeebo",
                "time": "5",
                "address": "579 Randolph Street, Adelino, Montana, 204",
                "start": "2007-12-05T16:37:22 -01:00",
                "end": "2003-11-05T01:53:06 -01:00",
                "status": "Neu"
            },
            {
                "id": 1,
                "progress": 99,
                "assignedTo": "Kay Merrill",
                "gender": "female",
                "title": "Norali",
                "time": "5",
                "address": "104 Seaview Avenue, Sidman, Maine, 8609",
                "start": "1999-01-15T17:22:31 -01:00",
                "end": "2007-01-24T12:14:18 -01:00",
                "status": "Erledigt",
                "tasks": [
                {
                    "id": 0,
                    "progress": 16,
                    "assignedTo": "Lessie Hays",
                    "gender": "female",
                    "title": "Quadeebo",
                    "time": "5",
                    "address": "579 Randolph Street, Adelino, Montana, 204",
                    "start": "2007-12-05T16:37:22 -01:00",
                    "end": "2003-11-05T01:53:06 -01:00",
                    "status": "Neu"
                }
            ]},
            {
                "id": 2,
                "progress": 37,
                "assignedTo": "Cardenas Mack",
                "gender": "male",
                "title": "Undertap",
                "time": "5",
                "address": "386 Vanderveer Place, Hilltop, Connecticut, 7123",
                "start": "2004-05-29T11:07:18 -02:00",
                "end": "1994-12-17T18:30:15 -01:00",
                "status": "Erledigt"
            },
            {
                "id": 3,
                "progress": 91,
                "assignedTo": "Allen Mann",
                "gender": "male",
                "title": "Xplor",
                "time": "5",
                "address": "801 Village Road, Cornucopia, Mississippi, 1428",
                "start": "2007-05-11T19:49:25 -02:00",
                "end": "1993-07-14T23:58:41 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 4,
                "progress": 36,
                "assignedTo": "Rene Duffy",
                "gender": "female",
                "title": "Combogen",
                "time": "5",
                "address": "686 Stone Avenue, Idledale, Vermont, 7903",
                "start": "2012-05-06T06:10:16 -02:00",
                "end": "2004-10-01T20:55:27 -02:00",
                "status": "Neu"
            },
            {
                "id": 5,
                "progress": 63,
                "assignedTo": "Tisha Sanford",
                "gender": "female",
                "title": "Gynko",
                "time": "5",
                "address": "845 Thames Street, Lopezo, South Dakota, 5879",
                "start": "2011-09-21T00:57:49 -02:00",
                "end": "2004-07-09T16:44:51 -02:00",
                "status": "Zugewiesen"
            }
        ]},
                    {
        "id": 1,
        "progress": 71,
        "assignedTo": "Autumn Rose",
        "gender": "female",
        "title": "Zentime",
        "time": "5",
        "address": "815 Reed Street, Rossmore, Georgia, 8532",
        "start": "2013-09-29T17:23:27 -02:00",
        "end": "2009-04-06T04:00:56 -02:00",
        "status": "Neu",
        "tasks": []},
                    {
        "id": 2,
        "progress": 45,
        "assignedTo": "Manning Paul",
        "gender": "male",
        "title": "Zenolux",
        "time": "5",
        "address": "163 Brighton Avenue, Tioga, Michigan, 302",
        "start": "1990-03-17T09:15:43 -01:00",
        "end": "1998-09-17T05:09:41 -02:00",
        "status": "Zugewiesen",
        "tasks": [
            {
                "id": 0,
                "progress": 55,
                "assignedTo": "Ratliff Love",
                "gender": "male",
                "title": "Coriander",
                "time": "5",
                "address": "630 Crystal Street, Toftrees, Louisiana, 321",
                "start": "2012-05-28T22:31:02 -02:00",
                "end": "2013-09-27T16:14:59 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 1,
                "progress": 49,
                "assignedTo": "Lott Dickerson",
                "gender": "male",
                "title": "Cofine",
                "time": "5",
                "address": "386 Nautilus Avenue, Stonybrook, Kansas, 9606",
                "start": "2006-01-04T02:51:07 -01:00",
                "end": "1999-12-14T03:53:57 -01:00",
                "status": "Erledigt"
            },
            {
                "id": 2,
                "progress": 47,
                "assignedTo": "Boyd Lawson",
                "gender": "male",
                "title": "Combogene",
                "time": "5",
                "address": "525 Java Street, Independence, Iowa, 7946",
                "start": "2003-12-24T22:06:50 -01:00",
                "end": "2004-05-24T14:03:45 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 3,
                "progress": 81,
                "assignedTo": "Cannon Raymond",
                "gender": "male",
                "title": "Puria",
                "time": "5",
                "address": "748 Keen Court, Leming, Nebraska, 945",
                "start": "1998-01-08T18:52:06 -01:00",
                "end": "1996-07-28T13:23:30 -02:00",
                "status": "Zugewiesen"
            },
            {
                "id": 4,
                "progress": 10,
                "assignedTo": "Susanne Bass",
                "gender": "female",
                "title": "Pheast",
                "time": "5",
                "address": "869 Monroe Street, Homeland, New Mexico, 3731",
                "start": "1994-08-30T16:13:36 -02:00",
                "end": "1995-11-12T07:15:38 -01:00",
                "status": "Zugewiesen"
            }
        ]},
                    {
        "id": 3,
        "progress": 39,
        "assignedTo": "Krista Dawson",
        "gender": "female",
        "title": "Xyqag",
        "time": "5",
        "address": "935 Fleet Street, Orick, South Carolina, 4382",
        "start": "1997-06-21T04:37:17 -02:00",
        "end": "2000-05-25T16:23:07 -02:00",
        "status": "Zugewiesen",
        "tasks": []},
                    {
        "id": 4,
        "progress": 42,
        "assignedTo": "Blackwell Preston",
        "gender": "male",
        "title": "Quonata",
        "time": "5",
        "address": "860 Bedford Place, Edinburg, New Hampshire, 3710",
        "start": "1988-11-06T19:07:11 -01:00",
        "end": "1995-01-08T04:00:24 -01:00",
        "status": "Zugewiesen",
        "tasks": [
            {
                "id": 0,
                "progress": 50,
                "assignedTo": "Sondra Roman",
                "gender": "female",
                "title": "Asimiline",
                "time": "5",
                "address": "350 Middleton Street, Veyo, Colorado, 659",
                "start": "2000-05-03T11:16:56 -02:00",
                "end": "1999-02-23T11:06:51 -01:00",
                "status": "Neu"
            },
            {
                "id": 1,
                "progress": 64,
                "assignedTo": "Camacho Mejia",
                "gender": "male",
                "title": "Marvane",
                "time": "5",
                "address": "570 Chester Avenue, Tibbie, Virginia, 1764",
                "start": "1990-02-23T19:08:21 -01:00",
                "end": "1989-04-26T11:32:08 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 2,
                "progress": 69,
                "assignedTo": "Dana Middleton",
                "gender": "female",
                "title": "Stucco",
                "time": "5",
                "address": "712 King Street, Germanton, Texas, 2171",
                "start": "2007-03-20T21:46:03 -01:00",
                "end": "2006-06-15T20:03:15 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 3,
                "progress": 15,
                "assignedTo": "Coleman Watson",
                "gender": "male",
                "title": "Irack",
                "time": "5",
                "address": "459 Mermaid Avenue, Robinette, Arizona, 3861",
                "start": "1995-02-05T03:21:33 -01:00",
                "end": "2010-03-14T20:03:16 -01:00",
                "status": "Zugewiesen"
            },
            {
                "id": 4,
                "progress": 62,
                "assignedTo": "Everett Hudson",
                "gender": "male",
                "title": "Melbacor",
                "time": "5",
                "address": "478 Arlington Place, Alafaya, North Dakota, 5114",
                "start": "2008-07-08T17:33:45 -02:00",
                "end": "2000-12-14T02:07:17 -01:00",
                "status": "Zugewiesen"
            },
            {
                "id": 5,
                "progress": 12,
                "assignedTo": "Chavez Camacho",
                "gender": "male",
                "title": "Exozent",
                "time": "5",
                "address": "142 Lott Street, Orovada, Utah, 7467",
                "start": "1998-02-25T23:23:21 -01:00",
                "end": "1992-07-24T08:40:26 -02:00",
                "status": "Zugewiesen"
            }
        ]},
                    {
        "id": 5,
        "progress": 10,
        "assignedTo": "Amalia Strong",
        "gender": "female",
        "title": "Recritube",
        "time": "5",
        "address": "843 Maujer Street, Smock, Florida, 1148",
        "start": "2009-09-14T10:36:05 -02:00",
        "end": "2010-04-23T03:57:56 -02:00",
        "status": "Zugewiesen",
        "tasks": [
            {
                "id": 0,
                "progress": 33,
                "assignedTo": "Diaz Campos",
                "gender": "male",
                "title": "Bicol",
                "time": "5",
                "address": "328 Schenck Avenue, Sussex, Ohio, 4555",
                "start": "1998-01-11T14:33:49 -01:00",
                "end": "1996-08-29T08:33:33 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 1,
                "progress": 83,
                "assignedTo": "Beach Barker",
                "gender": "male",
                "title": "Comstar",
                "time": "5",
                "address": "989 Hart Place, Blandburg, Nevada, 4469",
                "start": "2011-01-05T05:24:18 -01:00",
                "end": "1998-09-04T07:02:20 -02:00",
                "status": "Zugewiesen"
            },
            {
                "id": 2,
                "progress": 74,
                "assignedTo": "Ollie Aguirre",
                "gender": "female",
                "title": "Kaggle",
                "time": "5",
                "address": "225 Logan Street, Moquino, Massachusetts, 1278",
                "start": "2012-06-26T12:07:47 -02:00",
                "end": "1989-11-27T03:45:49 -01:00",
                "status": "Zugewiesen"
            },
            {
                "id": 3,
                "progress": 13,
                "assignedTo": "Adams Beasley",
                "gender": "male",
                "title": "Immunics",
                "time": "5",
                "address": "824 Eldert Street, Aberdeen, Rhode Island, 9016",
                "start": "2006-09-14T05:21:20 -02:00",
                "end": "2005-05-14T07:03:45 -02:00",
                "status": "Neu"
            },
            {
                "id": 4,
                "progress": 5,
                "assignedTo": "Stout Todd",
                "gender": "male",
                "title": "Premiant",
                "time": "5",
                "address": "607 Miami Court, Fairfield, Kentucky, 4587",
                "start": "1995-11-15T08:12:00 -01:00",
                "end": "1988-07-03T17:39:10 -02:00",
                "status": "Zugewiesen"
            }
        ]},
                    {
        "id": 6,
        "progress": 65,
        "assignedTo": "Shirley Robles",
        "gender": "female",
        "title": "Bitrex",
        "time": "5",
        "address": "938 Polhemus Place, Norwood, Illinois, 593",
        "start": "1994-05-27T01:54:33 -02:00",
        "end": "2011-07-07T00:11:20 -02:00",
        "status": "Erledigt",
        "tasks": [
            {
                "id": 0,
                "progress": 51,
                "assignedTo": "Franklin Rosa",
                "gender": "male",
                "title": "Oronoko",
                "time": "5",
                "address": "308 Hillel Place, Shepardsville, Indiana, 719",
                "start": "1991-08-03T18:43:13 -02:00",
                "end": "2010-05-18T18:11:35 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 1,
                "progress": 67,
                "assignedTo": "Eleanor Hicks",
                "gender": "female",
                "title": "Eargo",
                "time": "5",
                "address": "638 Seaview Court, Echo, Idaho, 5772",
                "start": "2000-11-26T20:38:57 -01:00",
                "end": "1998-05-27T10:59:30 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 2,
                "progress": 86,
                "assignedTo": "Farrell Velazquez",
                "gender": "male",
                "title": "Medicroix",
                "time": "5",
                "address": "678 Batchelder Street, Bakersville, Maryland, 7678",
                "start": "2000-12-28T21:59:12 -01:00",
                "end": "2009-12-13T05:32:52 -01:00",
                "status": "Neu"
            },
            {
                "id": 3,
                "progress": 36,
                "assignedTo": "Maryann Brown",
                "gender": "female",
                "title": "Automon",
                "time": "5",
                "address": "899 Bristol Street, Waukeenah, Washington, 8953",
                "start": "2006-08-14T19:08:37 -02:00",
                "end": "2010-09-13T23:35:55 -02:00",
                "status": "Neu"
            },
            {
                "id": 4,
                "progress": 77,
                "assignedTo": "Della Craft",
                "gender": "female",
                "title": "Splinx",
                "time": "5",
                "address": "285 Bassett Avenue, Brule, Arkansas, 7135",
                "start": "2008-07-29T11:38:35 -02:00",
                "end": "2007-10-24T14:23:30 -02:00",
                "status": "Neu"
            }
        ]},
                    {
        "id": 7,
        "progress": 71,
        "assignedTo": "Mayer Vazquez",
        "gender": "male",
        "title": "Miracula",
        "time": "5",
        "address": "805 Dewitt Avenue, Rockbridge, Wisconsin, 8146",
        "start": "2000-05-28T08:59:00 -02:00",
        "end": "2003-05-27T13:02:33 -02:00",
        "status": "Neu",
        "tasks": [
            {
                "id": 0,
                "progress": 61,
                "assignedTo": "Bryan Fields",
                "gender": "male",
                "title": "Cedward",
                "time": "5",
                "address": "229 Powers Street, Silkworth, North Carolina, 3991",
                "start": "1994-11-20T11:15:31 -01:00",
                "end": "2010-04-05T13:51:21 -02:00",
                "status": "Neu"
            },
            {
                "id": 1,
                "progress": 73,
                "assignedTo": "Ayers Farley",
                "gender": "male",
                "title": "Furnigeer",
                "time": "5",
                "address": "490 Elm Place, Holtville, Oklahoma, 1112",
                "start": "1989-04-14T01:26:48 -02:00",
                "end": "2013-08-04T13:38:28 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 2,
                "progress": 6,
                "assignedTo": "Kristy Stewart",
                "gender": "female",
                "title": "Opportech",
                "time": "5",
                "address": "769 Louise Terrace, Davenport, Wyoming, 9979",
                "start": "2006-04-24T14:51:54 -02:00",
                "end": "1994-05-24T04:25:46 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 3,
                "progress": 30,
                "assignedTo": "Avila Wilson",
                "gender": "male",
                "title": "Elpro",
                "time": "5",
                "address": "658 Division Avenue, Cartwright, Louisiana, 3753",
                "start": "1996-06-23T12:11:24 -02:00",
                "end": "1999-09-03T21:55:02 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 4,
                "progress": 25,
                "assignedTo": "Lacey Hubbard",
                "gender": "female",
                "title": "Rugstars",
                "time": "5",
                "address": "928 Lexington Avenue, Como, Florida, 6897",
                "start": "2004-12-22T09:55:31 -01:00",
                "end": "2007-10-22T03:14:02 -02:00",
                "status": "Zugewiesen"
            }
        ]},
                    {
        "id": 8,
        "progress": 93,
        "assignedTo": "Graciela Roberson",
        "gender": "female",
        "title": "Rodeomad",
        "time": "5",
        "address": "696 Perry Place, Corriganville, Alabama, 5598",
        "start": "1993-11-07T00:55:12 -01:00",
        "end": "2006-03-10T04:48:46 -01:00",
        "status": "Zugewiesen",
        "tasks": [
            {
                "id": 0,
                "progress": 81,
                "assignedTo": "Hudson Goodwin",
                "gender": "male",
                "title": "Zosis",
                "time": "5",
                "address": "419 Malbone Street, Stollings, Utah, 8933",
                "start": "1996-10-16T02:16:31 -02:00",
                "end": "1994-03-30T17:40:56 -02:00",
                "status": "Zugewiesen"
            },
            {
                "id": 1,
                "progress": 47,
                "assignedTo": "Mathews Brady",
                "gender": "male",
                "title": "Gronk",
                "time": "5",
                "address": "394 Main Street, Salix, Hawaii, 8076",
                "start": "1996-06-17T18:04:53 -02:00",
                "end": "2003-10-19T04:53:47 -02:00",
                "status": "Zugewiesen"
            },
            {
                "id": 2,
                "progress": 56,
                "assignedTo": "Barton Jensen",
                "gender": "male",
                "title": "Medicroix",
                "time": "5",
                "address": "157 Newton Street, Ballico, Mississippi, 8924",
                "start": "2011-07-30T01:05:45 -02:00",
                "end": "1995-10-09T07:41:57 -01:00",
                "status": "Zugewiesen"
            },
            {
                "id": 3,
                "progress": 56,
                "assignedTo": "Denise Doyle",
                "gender": "female",
                "title": "Geekology",
                "time": "5",
                "address": "925 Verona Street, Curtice, Montana, 8919",
                "start": "2005-06-26T22:07:37 -02:00",
                "end": "1999-06-10T14:19:54 -02:00",
                "status": "Erledigt"
            },
            {
                "id": 4,
                "progress": 67,
                "assignedTo": "Fields Dalton",
                "gender": "male",
                "title": "Rocklogic",
                "time": "5",
                "address": "115 Rutledge Street, Fairmount, Virginia, 2541",
                "start": "2001-06-03T00:26:57 -02:00",
                "end": "2008-12-17T10:22:31 -01:00",
                "status": "Neu"
            },
            {
                "id": 5,
                "progress": 86,
                "assignedTo": "Consuelo Harper",
                "gender": "female",
                "title": "Cytrek",
                "time": "5",
                "address": "844 Vanderveer Street, Enlow, Delaware, 4753",
                "start": "2001-06-30T04:58:59 -02:00",
                "end": "2012-07-14T05:41:10 -02:00",
                "status": "Erledigt"
            }
        ]} ]

    var doAction = function(items, action) {
        var toDoChanges = items[0] ? items : [items];
        for (var i = 0; i < $scope.data.length; i++) {
            for (var j = 0, jj = toDoChanges.length; j < jj; j++) {
                if ($scope.data[i].id === toDoChanges[j].id) {
                    action(i);
                }
            }
        }
    };

    var getSelectedItems = function() {
        var items = [];
        for (var key in $scope.checkedItems) {
            if (typeof $scope.checkedItems[key] === "object") items.push($scope.checkedItems[key]);
        }
        return items;
    }

    $scope.deleteSelected = function() {
        $scope.delete(getSelectedItems());
    }

    $scope.delete = function(items) {
        doAction(items, function(index) {
            $scope.data.splice(index, 1)
        })
    }

    $scope.editSelected = function() {
        $scope.edit(getSelectedItems());
    };

    $scope.edit = function(items) {
        doAction(items, function(index) {
            $scope.editingObjects[$scope.data[index].id] = $scope.data[index];
        })
    };

    $scope.cancelEdit = function(item) {
        for (var key in $scope.editingObjects[item.id]) {
            item[key] = $scope.editingObjects[item.id][key];
        }
        $scope.editingObjects[item.id] = false;
    };

    $scope.editing = function(item) {
        return (typeof $scope.editingObjects[item.id] === "object");
    }

});