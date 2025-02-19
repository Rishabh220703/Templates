import React from "react";
import Image from "next/image";

const Resume = ({ resumeData }) => {
    return (
        <div className="bg-gray-200 min-h-screen flex justify-center py-10 px-5">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-blue-900 text-white text-center py-6 px-4">
                    <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full overflow-hidden border-4 border-white">
                        {resumeData.photo && (
                            <Image
                                src={resumeData.photo instanceof File ? URL.createObjectURL(resumeData.photo) : resumeData.photo}
                                alt="Profile"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <h1 className="text-3xl font-bold mt-4">{resumeData.firstName} {resumeData.lastName}</h1>
                    <p className="text-lg text-blue-300">{resumeData.trade}</p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-3 gap-6 p-6">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-xl font-bold border-b-2 pb-1">Contact</h3>
                        <p className="text-sm">📞 {resumeData.phone}</p>
                        <p className="text-sm">📧 {resumeData.email}</p>
                        <p className="text-sm">📍 {resumeData.city}, {resumeData.country}</p>

                        <h3 className="text-xl font-bold border-b-2 pb-1 mt-4">Skills</h3>
                        <ul className="text-sm space-y-1">
                            {resumeData.skills?.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>

                        <h3 className="text-xl font-bold border-b-2 pb-1 mt-4">Certifications</h3>
                        <ul className="text-sm space-y-1">
                            {resumeData.certifications?.map((cert, index) => <li key={index}>{cert}</li>)}
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold border-b-2 pb-1">Introduction</h3>
                        <p className="text-sm mt-2 text-gray-700">{resumeData.summary}</p>

                        <h3 className="text-xl font-bold border-b-2 pb-1 mt-4">Education</h3>
                        {resumeData.educations?.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm font-semibold">{edu.school}</p>
                                <p className="text-xs">Graduated: {edu.endDate || "Present"}</p>
                            </div>
                        ))}

                        <h3 className="text-xl font-bold border-b-2 pb-1 mt-4">Work Experience</h3>
                        {resumeData.workExperiences?.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-semibold text-blue-800">{exp.position} - {exp.company}</p>
                                <p className="text-xs text-gray-600">{exp.startDate} - {exp.endDate || "Present"}</p>
                                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                                    {exp.description?.split("\n").map((line, i) => <li key={i}>{line}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;