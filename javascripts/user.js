"use strict";
let firebase = require("./firebaseConfig"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;


//listen for login ir log out actions and set currentUser's  value
firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
		currentUser = user.uid;
	} else {
		currentUser = null;

	}
	
});


function logInGoogle() {

	return firebase.auth().signInWithPopup(provider);

}
function logOut(){
	return firebase.auth().signOut();
}

function getUser() {
	return currentUser;
}

module.exports = {logInGoogle, logOut, getUser};
