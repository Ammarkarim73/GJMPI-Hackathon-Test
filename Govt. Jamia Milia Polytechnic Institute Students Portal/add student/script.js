const green = (i) => {
    document.getElementById(i).style.border = "1px solid blue";
    document.getElementById(i).style.outline = "none";
} 

window.green = green;

const blue = (j) => {
    document.getElementById(j).style.border = "1px solid #8dc63f";
    document.getElementById(j).style.outline = "none";
} 

window.blue = blue;

const darkBlue = (k)=> {
    document.getElementById(k).style.border = "1px solid darkblue";
    document.getElementById(k).style.outline = "none";

}
window.darkBlue = darkBlue;

	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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




var image = document.querySelector("#file");
var reader;
var uploadedImage;


image.addEventListener("change", function() {
reader = new FileReader();
reader.addEventListener("load", () => {
uploadedImage = reader.result;
document.querySelector("#showPic").style.backgroundImage = `url(${uploadedImage})`;
console.log()
});
reader.readAsDataURL(this.files[0]);
document.getElementById('showPic').className= 'picture';
});

// image


const setData = async()=>{
    var course = document.getElementById('course').value;
    var name = document.getElementById('name').value;
    var Fname = document.getElementById('Fname').value;
    var studentClass = document.getElementById('class').value;
    var rollNo = document.getElementById('rollNO').value;
    var phoneNumber = document.getElementById('number').value;
    var CNIC = document.getElementById('cnic').value;




    // cnic + email + phone No validiation
    if (CNIC.length == 13){

        if (phoneNumber.length == 11) {

            localStorage.setItem(image.files[0].name, uploadedImage);
            await addDoc(collection(db, 'student'),{
                course: course,
                name: name,
                Fname: Fname,
                studentClass: studentClass,
                rollNo: rollNo,
                phoneNumber: phoneNumber,
                CNIC: CNIC
             });

                var Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'success',
                    title: 'Submited successfully'
                })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'ERROR !!!',
                text: 'Please Enter Correct Phone Number !'
            })
        }
        }else {
        Swal.fire({
            icon: 'error',
            title: 'ERROR !!!',
            text: 'Please Enter Correct CNIC Number !'
          })
    }
 

        // cnic + email validiation


}


window.setData = setData;