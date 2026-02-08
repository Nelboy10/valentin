'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type PlushStage = 'hero' | 'showcase';

interface PlushAnimationContextType {
    stage: PlushStage;
    setStage: (stage: PlushStage) => void;
}

const PlushAnimationContext = createContext<PlushAnimationContextType | undefined>(undefined);

export function PlushAnimationProvider({ children }: { children: ReactNode }) {
    const [stage, setStage] = useState<PlushStage>('hero');

    return (
        <PlushAnimationContext.Provider value={{ stage, setStage }}>
            {children}
        </PlushAnimationContext.Provider>
    );
}

export function usePlushAnimation() {
    const context = useContext(PlushAnimationContext);
    if (context === undefined) {
        throw new Error('usePlushAnimation must be used within a PlushAnimationProvider');
    }
    return context;
}
