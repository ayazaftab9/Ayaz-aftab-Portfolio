import { useState, useEffect, useRef } from 'react';

interface TypingEffectOptions {
    specializations: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
}

export const useTypingEffect = ({
    specializations,
    typingSpeed = 100,
    deletingSpeed = 50,
    delay = 2000,
}: TypingEffectOptions) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (subIndex === specializations[index].length && !isDeleting) {
            const timer = setTimeout(() => setIsDeleting(true), delay);
            return () => clearTimeout(timer);
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex(prevIndex => (prevIndex + 1) % specializations.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex(prevSubIndex => prevSubIndex + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, specializations, delay, deletingSpeed, typingSpeed]);

    return specializations[index].substring(0, subIndex);
};
