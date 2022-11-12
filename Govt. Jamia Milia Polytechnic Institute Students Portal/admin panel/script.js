	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	  apiKey: "AIzaSyAszwYAZcGMYSLtFZ6LE5MfQPL1DBuur_U",
	  authDomain: "gjmpi-73.firebaseapp.com",
	  projectId: "gjmpi-73",
	  storageBucket: "gjmpi-73.appspot.com",
	  messagingSenderId: "105911874919",
	  appId: "1:105911874919:web:396db5b1bb37b54ce96bc2",
	  measurementId: "G-J8D8QQ2KX0"
	};
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    let login_btn = document.getElementById("loginSubmit")
    login_btn.addEventListener("click", async () => {
        let login_email = document.getElementById("loginEmail").value
        let login_password = document.getElementById("loginPassword").value
        const docRef = doc(db, "adminInfo", "ua317eNUhNnPetbGE4vT");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            if(login_email == docSnap.data().email && login_password == docSnap.data().password){
                window.open("../dashboard/index.html", "_self")
            }else{
                console.log("not-login through admin panel")
            }
        } else {
            console.log("No such information about admin!");
        }
    })




