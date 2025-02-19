import React from "react";
import Image from "next/image";

const Resume = ({ resumeData }) => {
    return (
        <div className="bg-white min-h-screen p-8">
            {/* Header Section */}
            <div className="bg-teal-500 p-8 rounded-t-lg text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-mono mb-2">{resumeData.firstName} {resumeData.lastName}</h1>
                        <div className="flex items-center gap-2">
                            <div className="text-sm">&gt;&gt;&gt;</div>
                            <div className="font-mono">{resumeData.trade}</div>
                        </div>
                    </div>
                    <div className="w-24 h-24">
                        {resumeData.photo && (
                            <Image
                                src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo}
                                alt="Profile"
                                width={96}
                                height={96}
                                className="rounded-full w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    <div className="inline-block bg-white text-teal-500 px-4 py-1 rounded-md font-mono">
                        PERSONAL SUMMARY
                    </div>
                    <p className="mt-4 text-white max-w-2xl">
                        {resumeData.summary}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-8 p-8 bg-white">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Skills Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">SKILLS</h2>
                        <ul className="space-y-4">
                            {resumeData.skills?.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </section>

                    {/* Contact Info Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">CONTACT INFO</h2>
                        <div className="space-y-2">
                            <p>Phone: {resumeData.phone}</p>
                            <p>Email: {resumeData.email}</p>
                            <p>Address: {resumeData.city}, {resumeData.country}</p>
                        </div>
                    </section>

                    {/* Personal Details Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">PERSONAL DETAILS</h2>
                        <div className="space-y-2">
                            <p>Aadhar Card No.: {resumeData.adhaarNumber}</p>
                            <p>Father's Name: {resumeData.fatherName}</p>
                            <p>Mother's Name: {resumeData.motherName}</p>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Work Experience Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">WORK EXPERIENCE</h2>
                        {resumeData.workExperiences?.map((exp, index) => (
                            <div key={index}>
                                <h3 className="font-bold mb-1">{exp.position}</h3>
                                <p className="text-teal-500 mb-2">{exp.company} | {exp.startDate} - {exp.endDate || "Present"}</p>
                                <ul className="list-disc pl-4 space-y-2">
                                    {exp.description?.split("\n").map((line, i) => <li key={i}>{line}</li>)}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Education Details Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">EDUCATION DETAILS</h2>
                        {resumeData.educations?.map((edu, index) => (
                            <div key={index}>
                                <h3 className="font-bold mb-1">{edu.school}</h3>
                                <p className="text-teal-500 mb-2">Graduated: {edu.endDate || "Present"}</p>
                            </div>
                        ))}
                    </section>

                    {/* Certificates Section */}
                    <section>
                        <h2 className="bg-teal-500 text-white p-2 font-mono mb-4">CERTIFICATES</h2>
                        <ul className="list-disc pl-4 space-y-2">
                            {resumeData.certifications?.map((cert, index) => <li key={index}>{cert}</li>)}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;
