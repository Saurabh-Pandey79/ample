"use client";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const searchParams = useSearchParams();
  const accountId = searchParams.get("id");
  const accountName = searchParams.get("name");
  const router = useRouter();

  // Dummy data for the ads, including some completed and stopped ads for retargeting
  const adData = [
    { id: "1234567890", name: "Nike Ad Campaign", status: "Running" },
    { id: "0987654321", name: "Adidas Marketing Blitz", status: "Completed", retargeted: true },
    { id: "5678901234", name: "Puma Spring Promo", status: "Stopped", retargeted: true },
    { id: "3456789012", name: "Reebok Year-End Sale", status: "Running" },
    { id: "7890123456", name: "Under Armour Winter Drive", status: "Running" },
    { id: "2345678901", name: "Asics Fall Outreach", status: "Completed", retargeted: true },
    { id: "8901234567", name: "Vans Summer Vibes", status: "Running" },
    { id: "4567890123", name: "Skechers Black Friday", status: "Stopped", retargeted: true },
    { id: "0123456789", name: "Converse Limited Edition", status: "Completed", retargeted: true },
    { id: "6789012345", name: "New Balance Year-End", status: "Running" },
    { id: "3216549870", name: "Fila Summer Sale", status: "Stopped", retargeted: true },
    { id: "1597534560", name: "Columbia Winter Campaign", status: "Completed", retargeted: true },
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar active="CTWA" />

        {/* Main content */}
        <main style={{ marginLeft: "200px", padding: "20px", flex: 1, marginTop: "60px" }}>
          {/* Account ID and Account Name */}
          <div style={headerStyle}>
            <button style={buttonStyle}>{accountId}</button>
            <button style={buttonStyle}>{accountName}</button>
          </div>

          {/* Dummy data for ads */}
          <h2>Ad Management</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>AD ID</th>
                <th style={tableHeaderStyle}>AD Name</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Retarget</th>
                <th style={tableHeaderStyle}>Data(Targeted user)</th>
              </tr>
            </thead>
            <tbody>
              {adData.map((ad) => (
                <tr key={ad.id}>
                  <td>{ad.id}</td>
                  <td>{ad.name}</td>
                  <td>{ad.status}</td>
                  <td>
                    {ad.status === "Running" ? (
                      <button
                        style={retargetButtonStyle}
                        onClick={() =>
                          router.push(`/pages/ctx/account/ads1`) // Static page with no parameters
                        }
                      >
                        Retarget
                      </button>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {ad.retargeted ? (
                      <button
                        style={buttonStyle}
                        onClick={() =>
                          router.push(`/pages/ctx/account/number`) // Redirect to new page
                        }
                      >
                        Yes Show Data
                      </button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

// Styles
const headerStyle = {
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  marginRight: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const retargetButtonStyle = {
  padding: "7px 12px", // Smaller size for the Retarget button
  background: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};
