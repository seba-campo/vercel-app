interface IOrderDataResponse {
    id: string;
    orderData: {
        productId: string;
        status: string;
        userId: string;
        paymentSandboxUrl: string;
        clientId: string;
        paymentId: string;
        paymentUrl: string;
    }
}

export default IOrderDataResponse;