// /*
//  * Licensed to the Apache Software Foundation (ASF) under one
//  * or more contributor license agreements.  See the NOTICE file
//  * distributed with this work for additional information
//  * regarding copyright ownership.  The ASF licenses this file
//  * to you under the Apache License, Version 2.0 (the
//  * "License"); you may not use this file except in compliance
//  * with the License.  You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing,
//  * software distributed under the License is distributed on an
//  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
//  * KIND, either express or implied.  See the License for the
//  * specific language governing permissions and limitations
//  * under the License.
//  */
// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {

//         if (cordova.platformId == 'android') {
//         	StatusBar.backgroundColorByHexString("#ffcc00");
//         }

//         document.addEventListener("backbutton", function(e){
//             if(window.location.hash=='#/home'||window.location.hash=='#/community'||window.location.hash=='#/us'||window.location.hash=='#/disconnect'||window.location.hash=='#/teach'){
//                 e.preventDefault();
//                 navigator.app.exitApp();
//             } else {
//                 navigator.app.backHistory()
//             }
//         }, false);

		// document.addEventListener("deviceready", init, false);
		// function init() {
		//     navigator.contacts.find(
		//         [navigator.contacts.fieldType.displayName],
		//         gotContacts,
		//         errorHandler);
		// }

		// function errorHandler(e) {
		//     alert("errorHandler: "+e);
		// }

		// function gotContacts(c) {
		//     alert("gotContacts, number of results "+c.length);
		//     for(var i=0, len=c.length; i<len; i++) {
		//         console.dir(c[i]);
		//     }
		// }


        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.loading-div');
        var receivedElement = parentElement.querySelector('.main-div');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        //var domElement = document.getElementById(...) / document.querySelector(...);
        var bodyElement = document.getElementsByTagName('body');
        angular.bootstrap(bodyElement, ["hudongquan"]);

//         //console.log('Received Event: ' + id);

//     }
// };

// app.initialize();