import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 justify-center items-center bg-black">
      <h2 className="text-3xl">
        Désolé nous n'avons pas plus trouvé la page que vous essayez de joindre
      </h2>
      <Link href={"/"} className="flex justify-center items-center gap-2">
        <Home className="h-6 w-6" />
        <h3 className="underline text-xl">Retour à la page principal</h3>
      </Link>
    </div>
  );
}

export default NotFound;
