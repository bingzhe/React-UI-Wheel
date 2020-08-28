import { useEffect, RefObject } from "react";

const useClickOutside = (
    ref: RefObject<HTMLElement>,
    handler: (event?: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref.current;
            if (!el || !handler || !event || el.contains(event.target as Node)) return;
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return (): void => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default useClickOutside;
