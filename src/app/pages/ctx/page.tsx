"use client";

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/navigation';

export default function CTWA() {
  const router = useRouter();

  // Dummy data
  const data = [
    { id: 'A123', name: 'Nike Marketing', date: '2025-01-01' },
    { id: 'B456', name: 'Adidas Sales', date: '2025-01-05' },
    { id: 'C789', name: 'Puma Promotions', date: '2025-01-10' },
    { id: 'D012', name: 'Reebok Analytics', date: '2025-01-15' },
    { id: 'E345', name: 'Under Armour Insights', date: '2025-01-20' },
    { id: 'F678', name: 'Asics Strategy', date: '2025-01-25' },
    { id: 'G901', name: 'New Balance Campaigns', date: '2025-01-30' },
    { id: 'H234', name: 'Skechers Growth', date: '2025-02-01' },
    { id: 'I567', name: 'Converse Engagement', date: '2025-02-05' },
    { id: 'J890', name: 'Vans Branding', date: '2025-02-10' },
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar active="CTWA" />

        {/* Main content */}
        <main style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
          <h1>CTWA Accounts</h1>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Account ID</th>
                <th style={tableHeaderStyle}>Client Name</th>
                <th style={tableHeaderStyle}>Date Onboarded</th>
              </tr>
            </thead>
            <tbody>
              {data.map((account) => (
                <tr
                  key={account.id}
                  style={rowStyle}
                  onClick={() =>
                    router.push(`/pages/ctx/account?id=${account.id}&name=${account.name}`)
                  }
                >
                  <td style={cellStyle}>{account.id}</td>
                  <td style={cellStyle}>{account.name}</td>
                  <td style={cellStyle}>{account.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

const tableHeaderStyle = {
  borderBottom: '2px solid #ccc',
  padding: '10px',
  textAlign: 'left',
  background: '#f5f5f5',
};

const rowStyle = {
  cursor: 'pointer',
  borderBottom: '1px solid #ddd',
  padding: '10px',
  background: '#fff',
};

const cellStyle = {
  padding: '10px',
};
