	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { doc, deleteDoc, collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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


    let contain = document.getElementById("contain")
    window.onload = async() => {
        const querySnapshot = await getDocs(collection(db, "student"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
               const del = async() => {
               await deleteDoc(doc(db, "student", doc.id));
            }
            window.del = del
            let div = `
            <div class="card">
                    <div class="img">
                        <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1668262795~exp=1668263395~hmac=865617d225fe7d6915f3243e238414806bcf4930d3b031c6257203c58ffb796d" alt="">
                    </div>
                    <div class="data">
                        <div class="text">
                            <div class="text_name" id="name">Name</div>
                            <div class="text_data"> : ${doc.data().name}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">Father Name</div>
                            <div class="text_data"> : ${doc.data().Fname}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">Contact #</div>
                            <div class="text_data"> : ${doc.data().phoneNumber}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">CNIC</div>
                            <div class="text_data"> : ${doc.data().CNIC}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">Course Name</div>
                            <div class="text_data"> : ${doc.data().course}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">Roll #</div>
                            <div class="text_data"> : ${doc.data().rollNo}</div>
                        </div>
                        <div class="text">
                            <div class="text_name">STATUS</div>
                            <div class="text_data"> : PRESENT ✔</div>
                        </div>
                        <div class="text">
                            <button onclick="del()" class="link">DELETE</button>
                        </div>
                    </div>
                </div>
            `
            contain.innerHTML += div
        });
    
    }
