//Main Component
import UserCard from "./UserCard"; // Importing UserCard component

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px", flexWrap: "wrap" }}>
      {/* Rendering multiple UserCard components with different props */}
      <UserCard
        username="Alice Johnson"
        jobTitle="Frontend Engineer"
        isActive={true}
      />
      <UserCard
        username="Bob Smith"
        jobTitle="Backend Developer"
        isActive={false}
      />
      <UserCard
        username="Charlie Brown"
        jobTitle="UI/UX Designer"
        isActive={true}
      />
    </div>
  );
}

export default App;