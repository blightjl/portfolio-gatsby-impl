import { CERTIFICATE } from "../context/GlobalContext"; 

export const getEnumByValue = (
    value: string
): keyof typeof CERTIFICATE => {
    const key = Object.keys(CERTIFICATE).find((key) => CERTIFICATE[key as keyof typeof CERTIFICATE] === value);
    return key as keyof typeof CERTIFICATE || 'NETWORK';
}