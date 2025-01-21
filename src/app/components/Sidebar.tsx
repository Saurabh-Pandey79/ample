'use client'
import styles from './Sidebar.module.css';
import { FaWhatsapp, FaEnvelope, FaSms, FaCog, FaFileInvoice, FaComments } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Use the new router from Next.js 13+

export default function Sidebar({ active }: { active: string }) {
  const router = useRouter(); // Initialize the router

  const menuItems = [
    { name: 'WhatsApp', icon: <FaWhatsapp /> },
    { name: 'Email', icon: <FaEnvelope /> },
    { name: 'SMS', icon: <FaSms /> },
    { name: 'CTWA', icon: <FaComments />, path: '/pages/ctx' }, // Correct path for CTWA
    { name: 'Billing', icon: <FaFileInvoice /> },
    { name: 'Settings', icon: <FaCog /> },
  ];

  const handleMenuClick = (item: { name: string; path?: string }) => {
    if (item.path) {
      router.push(item.path); // Redirect to the specified path
    }
  };

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.menuItem} ${active === item.name ? styles.active : ''}`}
            onClick={() => handleMenuClick(item)} // Handle the click event
            style={{ cursor: item.path ? 'pointer' : 'default' }} // Pointer cursor for clickable items
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
