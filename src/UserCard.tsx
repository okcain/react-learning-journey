// Interface: Defines the structure of a user object
interface UserCardProps {
    username: string;
    jobTitle: string;
    isActive: boolean;
}

// UserCard Component: UI for displaying user information

function UserCard({ username, jobTitle, isActive }: UserCardProps) {
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
        </div>
    );
    }

    // Export the component for use in other parts of the application
    export default UserCard;