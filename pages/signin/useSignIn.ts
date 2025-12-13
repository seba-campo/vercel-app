import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { formatAndValidateEmail } from "../../utils/validateEmail";
import { formatSetNewToken } from "../../utils/tokenStorage";

export const useSignIn = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [isVerifyCode, setIsVerifyCode] = useState(false);

    const router = useRouter();

    const {
        mutate: mutateLogin,
        isPending,
        error,
        data: dataLogin
    } = useMutation({
        mutationFn: (email: string) => {
            const formattedEmail = formatAndValidateEmail(email);
            if (!formattedEmail) return;
            return fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }).then((res) => res.json());
        },
        onSuccess: (dataLogin) => {
            console.log("Auth success:", dataLogin);
            setIsVerifyCode(true);
        },
        onError: (error) => {
            alert(error);
        }
    });

    const {
        mutate: mutateVerifyCode,
        isPending: isPendingVerifyCode,
        error: errorVerifyCode,
        data: dataVerifyCode,
        status
    } = useMutation({
        mutationFn: async (code: string) => {
            const res = await fetch("/api/auth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    token: parseInt(code)
                }),
            });

            if (!res.ok) {
                throw new Error('Error verifying code');
            }

            return res.json();
        },
        onSuccess: (dataVerifyCode) => {
            setIsVerifyCode(false);
            formatSetNewToken(dataVerifyCode);
            router.push("/");
        },
        onError: (errorVerifyCode) => {
            alert(errorVerifyCode);
            setIsVerifyCode(false);
            setEmail("");
            setCode("");
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutateLogin(email);
    };

    const handleVerifyCode = (e: React.FormEvent) => {
        e.preventDefault();
        mutateVerifyCode(code);
    };

    return {
        code,
        email,
        isVerifyCode,
        isPending,
        isPendingVerifyCode,
        error,
        errorVerifyCode,
        dataLogin,
        dataVerifyCode,
        status,
        setCode,
        setEmail,
        setIsVerifyCode,
        handleSubmit,
        handleVerifyCode,
    }
}