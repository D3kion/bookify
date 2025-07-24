"use client";

import { useForm } from "react-hook-form";

import { authClient } from "@/shared/auth";
import { Button, Input, Label } from "@/shared/ui-kit";

import { EmailAuthForm } from "../lib/form";

export function EmailAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailAuthForm>();

  async function onSubmit({ email }: EmailAuthForm) {
    const { data: res, error } = await authClient.signIn.magicLink({
      email,
      callbackURL: "/app",
      newUserCallbackURL: "/app/welcome",
      errorCallbackURL: "/auth/error",
    });
    if (error || !res.status) console.error(error);
    // TODO: toast
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="email@example.com" {...register("email", { required: true })} />
        {errors.email && <span className="text-sm leading-0 text-destructive">Это поле обязательно</span>}
      </div>
      <Button type="submit" className="w-full">
        Войти
      </Button>
    </form>
  );
}
