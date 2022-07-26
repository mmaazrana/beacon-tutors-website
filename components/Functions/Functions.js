import {collection, getDocs, query, where} from "firebase/firestore/lite";
import {db} from "../../firebase";

const fetchReviews = async (reviews) => {
    try {
        const q = query(
            collection(db, 'reviews'),
            where('isApproved', '==', true),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            reviews.push({
                ...doc.data(),
                id: doc.id,
                timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
            });
        });
        for (let i = reviews.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
        }
    } catch (error) {
        console.log(error.code, error.message);
    }
}

const fetchAnnouncements = async (announcements,page)=>{
    try {
        const q = query(
            collection(db, 'announcements'),
            where('page', '==', page),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            announcements.push({
                ...doc.data(), id: doc.id, timestamp: JSON.parse(JSON.stringify(doc.data().timestamp)),
            });
        });
        for (let i = announcements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [announcements[i], announcements[j]] = [announcements[j], announcements[i]];
        }
    } catch (error) {
        console.log(error.code, error.message);
    }
    return announcements
}


export {
    fetchAnnouncements,
    fetchReviews,
}