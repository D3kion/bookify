import { GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/shared/ui-kit";

import { EmailAuth } from "./email";
import { SocialAuth } from "./social";

export function AuthForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2">
        <a href="#" className="flex flex-col items-center gap-2 font-medium">
          <div className="flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-6" />
          </div>
          <span className="sr-only">Bookify</span>
        </a>
        <h1 className="text-xl font-bold">Добро пожаловать в Bookify</h1>
        {/* <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
      </div>
      <EmailAuth />
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">Или</span>
      </div>
      <SocialAuth />
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Продолжая авторизацию, вы принимаете условия <a href="#">Пользовательского соглашения</a> и{" "}
        <a href="#">Политики конфиденциальности</a>.
      </div>
    </div>
  );
}
