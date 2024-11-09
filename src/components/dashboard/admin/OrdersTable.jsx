// import React, { useEffect, useState } from 'react';

// const OrdersTable = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // جلب الطلبات من قاعدة البيانات
//     const fetchOrders = async () => {
//       const response = await fetch('/api/orders');
//       const data = await response.json();
//       setOrders(data);
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h2>Order List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.product}</td>
//               <td>{order.quantity}</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersTable;
