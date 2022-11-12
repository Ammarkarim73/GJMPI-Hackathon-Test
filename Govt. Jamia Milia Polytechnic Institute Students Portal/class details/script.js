	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { doc, setDoc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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


   var input1 = document.getElementById("input1")
   var input2 = document.getElementById("input2")
   var input3 = document.getElementById("input3")
   var input4 = document.getElementById("input4")
   var input5 = document.getElementById("input5")
   var input6 = document.getElementById("input6")
   var input7 = document.getElementById("input7")
   var input8 = document.getElementById("input8")
   var input9 = document.getElementById("input9")
   var input10 = document.getElementById("input10")
   var input11 = document.getElementById("input11")
   var input12 = document.getElementById("input12")
   var input13 = document.getElementById("input13")
   var input14 = document.getElementById("input14")
   var input15 = document.getElementById("input15")

const update = document.getElementById("updateDoc");
update.addEventListener("click", async () => {

    const docRef = await setDoc(doc(db, "table", "7338823"), {
        input1 : input1.value,
        input2 : input2.value,
        input3 : input3.value,
        input4 : input4.value,
        input5 : input5.value,
        input6 : input6.value,
        input7 : input7.value,
        input8 : input8.value,
        input9 : input9.value,
        input10 : input10.value,
        input11 : input11.value,
        input12 : input12.value,
        input13 : input13.value,
        input14 : input14.value,
        input15 : input15.value
    });
})

window.onload = async() => {


const docRef = doc(db, "table", "7338823");
const docSnap =  await getDoc(docRef);

        console.log(docSnap.data());
      input1.value = docSnap.data().input1
      input2.value = docSnap.data().input2
      input3.value = docSnap.data().input3
      input4.value = docSnap.data().input4
      input5.value = docSnap.data().input5
      input6.value = docSnap.data().input6
      input7.value = docSnap.data().input7
      input8.value = docSnap.data().input8
      input9.value = docSnap.data().input9
      input10.value = docSnap.data().input10
      input11.value = docSnap.data().input11
      input12.value = docSnap.data().input12
      input13.value = docSnap.data().input13
      input14.value = docSnap.data().input14
      input15.value = docSnap.data().input15
}