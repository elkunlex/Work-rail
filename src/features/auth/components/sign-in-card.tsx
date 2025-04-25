import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DottedSeparator } from "@/components/dotted-separator";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "../schemas"; // Adjust the import path as necessary
import { useLogin } from "../api/use-login";


export const SignInCard = () => {
    const { mutate } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        mutate({ json: values,});
        // Handle form submission logic here
    };

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            </CardHeader>
            <DottedSeparator className="px-7" />
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
    name="email"
    control={form.control}
    render={({ field }) => (
        <FormItem>
            <FormControl>
                <Input
                    {...field}
                    type="email"
                    placeholder="Enter email address"
                    aria-label="Email Address"
                     // Added autocomplete attribute
                />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>
<FormField
    name="password"
    control={form.control}
    render={({ field }) => (
        <FormItem>
            <FormControl>
                <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                    aria-label="Password"
                    minLength={8}
                    maxLength={256}
                    // Added autocomplete attribute
                />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <DottedSeparator className="px-7" />
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    aria-label="Login with Google"
                >
                    <FcGoogle className="mr-2 text-xl" />
                    Login with Google
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    aria-label="Login with GitHub"
                >
                    <BsGithub className="mr-2 text-xl" />
                    Login with GitHub
                </Button>
            </CardContent>
            <DottedSeparator className="px-7" />
            <CardContent className="p-7 text-center">
                <p>
                    Don't have an account?{" "}
                    <Link href="/sign-up">
                        <span className="text-blue-700 hover:underline">Sign Up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};