"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { usePathname, useRouter } from "next/navigation";
import { decryptKey, encryptKey } from "@/utils";
import { EyeClosed } from "lucide-react";

function PasskeyModal() {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const [passkey, setPassKey] = useState("");
  const [error, setError] = useState("");

  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
  }

  const encryptedKey =
    typeof window !== "undefined" ? getCookie("accessKey") : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);
    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push("/admin/news/create-news");
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey]);

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log(e);

    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      document.cookie = `accessKey=${encryptedKey}; path=/; max-age=86400`;
      setOpen(false);
    } else {
      setError("Invalid passkey, Please try again");
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen} >
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="space-y-5 bg-sky-950 text-secondary-cream border-dark-500 outline-none">
        <AlertDialogHeader className="">
          <AlertDialogTitle className="flex items-start justify-between">
            Verificación de acceso Admin
            <EyeClosed />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-secondary-cream">
            Para acceder a la vista de administrador, por favor ingresa la passkey
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPassKey(value)}
          >
            <InputOTPGroup className="w-full flex justify-between">
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={0} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={1} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={2} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={3} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={4} />
              <InputOTPSlot className="text-36-bold justify-center flex border border-dark-500 rounded-lg size-16 gap-4" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskey(e)}
            className=" w-full"
          >
            Enter Admin Passkey
          </AlertDialogAction>
          <AlertDialogAction
            onClick={(e) => closeModal()}
            className=" w-full"
          >
            Cancelar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PasskeyModal;
