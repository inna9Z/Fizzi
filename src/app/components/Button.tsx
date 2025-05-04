import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import clsx from "clsx";

type Props = {
    link: LinkField;
    buttonText: string | null;
    className?: string;
};

export default function Button({ link, buttonText, className }: Props) {
    return (
        <PrismicNextLink
            className={clsx(
                "duration150 rounded-xl bg-orange-600  px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
                className
            )}
            field={link}
        >
            {buttonText}
        </PrismicNextLink>
    );
}
