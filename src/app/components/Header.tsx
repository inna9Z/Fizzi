import React from "react";
import { FizziLogo } from "./FizziLogo";

type Props = {};

export default function Header({ }: Props) {
    return (
        <header className="-mb-28 flex justify-center py-4">
            <FizziLogo className="z-10 h-20 cursor-pointer fill-sky-800 " />
        </header>
    );
}