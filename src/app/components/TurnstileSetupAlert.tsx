import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { TURNSTILE_SITE_KEY } from "../../constants/env";

type Props = {
  className?: string;
};

/**
 * Shown when VITE_TURNSTILE_SITE_KEY is missing so the Turnstile widget cannot load.
 */
export function TurnstileSetupAlert({ className }: Props) {
  if (TURNSTILE_SITE_KEY) return null;

  return (
    <Alert variant="destructive" className={className}>
      <AlertTitle>Turnstile not configured</AlertTitle>
      <AlertDescription className="text-foreground/90 [&_p]:mt-0 [&_p+p]:mt-3">
        <p>
          Add <code className="rounded bg-muted px-1 py-0.5 text-xs">VITE_TURNSTILE_SITE_KEY</code> to a{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">.env</code> or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">.env.local</code> file in the project root
          (value from the Cloudflare Turnstile dashboard), then restart the Vite dev server so the variable is
          picked up.
        </p>
        <p>
          For local form submissions, run the API as well:{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">npm run dev:all</code>, or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">npm run dev:api</code> in a second terminal
          alongside <code className="rounded bg-muted px-1 py-0.5 text-xs">npm run dev</code>.
        </p>
      </AlertDescription>
    </Alert>
  );
}
