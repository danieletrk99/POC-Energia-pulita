import { useRouter } from "next/navigation";
import { ScriptProps } from "next/script";
import { useEffect } from "react";

export const ScriptHook = (props: ScriptProps) => {
    const router = useRouter();

    useEffect(() => {
        const onRouterChange = (newPath : string) => {
            window.location.href = router.prefetch + newPath;
        }
    })
}