import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { DottedSeparator } from "@/components/dotted-separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex flex-col items-center justify-center text-center px-7 pt-7">    
                <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription className="mt-2">
                    By signing up, you agree to our{" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms">
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>.
                </CardDescription>
            </CardHeader>

            <div className="px-7 mt-2">
                <DottedSeparator />
            </div>

            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter your email address"
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
                                            placeholder="Enter your password"
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
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <div className="px-7 mt-4">
                <DottedSeparator />
            </div>

            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    aria-label="Sign up with Google"
                >
                    <FcGoogle className="mr-2 text-xl" />
                    Sign up with Google
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    aria-label="Sign up with GitHub"
                >
                    <BsGithub className="mr-2 text-xl" />
                    Sign up with GitHub
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
           </div>
            <CardContent className="p-7 text-center justify-center">
                <p>
                    ALready have an account?{" "}
                    <Link href="/sign-in">
                       <span className="text-blue-700 hover:underline">Sign In</span> 
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};