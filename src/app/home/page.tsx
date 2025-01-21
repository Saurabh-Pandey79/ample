import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MAU from '../components/mau';
import DAU from '../components/dau';
import WAU from '../components/wau';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar active="WhatsApp" />

        {/* Main content section */}
        <main 
          style={{
            marginLeft: '200px', // Adjust this value based on your sidebar width
            padding: '20px',
            flex: 1, // Allow the main content to take up the remaining space
            display: 'flex',
            flexDirection: 'column', // Ensure the content is stacked vertically
            alignItems: 'center', // Center the cards horizontally
            gap: '20px', // Space between the elements
          }}
        >
          <h1>Welcome to the Home Page</h1>

          {/* Grid container for the cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Responsive grid columns
              gap: '20px', // Space between the cards
              width: '100%', // Ensure the grid takes up full width of the main content
            }}
          >
            <MAU />
            <DAU />
            <WAU />
          </div>
        </main>
      </div>
    </>
  );
}
