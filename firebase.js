import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, getDoc, updateDoc, setDoc, addDoc, serverTimestamp, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAnTaOr4J-7aHMw6ZeSG9c46BN1qNHJ85o",
        authDomain: "aritra-deb-portfolio.firebaseapp.com",
        projectId: "aritra-deb-portfolio",
        storageBucket: "aritra-deb-portfolio.appspot.com",
        messagingSenderId: "574817550517",
        appId: "1:574817550517:web:c5b518b5a11bb4cd62befc",
        measurementId: "G-YPBEB8VW8G"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Function to format the count
    function formatCount(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    }

    async function updateVisitorCount() {
        const docRef = doc(db, 'visitorCount', 'count');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const currentCount = docSnap.data().value;
            const newCount = currentCount + 1;
            await updateDoc(docRef, { value: newCount });
            document.getElementById('visitor-count').textContent = formatCount(newCount);
        } else {
            await setDoc(docRef, { value: 1 });
            document.getElementById('visitor-count').textContent = formatCount(1);
        }
    }

    updateVisitorCount();