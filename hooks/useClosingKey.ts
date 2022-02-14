import {Dispatch, SetStateAction, useEffect} from "react";

const useClosingKey = (key: string, setState: Dispatch<SetStateAction<boolean>>) => {
    useEffect(() => {
        const f = (e: any) => {
            if (e.code === key) {
                setState(false);
            }
        };

        window.addEventListener("keydown", f);

        return () => window.removeEventListener("keydown", f);
    }, [setState, key]);
};

export default useClosingKey;
