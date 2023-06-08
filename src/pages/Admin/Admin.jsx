import React from "react";
import { useState } from "react";
import AdminNav from "../../components/Admin/AdminNav";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminReport from "../../components/Admin/Adminreport";
import AdminNew from "../../components/Admin/AdminNew";
import AdminWarehouse from "../../components/Admin/AdminWarehouse";
import TopReminder from "../../components/TopReminder/TopReminder";

const Admin = () => {
  const [isReport, setReport] = useState(true);
  const [isNew, setNew] = useState(true);
  const [isWare, setWare] = useState(true);

  return (
    <>
      <div className="adminNav">
        <TopReminder />
        <AdminNav />
      </div>
      <div className="adminMain">
        <AdminSidebar
          addReport={() => setReport(!isReport)}
          addNew={() => setNew(!isNew)}
          addWare={() => setWare(!isWare)}
        />
        <div className="P-NCards">
          {isReport ? <AdminReport /> : () => setReport(false)}
          {isNew ? <AdminNew /> : () => setNew(false)}
          {isWare ? <AdminWarehouse /> : () => setWare(false)}
        </div>
      </div>
    </>
  );
};

export default Admin;
