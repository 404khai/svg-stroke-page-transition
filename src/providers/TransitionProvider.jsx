"use client";
import { TransitionRouter } from "next-transition-router";

export default function TransitionRouter({children}){
    return(
        <TransitionRouter auto>
            <div className="transition-svg">
                
            </div>
            {children}
        </TransitionRouter>
    );
}


