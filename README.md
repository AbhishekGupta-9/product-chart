Here’s the complete **README.md** content that you can **copy and paste** directly:

---

# **Product Sales Dashboard**

This is an **Angular 18 & Node.js** application that provides a **dashboard** to display **month-wise product sales** in both **tabular and graphical (chart) formats**. The application includes features to **export the sales data as an Excel file** and **export the chart as a PDF**.

## 🚀 Features

- 📊 **Month-wise Product Sales Table**
- 📈 **Interactive Sales Chart** (Bar Chart)
- 📂 **Export Functionality**:
  - ✅ Export Table Data to **Excel**
  - ✅ Export Chart as **PDF**
- 🎨 **Responsive & User-friendly UI**

## 🛠️ Technologies Used

- **Frontend:** Angular 18, Angular Material
- **Backend:** Node.js (Express.js)
- **Charting Library:** Chart.js
- **Exporting Libraries:**
  - Excel Export: `xlsx`
  - PDF Export: `jsPDF`

## 🏗️ Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YourUsername/product-chart.git
cd product-chart
```

### **2️⃣ Install Dependencies**
Navigate to both the **frontend** and **backend** directories and run:
```sh
# Install frontend dependencies
cd frontend
npm install

# Open a new terminal and install backend dependencies
cd ../backend
npm install
```

### **3️⃣ Run the Application**

#### **Start the Backend (Node.js Server)**
```sh
cd backend
node server.js
```

#### **Start the Frontend (Angular Application)**
```sh
cd frontend
ng serve
```
Once started, visit **http://localhost:4200** to access the dashboard.

## 📂 Project Structure
```
product-chart/
│── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   ├── assets/
│   │   ├── environments/
│   ├── angular.json
│   ├── package.json
│
│── backend/
│   ├── server.js
│   ├── package.json
│
│── README.md
```

## 📦 Dependencies
### **Frontend (Angular)**
- `@angular/material` (UI Components)
- `chart.js` (Chart Rendering)
- `xlsx` (Export Table to Excel)
- `jspdf` (Export Chart as PDF)

### **Backend (Node.js)**
- `express` (Server)
- `cors` (Handling CORS)
- `body-parser` (Parsing JSON Requests)

## 📝 Notes
- Ensure you have **Node.js** and **Angular CLI** installed before running the project.
- Run **npm install** inside both `frontend` and `backend` folders.
- Start the **Node.js server first**, then run the Angular frontend.

---


![image](https://github.com/user-attachments/assets/05cdbceb-a418-4f76-9e4d-37782fe8cf5b)
