import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useUserStore } from "@/store/useUserStore";


const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const loading = false;

    // const { forgotPassword, loading } = useUserStore();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     await forgotPassword(email);
        //     // navigate("/");
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <form onSubmit={submitHandler} className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-sm">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl mb-2 text-hoverGreen dark:text-yellow-50">Forgot Password</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enter your email address to reset your password</p>
                </div>
                <div className="relative w-full">
                    <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                    />
                    <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
                </div>
                {
                    loading ? (
                        <Button disabled className="bg-green hover:bg-hoverGreen dark:text-white"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>
                    ) : (
                        <Button className="bg-green hover:bg-hoverGreen dark:text-white">Send Reset Link</Button>
                    )
                }
                <span className="text-center">
                    Back to{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </span>
            </form>
        </div>
    )
}

export default ForgotPassword