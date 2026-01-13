import React from "react";
import Layout from "../../components/Layout";
import { Typography } from "../../components/Typography";
import { useOrders } from "./useHistory";

export default function HistoryPage() {
    const orders = useOrders();

    return (
        <Layout>
            <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", minHeight: "60vh" }}>
                <Typography variant="title" className="title">
                    Mis Compras
                </Typography>
                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    {orders && orders.length > 0 ? (
                        orders.map((order: any) => (
                            <div key={order.id} style={{
                                padding: "20px",
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                                fontFamily: "Inter, sans-serif"
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                    <Typography variant="bodyBold">Order ID: {order.id}</Typography>
                                    <span style={{
                                        padding: "4px 12px",
                                        borderRadius: "20px",
                                        backgroundColor: order.orderData.status === "approved" ? "#e6fffa" : "#fff5f5",
                                        color: order.orderData.status === "approved" ? "#319795" : "#e53e3e",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        fontFamily: "Inter, sans-serif"
                                    }}>
                                        {order.orderData.status}
                                    </span>
                                </div>
                                {/* If we had product name, we would show it. For now showing productId if name not available */}
                                <div style={{ marginBottom: "5px" }}>
                                    <Typography variant="body">
                                        Producto: {order.orderData.productName || order.orderData.productId || "Producto desconocido"}
                                    </Typography>
                                </div>
                                {order.orderData.createdAt && (
                                    <Typography variant="body">
                                        Fecha: {new Date(order.orderData.createdAt).toLocaleDateString()}
                                    </Typography>
                                )}
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                            <Typography variant="body">No tienes compras realizadas aún.</Typography>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
