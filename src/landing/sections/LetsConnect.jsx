import React from "react";
import { connectData } from "../../lib/data/landing-page/connect.data";

const ConnnectWithUs = () => {
    return (
        <div className="h-full text-2xl w-full text-neutral-50 bg-neutral-950">
            <div className="flex flex-col px-max py-16 md:py-24">
                <LetsConnect />
                <Newsletter />
            </div>
            <FooterNavigation />
        </div>
    );
};

function LetsConnect() {
    const { main, highlight } = connectData.heading;

    return (
        <div className="px-4 md:px-0">
            <h1 className="font-bebas-neue text-5xl md:text-8xl">
                {main} <span className="text-blue-500">{highlight}</span>
            </h1>

            <p className="text-neutral-400 text-lg py-6 max-w-2xl">
                {connectData.description}
            </p>

            <div className="grid grid-cols-1 py-6 md:py-12 gap-40">
                <div className="flex flex-col md:flex-row gap-4">
                    {connectData.contacts.map((contact, idx) => (
                        <div
                            key={idx}
                            className="border p-5 w-full rounded-2xl border-neutral-800 flex gap-2"
                        >
                            <div className="p-4 size-fit bg-neutral-900 rounded-xl">
                                <contact.icon />
                            </div>

                            <div className="px-4 flex justify-between flex-col gap-2">
                                <h2 className="font-bebas-neue text-3xl tracking-wide">
                                    {contact.title}
                                </h2>

                                {/* Contact lines */}
                                <p className="text-neutral-500 text-sm tracking-wide">
                                    {contact.lines.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < contact.lines.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>

                                {/*  Render note if present */}
                                {contact.note && (
                                    <p className="text-xs text-neutral-400 italic mt-2">
                                        {contact.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Newsletter() {
    const { main, highlight } = connectData.newsletter.heading;
    const { description, whatsapp, discord } = connectData.newsletter; // Destructure new link data

    return (
        <div className="pt-24 pb-12 px-4 md:px-0 font-inter">
            <h1 className="font-bebas-neue text-5xl md:text-8xl">
                {main} <span className="text-yellow-400">{highlight}</span>
            </h1>

            <p className="text-neutral-400 text-lg py-6 max-w-4xl">
                {description}
            </p>

            <div className="py-2 flex flex-col md:flex-row gap-4">
                {/* WHATSAPP BUTTON (Replaces Email Form) */}
                <a
                    href={whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        bg-green-600 hover:bg-green-700 
                        text-white p-2 rounded-full md:w-fit px-6 
                        text-base flex items-center justify-center cursor-pointer 
                        transition duration-300 ease-in-out
                    "
                >
                    {/* Placeholder for WhatsApp Icon */}
                    {/* <FaWhatsapp className="mr-2" /> */}
                    {whatsapp.label}
                </a>

                {/* DISCORD BUTTON (Replaces Subscribe Button) */}
                <a
                    href={discord.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        bg-indigo-600 hover:bg-indigo-700 
                        text-white p-2 rounded-full md:w-fit px-6 
                        text-base flex items-center justify-center cursor-pointer 
                        transition duration-300 ease-in-out
                    "
                >
                    {/* Placeholder for Discord Icon */}
                    {/* <FaDiscord className="mr-2" /> */}
                    {discord.label}
                </a>
            </div>
        </div>
    );
}

function FooterNavigation() {
    const { left, center, right } = connectData.footer;

    return (
        <div className="absolute w-full bottom-0 left-0 py-4.5 px-max border-t border-neutral-700/70 z-[9999] text-sm lg:text-lg">
            <div className="flex justify-between items-center relative md:top-1">
                <a
                    href={left.href}
                    className={`${left.hidden ? "opacity-0 pointer-events-none" : ""
                        } font-inter uppercase flex items-center group cursor-pointer`}
                >
                    <left.icon size={18} />
                    <span className="ml-1">{left.label}</span>
                </a>

                <a href={center.href} className="hover:text-neutral-400 relative">
                    <center.icon size={32} />
                </a>

                <a
                    href={right.href}
                    className="font-inter uppercase flex items-center group cursor-pointer"
                >
                    <p>{right.label}</p>
                    <right.icon
                        size={19}
                        className="relative left-0.5 group-hover:left-2 group-hover:text-neutral-300 transition-all ease-in-out duration-300"
                    />
                </a>
            </div>
        </div>
    );
}

export default ConnnectWithUs;