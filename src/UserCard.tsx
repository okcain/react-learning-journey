import { useState } from "react"; // Hook for managing state

// Interface: Defines the structure of a user object
interface UserCardProps {
    username: string;
    jobTitle: string;
    isActive: boolean;
}

// UserCard Component: UI for displaying user information

function UserCard({ username, jobTitle, isActive }: UserCardProps) {
    // State declaration
    // [değişkenAdı, setDeğişkenAdı] = useState<tip>(başlangıçDeğeri);
    // değişkenAdı: state değişkeninin adı
    // setDeğişkenAdı: state değişkenini güncellemek için kullanılan fonksiyon

    const [likeCount, setLikeCount] = useState<number>(0); // Initial like count is 0

    // Butona tıklanınca likeCount'u artıran fonksiyon
    const handleLike = () => {
        setLikeCount(likeCount + 1);
        console.log(`${username} has ${likeCount + 1} likes!`);
    }

    //Simple inline styles for the card
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 12px rgba(0,0,0,0.1)"
    };

    return (
        <div style={cardStyle}>
            <h3>{username}</h3>
            <p style={{color: "#555"}}>
                <strong>Role:</strong> {jobTitle}
            </p>
            <p>
                Status: {isActive ? "🟢 Online" : "🔴 Offline"}
            </p>

            <hr style={{ margin: "10px 0", border: "0.5px solid #eee" }} />

            {/* Like Button and Count Display */}
            <button onClick={handleLike} style={{ cursor: "pointer", padding: "5px 10px"}}>
                👍 Like ({likeCount})
            </button>
            { likeCount >= 5 && 
                <p style={{ color: "green", marginTop: "8px" }}>
                    🎉 {username} is popular!
                </p>
            }
        </div>
    );
    }

    // Export the component for use in other parts of the application
    export default UserCard;