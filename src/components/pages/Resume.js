import React from "react";
import resumeimg from "../../assests/resume.png"

export default function Resume() {
    return (
        <div className="min-h-screen sm:my-5 md:my-10 md:mx-60">
            <img className="border-2" src={resumeimg} alt="" />
        </div>
    )
}