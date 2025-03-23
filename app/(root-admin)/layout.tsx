import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decryptKey } from "@/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const encryptedKey = cookieStore.get("accessKey")?.value;

  const accessKey = encryptedKey && decryptKey(encryptedKey);

  if (accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
    redirect("/");
  }

  return <main>{children}</main>;
}
